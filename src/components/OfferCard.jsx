export default function OfferCard({ onClick }) {
  return (
    <div
      className="
        bg-[#111]
        text-white
        rounded-3xl
        p-10
        max-w-md
        shadow-[0_25px_60px_rgba(0,0,0,0.6)]
        relative
        hover:scale-[1.02]
        transition
      "
    >
      {/* BADGE */}
      <div className="absolute -top-4 left-6 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-extrabold tracking-wide">
        OFERTA LIMITADA
      </div>

      {/* TÍTULO */}
      <h2 className="text-4xl font-extrabold leading-tight">
        Plano Trimestral <br />
        Smart Fit <span className="text-yellow-400">Black</span>
      </h2>

      {/* SUBTÍTULO */}
      <p className="mt-4 text-yellow-400 font-semibold uppercase tracking-wide text-sm">
        3 meses por apenas
      </p>

      {/* PREÇO */}
      <div className="mt-2 flex items-end gap-2">
        <span className="text-yellow-400 text-6xl font-extrabold">
          R$ 149,90
        </span>
        <span className="text-sm text-gray-400 mb-2">
          / total
        </span>
      </div>

      {/* DESCRIÇÃO */}
      <p className="text-xs mt-2 text-gray-400">
        (apenas os 3 primeiros meses)
      </p>

      {/* BENEFÍCIOS */}
      <ul className="mt-6 space-y-3 text-sm">
        <li className="flex items-center gap-3">
          <span className="text-yellow-400">✔</span>
          Acesso ilimitado a todas as unidades
        </li>
        <li className="flex items-center gap-3">
          <span className="text-yellow-400">✔</span>
          Treinos personalizados no app
        </li>
        <li className="flex items-center gap-3">
          <span className="text-yellow-400">✔</span>
          Sem taxa de cancelamento
        </li>
      </ul>

      {/* CTA */}
      <button
        type="button"
        onClick={onClick}
        className="
          mt-8
          w-full
          bg-yellow-400
          text-black
          py-5
          rounded-2xl
          font-extrabold
          text-lg
          hover:bg-yellow-300
          transition
        "
      >
        MATRICULE-SE AGORA →
      </button>

      {/* FOOTER */}
      <p className="text-center mt-4 text-xs text-gray-500 tracking-wide">
        QUEM É SMART, SABE.
      </p>
    </div>
  )
}
