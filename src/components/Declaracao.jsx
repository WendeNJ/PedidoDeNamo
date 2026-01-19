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
Eu ficava extremamente nervoso quando ia te ver, ansioso e muito feliz.`,

    `Desde o início, deixei claro que queria um relacionamento com você,
e isso finalmente se concretizou.
Estou escrevendo isso com o coração acelerado e um pouco emocionado.`,

    `Os meses foram passando e eu fui mudando, evoluindo e me tornando uma pessoa melhor.
Você sempre me apoia (só não apoiou quando eu quis criar um coelho 😅).
Você é minha motivação diária para estudar e trabalhar.`,

    `Minha admiração por você cresce dia após dia.
Me encanto com o quanto você é inteligente, dedicada e esforçada.
Fico feliz em saber que a mãe dos meus filhos
será o melhor exemplo possível de mulher para eles.`
  ]

  const [paragrafoAtual, setParagrafoAtual] = useState(0)
  const [finalizou, setFinalizou] = useState(false)

  function proximoParagrafo() {
    if (paragrafoAtual < textos.length - 1) {
      setParagrafoAtual(p => p + 1)
    } else {
      setFinalizou(true)
    }
  }

  return (
    <section className="page">
      <h1>EU AMO VOCÊ</h1>

      {textos.slice(0, paragrafoAtual + 1).map((texto, index) => (
        <Typewriter
          key={index}
          text={texto}
          speed={35}
          onFinish={index === paragrafoAtual ? proximoParagrafo : null}
        />
      ))}

      {finalizou && (
        <button onClick={onNext}>
          Continuar ↓
        </button>
      )}
    </section>
  )
}
