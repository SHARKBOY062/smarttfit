export default function SmallOfferCard({ title, price, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        bg-[#0f0f0f]
        border border-white/10
        rounded-2xl
        p-4
        text-white
        cursor-pointer
        hover:border-yellow-400
        transition
      "
    >
      <p className="text-[10px] uppercase text-gray-400 tracking-wide">
        Plano
      </p>

      <h3 className="text-base font-extrabold mt-1">
        {title}
      </h3>

      <div className="mt-3 flex items-end gap-2">
        <span className="text-yellow-400 text-2xl font-extrabold">
          R$ {price}
        </span>
        <span className="text-xs text-gray-400 mb-1">
          total
        </span>
      </div>

      <p className="text-xs text-gray-400 mt-1">
        Acesso total às academias
      </p>

      <span className="mt-2 inline-block text-xs text-yellow-400 font-semibold">
        Ver detalhes →
      </span>
    </div>
  )
}
