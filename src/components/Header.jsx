import { useLocation } from "react-router-dom"

export default function Header() {
  const location = useLocation()

  const navItems = [
    { name: "ACCUEIL", path: "/" },
    { name: "BOUTIQUE", path: "/boutique" },
    { name: "PLANCHES", path: "/planches" },
    { name: "CONTACT", path: "/contact" },
  ]

  return (
    <header className="relative bg-[#F9F3E4] h-[80px] shadow-md flex items-center">
      
      {/* Logo */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2">
        <img src="/logo.png" alt="Aper'wan logo" className="h-[75px] w-auto" />
      </div>

      {/* Navigation centrée */}
      <nav className="absolute left-1/2 -translate-x-1/2 flex gap-8 text-[#5C735F] font-medium text-base tracking-wide font-playfair-sc">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <a
              key={item.path}
              href={item.path}
              className={`inline-flex items-center justify-center h-[30px] px-3 rounded-full ${
                isActive ? "bg-[#8BA48D] text-white" : ""
              }`}
            >
              {item.name}
            </a>
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
  )
}
