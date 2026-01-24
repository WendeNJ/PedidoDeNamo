import { useRef, useState } from 'react'
import Typewriter from './Typewriter'
import monalisa from '../assets/monalisa.mp3'
import useCinemaMode from '../hooks/useCinemaMode'
import useContador from '../hooks/useContador'

export default function Pedido() {
  const audioRef = useRef(null)

  const [aceitou, setAceitou] = useState(false)
  const [hearts, setHearts] = useState([])
  const [mostrarMensagemFinal, setMostrarMensagemFinal] = useState(false)
  const [mensagemFinalDigitada, setMensagemFinalDigitada] = useState(false)
  const [mostrarPerguntaSecreta, setMostrarPerguntaSecreta] = useState(false)

  useCinemaMode(aceitou)
  const segundos = useContador(aceitou)

  function aceitar() {
    // 🎵 Áudio com melhor compatibilidade iOS
    if (!audioRef.current) {
      audioRef.current = new Audio(monalisa)
      audioRef.current.preload = 'auto'
      audioRef.current.volume = 0.8
    }

    const playPromise = audioRef.current.play()
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        console.log('Autoplay bloqueado:', err)
        // Tenta novamente após um pequeno delay
        setTimeout(() => audioRef.current?.play().catch(() => {}), 100)
      })
    }

    setAceitou(true)

    // ❤️ Corações otimizados
    const isMobile = window.innerWidth < 768
    const maxHearts = isMobile ? 60 : 100
    const interval = isMobile ? 200 : 100

    const intervalo = setInterval(() => {
      setHearts(prev => {
        if (prev.length >= maxHearts) {
          clearInterval(intervalo)
          return prev
        }

        return [
          ...prev,
          {
            id: Date.now() + Math.random(),
            left: Math.random() * 100,
            emoji: ['❤️', '💖', '💕', '💘', '💗', '💝'][Math.floor(Math.random() * 6)]
          }
        ]
      })
    }, interval)

    // Limpa corações após animação
    setTimeout(() => {
      clearInterval(intervalo)
      setTimeout(() => setHearts([]), 5000)
    }, 8000)

    // ⏳ Mensagem final com delay suave
    setTimeout(() => setMostrarMensagemFinal(true), 2500)

    // 🤫 Pergunta secreta após 30 segundos
    setTimeout(() => setMostrarPerguntaSecreta(true), 30000)
  }

  function fugir(e) {
    e.preventDefault()

    const btn = e.currentTarget
    const isMobile = window.innerWidth < 768

    const btnWidth = btn.offsetWidth || 140
    const btnHeight = btn.offsetHeight || 50

    // Safe areas considerando notch do iPhone
    const safeMargin = 20
    const maxX = window.innerWidth - btnWidth - safeMargin
    const maxY = window.innerHeight - btnHeight - safeMargin - (isMobile ? 80 : 40)

    const newX = Math.max(safeMargin, Math.random() * maxX)
    const newY = Math.max(safeMargin, Math.random() * maxY)

    btn.style.position = 'fixed'
    btn.style.left = `${newX}px`
    btn.style.top = `${newY}px`
    btn.style.transition = isMobile ? 'all 0.15s ease-out' : 'all 0.1s ease'
    btn.style.transform = 'scale(1.05)'
    btn.style.zIndex = '999'

    // Reset transform após animação
    setTimeout(() => {
      btn.style.transform = 'scale(1)'
    }, 150)

    // Feedback tátil
    if ('vibrate' in navigator) {
      navigator.vibrate(15)
    }
  }

  return (
    <section className={`page ${aceitou ? 'cinema' : ''}`}>
      {/* ❤️ Corações animados */}
      {aceitou && hearts.length > 0 && (
        <div className="hearts-container" aria-hidden="true">
          {hearts.map(h => (
            <span
              key={h.id}
              className="heart-float"
              style={{ 
                left: `${h.left}vw`,
                fontSize: `${1.5 + Math.random() * 1}rem`
              }}
            >
              {h.emoji}
            </span>
          ))}
        </div>
      )}

      <h1>EU AMO VOCÊ</h1>

      {/* ❓ Pergunta */}
      {!aceitou && (
        <div className="bloco-pergunta">
          <p className="destaque">Você aceita namorar comigo?</p>

          <div className="botoes">
            <button onClick={aceitar} className="amor">
              SIM 💖
            </button>
            <button
              className="nao"
              onMouseEnter={fugir}
              onTouchStart={fugir}
              onClick={(e) => e.preventDefault()}
            >
              NÃO 🙈
            </button>
          </div>
        </div>
      )}

      {/* 💍 Conteúdo pós-aceitação */}
      {aceitou && (
        <div className={`pedido-conteudo ${aceitou ? 'show' : ''}`}>
          <p className="destaque" style={{ fontSize: 'clamp(1.3rem, 5vw, 1.6rem)' }}>
            A partir desse momento, sou um homem mais feliz
          </p>

          <p className="contador">
            Já faz {segundos} {segundos === 1 ? 'segundo' : 'segundos'} desde o nosso "sim" 💕
          </p>

          {/* Mensagem digitando */}
          {mostrarMensagemFinal && !mensagemFinalDigitada && (
            <Typewriter
              text="Te amo hoje, amanhã e para sempre ❤️"
              speed={80}
              onFinish={() => {
                if ('vibrate' in navigator) {
                  navigator.vibrate([50, 30, 50])
                }
                setMensagemFinalDigitada(true)
              }}
            />
          )}

          {/* Mensagem final */}
          {mensagemFinalDigitada && (
            <p className="destaque mensagem-final">
              Te amo hoje, amanhã e para sempre ❤️
            </p>
          )}
        </div>
      )}

      {/* 🤫 Pergunta secreta no cantinho */}
      {mostrarPerguntaSecreta && (
        <div 
          style={{
            position: 'fixed',
            bottom: 'max(20px, env(safe-area-inset-bottom))',
            right: '20px',
            fontSize: '0.9rem',
            opacity: '0.6',
            color: '#ffb3c1',
            animation: 'fadeSlide 0.8s ease',
            cursor: 'pointer',
            transition: 'opacity 0.3s ease',
            zIndex: 1000
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '0.6'}
          onTouchStart={(e) => e.currentTarget.style.opacity = '1'}
        >
          hoje tem? 👀
        </div>
      )}
    </section>
  )
}