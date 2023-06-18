'use client'
import { useEffect } from 'react'
import ConfettiGenerator from 'confetti-js'

export default async function Confetti () {

  useEffect(() => {
    const confettiSettings = {
      'target': 'my-canvas',
      'max': '500',
      'size': '1',
      'animate': true,
      'props': ['circle', 'square', 'triangle', 'line'],
      'colors': [
        [165, 104, 246],
        [230, 61, 135],
        [0, 199, 228],
        [253, 214, 126]],

      'clock': '25',
      'rotate': true,
      'width': '1972',
      'height': '1539',
      'start_from_edge': true,
      'respawn': true,
    }
    const confetti = new ConfettiGenerator(confettiSettings)
    confetti.render()

    return () => confetti.clear()
  }, [])

  return (
    <canvas id="my-canvas" className="fixed top-0 h-screen -z-20"/>
  )

}

