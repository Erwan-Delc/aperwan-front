import { useLocation } from "react-router-dom"
import { useState, useRef, useEffect } from "react"

export default function Header() {
  const location = useLocation()
  const [isHovering, setIsHovering] = useState(false)
  const timeoutRef = useRef(null)

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current)
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovering(false)
    }, 300) // délai léger pour éviter le flickering
  }

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current)
  }, [])

  const navItems = [
    { name: "ACCUEIL", path: "/" },
    { name: "BOUTIQUE", path: "/boutique" },
    { name: "PLANCHES", path: "/planches" },
    { name: "CONTACT", path: "/contact" },
  ]

  return (
    <div className="relative z-50">
      {/* Bande principale */}
      <header className="bg-[#F9F3E4] h-20 shadow-md flex items-center relative">
        {/* Logo */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2">
          <img src="/logo.png" alt="Aper'wan logo" className="h-[75px] w-auto" />
        </div>

        {/* Navigation */}
        <nav className="absolute left-1/2 -translate-x-1/2 flex gap-8 text-[#5C735F] font-medium text-base tracking-wide font-playfair-sc">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            const isBoutique = item.name === "BOUTIQUE"

            return (
              <div
                key={item.path}
                onMouseEnter={isBoutique ? handleMouseEnter : undefined}
                onMouseLeave={isBoutique ? handleMouseLeave : undefined}
                className="relative"
              >
                <a
                  href={item.path}
                  className={`inline-flex items-center justify-center h-[30px] px-3 rounded-full ${isActive ? "bg-[#8BA48D] text-white" : ""
                    }`}
                >
                  {item.name}
                </a>
              </div>
            )
          })}
        </nav>

        {/* Icônes */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex gap-8 items-center">
          <button>
            <img src="/icon-user.png" alt="Compte" className="h-[35px] w-[35px]" />
          </button>
          <button>
            <img src="/icon-cart.png" alt="Panier" className="h-[35px] w-[35px]" />
          </button>
        </div>
      </header>

      {/* Sous-menu */}
      {isHovering && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="absolute top-20 w-full bg-[#A26769] text-white py-6"
        >
          <div className="max-w-6xl mx-auto flex items-start gap-16 px-6">
            {/* Colonnes */}
            <div className="flex-1">
              <h4 className="font-semibold text-lg mb-4">Catégories</h4>
              <div className="grid grid-cols-2 gap-x-10 text-[17px] leading-relaxed">
                <div className="space-y-3">
                  <div className="hover:underline cursor-pointer">🧀 Fromages</div>
                  <div className="hover:underline cursor-pointer">🥓 Charcuteries</div>
                  <div className="hover:underline cursor-pointer">🍇 Accompagnements</div>
                </div>
                <div className="space-y-3">
                  <div className="hover:underline cursor-pointer">🍷 Boissons</div>
                  <div className="hover:underline cursor-pointer">🧺 Paniers prêts</div>
                  <div className="hover:underline cursor-pointer">⭐ Produits du mois</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="flex-shrink-0">
              <img
                src="/submenu_boutique.png"
                alt="Boucher"
                className="h-[200px] object-contain"
              />
            </div>
          </div>
        </div>

      )}
    </div>
  )
}
