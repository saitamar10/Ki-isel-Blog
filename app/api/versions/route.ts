import { NextResponse } from 'next/server'
import getVersions from 'lib/versions'

export async function GET() {
  const res = getVersions()
  return NextResponse.json(res)
}
