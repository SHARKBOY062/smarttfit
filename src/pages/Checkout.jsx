import { useEffect, useState } from "react"

export default function Checkout() {
  const [plan, setPlan] = useState("")
  const [price, setPrice] = useState(0)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const planName = params.get("plan")
    const planPrice = params.get("price")

    setPlan(planName || "Plano Smart Fit")
    setPrice(Number(planPrice?.replace(",", ".")) || 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">

      {/* HEADER */}
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center">
          <img
            src="/logosmart.png"
            alt="Smart Fit"
            className="h-8"
          />
        </div>
      </header>

      {/* CONTENT */}
      <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">

        {/* ESQUERDA — UPSELLS */}
        <section>
          <h1 className="text-2xl font-extrabold mb-10">
            Quer acelerar seus resultados? 🔥
          </h1>

          <AddonCard
            title="SMART FIT COACH"
            price="+ R$ 39,90/mês"
            items={[
              "Plano anual com acompanhamento on-line",
              "Treinos personalizados por coach",
              "Disponível no Smart Fit App",
              "Chat ilimitado com treinador",
            ]}
          />

          <AddonCard
            title="SMART FIT BODY"
            price="+ R$ 19,90/mês"
            items={[
              "12 exames de bioimpedância",
              "Gráfico de evolução corporal",
              "Dados completos do seu corpo",
            ]}
          />

          <AddonCard
            title="SMART FIT ENERGY"
            price="+ R$ 24,90/mês"
            highlight="30 dias gratuitos!"
            items={[
              "Pré-treino",
              "Isotônico",
              "Zero calorias",
              "BCAA",
            ]}
          />
        </section>

        {/* DIREITA — RESUMO */}
        <aside className="bg-gray-50 rounded-2xl p-6 h-fit sticky top-6">

          <h2 className="font-extrabold text-lg mb-6">
            Detalhes da compra
          </h2>

          {/* PLANO */}
          <div className="bg-white rounded-xl p-5 mb-4 border">
            <p className="font-bold text-sm">{plan}</p>
            <p className="text-xs text-gray-500 mt-1">
              Plano selecionado
            </p>
          </div>

          {/* BENEFÍCIO */}
          <div className="bg-green-50 text-green-800 rounded-xl p-4 text-sm mb-6">
            Com este plano você pode treinar em diversas academias,
            usar o app e aproveitar todos os benefícios Smart Fit.
          </div>

          {/* CTA */}
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold py-4 rounded-full transition">
            Continuar para o cadastro
          </button>

          {/* TOTAL */}
          <p className="text-xs text-gray-500 mt-4 leading-relaxed">
            Uma cobrança é gerada mensalmente. Em 12 meses você terá pago
            <strong>
              {" "}
              R$ {(price * 12).toFixed(2).replace(".", ",")}
            </strong>
            .
          </p>

        </aside>

      </main>
    </div>
  )
}

/* CARD DE ADDON */
function AddonCard({ title, price, items, highlight }) {
  return (
    <div className="border rounded-xl p-6 mb-6 hover:shadow-md transition">

      <div className="flex justify-between items-center mb-4">
        <strong className="text-sm">{title}</strong>
        <span className="font-extrabold text-sm">{price}</span>
      </div>

      {highlight && (
        <p className="text-sm font-extrabold text-green-700 mb-2">
          {highlight}
        </p>
      )}

      <ul className="text-sm text-gray-600 space-y-2">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>

    </div>
  )
}
