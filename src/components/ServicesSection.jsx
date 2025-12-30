export default function ServicesSection() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* TÍTULO */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3">
            Conheça nossos produtos e serviços adicionais
          </h2>

          <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto">
            Só na Smart há serviços e produtos para potencializar seus resultados
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">

          {/* CARD — COACH */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
            <img
              src="/images/services/smartfit-coach.jpg"
              alt="Smart Fit Coach"
              className="h-40 sm:h-56 w-full object-cover"
            />

            <div className="p-5 sm:p-6 flex flex-col h-full">
              <span className="text-xs font-semibold text-gray-500 mb-1">
                Smart Fit Coach
              </span>

              <h3 className="text-lg sm:text-xl font-extrabold mb-2">
                Acompanhamento Personalizado
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                Treino on-line criado por um treinador.
              </p>

              <div className="mt-auto">
                <p className="text-xl sm:text-2xl font-extrabold mb-1">
                  R$ 39,90
                  <span className="text-sm font-medium text-gray-600">/mês</span>
                </p>

                <p className="text-xs text-gray-500 mb-4">
                  12 meses de permanência
                </p>

                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 rounded-full transition text-sm">
                  Saiba mais
                </button>
              </div>
            </div>
          </div>

          {/* CARD — BODY */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
            <img
              src="/images/services/smartfit-body.jpg"
              alt="Smart Fit Body"
              className="h-40 sm:h-56 w-full object-cover"
            />

            <div className="p-5 sm:p-6 flex flex-col h-full">
              <span className="text-xs font-semibold text-gray-500 mb-1">
                Smart Fit Body
              </span>

              <h3 className="text-lg sm:text-xl font-extrabold mb-2">
                Bioimpedância Corporal
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                Acompanhe sua evolução corporal.
              </p>

              <div className="mt-auto">
                <p className="text-xl sm:text-2xl font-extrabold mb-4">
                  R$ 19,90
                  <span className="text-sm font-medium text-gray-600">/mês</span>
                </p>

                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 rounded-full transition text-sm">
                  Saiba mais
                </button>
              </div>
            </div>
          </div>

          {/* CARD — ENERGY */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
            <img
              src="/images/services/smartfit-energy.jpg"
              alt="Smart Fit Energy"
              className="h-40 sm:h-56 w-full object-cover"
            />

            <div className="p-5 sm:p-6 flex flex-col h-full">
              <span className="text-xs font-semibold text-gray-500 mb-1">
                Smart Fit Energy
              </span>

              <h3 className="text-lg sm:text-xl font-extrabold mb-2">
                Bebidas Esportivas
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                Energia antes, durante e depois do treino.
              </p>

              <div className="mt-auto">
                <p className="text-xl sm:text-2xl font-extrabold mb-4">
                  R$ 24,90
                  <span className="text-sm font-medium text-gray-600">/mês</span>
                </p>

                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 rounded-full transition text-sm">
                  Saiba mais
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* OBS */}
        <p className="text-center text-xs sm:text-sm text-gray-500 mt-10 sm:mt-14">
          Consulte a disponibilidade dos serviços físicos na academia desejada.
        </p>

      </div>
    </section>
  )
}
