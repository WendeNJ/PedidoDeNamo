import { useEffect } from 'react'

export default function CinemaMode({ active, children }) {
  useEffect(() => {
    if (active) {
      document.documentElement.requestFullscreen?.()
    }
  }, [active])

  if (!active) return null

  return (
    <div className="cinema-overlay">
      <div className="cinema-content">
        {children}
      </div>
    </div>
  )
}
