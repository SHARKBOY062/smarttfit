export default function OfferCard({ onClick }) {
  return (
    <div
      className="
        bg-[#111]
        text-white
        rounded-3xl
        p-6 sm:p-10
        w-full
        max-w-[340px] sm:max-w-md
        shadow-[0_25px_60px_rgba(0,0,0,0.6)]
        relative
        hover:scale-[1.02]
        transition
      "
    >
      {/* BADGE */}
      <div className="
        absolute 
        -top-3 sm:-top-4 
        left-4 sm:left-6 
        bg-yellow-400 
        text-black 
        px-3 sm:px-4 
        py-1 
        rounded-full 
        text-[10px] sm:text-sm 
        font-extrabold 
        tracking-wide
      ">
        OFERTA LIMITADA
      </div>

      {/* TÍTULO */}
      <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight">
        Plano Trimestral <br />
        Smart Fit <span className="text-yellow-400">Black</span>
      </h2>

      {/* SUBTÍTULO */}
      <p className="mt-3 sm:mt-4 text-yellow-400 font-semibold uppercase tracking-wide text-[11px] sm:text-sm">
        3 meses por apenas
      </p>

      {/* PREÇO */}
      <div className="mt-2 flex items-end gap-2">
        <span className="text-yellow-400 text-4xl sm:text-6xl font-extrabold leading-none">
          R$ 149,90
        </span>
        <span className="text-[10px] sm:text-sm text-gray-400 mb-1 sm:mb-2">
          / total
        </span>
      </div>

      {/* DESCRIÇÃO */}
      <p className="text-[11px] sm:text-xs mt-2 text-gray-400">
        (apenas os 3 primeiros meses)
      </p>

      {/* BENEFÍCIOS */}
      <ul className="mt-5 sm:mt-6 space-y-2 sm:space-y-3 text-[13px] sm:text-sm">
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
          mt-6 sm:mt-8
          w-full
          bg-yellow-400
          text-black
          py-4 sm:py-5
          rounded-2xl
          font-extrabold
          text-base sm:text-lg
          hover:bg-yellow-300
          transition
        "
      >
        MATRICULE-SE AGORA →
      </button>

      {/* FOOTER */}
      <p className="text-center mt-3 sm:mt-4 text-[10px] sm:text-xs text-gray-500 tracking-wide">
        QUEM É SMART, SABE.
      </p>
    </div>
  )
}
