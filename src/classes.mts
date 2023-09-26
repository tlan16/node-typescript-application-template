import got from "got";
import { z } from 'zod'
import { mkdir, readFile, writeFile } from 'fs/promises'
import { join } from "path";
import { existsSync } from 'fs'

export const classesResponseSchema = z.object({
  _links: z.object({
    next_page: z.object({
      href: z.string().nonempty().nullable(),
    }).optional(),
    _embedded: z.unknown(),
  })
})
export type ClassesResponse = z.infer<typeof classesResponseSchema>;

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function download() {
  const client = got.extend({
    prefixUrl: 'https://api.skillshare.com/',
  })
  const dataFileDirectory = 'data/classes/';
  await mkdir(dataFileDirectory, { recursive: true });

  const getData = async (pageNumber: number) => {
    const dataFilePath = join(dataFileDirectory, `${pageNumber}.json`);
    if (!existsSync(dataFilePath)) return null;

    try {
      const data: ClassesResponse = JSON.parse(await readFile(dataFilePath, 'utf-8'));
      return data;
    } catch (error) {
      console.warn(error);
      return null;
    }
  }

  const writeData = async (pageNumber: number, data: Record<string, unknown>) => {
    const dataFilePath = join(dataFileDirectory, `${pageNumber}.json`);
    await writeFile(dataFilePath, JSON.stringify(data, null, 2));
  }

  const fetchClassesPage = async (
    pageNumber = 1,
    uri = 'classes',
  ) => {
    if (await getData(pageNumber)) {
      console.log(`Page ${pageNumber} of ${uri} already fetched`);
    } else {
      await sleep(1000 + (pageNumber % 10) * 100);
      console.log(`Fetching page ${pageNumber} of ${uri}`);
      const response: Record<string, any> = await client.get(uri).json();
      classesResponseSchema.parse(response);
      await writeData(pageNumber, response);
      console.log(`Fetched page ${pageNumber} of ${uri}`);
    }

    const data = await getData(pageNumber);
    const nextPageUri = data?._links?.next_page?.href?.replace(/^\//g, '');
    if (nextPageUri) {
      await fetchClassesPage(pageNumber + 1, nextPageUri)
    }
  }
  await fetchClassesPage();
}
await download();
