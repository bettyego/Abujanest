import { useEffect, useState } from 'react'

export default function Navbar({ currentPage, navItems, onNavigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#f7f1e7]/90 shadow-[0_18px_45px_rgba(15,45,34,0.08)] backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 text-left"
          aria-label="Go to Abuja Nest home"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b88a43]/40 bg-[#0f2d22] text-sm font-semibold text-[#f6f1e7] shadow-sm">
            AN
          </div>
          <div>
            <div className="font-display text-3xl leading-none text-[#0f2d22]">ABUJA NEST</div>
            <div className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#7a7a75]">
              Shortlet & Apartments
            </div>
          </div>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`text-sm font-medium tracking-[0.1em] uppercase ${
                currentPage === item.id ? 'text-[#0f2d22]' : 'text-stone-600 hover:text-[#0f2d22]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => onNavigate('booking')}
            className="rounded-full border border-[#0f2d22] bg-[#0f2d22] px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.15em] text-[#f6f1e7] transition hover:-translate-y-0.5 hover:bg-[#173d2e]"
          >
            Request a Stay
          </button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#0f2d22]/15 bg-white/50 md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen((value) => !value)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 h-0.5 w-full rounded-full bg-[#0f2d22] transition ${
                mobileOpen ? 'top-2 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-full rounded-full bg-[#0f2d22] transition ${
                mobileOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-full rounded-full bg-[#0f2d22] transition ${
                mobileOpen ? 'top-2 -rotate-45' : 'top-4'
              }`}
            />
          </span>
        </button>
      </nav>

      {mobileOpen ? (
        <div className="border-t border-[#0f2d22]/10 bg-[#f7f1e7]/95 px-4 pb-5 pt-3 md:hidden">
          <div className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onNavigate(item.id)
                  setMobileOpen(false)
                }}
                className={`block w-full rounded-2xl px-4 py-3 text-left text-sm font-medium uppercase tracking-[0.14em] ${
                  currentPage === item.id ? 'bg-[#0f2d22] text-[#f6f1e7]' : 'bg-white/60 text-[#0f2d22]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                onNavigate('booking')
                setMobileOpen(false)
              }}
              className="mt-2 w-full rounded-full bg-[#b88a43] px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#fffaf2]"
            >
              Request a Stay
            </button>
          </div>
        </div>
      ) : null}
    </header>
  )
}
