import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent
} from 'react'
import Prompt from './Prompt'
import { INIT_CMD } from '@/constants'

export default function CommandInput({
  currentClickCmd,
  onTypingCmd
}: {
  currentClickCmd: string
  onTypingCmd: (arg: string) => void
}) {
  const [cmd, setCmd] = useState('')
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setCmd(value)
  }

  // 键入的cmd，包括手动键入和自动键入
  const [typingCmd, setTypingCmd] = useState('')
  // 按下enter键
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && cmd) {
      setTypingCmd(cmd)
    }
  }

  // 自动键入cmd
  const autoTyping = (cmd: string) => {
    const interval = 100 // ms
    for (let i = 0; i < cmd.length; i++) {
      setTimeout(
        () => {
          setCmd((prev) => prev + cmd.charAt(i))

          if (i === cmd.length - 1) {
            setTimeout(() => {
              setTypingCmd(cmd)
            }, 100)
          }
        },
        interval * (i + 1)
      )
    }
  }

  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current?.focus()
    autoTyping(currentClickCmd || INIT_CMD)
  }, [currentClickCmd])

  useEffect(() => {
    setCmd('')
    onTypingCmd(typingCmd)
  }, [typingCmd])

  return (
    <div className="command-input">
      <Prompt />

      <div className="flex">
        <div className="text-green-500 text-lg">❯</div>
        <input
          type="text"
          ref={inputRef}
          className="flex-1 ml-3 bg-[--background] dark:bg-[--dark-bg] border-none outline-none"
          value={cmd}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      </div>
    </div>
  )
}
