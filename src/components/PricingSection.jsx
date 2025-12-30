export default function PricingSection({ onOpenEnrollment }) {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-black">
            Escolha o plano ideal para você
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-lg">
            Tenha acesso às melhores academias, aulas exclusivas
            e ao Smart Fit App.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10">

          {/* PLANO FIT — 1 ANO */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-md flex flex-col">
            <h3 className="text-xl sm:text-2xl font-extrabold mb-3 text-black">
              Plano Fit
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              Nosso plano mais econômico para treinar o ano inteiro.
            </p>

            <p className="text-xs font-semibold text-gray-700">
              1 ano inteiro por apenas
            </p>

            <p className="text-3xl sm:text-5xl font-extrabold text-black mt-1">
              R$ 657,97
            </p>

            <p className="text-xs text-gray-500 mb-6">
              Pagamento único • sem mensalidade
            </p>

            <ul className="space-y-2 text-sm text-gray-700 mb-6">
              <li>✔ Treine quando quiser</li>
              <li>✔ Unidade escolhida</li>
              <li>✔ 12 meses completos</li>
              <li>✔ Sem mensalidade</li>
            </ul>

            <button
              onClick={() =>
                onOpenEnrollment({
                  name: "Plano Fit • 1 ano",
                  price: "657,97",
                  checkoutUrl: "LINK_CHECKOUT_1_ANO"
                })
              }
              className="mt-auto bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold py-3 rounded-xl transition text-sm sm:text-base"
            >
              Matricule-se agora →
            </button>
          </div>

          {/* 🔥 PLANO BLACK — DESTAQUE */}
          <div className="bg-black border-2 border-yellow-400 rounded-3xl p-7 sm:p-12 shadow-xl flex flex-col relative">

            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-xs sm:text-sm font-extrabold">
              MAIS ESCOLHIDO
            </span>

            <h3 className="text-xl sm:text-2xl font-extrabold mb-3 text-white">
              Plano <span className="text-yellow-400">Black</span>
            </h3>

            <p className="text-white/80 text-sm mb-4">
              Treine em qualquer Smart Fit do Brasil e América Latina.
            </p>

            <p className="text-xs text-yellow-400 font-semibold">
              3 meses por apenas
            </p>

            <p className="text-3xl sm:text-5xl font-extrabold text-white mt-1">
              R$ 149,90
            </p>

            <p className="text-xs text-white/60 mb-6">
              Pagamento único • sem mensalidade
            </p>

            <ul className="space-y-2 text-sm text-white/90 mb-6">
              <li>✔ Acesso ilimitado</li>
              <li>✔ Brasil + LATAM</li>
              <li>✔ Aulas + App</li>
              <li>✔ Sem cancelamento</li>
            </ul>

            <button
              onClick={() =>
                onOpenEnrollment({
                  name: "Plano Black • 3 meses",
                  price: "149,90",
                  checkoutUrl: "LINK_CHECKOUT_BLACK"
                })
              }
              className="mt-auto bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold py-3 rounded-xl transition text-sm sm:text-base"
            >
              Matricule-se agora →
            </button>
          </div>

          {/* PLANO SMART — 6 MESES */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-md flex flex-col">
            <h3 className="text-xl sm:text-2xl font-extrabold mb-3 text-black">
              Plano Smart
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              Ideal para quem quer qualidade sem compromisso mensal.
            </p>

            <p className="text-xs font-semibold text-gray-700">
              6 meses por apenas
            </p>

            <p className="text-3xl sm:text-5xl font-extrabold text-black mt-1">
              R$ 297,90
            </p>

            <p className="text-xs text-gray-500 mb-6">
              Pagamento único • sem mensalidade
            </p>

            <ul className="space-y-2 text-sm text-gray-700 mb-6">
              <li>✔ Alto padrão</li>
              <li>✔ Unidade escolhida</li>
              <li>✔ 6 meses completos</li>
              <li>✔ Sem mensalidade</li>
            </ul>

            <button
              onClick={() =>
                onOpenEnrollment({
                  name: "Plano Smart • 6 meses",
                  price: "297,90",
                  checkoutUrl: "LINK_CHECKOUT_6_MESES"
                })
              }
              className="mt-auto bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold py-3 rounded-xl transition text-sm sm:text-base"
            >
              Matricule-se agora →
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
