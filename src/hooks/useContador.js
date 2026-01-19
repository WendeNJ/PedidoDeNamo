import { useEffect, useState } from 'react'

export default function useContador(start) {
  const [tempo, setTempo] = useState(0)

  useEffect(() => {
    if (!start) return

    const interval = setInterval(() => {
      setTempo(t => t + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [start])

  return tempo
}
