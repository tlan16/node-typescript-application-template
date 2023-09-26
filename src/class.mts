import got from "got";
import { z } from 'zod'
import { mkdir, readFile, writeFile, readdir } from 'fs/promises'
import { join } from "path";
import { existsSync } from 'fs'

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
    })),
  }),
})
type ClassesResponse = z.infer<typeof classesResponseSchema>;

export async function download(
  href: string,
) {
  const id = href.replace('/classes/', '');

  const client = got.extend({
    prefixUrl: 'https://api.skillshare.com/',
  })
  const dataFileDirectory = `data/class/`;
  await mkdir(dataFileDirectory, { recursive: true });

  const getData = async () => {
    const dataFilePath = join(dataFileDirectory, `${id}.json`);
    if (!existsSync(dataFilePath)) return null;

    try {
      const data: ClassesResponse = JSON.parse(await readFile(dataFilePath, 'utf-8'));
      return data;
    } catch (error) {
      console.warn(error);
      return null;
    }
  }

  const writeData = async (data: Record<string, unknown>) => {
    const dataFilePath = join(dataFileDirectory, `${id}.json`);
    await writeFile(dataFilePath, JSON.stringify(data, null, 2));
  }

  const fetchData = async (
    uri = 'classes',
  ) => {
    if (await getData()) {
      console.log(`Class ${id} of ${uri} already fetched`);
    } else {
      console.log(`Fetching class ${id} of ${uri}`);
      const response: Record<string, any> = await client.get(uri).json();
      await writeData(response);
      console.log(`Fetched class ${id} of ${uri}`);
    }
  }
  await fetchData();
}

const list = async () => {
  const files = await readdir('data/classes');
  const pool = new Map();
  for (const file of files) {
    const path = join('data/classes', file);
    const json = await readFile(path, 'utf-8');
    const data = classesResponseSchema.parse(JSON.parse(json));
    const classes = data._embedded.classes;
    for (const cls of classes) {
      const href = cls._links.self.href;
      if (!href) {
        console.warn('href is falsy', cls);
        continue;
      }
      pool.set(href, download(href));
      if (pool.size >= 30) {
        while (pool.size > 0) {
          for (const [href, promise] of pool) {
            await promise;
            pool.delete(href);
          }
        }
      }
    }
  }
}

await list();
