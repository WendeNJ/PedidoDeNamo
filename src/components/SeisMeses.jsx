import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import foto from '../assets/Foto de Wenderson.jpg'
import useTempoJuntos from '../hooks/useTempoJuntos'
import Contador from './Contador'

const MotionMain = motion.main
const MotionParagraph = motion.p
const MotionHeading = motion.h1
const MotionAnchor = motion.a
const MotionDiv = motion.div
const MotionArticle = motion.article

const revelar = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
}

export default function SeisMeses() {
  const tempo = useTempoJuntos()

  return (
    <MotionMain
      className="anniversary-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55 }}
    >
      <nav className="anniversary-nav" aria-label="Navegação principal">
        <Link to="/" className="back-link">
          <span aria-hidden="true">←</span>
          O pedido
        </Link>
        <span className="date-signature">24 · 01 · 2026 — para sempre</span>
      </nav>

      <section className="anniversary-hero">
        <div className="anniversary-hero__copy">
          <MotionParagraph
            className="chapter-label"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Capítulo II · seis meses
          </MotionParagraph>

          <MotionHeading
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            O tempo voa.
            <em>O nosso amor fica.</em>
          </MotionHeading>

          <MotionParagraph
            className="anniversary-hero__intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.8 }}
          >
            Hoje já são {tempo.meses} meses e {tempo.dias} dias desde o começo
            do nosso para sempre — e eu escolheria você de novo, todos os dias.
          </MotionParagraph>

          <MotionAnchor
            href="#carta"
            className="hero-cta"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Ler o que eu escrevi
            <span aria-hidden="true">↓</span>
          </MotionAnchor>
        </div>

        <MotionDiv
          className="photo-composition"
          initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: -1.5 }}
          transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="photo-composition__tape" aria-hidden="true" />
          <div className="photo-composition__frame">
            <img
              src={foto}
              alt="Nós dois juntos, olhando um para o outro"
            />
            <div className="photo-composition__caption">
              <span>meu lugar favorito</span>
              <strong>é ao seu lado ♥</strong>
            </div>
          </div>
          <span className="doodle-heart doodle-heart--one" aria-hidden="true">♡</span>
          <span className="doodle-heart doodle-heart--two" aria-hidden="true">♡</span>
        </MotionDiv>
      </section>

      <section className="time-section">
        <MotionDiv className="section-heading" {...revelar}>
          <p className="chapter-label">O tempo do nosso “sim”</p>
          <h2>Cada segundo com você conta.</h2>
        </MotionDiv>

        <MotionDiv {...revelar}>
          <Contador />
        </MotionDiv>

        <MotionDiv className="promise-strip" {...revelar}>
          <div>
            <strong>6</strong>
            <span>meses celebrando nós dois</span>
          </div>
          <div className="promise-strip__heart" aria-hidden="true">♥</div>
          <div>
            <strong>22</strong>
            <span>meses para o nosso casamento</span>
          </div>
          <div className="promise-strip__heart" aria-hidden="true">♥</div>
          <div>
            <strong>∞</strong>
            <span>uma vida inteira pela frente</span>
          </div>
        </MotionDiv>
      </section>

      <section className="letter-section" id="carta">
        <MotionDiv className="letter-intro" {...revelar}>
          <p className="chapter-label">Uma carta para você</p>
          <h2>Meu amor,</h2>
          <span>26 de julho de 2026</span>
        </MotionDiv>

        <MotionArticle className="love-letter" {...revelar}>
          <span className="love-letter__clip" aria-hidden="true" />

          <p>
            Você faz {tempo.meses} meses e {tempo.dias} dias desde o dia que eu te
            pedi em namoro, e quando olhamos para trás podemos observar o quão
            rápido o tempo passa. Principalmente quando estamos ao lado de quem
            amamos.
          </p>

          <p className="letter-quote">
            E daqui a 50 anos vamos falar: “Olha como o tempo passa rápido”.
          </p>

          <p>
            Meu maior sonho era ter você ao meu lado, e hoje tenho. Agradeço
            todos os dias por ter você comigo. Sem você, eu não estaria fazendo
            muitas coisas do que faço hoje. Se não fosse você, eu já teria
            desistido da programação antes mesmo de arrumar um emprego.
          </p>

          <p>
            Você me deu o suporte necessário para prosseguir e persistir, não só
            no âmbito profissional, mas em todos os âmbitos das nossas vidas.
          </p>

          <p>
            Faltam 22 meses para o nosso casamento. Será se o pedido também vai
            ter um site? Não sei…
          </p>

          <p>
            Mas esse texto é basicamente para te agradecer por fazer parte da
            minha vida e estar sempre comigo. Como eu disse há 6 meses, você será
            a melhor mãe que nossos filhos poderão ter.
          </p>

          <footer>
            <span>Com todo o meu amor,</span>
            <strong>Eu te amo TOOOFA ♥</strong>
          </footer>
        </MotionArticle>
      </section>

      <section className="closing-section">
        <MotionDiv className="closing-section__content" {...revelar}>
          <span className="closing-heart" aria-hidden="true">♥</span>
          <p>Seis meses foram só o começo.</p>
          <h2>Ainda temos uma vida inteira para viver juntos.</h2>
          <Link to="/" className="secondary-link">
            Reviver o nosso pedido
            <span aria-hidden="true">↗</span>
          </Link>
        </MotionDiv>
      </section>

      <footer className="anniversary-footer">
        <span>Nós dois ♥</span>
        <p>Feito com amor para a nossa história.</p>
        <span>24.01.2026</span>
      </footer>
    </MotionMain>
  )
}
