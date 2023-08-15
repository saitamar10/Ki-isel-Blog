import LoadMDX, { type LoadMDXPropsType } from '@/components/LoadMDX'
import { getTitleBySlug, getWeeklyMdxs } from 'lib/weekly'

export function generateMetadata({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const { title } = getTitleBySlug(slug)
  return {
    title: title
  }
}

export async function generateStaticParams() {
  const weekly = getWeeklyMdxs()
  return weekly.map((slug) => ({ slug }))
}

export default function WeeklyDetail({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const { title } = getTitleBySlug(slug)
  const props: LoadMDXPropsType<'weekly', 'description' | 'date'> = {
    slug,
    title,
    source: 'weekly'
  }

  return (
    <article className="prose dark:prose-invert max-w-none pb-20">
      <LoadMDX {...props} />
    </article>
  )
}
