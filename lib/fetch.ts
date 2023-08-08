import { type PostMetaType } from './post'

// export function fetchPostList<T = PostMetaType[]>(withMeta?: true): Promise<T>
// export function fetchPostList<T = string[]>(withMeta?: false): Promise<T>

type FetchReturnType<T> = T extends true ? PostMetaType[] : string[]

/**
 * fetch posts
 * @param withMeta default true boolean
 * @returns FetchReturnType<T>
 */
export async function fetchPostList<T extends boolean = true>(
  withMeta: T = true as T
): Promise<FetchReturnType<T>> {
  const isNodeEnv = typeof window === 'undefined'
  const base = isNodeEnv
    ? process.env.FETCH_URL
    : process.env.NEXT_PUBLIC_FETCH_URL

  const res = await fetch(`${base}/${withMeta ? 'postmetas' : 'posts'}`)
  return res.json()
}
