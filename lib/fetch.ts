import { PostMetaType } from './post'

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
  const res = await fetch(
    `http://localhost:3000/api/${withMeta ? 'postmetas' : 'posts'}`
  )
  return res.json()
}
