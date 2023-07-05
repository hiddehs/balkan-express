import openai from '@/lib/openai'
import { NextResponse } from 'next/server'

export async function GET (request: Request) {
  // const e = await openai.listEngines()

  try {
    const e = await openai.createCompletion({
      model: 'gpt-3.5-turbo',
      prompt: 'Generate 5 unique funny names to put on a car, generated with the following reference input:\n' +
        '“marscha”\n' +
        '\n' +
        'Do not include any explanations, only provide a  RFC8259 compliant JSON response  following this format without deviation.',
      temperature: 0, max_tokens: 100,
    })
    return NextResponse.json(e.data)

  } catch (e) {
    console.error(e)
  }
  return new NextResponse('FAIL')
}
