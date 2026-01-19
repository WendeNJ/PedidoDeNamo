export default function Transicao({ onNext }) {
  return (
    <section className="page">
      <h1>🤍 Posso te perguntar uma coisa?</h1>

      <p className="destaque">
        O que antes era um rapaz meio perdido,
        hoje tem um objetivo muito claro:
        construir uma <strong>família</strong>…
        com você.
        O <strong>“nós”</strong> é a minha maior motivação.
      </p>

      <button onClick={onNext}>Continuar</button>
    </section>
  )
}
