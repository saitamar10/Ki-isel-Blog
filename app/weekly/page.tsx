import Link from 'next/link'
import { fetchWeeklyList } from 'lib/fetch'

export default async function Weekly() {
  const weekly = await fetchWeeklyList().catch(() => [])

  return (
    <h2>Yapımda...🔥</h2>
    // <ul>
    //   {weekly.map(({ slug, title }, index: number) => (
    //     <li
    //       key={slug}
    //       className="prose prose-custom dark:prose-invert max-w-none mb-1"
    //     >
    //       <span className="mr-3">
    //         #{index + 1} <time>{slug}</time>
    //       </span>
    //       <Link
    //         href={`/weekly/${slug}`}
    //         className="hover:text-sky-500 hover:underline dark:text-slate-300 dark:hover:text-sky-500"
    //       >
    //         <span>{title}</span>
    //       </Link>
    //     </li>
    //   ))}
    // </ul>
  )
}
