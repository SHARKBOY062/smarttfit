import OfferCard from "./OfferCard"
import SmallOfferCard from "./SmallOfferCard"

export default function Hero({ onOpenEnrollment }) {
  return (
    <section
      id="planos"
      className="relative w-full min-h-[90vh] overflow-hidden"
    >
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/smartfitbannerplay.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* CONTEÚDO */}
      <div className="relative z-20 pt-20 min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">

          <div className="
            grid 
            grid-cols-1 
            lg:grid-cols-[1fr_auto_1fr] 
            gap-12 
            items-center
          ">

            {/* PLANOS MENORES */}
            <div className="grid grid-cols-2 gap-6 order-2 lg:order-1">

              <SmallOfferCard
                title="1 mês"
                price="79,90"
                onClick={() =>
                  onOpenEnrollment({
                    name: "Plano 1 mês",
                    price: "79,90",
                    description: "Acesso total às academias",
                    checkoutUrl: "LINK_CHECKOUT_1_MES"
                  })
                }
              />

              <SmallOfferCard
                title="6 meses"
                price="297,90"
                onClick={() =>
                  onOpenEnrollment({
                    name: "Plano 6 meses",
                    price: "297,90",
                    description: "Acesso total por 6 meses",
                    checkoutUrl: "LINK_CHECKOUT_6_MESES"
                  })
                }
              />

              <SmallOfferCard
                title="8 meses"
                price="415,24"
                onClick={() =>
                  onOpenEnrollment({
                    name: "Plano 8 meses",
                    price: "415,24",
                    description: "Acesso total por 8 meses",
                    checkoutUrl: "LINK_CHECKOUT_8_MESES"
                  })
                }
              />

              <SmallOfferCard
                title="1 ano"
                price="657,97"
                onClick={() =>
                  onOpenEnrollment({
                    name: "Plano 1 ano",
                    price: "657,97",
                    description: "Acesso total por 12 meses",
                    checkoutUrl: "LINK_CHECKOUT_1_ANO"
                  })
                }
              />

            </div>

            {/* DIVISÓRIA */}
            <div className="hidden lg:block h-[420px] w-px bg-white/30 order-2" />

            {/* PLANO BLACK */}
            <div className="flex justify-center order-1 lg:order-3">
              <OfferCard
                onClick={() =>
                  onOpenEnrollment({
                    name: "Plano Black • 3 meses",
                    price: "149,90",
                    description: "Acesso ilimitado Brasil + América Latina",
                    checkoutUrl: "LINK_CHECKOUT_BLACK"
                  })
                }
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
