import { useEffect } from 'react'

export default function useCinemaMode(active) {
  useEffect(() => {
    if (!active) return

    const elem = document.documentElement

    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch(() => {})
    }

    document.body.style.overflow = 'hidden'

    return () => {
      document.exitFullscreen?.().catch(() => {})
      document.body.style.overflow = 'auto'
    }
  }, [active])
}
