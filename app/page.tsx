import CommandLine from '@/components/CommandLine'
import { GREETING } from '@/constants'

export default function Home() {
  return (
    <>
      <p>{GREETING}</p>
      <CommandLine />
    </>
  )
}
