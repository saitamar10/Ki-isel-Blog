import {
  BRANCH,
  FRAMEWORK,
  FRAMEWORK_VERSION,
  SPACE,
  VERSION
} from '@/constants'

export default function Prompt() {
  return (
    <div className="flex mb-4">
      <span className="mr-3 text-cyan-500">{SPACE}</span>
      <span className="mr-3">on</span>
      <span className="mr-3 text-fuchsia-500"> {BRANCH}</span>
      <span className="mr-3">is</span>
      <span className="mr-3 text-amber-500">📦 {VERSION}</span>
      <span className="mr-3">via</span>
      <span className="flex text-green-500">
        {FRAMEWORK}@{FRAMEWORK_VERSION}
      </span>
    </div>
  )
}
