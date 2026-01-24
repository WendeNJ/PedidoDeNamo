import { useEffect, useRef, useState } from 'react'
import typingSound from '../assets/typing.mp3'

export default function Typewriter({ text, speed = 40, onFinish }) {
  const [displayedText, setDisplayedText] = useState('')
  const indexRef = useRef(0)
  const baseAudioRef = useRef(null)
    useEffect(() => {
  const unlockAudio = () => {
    const audio = new Audio()
    audio.play().catch(() => {})
    window.removeEventListener('click', unlockAudio)
  }

  window.addEventListener('click', unlockAudio)
  return () => window.removeEventListener('click', unlockAudio)
}, [])

  // cria áudio base
  useEffect(() => {
    baseAudioRef.current = new Audio(typingSound)
    baseAudioRef.current.volume = 0.25
  }, [])

  useEffect(() => {
    if (indexRef.current >= text.length) {
      onFinish?.()
      return
    }

    const timeout = setTimeout(() => {
      const char = text[indexRef.current]
      setDisplayedText(prev => prev + char)
      indexRef.current++

      // toca som só se não for espaço
      if (char !== ' ' && baseAudioRef.current) {
        const clickSound = baseAudioRef.current.cloneNode()
        clickSound.volume = 0.25
        clickSound.play().catch(() => {})
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayedText])

  return <p>{displayedText}</p>
}
