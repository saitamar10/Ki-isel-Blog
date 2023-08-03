import Prompt from './Prompt'
import CommandContent from './Content'

export default function Output(props: Record<string, any>) {
  const { cmd } = props

  return (
    <div className="command-output mb-12">
      <Prompt />

      <div className="flex mb-5">
        <div className="text-green-500 text-lg">❯</div>
        <input
          readOnly
          type="text"
          className="flex-1 ml-3 bg-[--background] dark:bg-[--dark-bg] border-none outline-none"
          value={cmd}
        />
      </div>

      <div className="pl-6">{CommandContent(props)}</div>
    </div>
  )
}
