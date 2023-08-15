import { join } from 'node:path'
import fs from 'node:fs'
import matter from 'gray-matter'

export type MetadataType = {
  title: string
  description: string
  date: string
}

export type ListType = MetadataType & { slug: string }

/**
 * 取文件路径
 * @param dir
 * @returns path
 */
export function getDirPath(dir: string) {
  return join(process.cwd(), dir)
}

/**
 * 根据路径取mdx文件list
 * @param path
 * @returns mdx list
 */
export function getMDXs(path: string) {
  return fs.readdirSync(path).map((name) => name.replace(/\.mdx/, ''))
}

/**
 * 包含文章元数据的list
 * @param list
 * @param path
 * @returns ListType[]
 */
export function getListWithMeta(list: string[], path: string): ListType[] {
  return list.map((item) => {
    const {
      data: { title, description, date }
    } = matter.read(join(path, `${item}.mdx`))

    return {
      slug: item,
      title,
      description,
      date
    }
  })
}
