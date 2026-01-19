import { useEffect, useRef, useState } from 'react'
import typeSound from '../assets/type.mp3'

export default function Typewriter({ text, speed = 40, onFinish }) {
  const [displayed, setDisplayed] = useState('')
  const indexRef = useRef(0)
  const audioRef = useRef(null)
  
   useEffect(() => {
  const unlock = () => {
    const audio = new Audio()
    audio.play().catch(() => {})
    window.removeEventListener('click', unlock)
  }

  window.addEventListener('click', unlock)
  return () => window.removeEventListener('click', unlock)
}, [])

  useEffect(() => {
    audioRef.current = new Audio(typeSound)
    audioRef.current.volume = 0.4
  }, [])

  useEffect(() => {
    if (indexRef.current >= text.length) {
      onFinish?.()
      return
    }

    const timeout = setTimeout(() => {
      setDisplayed(prev => prev + text[indexRef.current])
      indexRef.current++

      if (audioRef.current) {
        audioRef.current.currentTime = 0
        audioRef.current.play().catch(() => {})
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayed])

  return <p>{displayed}</p>
}
