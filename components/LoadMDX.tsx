'use client'

import dynamic from 'next/dynamic'
import { type ListType } from 'lib/file'

export default function LoadMDX(props: Omit<ListType, 'description'>) {
  const { slug, title, date } = props

  const DynamicMDX = dynamic(() => import(`@/mdxs/posts/${slug}.mdx`), {
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
