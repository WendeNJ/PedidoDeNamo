import { useEffect, useState } from 'react'

export const DATA_DO_PEDIDO = new Date('2026-01-24T00:00:00-03:00')

function calcularTempo(agora) {
  const diferenca = Math.max(0, agora.getTime() - DATA_DO_PEDIDO.getTime())
  let meses =
    (agora.getFullYear() - DATA_DO_PEDIDO.getFullYear()) * 12 +
    agora.getMonth() -
    DATA_DO_PEDIDO.getMonth()

  const marcoMensal = new Date(DATA_DO_PEDIDO)
  marcoMensal.setMonth(DATA_DO_PEDIDO.getMonth() + meses)

  if (marcoMensal > agora) {
    meses -= 1
    marcoMensal.setMonth(marcoMensal.getMonth() - 1)
  }

  const desdeUltimoMes = Math.max(0, agora.getTime() - marcoMensal.getTime())
  const diaEmMs = 1000 * 60 * 60 * 24
  const horaEmMs = 1000 * 60 * 60
  const minutoEmMs = 1000 * 60

  return {
    meses: Math.max(0, meses),
    dias: Math.floor(desdeUltimoMes / diaEmMs),
    totalDias: Math.floor(diferenca / diaEmMs),
    horas: Math.floor((diferenca % diaEmMs) / horaEmMs),
    minutos: Math.floor((diferenca % horaEmMs) / minutoEmMs),
    segundos: Math.floor((diferenca % minutoEmMs) / 1000),
  }
}

export default function useTempoJuntos() {
  const [tempo, setTempo] = useState(() => calcularTempo(new Date()))

  useEffect(() => {
    const atualizar = () => setTempo(calcularTempo(new Date()))
    const intervalo = window.setInterval(atualizar, 1000)

    return () => window.clearInterval(intervalo)
  }, [])

  return tempo
}
