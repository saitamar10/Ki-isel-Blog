import CommandLine from '@/components/CommandLine'
import CommandProvider from '@/components/CommandProvider'
import getVersions from 'lib/versions'

export default function Home() {
  const versions = getVersions()
  return (
    <>
      <p>
        Hi there👋 Siteme Hoşgeldin 👀, Yeni yazıları görmek 👇İster misin?🥳🔥
      </p>
      <CommandProvider versions={versions}>
        <CommandLine />
      </CommandProvider>
    </>
  )
}
