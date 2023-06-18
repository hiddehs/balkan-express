'use client'
import { useEffect } from 'react'
import JSConfetti from 'js-confetti'

export default async function Confetti () {

  useEffect(() => {

    const jsConfetti = new JSConfetti()

    jsConfetti.addConfetti()

  })
  return (<div></div>)
}

