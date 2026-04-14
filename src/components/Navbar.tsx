import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const navClassName = ({ isActive }: { isActive: boolean }) =>
    `transition hover:text-emerald-700 ${isActive ? 'text-emerald-800' : ''}`

  return (
    <header className="sticky top-0 z-20 border-b border-emerald-100/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/shop" className="text-xl font-semibold tracking-tight text-emerald-900">
          Plant Based
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-neutral-700 md:flex">
          <NavLink to="/shop" className={navClassName}>
            Shop
          </NavLink>
          <NavLink to="/new-arrivals" className={navClassName}>
            New Arrivals
          </NavLink>
          <NavLink to="/care-guides" className={navClassName}>
            Care Guides
          </NavLink>
          <NavLink to="/faq" className={navClassName}>
            FAQ
          </NavLink>
          <NavLink to="/contact" className={navClassName}>
            Contact
          </NavLink>
          <button
            type="button"
            className="rounded-full bg-emerald-700 px-4 py-2 text-white transition hover:bg-emerald-800"
          >
            Cart (0)
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
