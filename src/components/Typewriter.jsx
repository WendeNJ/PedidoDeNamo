import { useEffect, useRef, useState } from 'react'
import typingSound from '../assets/typing.mp3'

export default function Typewriter({ text = '', speed = 40, onFinish }) {
  const [displayedText, setDisplayedText] = useState('')
  const indexRef = useRef(0)
  const finishedRef = useRef(false)
  const audioRef = useRef(null)

  // 🔓 desbloqueia áudio no iOS (1ª interação)
  useEffect(() => {
    const unlockAudio = () => {
      const audio = new Audio()
      audio.play().catch(() => {})
      window.removeEventListener('click', unlockAudio)
      window.removeEventListener('touchstart', unlockAudio)
    }

    window.addEventListener('click', unlockAudio)
    window.addEventListener('touchstart', unlockAudio)

    return () => {
      window.removeEventListener('click', unlockAudio)
      window.removeEventListener('touchstart', unlockAudio)
    }
  }, [])

  // 🎵 cria áudio base
  useEffect(() => {
    audioRef.current = new Audio(typingSound)
    audioRef.current.volume = 0.25
  }, [])

  // 🔁 reseta quando o texto muda
  useEffect(() => {
    setDisplayedText('')
    indexRef.current = 0
    finishedRef.current = false
  }, [text])

  // ⌨️ efeito de digitação
  useEffect(() => {
    if (!text) return

    if (indexRef.current >= text.length) {
      if (!finishedRef.current) {
        finishedRef.current = true
        onFinish?.()
      }
      return
    }

    const timeout = setTimeout(() => {
      const char = text[indexRef.current]
      indexRef.current++

      setDisplayedText(prev => prev + char)

      // 🔊 som apenas em letras (leve pro iOS)
      if (char !== ' ' && audioRef.current) {
        audioRef.current.currentTime = 0
        audioRef.current.play().catch(() => {})
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayedText, speed, text, onFinish])

  return (
    <p className="typewriter-text">
      {displayedText}
    </p>
  )
}