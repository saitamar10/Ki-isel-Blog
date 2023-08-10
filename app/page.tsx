import CommandLine from '@/components/CommandLine'
import PostProvider from '@/components/PostProvider'

export default function Home() {
  return (
    <>
      <p>
        Hi there👋 我是赫子子, 欢迎来到我的空间👀, 在下方👇输入命令进行交互🥳🔥
      </p>
      <PostProvider>
        <CommandLine />
      </PostProvider>
    </>
  )
}
