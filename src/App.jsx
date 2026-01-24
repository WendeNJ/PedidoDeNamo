import { useState } from 'react'
import Declaracao from './components/Declaracao'
import Transicao from './components/Transicao'
import Amor from './components/Amor'
import Pedido from './components/Pedido'


import foto from './assets/Foto de Wenderson.jpg'

export default function App() {
  const [pagina, setPagina] = useState(1)

  function nextPage() {
    setPagina(p => p + 1)
  }

  return (
    <div
      className="app"
      style={{ backgroundImage: `url(${foto})` }}
    >
      {pagina === 1 && <Declaracao onNext={nextPage} />}
      {pagina === 2 && <Transicao onNext={nextPage} />}
      {pagina === 3 && <Amor onNext={nextPage} />}
      {pagina === 4 && <Pedido />}
    </div>
  )
}
