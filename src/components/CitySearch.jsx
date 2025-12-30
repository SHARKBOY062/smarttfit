import { useState } from "react"

const citiesData = [
  { city: "Goiânia", count: 9, lat: -16.6869, lng: -49.2648 },
  { city: "São Paulo", count: 85, lat: -23.5505, lng: -46.6333 },
  { city: "Rio de Janeiro", count: 20, lat: -22.9068, lng: -43.1729 },
  { city: "Belo Horizonte", count: 15, lat: -19.9167, lng: -43.9345 },
]

export default function CitySearch({ onSelectCity }) {
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState(null)

  const filtered = citiesData.filter(item =>
    item.city.toLowerCase().includes(search.toLowerCase())
  )

  function handleSelect(city) {
    setSelected(city)
    setSearch(city.city)
    onSelectCity(city)
  }

  function scrollToHero() {
    document
      .getElementById("hero")
      ?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="bg-[#111] text-white rounded-2xl p-8 shadow-2xl w-full max-w-md mx-auto md:mx-0">
      <h3 className="text-xl font-extrabold mb-4">
        Encontre sua{" "}
        <span className="text-yellow-400">Smart Fit</span>
      </h3>

      <input
        type="text"
        placeholder="Digite sua cidade"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
          setSelected(null)
        }}
        className="w-full px-4 py-3 rounded-lg bg-[#1c1c1c] border border-white/10 focus:outline-none focus:border-yellow-400 text-white"
      />

      {!selected && search && (
        <ul className="mt-3 space-y-2">
          {filtered.map(item => (
            <li
              key={item.city}
              onClick={() => handleSelect(item)}
              className="cursor-pointer px-4 py-3 rounded-lg bg-[#1c1c1c] hover:bg-yellow-400 hover:text-black transition font-medium"
            >
              {item.city}
            </li>
          ))}
        </ul>
      )}

      {selected && (
        <div className="mt-6 bg-yellow-400 text-black rounded-xl p-5 text-center">
          <p className="font-bold text-lg">{selected.city}</p>

          <p className="mt-1">
            Possui{" "}
            <span className="font-extrabold text-2xl">
              {selected.count}
            </span>{" "}
            unidades
          </p>

          <button
            onClick={scrollToHero}
            className="mt-4 bg-black text-yellow-400 px-6 py-3 rounded-full font-extrabold hover:scale-105 transition"
          >
            Ver planos disponíveis →
          </button>
        </div>
      )}
    </div>
  )
}
