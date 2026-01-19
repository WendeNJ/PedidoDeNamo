import { useEffect, useRef, useState } from 'react'
import typingSound from '../assets/typing.mp3'

export default function Typewriter({ text, speed = 40, onFinish }) {
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)

  const audioRef = useRef(null)

  useEffect(() => {
    audioRef.current = new Audio(typingSound)
    audioRef.current.volume = 0.2
  }, [])

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[index])
        setIndex(index + 1)

        // toca som somente se não for espaço
        if (text[index] !== ' ') {
          audioRef.current.currentTime = 0
          audioRef.current.play().catch(() => {})
        }
      }, speed)

      return () => clearTimeout(timeout)
    } else {
      // Para o som ao finalizar o parágrafo
      audioRef.current.pause()
      audioRef.current.currentTime = 0

      if (onFinish) onFinish()
    }
  }, [index, text, speed, onFinish])

  return <p>{displayedText}</p>
}
