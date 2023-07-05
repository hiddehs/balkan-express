'use server'

import React from 'react'
import Link from 'next/link'

const getFeed = async () => {
  const res = await fetch('https://feeds.behold.so/hUB4pg1sP2x7HiXNn7ht', {next:{
    revalidate: 3600
    }})
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()

}

export default async function InstaFeed () {
  const data = await getFeed()
  return (
    <div className="flex gap-2 flex-col px-4 overflow-hidden">

      {data.map((img: {
        mediaUrl: string
        caption: string
        mediaType: string
        id: number
        timestamp: string
        permalink: string
        dimensions: {
          height: number
          width: number
        }
      }) => {
        const time = new Date(img.timestamp)
        return (
          <Link href={img.permalink} target="_blank" key={img.id}
                className="relative active:opacity-70 overflow-hidden">
            <div className="flex gap-4">
              <div
                title={`${img.caption}`}
                className="flex-shrink-0 p-2 pb-0 flex justify-center gap-2 items-center flex-col">
                <div
                  className="rounded-full w-5 h-5 mb-4 flex-shrink-0 bg-dessert-500">
                </div>
                <div
                  className="border-l-2 h-full w-0.5 mx-auto border-dashed border-dessert-500"></div>
              </div>
              <div className="pb-4">
                <div
                  className="font-mono divide-solid pt-2 pb-4 items-center text-xs text-center flex justify-around gap-4 w-full">
                  <div
                    className="border-b opacity-70 border-dessert-500 h-0.5 w-20"></div>
                  <div
                    className="w-auto flex-shrink-0">{`${time.getDay()}-${time.getMonth()}-${time.getFullYear()}`}</div>
                  <div
                    className="border-b opacity-70 border-dessert-500 h-0.5 w-20"></div>
                </div>
                <img className="w-auto rounded-lg max-w-full" src={img.mediaUrl}
                     alt={img.caption}></img></div>
            </div>
          </Link>
        )
      })}

      {/*<pre className='whitespace-normal'>{JSON.stringify(data)}</pre>*/}
    </div>
  )
}

// https://feeds.behold.so/t3Ih5iyZ3Xbz7YkdRvu2
