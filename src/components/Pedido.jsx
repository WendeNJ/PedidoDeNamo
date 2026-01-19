import { useRef, useState } from 'react'
import monalisa from '../assets/monalisa.mp3'

export default function Pedido() {
  const audioRef = useRef(new Audio(monalisa))
  const [aceitou, setAceitou] = useState(false)
  const [hearts, setHearts] = useState([])

  function aceitar() {
    audioRef.current.play()
    setAceitou(true)

    // cria 40 corações com posição aleatória
    const novosCoracoes = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2
    }))

    setHearts(novosCoracoes)
  }

  function fugir(e) {
    const btn = e.target
    const maxX = window.innerWidth - btn.offsetWidth
    const maxY = window.innerHeight - btn.offsetHeight

    btn.style.position = 'fixed'
    btn.style.left = Math.random() * maxX + 'px'
    btn.style.top = Math.random() * maxY + 'px'
  }

  return (
    <section className="page">
      {aceitou && (
        <div className="hearts-container">
          {hearts.map(heart => (
            <span
              key={heart.id}
              className="heart-float"
              style={{
                left: `${heart.left}vw`,
                animationDelay: `${heart.delay}s`
              }}
            >
              ❤️
            </span>
          ))}
        </div>
      )}

      <h1>EU AMO VOCÊ</h1>

      {!aceitou && (
        <>
          <p className="destaque">Você aceita namorar comigo?</p>

          <div className="botoes">
            <button onClick={aceitar}>SIM 💖</button>
            <button
              className="nao"
              onMouseEnter={fugir}
              onTouchStart={fugir}
            >
              NÃO 🙈
            </button>
          </div>
        </>
      )}

      {aceitou && (
        <p className="destaque">
          💖 Eu te amo muito! 💖
        </p>
      )}
    </section>
  )
}
