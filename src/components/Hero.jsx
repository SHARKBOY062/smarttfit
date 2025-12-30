import OfferCard from "./OfferCard"
import SmallOfferCard from "./SmallOfferCard"

export default function Hero({ onOpenEnrollment }) {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden">
      {/* VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/smartfitbannerplay.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/65" />

      {/* CONTENT */}
      <div className="relative z-10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 items-start">

            {/* SMALL PLANS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-2 lg:order-1">
              <SmallOfferCard
                title="1 mês"
                price="79,90"
                onClick={() =>
                  onOpenEnrollment({
                    name: "Plano 1 mês",
                    price: "79,90",
                    checkoutUrl: "LINK_1_MES"
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
                    checkoutUrl: "LINK_6_MESES"
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
                    checkoutUrl: "LINK_8_MESES"
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
                    checkoutUrl: "LINK_1_ANO"
                  })
                }
              />
            </div>

            {/* DIVIDER */}
            <div className="hidden lg:block w-px h-[420px] bg-white/20" />

            {/* MAIN OFFER */}
            <div className="order-1 lg:order-3 flex justify-center">
              <OfferCard
                onClick={() =>
                  onOpenEnrollment({
                    name: "Plano Black • 3 meses",
                    price: "149,90",
                    checkoutUrl: "LINK_BLACK"
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
