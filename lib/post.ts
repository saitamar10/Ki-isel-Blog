import { getDirPath, getMDXs, getListWithMeta } from './file'

const postDirPath = getDirPath('mdxs/posts')

// 文章名称列表
export function getPostList() {
  const postMdxs = getMDXs(postDirPath)
  return postMdxs
}

// 文章元数据列表
export function getPostMetaList() {
  const posts = getPostList()
  return getListWithMeta(posts, postDirPath)
}

// 根据文章名称获取title， date
export function getTitleAndDateBySlug(slug: string) {
  const posts = getPostMetaList()
  const meta = posts.find((post) => post.slug === slug)
  if (!meta) {
    return {}
  }
  const { title, date } = meta
  return { title, date }
}
