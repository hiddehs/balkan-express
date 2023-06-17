'use server'

import React from 'react'

const getFeed = async () => {
  const res = await fetch('https://feeds.behold.so/t3Ih5iyZ3Xbz7YkdRvu2')
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
        mediaUrl: string,
        caption: string,
        mediaType: string,
        id: number
        timestamp: string
        dimensions: {
          height: number
          width: number
        }
      }) => {
        const time = new Date(img.timestamp)
        return (
          <div key={img.id} className="relative overflow-hidden flex gap-6">
            <div
              title={`${time.toDateString()} ${time.toTimeString()} ${img.caption}`}
              className="flex-shrink-0 p-4 pb-0 flex justify-center gap-2 items-center flex-col">
              <div
                className="rounded-full w-5 h-5 mb-4 flex-shrink-0 bg-dessert-500">
              </div>
              <div
                className="border-l-2 h-full w-0.5 mx-auto border-dashed border-dessert-500"></div>

            </div>
            <div className="pb-4">
              <img className="w-auto rounded-lg max-w-full" src={img.mediaUrl}
                   alt={img.caption}></img></div>
          </div>
        )
      })}

      {/*<pre className='whitespace-normal'>{JSON.stringify(data)}</pre>*/}
    </div>
  )
}

// https://feeds.behold.so/t3Ih5iyZ3Xbz7YkdRvu2
