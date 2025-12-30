export default function ExperienceSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* TÍTULO */}
        <h2 className="text-3xl font-extrabold mb-12">
          Experiência{" "}
          <span className="text-yellow-400">Smart Fit</span>
        </h2>

        {/* CARDS */}
        <div className="grid gap-8 md:grid-cols-3 mb-14">

          {/* CARD 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition">
            <img
              src="/experience/equipamentos.jpg"
              alt="Equipamentos de alto padrão"
              className="w-full h-56 object-cover"
            />
            <div className="p-6 font-semibold">
              Equipamentos de alto padrão
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition">
            <img
              src="/experience/aulas.jpg"
              alt="Salas exclusivas de aulas coletivas"
              className="w-full h-56 object-cover"
            />
            <div className="p-6 font-semibold">
              Salas exclusivas de aulas coletivas
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition">
            <img
              src="/experience/musculacao.jpg"
              alt="Áreas de musculação e cardio"
              className="w-full h-56 object-cover"
            />
            <div className="p-6 font-semibold">
              Áreas de musculação e cardio
            </div>
          </div>

        </div>

        {/* CTA → HERO */}
        <a
          href="#hero"
          className="
            inline-flex 
            items-center 
            justify-center 
            bg-yellow-400 
            text-black 
            px-14 
            py-5 
            rounded-full 
            font-extrabold 
            text-lg 
            hover:scale-105 
            transition
          "
        >
          Contratar agora
        </a>

      </div>
    </section>
  )
}
