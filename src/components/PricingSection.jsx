export default function PricingSection({ onOpenEnrollment }) {
  return (
    <section
      id="planos"
      className="py-28 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
            Escolha o plano ideal para você
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Tenha acesso às melhores academias, aulas exclusivas
            e ao Smart Fit App.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">

          {/* PLANO FIT — 1 ANO */}
          <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg flex flex-col">
            <h3 className="text-2xl font-extrabold mb-4 text-black">
              Plano Fit
            </h3>

            <p className="text-gray-600 mb-6">
              Nosso plano mais econômico para treinar o ano inteiro.
            </p>

            <p className="text-sm mb-2 font-semibold text-gray-700">
              1 ano inteiro por apenas
            </p>

            <p className="text-5xl font-extrabold mb-2 text-black">
              R$ 657,97
            </p>

            <p className="text-xs text-gray-500 mb-8">
              Pagamento único • sem mensalidade
            </p>

            <ul className="space-y-4 mb-10 text-sm text-gray-700">
              <li className="flex gap-3"><span className="text-green-500">✔</span> Treine quando quiser</li>
              <li className="flex gap-3"><span className="text-green-500">✔</span> Unidade escolhida</li>
              <li className="flex gap-3"><span className="text-green-500">✔</span> 12 meses completos</li>
              <li className="flex gap-3"><span className="text-green-500">✔</span> Sem mensalidade</li>
            </ul>

            <button
              onClick={() =>
                onOpenEnrollment({
                  name: "Plano Fit • 1 ano",
                  price: "657,97",
                  description: "Acesso por 12 meses",
                  checkoutUrl: "LINK_CHECKOUT_1_ANO"
                })
              }
              className="mt-auto bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold py-4 rounded-xl transition"
            >
              Matricule-se agora →
            </button>
          </div>

          {/* 🔥 PLANO BLACK — 3 MESES */}
          <div className="bg-black border-2 border-yellow-400 rounded-3xl p-12 shadow-2xl flex flex-col relative scale-105">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-5 py-1 rounded-full text-sm font-extrabold">
              MAIS ESCOLHIDO
            </span>

            <h3 className="text-2xl font-extrabold mb-4 text-white">
              Plano <span className="text-yellow-400">Black</span>
            </h3>

            <p className="text-white/80 mb-6">
              Treine em qualquer Smart Fit do Brasil e América Latina.
            </p>

            <p className="text-sm mb-2 text-yellow-400 font-semibold">
              3 meses por apenas
            </p>

            <p className="text-5xl font-extrabold mb-2 text-white">
              R$ 149,90
            </p>

            <p className="text-xs text-white/60 mb-8">
              Pagamento único • sem mensalidade
            </p>

            <ul className="space-y-4 mb-10 text-sm text-white/90">
              <li className="flex gap-3"><span className="text-green-400">✔</span> Acesso ilimitado</li>
              <li className="flex gap-3"><span className="text-green-400">✔</span> Brasil + LATAM</li>
              <li className="flex gap-3"><span className="text-green-400">✔</span> Aulas + App</li>
              <li className="flex gap-3"><span className="text-green-400">✔</span> Sem cancelamento</li>
            </ul>

            <button
              onClick={() =>
                onOpenEnrollment({
                  name: "Plano Black • 3 meses",
                  price: "149,90",
                  description: "Acesso ilimitado Brasil + América Latina",
                  checkoutUrl: "LINK_CHECKOUT_BLACK"
                })
              }
              className="mt-auto bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold py-4 rounded-xl transition"
            >
              Matricule-se agora →
            </button>
          </div>

          {/* PLANO SMART — 6 MESES */}
          <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg flex flex-col">
            <h3 className="text-2xl font-extrabold mb-4 text-black">
              Plano Smart
            </h3>

            <p className="text-gray-600 mb-6">
              Ideal para quem quer qualidade sem compromisso mensal.
            </p>

            <p className="text-sm mb-2 font-semibold text-gray-700">
              6 meses por apenas
            </p>

            <p className="text-5xl font-extrabold mb-2 text-black">
              R$ 297,90
            </p>

            <p className="text-xs text-gray-500 mb-8">
              Pagamento único • sem mensalidade
            </p>

            <ul className="space-y-4 mb-10 text-sm text-gray-700">
              <li className="flex gap-3"><span className="text-green-500">✔</span> Alto padrão</li>
              <li className="flex gap-3"><span className="text-green-500">✔</span> Unidade escolhida</li>
              <li className="flex gap-3"><span className="text-green-500">✔</span> 6 meses completos</li>
              <li className="flex gap-3"><span className="text-green-500">✔</span> Sem mensalidade</li>
            </ul>

            <button
              onClick={() =>
                onOpenEnrollment({
                  name: "Plano Smart • 6 meses",
                  price: "297,90",
                  description: "Acesso por 6 meses",
                  checkoutUrl: "LINK_CHECKOUT_6_MESES"
                })
              }
              className="mt-auto bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold py-4 rounded-xl transition"
            >
              Matricule-se agora →
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
