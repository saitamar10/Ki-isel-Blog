import Image from 'next/image'

export default function Icon({
  name,
  width = 30,
  height = 30,
  ...props
}: {
  name: string
  [props: string]: any
}) {
  return (
    <Image
      src={`/${name}.svg`}
      width={width}
      height={height}
      {...props}
      alt="Icon"
    />
  )
}
