import { useState, useRef } from 'react'
import CommandLine from '@/components/CommandLine'
import PostProvider from '@/components/PostProvider'

export default function CommandLineInPost() {
  const [show, setShow] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const scroll = () => {
    wrapperRef.current?.scrollTo({
      top: wrapperRef.current?.scrollHeight,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <button className="text-cyan-500" onClick={() => setShow(!show)}>
        试一试💥
      </button>
      {show ? (
        <div
          ref={wrapperRef}
          className="not-prose overflow-auto max-h-[500px] border px-6"
        >
          <PostProvider>
            <CommandLine scroll={scroll} />
          </PostProvider>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
