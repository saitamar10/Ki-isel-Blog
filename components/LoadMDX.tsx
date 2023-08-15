'use client'

import dynamic from 'next/dynamic'
import { type ListType } from 'lib/file'

type MDXSourceType = 'posts' | 'weekly'
type OmitOptionType = 'description' | 'date'

export type LoadMDXPropsType<
  T extends MDXSourceType = 'posts',
  P extends OmitOptionType = 'description'
> = Omit<ListType, P> & {
  source?: T
}

export default function LoadMDX<
  T extends MDXSourceType,
  P extends OmitOptionType
>(props: LoadMDXPropsType<T, P>) {
  const {
    slug,
    title,
    date,
    source = 'posts'
  } = props as ListType & { source?: T }
  const DynamicMDX = dynamic(() => import(`../mdxs/${source}/${slug}.mdx`), {
    loading: () => <p>loading...</p>
  })

  return (
    <>
      <div className="mb-12">
        <h1 className="mb-5 font-[600]">{title}</h1>
        <time className="my-0">{date}</time>
      </div>
      <DynamicMDX />
    </>
  )
}
