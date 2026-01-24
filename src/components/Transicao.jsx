export default function Transicao({ onNext }) {
  return (
    <section className="page transicao">
      <h1 className="titulo-transicao">
      
      </h1>

      <p className="destaque texto-transicao">
        O que antes era um rapaz meio perdido,
        <br />
        hoje tem um objetivo muito claro:
        <br /><br />
        construir uma <strong>família</strong>…
        <br />
        com <strong>você</strong>.
        <br /><br />
        O <strong>“nós”</strong> é a minha maior motivação.
      </p>

      <button className="btn-continuar" onClick={onNext}>
        Continuar →
      </button>
    </section>
  )
}