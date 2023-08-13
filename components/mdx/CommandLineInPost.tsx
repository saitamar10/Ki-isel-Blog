import { useState, useRef } from 'react'
import CommandLine from '@/components/CommandLine'
import CommandProvider from '@/components/CommandProvider'

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
          <CommandProvider>
            <CommandLine scroll={scroll} />
          </CommandProvider>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
