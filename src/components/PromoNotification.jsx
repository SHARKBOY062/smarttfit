import { useState } from "react"

export default function PromoNotification() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      {/* NOTIFICAÇÃO ABERTA */}
      {isOpen && (
        <div className="fixed top-24 right-6 z-[999] bg-yellow-400 text-black rounded-2xl shadow-2xl p-6 max-w-sm animate-fade-in">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-black/60 hover:text-black text-lg"
          >
            ×
          </button>

          <p className="text-xs font-bold uppercase mb-2 tracking-wide">
            Promoção especial
          </p>

          <h4 className="text-2xl font-extrabold mb-2">
            1 mês Smart Fit
          </h4>

          <p className="text-3xl font-extrabold mb-2">
            R$ 9,90
          </p>

          <p className="text-sm font-semibold mb-4">
            *Pagamento obrigatório via <span className="font-extrabold">PIX</span>
          </p>

          <a
            href="#planos"
            className="block text-center bg-black text-yellow-400 py-3 rounded-full font-extrabold hover:scale-105 transition"
          >
            Aproveitar agora →
          </a>
        </div>
      )}

      {/* NOTIFICAÇÃO MINIMIZADA */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-32 right-6 z-[999] bg-black text-yellow-400 px-5 py-3 rounded-full shadow-xl font-extrabold flex items-center gap-2 hover:scale-105 transition"
        >
          🔥 R$ 9,90 no PIX
        </button>
      )}
    </>
  )
}
