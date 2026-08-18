import useTempoJuntos from '../hooks/useTempoJuntos'

function Unidade({ valor, singular, plural }) {
  return (
    <div className="counter-unit">
      <strong>{String(valor).padStart(2, '0')}</strong>
      <span>{valor === 1 ? singular : plural}</span>
    </div>
  )
}

export default function Contador() {
  const tempo = useTempoJuntos()

  return (
    <div className="relationship-counter">
      <div className="relationship-counter__headline">
        <span>
          <strong>{tempo.meses}</strong> {tempo.meses === 1 ? 'mês' : 'meses'}
        </span>
        <i aria-hidden="true">♥</i>
        <span>
          <strong>{tempo.dias}</strong> {tempo.dias === 1 ? 'dia' : 'dias'}
        </span>
      </div>

      <div className="relationship-counter__live" aria-label="Contador do nosso namoro">
        <Unidade valor={tempo.totalDias} singular="dia" plural="dias" />
        <span className="counter-separator" aria-hidden="true">:</span>
        <Unidade valor={tempo.horas} singular="hora" plural="horas" />
        <span className="counter-separator" aria-hidden="true">:</span>
        <Unidade valor={tempo.minutos} singular="minuto" plural="minutos" />
        <span className="counter-separator" aria-hidden="true">:</span>
        <Unidade valor={tempo.segundos} singular="segundo" plural="segundos" />
      </div>

      <p>Desde 24 de janeiro de 2026, à meia-noite.</p>
    </div>
  )
}
