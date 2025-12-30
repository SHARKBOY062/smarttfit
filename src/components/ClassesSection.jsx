export default function ClassesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TÍTULO */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-20">
          Aulas e treinos{" "}
          <span className="text-yellow-400">exclusivos!</span>
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* FITDANCE */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition hover:-translate-y-2 hover:shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b"
              alt="FitDance Smart Fit"
              className="h-64 w-full object-cover"
            />

            <div className="bg-yellow-400 text-black font-extrabold text-center py-4 tracking-wide">
              FITDANCE
            </div>

            <div className="p-6 space-y-5">
              <div className="flex justify-between text-sm font-semibold text-gray-700">
                <span className="flex items-center gap-1">⏱️ 45–60 min</span>
                <span className="flex items-center gap-1">⚡ Alta</span>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed">
                Aulas de dança cheias de energia, coreografias atuais e professores
                licenciados pela FitDance para você se divertir enquanto treina.
              </p>

              <a
                href="#planos"
                className="block text-center font-extrabold text-blue-600 hover:underline"
              >
                Contratar agora →
              </a>
            </div>
          </div>

          {/* SMART CROSS */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition hover:-translate-y-2 hover:shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
              alt="Smart Cross Smart Fit"
              className="h-64 w-full object-cover"
            />

            <div className="bg-yellow-400 text-black font-extrabold text-center py-4 tracking-wide">
              SMART CROSS
            </div>

            <div className="p-6 space-y-5">
              <div className="flex justify-between text-sm font-semibold text-gray-700">
                <span className="flex items-center gap-1">⏱️ 30 min</span>
                <span className="flex items-center gap-1">⚡ Alta</span>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed">
                Treino funcional coletivo de alta intensidade que promove
                emagrecimento, força e condicionamento físico em apenas 30 minutos.
              </p>

              <a
                href="#planos"
                className="block text-center font-extrabold text-blue-600 hover:underline"
              >
                Contratar agora →
              </a>
            </div>
          </div>

          {/* BODY COMBAT */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition hover:-translate-y-2 hover:shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
              alt="Body Combat Smart Fit"
              className="h-64 w-full object-cover"
            />

            <div className="bg-yellow-400 text-black font-extrabold text-center py-4 tracking-wide">
              BODY COMBAT
            </div>

            <div className="p-6 space-y-5">
              <div className="flex justify-between text-sm font-semibold text-gray-700">
                <span className="flex items-center gap-1">⏱️ 30–45 min</span>
                <span className="flex items-center gap-1">⚡ Alta</span>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed">
                Inspirado em artes marciais como Karatê, Jiu-jitsu e Taekwondo.
                Aula intensa que trabalha todo o corpo e melhora o condicionamento.
              </p>

              <a
                href="#planos"
                className="block text-center font-extrabold text-blue-600 hover:underline"
              >
                Contratar agora →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
