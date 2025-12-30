export default function EnrollmentModal({
  isOpen,
  onClose,
  selectedPlan
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">

      {/* OVERLAY */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative bg-white w-full max-w-2xl mx-4 rounded-3xl shadow-2xl p-10 animate-fade-in overflow-y-auto max-h-[90vh]">

        {/* FECHAR */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* HEADER */}
        <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
          Vamos te conhecer melhor 💪
        </h2>

        <p className="text-gray-600 mb-8">
          Para montar a melhor experiência possível para você,
          responda rapidinho:
        </p>

        {/* INFO DO PLANO */}
        {selectedPlan && (
          <div className="mb-8 bg-yellow-50 border border-yellow-300 rounded-2xl p-5">
            <p className="text-sm text-gray-700 mb-1">
              Plano selecionado
            </p>
            <p className="text-lg font-extrabold text-black">
              {selectedPlan.name} —{" "}
              <span className="text-yellow-500">
                R$ {selectedPlan.price}
              </span>
            </p>
          </div>
        )}

        {/* FORMULÁRIO */}
        <form className="space-y-6">

          {/* IDADE */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Qual é a sua idade?
            </label>
            <input
              type="number"
              placeholder="Ex: 28"
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* PESO */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Qual é o seu peso atual? (kg)
            </label>
            <input
              type="number"
              placeholder="Ex: 75"
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* ALTURA */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Qual é a sua altura? (cm)
            </label>
            <input
              type="number"
              placeholder="Ex: 175"
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* OBJETIVO */}
          <div>
            <label className="block text-sm font-semibold mb-3">
              Qual é o seu principal objetivo?
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

              {[
                "Emagrecimento",
                "Ganho de massa muscular",
                "Condicionamento físico",
                "Qualidade de vida",
                "Definição corporal",
                "Outro"
              ].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-3 border rounded-xl px-4 py-3 cursor-pointer hover:border-yellow-400 transition"
                >
                  <input
                    type="checkbox"
                    className="accent-yellow-400"
                  />
                  <span className="text-sm">{item}</span>
                </label>
              ))}

            </div>
          </div>

          {/* MENSAGEM FINAL */}
          <div className="bg-gray-100 rounded-2xl p-5 text-sm text-gray-700 leading-relaxed">
            <strong>Perfeito! Agora é só finalizar sua assinatura 🏋️‍♂️</strong>
            <br /><br />
            Após concluir a assinatura, fique tranquilo:
            <br />
            ✔️ O plano só começa a contar a partir do seu
            <strong> primeiro acesso na academia</strong>.
            <br />
            Ou seja, se você ainda vai iniciar daqui a alguns dias,
            não tem problema nenhum — seu tempo não será perdido.
          </div>

          {/* CTA FINAL */}
          <a
            href="LINK_DO_CHECKOUT_AQUI"
            className="block w-full text-center bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold py-5 rounded-xl transition"
          >
            Finalizar matrícula →
          </a>

        </form>
      </div>
    </div>
  )
}
