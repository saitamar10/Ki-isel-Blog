import Link from 'next/link'
import { type PostMetaType } from 'lib/post'
import { fetchPostList } from 'lib/fetch'

export default async function Posts() {
  const posts = await fetchPostList().catch(() => [])

  const dateList = [
    ...new Set(posts.map((post) => post.date.split('-').shift() as string))
  ].sort((a, b) => Number(b) - Number(a))

  const postMap: Record<string, PostMetaType[]> = {}
  for (const date of dateList) {
    postMap[date] = posts.filter((post) => post.date.includes(date))
  }

  return (
    <>
      {Object.keys(postMap).map((key) => (
        <div key={key} className="mb-16">
          <h1 className="text-3xl mb-8">{key}</h1>
          <ul>
            {postMap[key].map(({ slug, title, description }) => (
              <li
                key={slug}
                className="prose prose-custom dark:prose-invert max-w-none mb-5"
              >
                <Link
                  href={`/posts/${slug}`}
                  className="text-lg hover:text-sky-500 hover:underline dark:text-slate-300 dark:hover:text-sky-500"
                >
                  {title}
                </Link>
                <blockquote className="mt-2 text-neutral-500 dark:text-neutral-400">
                  {description}
                </blockquote>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
