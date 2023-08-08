import CommandLine from '@/components/CommandLine'
import PostProvider from '@/components/PostProvider'
import { GREETING } from '@/constants'

export default function Home() {
  return (
    <>
      <p>{GREETING}</p>
      <PostProvider>
        <CommandLine />
      </PostProvider>
    </>
  )
}
