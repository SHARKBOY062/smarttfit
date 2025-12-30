export default function ClassesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-20">
          Aulas e treinos{" "}
          <span className="text-yellow-400">exclusivos!</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* FITDANCE */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:-translate-y-2 transition">
            <img
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b"
              className="h-64 w-full object-cover"
            />

            <div className="bg-yellow-400 text-black font-extrabold text-center py-4">
              FITDANCE
            </div>

            <div className="p-6 space-y-5">
              <p className="text-sm text-gray-700">
                Aulas de dança cheias de energia e diversão.
              </p>

              <a
                href="#hero"
                className="block text-center font-extrabold text-yellow-500 hover:underline"
              >
                Contratar agora →
              </a>
            </div>
          </div>

          {/* SMART CROSS */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:-translate-y-2 transition">
            <img
              src="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
              className="h-64 w-full object-cover"
            />

            <div className="bg-yellow-400 text-black font-extrabold text-center py-4">
              SMART CROSS
            </div>

            <div className="p-6 space-y-5">
              <p className="text-sm text-gray-700">
                Treino funcional coletivo de alta intensidade.
              </p>

              <a
                href="#hero"
                className="block text-center font-extrabold text-yellow-500 hover:underline"
              >
                Contratar agora →
              </a>
            </div>
          </div>

          {/* BODY COMBAT */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:-translate-y-2 transition">
            <img
              src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
              className="h-64 w-full object-cover"
            />

            <div className="bg-yellow-400 text-black font-extrabold text-center py-4">
              BODY COMBAT
            </div>

            <div className="p-6 space-y-5">
              <p className="text-sm text-gray-700">
                Aula inspirada em artes marciais para todo o corpo.
              </p>

              <a
                href="#hero"
                className="block text-center font-extrabold text-yellow-500 hover:underline"
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
