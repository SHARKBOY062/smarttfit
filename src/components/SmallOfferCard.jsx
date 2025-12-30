export default function SmallOfferCard({ title, price, onClick }) {
  return (
    <div
      role="button"
      onClick={onClick}
      className="
        bg-gradient-to-b from-[#151515] to-[#0f0f0f]
        text-white
        rounded-2xl
        p-4 sm:p-6
        shadow-[0_15px_40px_rgba(0,0,0,0.6)]
        border border-white/10
        hover:border-yellow-400
        hover:scale-[1.03]
        transition-all
        duration-300
        cursor-pointer
      "
    >
      {/* PLANO */}
      <p className="text-[10px] sm:text-xs uppercase tracking-wide text-gray-400">
        Plano
      </p>

      <h3 className="text-base sm:text-lg font-extrabold mt-1">
        {title}
      </h3>

      {/* DIVISOR */}
      <div className="w-full h-px bg-white/10 my-3 sm:my-4" />

      {/* PREÇO */}
      <div className="flex items-end gap-2">
        <span className="text-yellow-400 text-2xl sm:text-3xl font-extrabold leading-none">
          R$ {price}
        </span>
        <span className="text-[10px] sm:text-xs text-gray-400 mb-0.5">
          total
        </span>
      </div>

      {/* OBS */}
      <p className="text-[11px] sm:text-xs text-gray-400 mt-2 leading-snug">
        Acesso total às academias
      </p>

      {/* CTA */}
      <div className="mt-3 sm:mt-4 text-[11px] sm:text-xs text-yellow-400 font-semibold tracking-wide">
        Ver detalhes →
      </div>
    </div>
  )
}
