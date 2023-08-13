'use client'

import React, { createContext, useState, useEffect } from 'react'
import { type PostMetaType } from 'lib/post'
import { fetchPostList } from 'lib/fetch'

type ProviderValueType = {
  // versions: Record<string, string>
  posts: PostMetaType[]
  [key: string]: any
}

export const CommandContext = createContext<ProviderValueType>({
  // versions: { blog: '', next: '' },
  posts: []
})

export default function PostProvider({
  versions,
  children
}: {
  versions?: Record<string, string>
  children: React.ReactNode
}) {
  const [providerValue, setProviderValue] = useState<ProviderValueType>({
    // versions: { blog: '', next: '' },
    posts: []
  })

  const fetch = async () => {
    const posts = await fetchPostList()
    // const versions = await fetchVersions()
    // const value = {
    //   // posts
    //   // versions
    // }
    setProviderValue({ posts })
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <CommandContext.Provider value={{ ...providerValue, versions }}>
      {children}
    </CommandContext.Provider>
  )
}
