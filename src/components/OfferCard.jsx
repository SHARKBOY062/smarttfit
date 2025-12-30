export default function OfferCard({ onClick }) {
  return (
    <div className="
      bg-[#111]
      text-white
      rounded-3xl
      w-full
      max-w-[360px]
      p-6 sm:p-10
      shadow-2xl
      relative
    ">

      {/* BADGE */}
      <span className="
        absolute -top-3 left-5
        bg-yellow-400 text-black
        px-4 py-1
        rounded-full
        text-xs font-extrabold
      ">
        OFERTA LIMITADA
      </span>

      <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight">
        Plano Trimestral <br />
        Smart Fit <span className="text-yellow-400">Black</span>
      </h2>

      <p className="mt-4 text-yellow-400 text-xs sm:text-sm font-semibold uppercase">
        3 meses por apenas
      </p>

      <div className="mt-2 flex items-end gap-2">
        <span className="text-yellow-400 text-4xl sm:text-6xl font-extrabold">
          R$ 149,90
        </span>
        <span className="text-xs text-gray-400 mb-1">/ total</span>
      </div>

      <p className="text-xs text-gray-400 mt-2">
        (apenas os 3 primeiros meses)
      </p>

      <ul className="mt-5 space-y-2 text-sm">
        <li>✔ Acesso ilimitado a todas as unidades</li>
        <li>✔ Treinos personalizados no app</li>
        <li>✔ Sem taxa de cancelamento</li>
      </ul>

      <button
        onClick={onClick}
        className="
          mt-6
          w-full
          bg-yellow-400
          text-black
          py-4
          rounded-2xl
          font-extrabold
          text-base
          hover:bg-yellow-300
          transition
        "
      >
        MATRICULE-SE AGORA →
      </button>

      <p className="text-center mt-3 text-[10px] text-gray-500">
        QUEM É SMART, SABE.
      </p>
    </div>
  )
}
