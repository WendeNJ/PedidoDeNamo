import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Amor from './Amor'
import Declaracao from './Declaracao'
import PageTransition from './PageTransition'
import Pedido from './Pedido'
import Transicao from './Transicao'

const etapas = [
  { id: 1, label: 'Declaração' },
  { id: 2, label: 'Nosso futuro' },
  { id: 3, label: 'Uma pergunta' },
  { id: 4, label: 'O pedido' },
]

export default function PedidoOriginal() {
  const [pagina, setPagina] = useState(1)

  function nextPage() {
    setPagina((paginaAtual) => Math.min(paginaAtual + 1, etapas.length))
  }

  return (
    <main className="original-experience">
      <header className="story-header">
        <button
          type="button"
          className="story-brand"
          onClick={() => setPagina(1)}
          aria-label="Voltar ao começo"
        >
          <span className="story-brand__heart" aria-hidden="true">♥</span>
          <span>Nossa história</span>
        </button>

        <div className="story-progress" aria-label={`Etapa ${pagina} de ${etapas.length}`}>
          {etapas.map((etapa) => (
            <span
              key={etapa.id}
              className={`story-progress__dot ${etapa.id <= pagina ? 'is-active' : ''}`}
              title={etapa.label}
            />
          ))}
        </div>
      </header>

      <AnimatePresence mode="wait">
        <PageTransition key={pagina}>
          {pagina === 1 && <Declaracao onNext={nextPage} />}
          {pagina === 2 && <Transicao onNext={nextPage} />}
          {pagina === 3 && <Amor onNext={nextPage} />}
          {pagina === 4 && <Pedido />}
        </PageTransition>
      </AnimatePresence>
    </main>
  )
}
