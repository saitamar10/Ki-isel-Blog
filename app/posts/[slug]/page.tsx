import LoadMDX from '@/components/LoadMDX'
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

export default function Posts({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const { title, date } = getTitleAndDateBySlug(slug)
  const props = { slug, title, date }

  return (
    <article className="prose dark:prose-invert max-w-none pb-20">
      <LoadMDX {...props} />
    </article>
  )
}
