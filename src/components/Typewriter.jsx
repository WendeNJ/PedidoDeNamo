import { useEffect, useRef, useState } from 'react'
import typingSound from '../assets/typing.mp3'

export default function Typewriter({ text = '', speed = 40, onFinish }) {
  const [typingState, setTypingState] = useState(() => ({
    source: text,
    displayed: '',
  }))
  const finishedTextRef = useRef(null)
  const audioRef = useRef(null)
  const displayedText = typingState.source === text ? typingState.displayed : ''

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

  // ⌨️ efeito de digitação
  useEffect(() => {
    if (!text) return

    if (displayedText.length >= text.length) {
      if (finishedTextRef.current !== text) {
        finishedTextRef.current = text
        onFinish?.()
      }
      return
    }

    const timeout = setTimeout(() => {
      const nextIndex = displayedText.length
      const char = text[nextIndex]
      setTypingState({
        source: text,
        displayed: text.slice(0, nextIndex + 1),
      })

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
