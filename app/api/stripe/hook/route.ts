import { NextResponse } from 'next/server'

export async function POST (request: Request) {
  const data = (await request.formData());
  console.debug(JSON.stringify(data))
  return new NextResponse('OK')
}
