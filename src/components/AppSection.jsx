import QRCode from "react-qr-code"

export default function AppSection() {
  return (
    <section className="py-28 bg-[#FFF2D6]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* TEXTO */}
          <div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-8 leading-tight">
              Smart Fit App <br />
              <span className="text-yellow-500">
                seu aliado nos treinos
              </span>
            </h2>

            <ul className="space-y-4 text-gray-800 text-base md:text-lg leading-relaxed mb-8">
              <li className="flex gap-3 items-start">
                <span className="text-yellow-500 font-bold">✔</span>
                Treino personalizado completo
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-yellow-500 font-bold">✔</span>
                Execução dos exercícios em vídeo
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-yellow-500 font-bold">✔</span>
                Acompanhamento de carga e evolução
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-yellow-500 font-bold">✔</span>
                Mais de 60 treinos disponíveis
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-yellow-500 font-bold">✔</span>
                Compra e upgrade de planos direto no app
              </li>
            </ul>

            <p className="font-extrabold text-lg mb-8">
              Tudo isso <span className="text-yellow-500">gratuitamente</span>.
            </p>

            <p className="mb-6 font-semibold text-gray-900">
              Baixe agora o Smart Fit App
            </p>

            {/* STORES LADO A LADO */}
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="https://play.google.com/store/apps/details?id=com.smartfit.smartfit"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Disponível no Google Play"
                  className="h-14"
                />
              </a>

              <a
                href="https://apps.apple.com/br/app/smart-fit/id1097136971"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Baixar na App Store"
                  className="h-14"
                />
              </a>
            </div>
          </div>

          {/* BLOCO VISUAL – QR CODE */}
          <div className="flex justify-center">
            <div className="relative bg-yellow-400 rounded-[2.5rem] p-16 shadow-2xl">

              <div className="bg-black rounded-2xl px-14 py-12 flex flex-col items-center gap-6">
                <QRCode
                  value="https://www.smartfit.com.br"
                  size={140}
                />

                <p className="text-white text-xs opacity-70 text-center">
                  Aponte a câmera do celular
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
