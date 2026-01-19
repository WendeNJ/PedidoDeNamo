import { useRef, useState } from 'react'
import monalisa from '../assets/monalisa.mp3'
import useCinemaMode from '../hooks/useCinemaMode'
import useContador from '../hooks/useContador'

export default function Pedido() {
  const audioRef = useRef(new Audio(monalisa))
  const [aceitou, setAceitou] = useState(false)
  const [hearts, setHearts] = useState([])
  const [mostrarMensagemFinal, setMostrarMensagemFinal] = useState(false)

  useCinemaMode(aceitou)
  const segundos = useContador(aceitou)

   function aceitar() {
  audioRef.current.play()
  setAceitou(true)

  // corações contínuos
  const intervalo = setInterval(() => {
    setHearts(prev => [
      ...prev,
      {
        id: Date.now(),
        left: Math.random() * 100,
        delay: 0
      }
    ])
  }, 120)

  setTimeout(() => clearInterval(intervalo), 6000)

  // MOSTRAR MENSAGEM FINAL APÓS 2s
  setTimeout(() => {
    setMostrarMensagemFinal(true)
  }, 2000)
}

    

  function fugir(e) {
    const btn = e.target
    const maxX = window.innerWidth - btn.offsetWidth - 40
    const maxY = window.innerHeight - btn.offsetHeight - 40

    btn.style.position = 'fixed'
    btn.style.left = Math.random() * maxX + 'px'
    btn.style.top = Math.random() * maxY + 'px'
  }

  return (
    <section className={`page ${aceitou ? 'cinema' : ''}`}>
      {aceitou && (
        <div className="hearts-container">
          {hearts.map(h => (
            <span
              key={h.id}
              className="heart-float"
              style={{ left: `${h.left}vw` }}
            >
              {['❤️','💖','💕','💘','💗'][Math.floor(Math.random() * 5)]}
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
        <>
          <p className="destaque">💖 Eu te amo muito! 💖</p>
          <p className="contador">
            Já faz {segundos} segundos desde o nosso “sim” 💕
          </p>
        </>
      )}
    </section>
  )
}
