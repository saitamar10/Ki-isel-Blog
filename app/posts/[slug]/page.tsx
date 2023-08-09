import LoadMDX from '@/components/LoadMDX'
import { fetchPostList } from 'lib/fetch'
import { getTitleAndDateBySlug } from 'lib/post'

export function generateMetadata({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const { title } = getTitleAndDateBySlug(slug)
  return {
    title
  }
}

export async function generateStaticParams() {
  const posts = await fetchPostList(false)
  return posts.map((post) => ({
    slug: post
  }))
}

export default function Posts({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const { title = '', date = '' } = getTitleAndDateBySlug(slug)
  const props = { slug, title, date }

  return (
    <article className="prose dark:prose-invert max-w-none pb-20">
      <LoadMDX {...props} />
    </article>
  )
}
