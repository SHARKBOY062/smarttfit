import logo from "../assets/logosmart.png"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 border-b border-black/10">
      <div className="relative max-w-7xl mx-auto px-6 h-20 flex items-center">

        {/* LOGO */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src={logo}
            alt="Smart Fit"
            className="h-40 md:h-10 object-contain"
          />
        </div>

        {/* MENU CENTRAL – SOMENTE DESKTOP */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-semibold text-black absolute left-1/2 -translate-x-1/2">
          <span className="cursor-default">Academias</span>
          <span className="cursor-default">Espaço do Cliente</span>
          <span className="cursor-default">Seja um franqueado</span>
        </nav>

        {/* CTA – SOMENTE DESKTOP */}
        <div className="hidden md:flex ml-auto items-center">
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
