'use client'

import React, { createContext, useState, useEffect } from 'react'
import { fetchPostList } from 'lib/fetch'
import { type ListType } from 'lib/file'

type ProviderValueType = {
  posts: ListType[]
  [key: string]: any
}

export const CommandContext = createContext<ProviderValueType>({
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
    posts: []
  })

  const fetch = async () => {
    const posts = await fetchPostList()
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
