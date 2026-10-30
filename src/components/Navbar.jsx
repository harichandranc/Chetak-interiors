
import { useEffect, useState } from 'react'

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
          scrolled
            ? 'border-white/[0.08] bg-[#0a0908]/90 shadow-lg shadow-black/10 backdrop-blur-xl'
            : 'border-transparent bg-gradient-to-b from-black/50 to-transparent'
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-5 sm:px-8 md:h-24 md:px-10 lg:px-16">

          {/* Logo and brand */}
          <a
            href="#top"
            onClick={closeMenu}
            aria-label="Chetak Interiors home"
            className="group relative z-50 flex shrink-0 items-center gap-2.5 md:gap-3"
          >
            <img
              src="/images/logo.png"
              alt="Chetak Interiors logo"
              className="h-10 w-10 object-contain transition-transform duration-500 group-hover:scale-105 md:h-12 md:w-12"
            />

            <span className="whitespace-nowrap text-[11px] font-medium tracking-[0.18em] text-white transition-colors duration-300 group-hover:text-amber-300 sm:text-xs md:text-sm md:tracking-[0.25em]">
              CHETAK INTERIORS
            </span>
          </a>

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 lg:flex xl:gap-10"
          >
            {navigation.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative py-3 text-[10px] uppercase tracking-[0.2em] text-white/65 transition-colors duration-300 hover:text-white xl:text-[11px]"
              >
                {item.label}

                <span className="absolute bottom-0 left-0 h-px w-0 bg-amber-400 transition-all duration-300 group-hover:w-full" />

                <span className="sr-only">
                  Navigation item {index + 1}
                </span>
              </a>
            ))}
          </nav>

          {/* Desktop contact button */}
          <a
            href="#contact"
            className="hidden items-center gap-4 border border-white/30 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-amber-400 hover:bg-amber-400 hover:text-black lg:inline-flex xl:px-6"
          >
            Get in Touch
            <span aria-hidden="true" className="text-sm">
              ↗
            </span>
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] border border-white/20 transition-colors hover:border-amber-400 lg:hidden"
          >
            <span
              className={`h-px w-5 bg-white transition-all duration-300 ${
                menuOpen ? 'translate-y-[3.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`h-px w-5 bg-white transition-all duration-300 ${
                menuOpen ? '-translate-y-[3.5px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile navigation overlay */}
      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-[#0a0908] px-7 transition-all duration-500 lg:hidden ${
          menuOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-3 opacity-0 pointer-events-none'
        }`}
      >
        <div className="pointer-events-none absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-amber-500/[0.07] blur-[100px]" />

        <p className="mb-8 text-[9px] uppercase tracking-[0.35em] text-amber-400/70">
          Chetak Interiors · Davanagere
        </p>

        <nav aria-label="Mobile navigation" className="relative">
          {navigation.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
              className="group flex items-center justify-between border-b border-white/10 py-5 text-3xl font-light uppercase tracking-[-0.04em] text-white/80 transition-colors duration-300 hover:text-amber-300 sm:text-4xl"
            >
              <span>{item.label}</span>
              <span className="text-base text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-400">
                ↗
              </span>
            </a>
          ))}

          <a
            href="#contact"
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
            className="mt-8 flex items-center justify-between border border-amber-400/50 bg-amber-400/[0.06] px-5 py-4 text-[10px] uppercase tracking-[0.25em] text-amber-300 transition-colors hover:bg-amber-400 hover:text-black"
          >
            Start Your Project
            <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <div className="absolute bottom-8 left-7 right-7 flex flex-col gap-2 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="tel:+917975364571"
            tabIndex={menuOpen ? 0 : -1}
            className="text-xs text-white/60 transition-colors hover:text-amber-300"
          >
            +91 79753 64571
          </a>

          <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
            Across Karnataka
          </span>
        </div>
      </div>
    </>
  )
}

export default Navbar