import logo from "../assets/logosmart.png"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 border-b border-black/10">
      <div className="relative max-w-7xl mx-auto px-6 h-20 flex items-center">

        {/* LOGO – EXTREMA ESQUERDA */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Smart Fit"
            className="h-40 object-contain"
          />
        </div>

        {/* MENU CENTRAL – CENTRALIZAÇÃO PERFEITA */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-semibold text-black absolute left-1/2 -translate-x-1/2">
          <span className="cursor-default">Academias</span>
          <span className="cursor-default">Espaço do Cliente</span>
          <span className="cursor-default">Seja um franqueado</span>
        </nav>

        {/* CTA – EXTREMA DIREITA */}
        <div className="ml-auto flex items-center">
          <a
            href="#planos"
            className="bg-black text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:opacity-90 transition"
          >
            Assinar plano Black
            <span className="text-lg">›</span>
          </a>
        </div>

      </div>
    </header>
  )
}
