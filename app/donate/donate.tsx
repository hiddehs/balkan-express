'use client'

import { useState, useTransition } from 'react'
import { handleSubmit } from './actions'

export default function Donate () {
  const [amount, setAmount] = useState(20)
  let [isPending, startTransition] = useTransition()

  return (
    <form action={(data) => startTransition(async () => {
      await handleSubmit(data)
    })}
          className={`mx-auto p-10 mt-8 rounded bg-white/50 inline-flex flex-col gap-4  ${isPending
            ? 'opacity-40'
            : 'opacity-100'} `}>
      <div className="text-4xl font-black text-center">€{amount},-</div>

      <input type="range"
             onChange={(e) => setAmount(Number.parseInt(e.target.value))}
             value={amount} min={20}
             max={1000} name="amount"/>
      <button
        disabled={isPending}
        className={'shadow hover:bg-slate-300 transition duration-200 rounded-md py-3 px-4 mt-4 text-slate-600 tracking-widest font-bold bg-slate-200 uppercase'}
        type="submit">
        {isPending ? 'Loading' : 'Donate'}
      </button>
    </form>
  )

}
