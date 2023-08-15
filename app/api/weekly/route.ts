import { NextResponse } from 'next/server'
import { getWeeklyList } from 'lib/weekly'

export async function GET() {
  const res = getWeeklyList()
  return NextResponse.json(res)
}
