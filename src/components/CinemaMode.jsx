import { useEffect } from 'react'

export default function CinemaMode({ active, children }) {
  useEffect(() => {
    if (!document.fullscreenEnabled) return

    if (active) {
      document.documentElement.requestFullscreen().catch(() => {})
    } else if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {})
    }

    return () => {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {})
      }
    }
  }, [active])

  if (!active) return null

  return <div className="cinema">{children}</div>
}