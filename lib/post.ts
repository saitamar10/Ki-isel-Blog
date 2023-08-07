import path from 'node:path'
import fs from 'node:fs'
import matter from 'gray-matter'

const POST_PATH = path.join(process.cwd(), 'mdxs/posts')

/**
 *  post list only title
 * @returns string[]
 */
export function getPostList() {
  return fs.readdirSync(POST_PATH)
}

export type PostMetaType = {
  slug: string
  title: string
  description: string
  date: string
}
/**
 * post list with meta
 * @returns PostMetaType[]
 */
export function getPostMetaList(): PostMetaType[] {
  const posts = getPostList()

  return posts.map((post) => {
    const {
      data: { title, description, date }
    } = matter.read(path.join(POST_PATH, post))

    return {
      slug: post.replace(/\.mdx/, ''),
      title,
      description,
      date
    }
  })
}

/**
 * get post title by slug
 * @param slug string
 * @returns string
 */
export function getTitleAndDateBySlug(slug: string) {
  const posts = getPostMetaList()
  const { title, date } = posts.find(
    (post) => post.slug === slug
  ) as PostMetaType

  return { title, date }
}
