import got from 'got'
import { z } from 'zod'
import { mkdir, readFile, readdir, stat, rm } from 'fs/promises'
import { join } from 'path'
import { createWriteStream, existsSync } from 'fs'
import { pipeline as streamPipeline } from 'node:stream/promises'
// @ts-ignore
import * as cookies from 'cookies.txt'
import {CookieJar} from 'tough-cookie';

const cookieJar = new CookieJar();

await cookieJar.setCookie('foo=bar', 'https://httpbin.org');

const classesResponseSchema = z.object({
  _links: z.object({
    next_page: z.object({
      href: z.string().nonempty().nullable(),
    }).optional(),
  }),
  _embedded: z.object({
    classes: z.array(z.object({
      id: z.number().positive(),
      _links: z.object({
        self: z.object({
          href: z.string().nonempty().nullable(),
        }),
      }),
      _embedded: z.object({
        units: z.object({
          _embedded: z.object({
            units: z.array(z.object({
              _embedded: z.object({
                sessions: z.object({
                  _embedded: z.object({
                    sessions: z.array(z.object({
                      _links: z.object({
                        download: z.object({
                          href: z.string().nonempty().nullable(),
                        }),
                      }),
                    })),
                  }),
                }),
              }),
            })),
          }),
        }),
      }),
    })),
  }),
})

const getCookie = new Promise<any>((resolve) => {
  cookies.parse(`/Users/frank.lan/Downloads/cookies.txt`, resolve)
})

const client = got.extend({
  prefixUrl: 'https://api.skillshare.com/',
  cookieJar,
})

const failed = new Set<string>();

export async function download(
  href: string,
) {
  const id = href
    .replace('/sessions/', '')
    .replace('/download', '');

  const dataFileDirectory = join('data', 'sessions')
  await mkdir(dataFileDirectory, { recursive: true })
  const dataFilePath = join(dataFileDirectory, `${id}.mp4`)

  const hasData = async () => {
    if (!existsSync(dataFilePath)) return false;
    const fileStats = await stat(dataFilePath);
    if (fileStats.size > 1000000) { // 1MB
      return true;
    }
    await rm(dataFilePath);
    return false;
  }

  const fetchData = async () => {
    if (failed.has(id) || await hasData()) {
      console.log(`Session ${id} of ${href} already downloaded`)
    } else {
      console.log(`Fetching session ${id} of ${href}`)
      await streamPipeline(
        client.stream(href.replace(/^\//, '')),
        createWriteStream(dataFilePath),
      )
      console.log(`Fetched session ${id} of ${href}`)
    }
  }
  try {
    await fetchData();
  } catch (error) {
    await rm(dataFilePath);
    failed.add(id);
    console.warn(error);
  }
}

const list = async () => {
  const allCookies: Record<string, any>[] = await getCookie
  const result: Record<string, any> = {};
  allCookies.reduce(function(pre, cookie) {
    if (cookie['domain'].includes('skillshare.com')) {
      result[cookie['name']] = cookie['value']
    }
    return pre;
  }, [])['join'](';');
  for (const [key, value] of Object.entries(result)) {
    await cookieJar.setCookie(`${key}=${value}`, 'https://api.skillshare.com');
  }


  const files = await readdir('data/class')
  for (const file of files) {
    const path = join('data/class', file)
    const json = await readFile(path, 'utf-8')
    const data = classesResponseSchema.parse(JSON.parse(json))
    const classes = data._embedded.classes
    for (const cls of classes) {
      for (const unit of cls._embedded.units._embedded.units) {
        for (const sessions of unit._embedded.sessions._embedded.sessions) {
          const href = sessions._links.download.href
          if (!href || !(/\/sessions\/\d+\/download/).test(href)) {
            throw new Error(`Invalid download link: ${href}`)
          }
          await download(href);
        }
      }
    }
  }
}

await list()
