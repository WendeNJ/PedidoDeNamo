import { useEffect } from 'react'

export default function useCinemaMode(active) {
  useEffect(() => {
    if (!active) return

    const elem = document.documentElement
    const overflowAnterior = document.body.style.overflow

    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch(() => {})
    }

    // Mantém a experiência em tela cheia, mas permite alcançar o novo capítulo
    // em telas menores.
    document.body.style.overflow = 'auto'

    return () => {
      document.exitFullscreen?.().catch(() => {})
      document.body.style.overflow = overflowAnterior
    }
  }, [active])
}
