'use client'

import { useEffect, useState } from 'react'
import Icon from '@/components/Icon'

// debounce
function debounce<T extends any[]>(fn: (...args: T) => void, delay = 50) {
  let timer: ReturnType<typeof setTimeout>
  return (...args: T) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

export default function BackTop() {
  const onClick = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const [show, setShow] = useState(false)
  const scroll = () => {
    const { scrollTop } = document.documentElement
    setShow(scrollTop > 600)
  }

  useEffect(() => {
    window.addEventListener('scroll', debounce(scroll))
    return () => {
      window.removeEventListener('scroll', debounce(scroll))
    }
  }, [])

  return (
    <>
      {show ? (
        <button
          onClick={onClick}
          className="fixed right-10 bottom-10 p-3 rounded-full transition-all hover:bg-gray-100/70 dark:hover:bg-white"
        >
          <Icon name="up-arrow" width={20} height={20} />
        </button>
      ) : (
        <></>
      )}
    </>
  )
}
