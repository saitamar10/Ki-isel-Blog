import { type ListType } from './file'

const isNodeEnv = typeof window === 'undefined'
const base = isNodeEnv
  ? process.env.FETCH_URL
  : process.env.NEXT_PUBLIC_FETCH_URL

// export function fetchPostList<T = ListType[]>(withMeta?: true): Promise<T>
// export function fetchPostList<T = string[]>(withMeta?: false): Promise<T>

type FetchReturnType<T> = T extends true ? ListType[] : string[]

/**
 * fetch posts
 * @param withMeta default true boolean
 * @returns FetchReturnType<T>
 */
export async function fetchPostList<T extends boolean = true>(
  withMeta: T = true as T
): Promise<FetchReturnType<T>> {
  const res = await fetch(`${base}/${withMeta ? 'postmetas' : 'posts'}`)
  return res.json()
}
