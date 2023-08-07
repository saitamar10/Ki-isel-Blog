import { NextResponse } from 'next/server'
import { getPostMetaList } from 'lib/post'

export async function GET() {
  const res = getPostMetaList()
  return NextResponse.json(res)
}
