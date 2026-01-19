export default function Amor({ onNext }) {
  return (
    <section className="page">
      <h1>❤️ Só mais uma perguntinha…</h1>

      <button className="amor" onClick={onNext}>
        Clique somente se você me amar 💖
      </button>
    </section>
  )
}
