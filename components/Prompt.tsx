import { useContext } from 'react'
import {
  BRANCH,
  FRAMEWORK,
  INIT_FRAMEWORK_VERSION,
  SPACE,
  INIT_BLOG_VERSION
} from '@/constants'
import { CommandContext } from './CommandProvider'

export default function Prompt() {
  const { versions } = useContext(CommandContext)
  return (
    <div className="flex mb-4">
      <span className="mr-3 text-cyan-500">{SPACE}</span>
      <span className="mr-3">on</span>
      <span className="mr-3 text-fuchsia-500"> {BRANCH}</span>
      <span className="mr-3">is</span>
      <span className="mr-3 text-amber-500">
        📦 v{versions?.blog || INIT_BLOG_VERSION}
      </span>
      <span className="mr-3">via</span>
      <span className="flex text-green-500">
        {FRAMEWORK}@{versions?.next || INIT_FRAMEWORK_VERSION}
      </span>
    </div>
  )
}
