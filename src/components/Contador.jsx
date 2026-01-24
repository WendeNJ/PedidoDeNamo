import { useEffect, useState } from 'react'


  // ALTERE PARA A DATA DE VOCÊS
  const inicio = new Date('2025-02-01T00:00:00')



export default function Contador() {
const inicio = new Date('2025-02-01T00:00:00')


const [tempo, setTempo] = useState({
dias: 0,
horas: 0,
minutos: 0,
segundos: 0
})


useEffect(() => {
function atualizar() {
const agora = new Date()
const diff = agora - inicio


const dias = Math.floor(diff / (1000 * 60 * 60 * 24))
const horas = Math.floor((diff / (1000 * 60 * 60)) % 24)
const minutos = Math.floor((diff / (1000 * 60)) % 60)
const segundos = Math.floor((diff / 1000) % 60)


setTempo({ dias, horas, minutos, segundos })
}


atualizar() // atualiza imediatamente
const timer = setInterval(atualizar, 1000)


return () => clearInterval(timer)
}, [])


return (
<div className="contador">
<h2>Desde que virou “nós” 💕</h2>
<p>
{tempo.dias} dias • {tempo.horas}h • {tempo.minutos}m • {tempo.segundos}s
</p>
</div>
)
}
