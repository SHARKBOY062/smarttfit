import { useEffect, useState } from "react"

/* ===============================
   CHECKOUT LINKS (OFICIAL)
================================ */
const CHECKOUT_BY_PRICE = {
  79.9: "https://pagamento.casaprimecompra.shop/checkout?product=9200a716-e5f2-11f0-b2a5-46da4690ad53",
  149.9: "https://pagamento.casaprimecompra.shop/checkout?product=14968282-e5f1-11f0-b2a5-46da4690ad53",
  259.9: "https://pagamento.casaprimecompra.shop/checkout?product=ec9719db-e5f3-11f0-b2a5-46da4690ad53",
  657.97: "https://pagamento.casaprimecompra.shop/checkout?product=1b8323cd-e5f4-11f0-b2a5-46da4690ad53",
}

/* ===============================
   LOCALIZAÇÃO
================================ */
const DEFAULT_UNIT = {
  name: "Smart Fit mais próxima",
  address: "Brasil",
}

const UNIT_BY_CITY = {
  goiânia: {
    name: "Flamboyant",
    address: "Av. Dep. Jamel Cecílio, 3900 – Goiânia, GO",
  },
  "são paulo": {
    name: "Paulista",
    address: "Av. Paulista, 1000 – São Paulo, SP",
  },
  "rio de janeiro": {
    name: "Barra da Tijuca",
    address: "Av. das Américas, 4666 – Rio de Janeiro, RJ",
  },
  curitiba: {
    name: "Centro Cívico",
    address: "Av. Cândido de Abreu, 127 – Curitiba, PR",
  },
  "belo horizonte": {
    name: "Savassi",
    address: "Av. do Contorno, 6061 – Belo Horizonte, MG",
  },
}

export default function Checkout() {
  const [plan, setPlan] = useState("Plano Black")
  const [price, setPrice] = useState(149.9)
  const [unit, setUnit] = useState(DEFAULT_UNIT)

  /* ===============================
     CAPTURA DE DADOS DA URL
  ================================ */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)

    const p = params.get("plan")
    const v = params.get("price")

    if (p) setPlan(p)

    if (v) {
      const normalized = Number(v.replace(",", "."))
      if (!isNaN(normalized)) {
        setPrice(normalized)
      }
    }

    async function loadLocation() {
      try {
        const res = await fetch("https://ipapi.co/json/")
        const data = await res.json()
        const city = data.city?.toLowerCase()

        if (city && UNIT_BY_CITY[city]) {
          setUnit(UNIT_BY_CITY[city])
        } else if (data.city && data.region_code) {
          setUnit({
            name: "Smart Fit mais próxima",
            address: `${data.city} – ${data.region_code}`,
          })
        }
      } catch {
        setUnit(DEFAULT_UNIT)
      }
    }

    loadLocation()
  }, [])

  /* ===============================
     CHECKOUT FINAL (ÚNICO)
  ================================ */
  function handleCheckout() {
    const normalizedPrice = Number(price.toFixed(2))
    const checkoutLink = CHECKOUT_BY_PRICE[normalizedPrice]

    if (!checkoutLink) {
      alert("Plano inválido. Volte e selecione novamente.")
      return
    }

    window.location.href = checkoutLink
  }

  return (
    <div className="min-h-screen bg-white text-[#1f2937]">

      {/* HEADER */}
      <header className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 h-28 flex items-center">
          <img src="/logosmart.png" alt="Smart Fit" className="h-20" />
        </div>
      </header>

      {/* CONTEÚDO */}
      <main className="max-w-7xl mx-auto px-6 pt-10 pb-16 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-20">

        {/* ESQUERDA */}
        <section className="space-y-20">

          <h2 className="text-3xl font-extrabold text-center">
            Experiência <span className="text-yellow-400">Smart Fit</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <ExperienceCard image="/experience/equipamentos.jpg" title="Equipamentos de alto padrão" />
            <ExperienceCard image="/experience/aulas.jpg" title="Salas exclusivas de aulas coletivas" />
            <ExperienceCard image="/experience/musculacao.jpg" title="Áreas de musculação e cardio" />
          </div>

          <h2 className="text-3xl font-extrabold text-center">
            Aulas e treinos <span className="text-yellow-400">exclusivos!</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <ClassCard image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b" title="FITDANCE" desc="Aulas de dança cheias de energia e diversão." />
            <ClassCard image="https://images.unsplash.com/photo-1599058917212-d750089bc07e" title="SMART CROSS" desc="Treino funcional coletivo de alta intensidade." />
            <ClassCard image="https://images.unsplash.com/photo-1605296867304-46d5465a13f1" title="BODY COMBAT" desc="Aula inspirada em artes marciais." />
          </div>

        </section>

        {/* DIREITA */}
        <aside className="space-y-6">

          <h3 className="text-lg font-extrabold">Detalhes da compra</h3>

          <div className="bg-white rounded-2xl border p-5 shadow-sm">
            <strong>{unit.name}</strong>
            <p className="text-gray-500 text-sm mt-1">{unit.address}</p>
          </div>

          <div className="bg-[#3f3f46] text-white rounded-2xl px-6 py-4 font-semibold">
            {plan}
          </div>

          <div className="bg-green-50 text-green-800 rounded-2xl p-4 text-sm">
            ✔ Com o plano Black você pode treinar em várias academias e muito mais!
          </div>

          <button
            onClick={handleCheckout}
            className="w-full bg-[#ffb703] hover:bg-[#f9a602] text-black font-extrabold py-4 rounded-full transition"
          >
            Continuar para o pagamento
          </button>

          <div className="border rounded-2xl divide-y text-sm bg-white shadow-sm">
            {[1,2,3,4,5].map(n => (
              <div key={n} className="flex justify-between px-5 py-4">
                <span>{n}ª COBRANÇA</span>
                <strong>R$ {price.toFixed(2).replace(".", ",")}</strong>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-500">
            Em 12 meses você terá pago <strong>R$ {(price * 12).toFixed(2).replace(".", ",")}</strong>.
          </p>

        </aside>
      </main>
    </div>
  )
}

/* COMPONENTES */
function ExperienceCard({ image, title }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
      <img src={image} className="h-64 w-full object-cover" />
      <div className="p-6 text-center font-semibold">{title}</div>
    </div>
  )
}

function ClassCard({ image, title, desc }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
      <img src={image} className="h-64 w-full object-cover" />
      <div className="bg-yellow-400 text-black font-extrabold text-center py-4">{title}</div>
      <div className="p-6 text-sm text-gray-600 text-center">{desc}</div>
    </div>
  )
}
