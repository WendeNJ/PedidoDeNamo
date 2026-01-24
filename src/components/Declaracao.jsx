import { useState } from 'react'
import Typewriter from './Typewriter'

export default function Declaracao({ onNext }) {
  const textos = [
    `Olá, se você está lendo isso é porque deu tudo certo.
Quero dizer que, desde o primeiro momento, fiquei muito encantado com a sua beleza.
Criava várias fics na minha cabeça, imaginando nós dois juntos.
Quantas noites eu não fiquei sonhando acordado com você?`,

    `Em 2022, nos meus pensamentos só existia você.
Eu fazia de tudo para estar perto e te agradar, mas naquela época não deu certo.
Alguns anos depois, nos reencontramos novamente, de uma forma natural,
e tudo foi simplesmente acontecendo.
Eu ficava extremamente nervoso quando ia te ver, ansioso e muito feliz. (Ainda fico kkk)`,

    `Desde o início, deixei claro que queria um relacionamento com você,
e isso finalmente se concretizou.
Estou escrevendo isso com o coração acelerado e um pouco emocionado.`,

    `Os meses foram passando e eu fui mudando, evoluindo e me tornando uma pessoa melhor.
Você sempre me apoia (só não apoiou quando eu quis criar um coelho kkkkk).
Você é minha motivação diária para estudar e trabalhar.`,

    `Eu sinto por você o que eu nunca senti antes, é inexplicável.
Sei que sou chato às vezes, mas me esforço para ser, para você,
o melhor que eu posso.
Não tenho palavras para descrever o quanto sou feliz por ter você
e o quanto me alegra saber que passaremos uma vida inteira juntos.`,

    `Provavelmente, quando você estiver lendo este texto,
eu vou estar pertinho de você.
E bem nervoso kkkkk.`,

    `Minha admiração por você cresce dia após dia.
Me encanto com o quanto você é inteligente, dedicada e esforçada.
Fico feliz em saber que a mãe dos meus filhos
será o melhor exemplo possível de mulher para eles.`
  ]

  const [paragrafoAtual, setParagrafoAtual] = useState(0)
  const [finalizou, setFinalizou] = useState(false)
  const [pular, setPular] = useState(false)

  function proximoParagrafo() {
    if (paragrafoAtual < textos.length - 1) {
      setTimeout(() => {
        setParagrafoAtual(p => p + 1)
      }, 300)
    } else {
      setTimeout(() => {
        setFinalizou(true)
      }, 500)
    }
  }

  function pularTudo() {
    if ('vibrate' in navigator) navigator.vibrate(20)

    setPular(true)
    setParagrafoAtual(textos.length - 1)
    setFinalizou(true)
  }

  function continuar() {
    if ('vibrate' in navigator) navigator.vibrate(40)
    onNext()
  }

  return (
    <section className="page fade-in">
      <button
        className="skip"
        onClick={pularTudo}
        aria-label="Pular animação"
        style={{ display: finalizou ? 'none' : 'block' }}
      >
        ⏩
      </button>

      <h1 className="fade-up">EU AMO VOCÊ</h1>

      <div className="texto">
        {!pular ? (
          textos.slice(0, paragrafoAtual + 1).map((texto, index) => (
            <Typewriter
              key={index}
              text={texto}
              speed={35}
              onFinish={index === paragrafoAtual ? proximoParagrafo : null}
            />
          ))
        ) : (
          textos.map((texto, index) => (
            <p key={index} className="fade-up">
              {texto}
            </p>
          ))
        )}
      </div>

      {finalizou && (
        <button
          className="amor fade-in"
          onClick={continuar}
          style={{
            animation: 'pulse 1.5s infinite',
            marginTop: '32px'
          }}
        >
          Continuar ↓
        </button>
      )}
    </section>
  )
}