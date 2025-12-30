export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TÍTULO */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Conheça nossos produtos e serviços adicionais para você
          </h2>

          <p className="text-gray-600 text-lg">
            Só na Smart há serviços e produtos para potencializar seus resultados
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* CARD 1 – COACH */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
            <img
              src="/images/services/smartfit-coach.jpg"
              alt="Smart Fit Coach"
              className="h-56 w-full object-cover"
            />

            <div className="p-6 flex flex-col h-full">
              <span className="text-sm font-semibold text-gray-500 mb-2">
                Smart Fit Coach
              </span>

              <h3 className="text-xl font-extrabold mb-3">
                Acompanhamento Personalizado de Treino
              </h3>

              <p className="text-gray-600 mb-6">
                Treino on-line personalizado criado por um treinador.
              </p>

              <div className="mt-auto">
                <p className="text-2xl font-extrabold mb-1">
                  R$ 39,90<span className="text-sm font-medium">/mês</span>
                </p>

                <p className="text-sm text-gray-500 mb-6">
                  12 meses de permanência
                </p>

                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-full transition">
                  Saiba mais
                </button>
              </div>
            </div>
          </div>

          {/* CARD 2 – BODY */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
            <img
              src="/images/services/smartfit-body.jpg"
              alt="Smart Fit Body"
              className="h-56 w-full object-cover"
            />

            <div className="p-6 flex flex-col h-full">
              <span className="text-sm font-semibold text-gray-500 mb-2">
                Smart Fit Body
              </span>

              <h3 className="text-xl font-extrabold mb-3">
                Veja sua evolução corporal com nossa Bioimpedância
              </h3>

              <p className="text-gray-600 mb-6">
                Acompanhe a evolução do seu corpo com os exames de bioimpedância
              </p>

              <div className="mt-auto">
                <p className="text-2xl font-extrabold mb-6">
                  R$ 19,90<span className="text-sm font-medium">/mês</span>
                </p>

                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-full transition">
                  Saiba mais
                </button>
              </div>
            </div>
          </div>

          {/* CARD 3 – ENERGY */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
            <img
              src="/images/services/smartfit-energy.jpg"
              alt="Smart Fit Energy"
              className="h-56 w-full object-cover"
            />

            <div className="p-6 flex flex-col h-full">
              <span className="text-sm font-semibold text-gray-500 mb-2">
                Smart Fit Energy
              </span>

              <h3 className="text-xl font-extrabold mb-3">
                Bebidas esportivas e energéticas em sabores
              </h3>

              <p className="text-gray-600 mb-6">
                Bebidas esportivas para te ajudar antes, durante e depois do treino!
              </p>

              <div className="mt-auto">
                <p className="text-2xl font-extrabold mb-6">
                  R$ 24,90<span className="text-sm font-medium">/mês</span>
                </p>

                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-full transition">
                  Saiba mais
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* RODAPÉ */}
        <p className="text-center text-sm text-gray-500 mt-14">
          Consulte a disponibilidade dos serviços físicos na academia desejada.
        </p>

      </div>
    </section>
  )
}
