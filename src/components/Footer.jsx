import logo from "../assets/logosmart.png"
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaSpotify,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      {/* TOPO */}
      <div className="max-w-7xl mx-auto px-6 pt-24 text-center">

        {/* LOGO */}
        <img
          src={logo}
          alt="Smart Fit"
          className="mx-auto h-80 mb-10"
        />

        {/* TEXTO */}
        <p className="mb-8 text-white/80 text-sm tracking-wide">
          Siga a Smart Fit
        </p>

        {/* SOCIAL (APENAS VISUAL) */}
        <div className="flex justify-center gap-6 mb-16">
          {[
            FaFacebookF,
            FaInstagram,
            FaYoutube,
            FaTiktok,
            FaSpotify,
            FaTwitter,
            FaWhatsapp,
          ].map((Icon, index) => (
            <div
              key={index}
              className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-white/80"
            >
              <Icon size={16} />
            </div>
          ))}
        </div>

        <div className="border-t border-white/20" />
      </div>

      {/* LINKS */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-16 text-sm text-white/80">

        {/* INSTITUCIONAL */}
        <div>
          <h4 className="font-semibold text-white mb-6">
            Institucional
          </h4>
          <ul className="space-y-3 leading-relaxed">
            <li>Sobre</li>
            <li>Conceito</li>
            <li>Investidores</li>
            <li>Central de Ajuda</li>
            <li>Fale Conosco</li>
            <li>Edital Smart Fit</li>
            <li>Aviso de Privacidade</li>
            <li>Portal de privacidade</li>
          </ul>
        </div>

        {/* PLANOS */}
        <div>
          <h4 className="font-semibold text-white mb-6">
            Planos
          </h4>
          <ul className="space-y-3 leading-relaxed">
            <li>Planos</li>
            <li>Contratos</li>
            <li>Planos corporativos</li>
            <li>Smart Fit Coach – Consultor Online de Treino</li>
            <li>Smart Fit Energy</li>
            <li>Smart Fit Nutri</li>
          </ul>
        </div>

        {/* CORPORATIVO */}
        <div>
          <h4 className="font-semibold text-white mb-6">
            Corporativo
          </h4>
          <ul className="space-y-3 leading-relaxed">
            <li>Imprensa</li>
            <li>Quero ser um franqueado</li>
            <li>Divulgue sua marca</li>
            <li>Indique um ponto</li>
            <li>Trabalhe Conosco</li>
            <li>Transparência salarial e Critérios remuneratórios Smart Fit</li>
            <li>Transparência salarial e Critérios remuneratórios BIOMURUM</li>
            <li>Formulário prévio ao contrato Personal</li>
          </ul>
        </div>

      </div>

      {/* RODAPÉ FINAL */}
      <div className="border-t border-white/20 py-12 text-center text-xs text-white/60 px-6">

        <p className="mb-4">
          *Consulte as condições promocionais e regulamentos na página:
          smartfit.com.br/contratos
        </p>

        <p className="mb-2">
          Avenida Paulista, nº1294, 2º andar, Bela Vista, CEP 01310-100
        </p>

        <p className="mb-2">
          faleconosco@smartfit.com
        </p>

        <p className="mb-2">
          SMARTFIT ESCOLA DE GINÁSTICA E DANÇA S.A
        </p>

        <p>
          CNPJ: 07.594.978/0001-78
        </p>
      </div>

    </footer>
  )
}
