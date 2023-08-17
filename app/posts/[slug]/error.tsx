'use client'

export default function Error({ error }: { error: Error }) {
  return (
    <>
      <p className="mb-2">Hatalı...</p>
      {error.message}
    </>
  )
}
