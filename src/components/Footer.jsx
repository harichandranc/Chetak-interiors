
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  'Sliding Doors',
  'Decorative Laminations',
  'Custom Showcases',
  'Modular Kitchens',
  'Wardrobes & Cabinetry',
  'Interior Installation',
]

const quickLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    const footer = footerRef.current

    if (!footer) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.footer-reveal',
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footer,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        },
      )
    }, footer)

    return () => ctx.revert()
  }, [])

  const whatsappUrl =
    'https://wa.me/917975364571?text=' +
    encodeURIComponent(
      'Hello Chetak Interiors, I would like to discuss an interior project.',
    )

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-[#090909] text-white"
    >
      {/* Ambient background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-amber-500/[0.05] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-orange-900/[0.06] blur-[130px]"
      />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-16">

        {/* Main footer */}
        <div className="grid gap-12 border-b border-white/10 py-16 sm:py-20 lg:grid-cols-[1.4fr_0.7fr_0.8fr_1fr] lg:gap-12 lg:py-24">

          {/* Brand */}
          <div className="footer-reveal">
            <a
              href="#top"
              aria-label="Chetak Interiors home"
              className="inline-flex items-center gap-3"
            >
              <img
                src="/images/logo.png"
                alt="Chetak Interiors logo"
                className="h-12 w-12 object-contain sm:h-14 sm:w-14"
              />

              <span className="text-sm font-medium uppercase tracking-[0.22em] sm:text-base">
                Chetak
                <span className="block mt-1 text-[9px] font-light tracking-[0.4em] text-amber-400 sm:text-[10px]">
                  INTERIORS
                </span>
              </span>
            </a>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/50">
              Thoughtfully crafted interiors, quality materials and
              precision workmanship. From sliding doors and laminations
              to custom showcases and complete interior solutions,
              we help bring your vision to life.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-3 border border-amber-400/50 px-5 py-3 text-[9px] uppercase tracking-[0.2em] text-amber-300 transition-all duration-300 hover:bg-amber-400 hover:text-black"
            >
              Discuss Your Project
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </div>

          {/* Quick links */}
          <div className="footer-reveal">
            <h3 className="mb-7 text-[10px] font-medium uppercase tracking-[0.3em] text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/50 transition-colors duration-300 hover:text-amber-300"
                  >
                    <span className="h-px w-0 bg-amber-400 transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-reveal">
            <h3 className="mb-7 text-[10px] font-medium uppercase tracking-[0.3em] text-white">
              Our Services
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-white/50 transition-colors duration-300 hover:text-amber-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-reveal">
            <h3 className="mb-7 text-[10px] font-medium uppercase tracking-[0.3em] text-white">
              Get In Touch
            </h3>

            <div className="space-y-6">

              {/* Location */}
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-amber-400">↗</span>

                <div>
                  <p className="mb-1 text-[9px] uppercase tracking-[0.2em] text-white/35">
                    Visit Us
                  </p>
                  <p className="text-sm leading-6 text-white/60">
                    Davanagere,
                    <br />
                    Karnataka, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-amber-400">↗</span>

                <div>
                  <p className="mb-1 text-[9px] uppercase tracking-[0.2em] text-white/35">
                    Call Us
                  </p>

                  <a
                    href="tel:+917975364571"
                    className="text-sm text-white/60 transition-colors hover:text-amber-300"
                  >
                    +91 79753 64571
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-amber-400">↗</span>

                <div>
                  <p className="mb-1 text-[9px] uppercase tracking-[0.2em] text-white/35">
                    WhatsApp
                  </p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 transition-colors hover:text-amber-300"
                  >
                    Chat With Our Team
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[9px] tracking-[0.08em] text-white/35">
            © {new Date().getFullYear()} Chetak Interiors. All rights reserved.
          </p>

          

          <p className="text-[9px] uppercase tracking-[0.15em] text-white/30">
            Crafted with attention to detail
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer