'use client'

import React, { type ProviderProps, createContext } from 'react'

export type ContextProps = {
  id: string
  title: string
  description: string
  date: string
}

const initContext: ContextProps[] = [
  {
    id: '',
    title: '',
    description: '',
    date: ''
  }
]

export const PostContext = createContext(initContext)

export default function PostProvider({
  value,
  children
}: ProviderProps<ContextProps[]>) {
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>
}
