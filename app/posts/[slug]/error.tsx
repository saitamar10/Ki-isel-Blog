'use client'

export default function Error({ error }: { error: Error }) {
  return (
    <>
      <p className="mb-2">文章未找到...</p>
      {error.message}
    </>
  )
}
