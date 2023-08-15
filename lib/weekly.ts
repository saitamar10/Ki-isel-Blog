import { getDirPath, getMDXs, getListWithMeta, ListType } from './file'

const weeklyDirPath = getDirPath('mdxs/weekly')

export function getWeeklyMdxs() {
  return getMDXs(weeklyDirPath)
}

// 周刊列表
export function getWeeklyList() {
  const weeklyMdxs = getWeeklyMdxs()
  return getListWithMeta(weeklyMdxs, weeklyDirPath)
}

// 根据slug获取title
export function getTitleBySlug(slug: string) {
  const weekly = getWeeklyList()
  return weekly.find((item) => item.slug === slug) as ListType
}
