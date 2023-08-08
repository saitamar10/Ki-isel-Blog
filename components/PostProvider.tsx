'use client'

import { fetchPostList } from 'lib/fetch'
import { type PostMetaType } from 'lib/post'
import React, { createContext, useState, useEffect } from 'react'

export const PostContext = createContext<PostMetaType[]>([])

export default function PostProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [posts, setPosts] = useState<PostMetaType[]>([])

  const fetchPosts = async () => {
    const posts = await fetchPostList()
    setPosts(posts)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return <PostContext.Provider value={posts}>{children}</PostContext.Provider>
}
