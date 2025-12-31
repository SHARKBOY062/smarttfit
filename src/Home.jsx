import Header from "./components/Header"
import Hero from "./components/Hero"
import ExperienceSection from "./components/ExperienceSection"
import ClassesSection from "./components/ClassesSection"
import PricingSection from "./components/PricingSection"
import ServicesSection from "./components/ServicesSection"
import CitySearch from "./components/CitySearch"
import MapSection from "./components/MapSection"
import Footer from "./components/Footer"
import EnrollmentModal from "./components/EnrollmentModal"
import { useState } from "react"

export default function Home() {
  const [selectedCity, setSelectedCity] = useState(null)
  const [openEnrollment, setOpenEnrollment] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)

  function handleOpenEnrollment(plan) {
    setSelectedPlan(plan)
    setOpenEnrollment(true)
  }

  function handleCloseEnrollment() {
    setOpenEnrollment(false)
    setSelectedPlan(null)
  }

  return (
    <>
      <Header />

      <main className="pt-20">
        <Hero onOpenEnrollment={handleOpenEnrollment} />
        <ExperienceSection />
        <ClassesSection />
        <PricingSection onOpenEnrollment={handleOpenEnrollment} />
        <ServicesSection />

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">
              Encontre a academia{" "}
              <span className="text-yellow-400">mais próxima!</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
              <CitySearch onSelectCity={setSelectedCity} />
              <MapSection city={selectedCity} />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <EnrollmentModal
        isOpen={openEnrollment}
        onClose={handleCloseEnrollment}
        selectedPlan={selectedPlan}
      />
    </>
  )
}
