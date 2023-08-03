'use client'

import { useEffect, useRef, useState } from 'react'
import CommandInput from './Input'
import CommandOutput from './Output'
import { CLEAR } from '@/constants'

export default function CommandLine() {
  // 当前点击的cmd
  const [currentClickCmd, setCurrentClickCmd] = useState('')
  // 输出内容中的cmd点击
  const onOutputCmdClick = (currentClickCmd: string) => {
    setCurrentClickCmd(currentClickCmd)
  }

  // 键入过的cmd集合
  const [typedCmds, setTypedCmds] = useState<string[]>([])
  const onTypingCmd = (cmd: string) => {
    setTypedCmds(cmd === CLEAR ? [] : (prev) => [...prev, cmd])
  }

  // 出现滚动条自动滚动到可视区域底部
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    containerRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    })
  }, [typedCmds])

  return (
    <div ref={containerRef} className="pt-10 pb-16">
      {typedCmds.length
        ? typedCmds.map(
            (cmd: string, index: number) =>
              cmd && (
                <CommandOutput
                  key={`${cmd}-${index}`}
                  cmd={cmd}
                  onOutputCmdClick={onOutputCmdClick}
                />
              )
          )
        : ''}

      <CommandInput
        currentClickCmd={currentClickCmd}
        onTypingCmd={onTypingCmd}
      />
    </div>
  )
}
