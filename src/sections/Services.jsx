import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    number: '01',
    title: 'Complete',
    subtitle: 'Interior Solutions',
    category: 'DESIGN TO DELIVERY',
    description:
      'From planning and material selection to fabrication, delivery and installation, we bring your interior vision together.',
    image: '/images/dream-space.png',
    imageAlt: 'Premium completed interior with custom cabinetry and elegant finishes',
    tags: ['Planning', 'Fabrication', 'Delivery', 'Installation'],
  },
  {
    number: '02',
    title: 'Product',
    subtitle: 'Sales Only',
    category: 'CHOOSE WHAT YOU NEED',
    description:
      'Looking for products only? Purchase doors, laminations, showcases, wardrobe components and other available interior products.',
    image: '/images/laminations.png',
    imageAlt: 'Premium decorative laminates and interior finishing materials',
    tags: ['Doors', 'Laminations', 'Showcases', 'Wardrobes'],
  },
  {
    number: '03',
    title: 'Installation',
    subtitle: '& Workmanship',
    category: 'YOU PROVIDE THE MATERIALS',
    description:
      'Already have your materials? Hire our team for agreed installation, fitting, lamination and other interior workmanship.',
    image: '/images/designer-doors.png',
    imageAlt: 'Contemporary designer door and precision interior fitting',
    tags: ['Fitting', 'Installation', 'Lamination Work'],
  },
  {
    number: '04',
    title: 'Custom',
    subtitle: 'Interior Projects',
    category: 'MADE FOR YOUR SPACE',
    description:
      'From modular kitchens and bedroom interiors to sliding doors, wardrobes and bespoke showcases, create spaces around your needs.',
    image: '/images/kitchen-interior.png',
    imageAlt: 'Modern custom kitchen interior with premium cabinetry',
    tags: ['Kitchens', 'Bedrooms', 'Sliding Doors', 'Cabinetry'],
  },
]

function Services() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef(null)
  const coverageRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const ctx = gsap.context(() => {
      // Section heading reveal
      gsap.fromTo(
        headingRef.current,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        },
      )

      // Staggered service card reveal
      const cards = gsap.utils.toArray('.service-card')

      gsap.fromTo(
        cards,
        {
          y: 70,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 78%',
            toggleActions: 'play none none reverse',
          },
        },
      )

      // Image parallax inside each card
      gsap.utils.toArray('.service-image').forEach((image) => {
        gsap.fromTo(
          image,
          {
            scale: 1.12,
            yPercent: -3,
          },
          {
            scale: 1,
            yPercent: 3,
            ease: 'none',
            scrollTrigger: {
              trigger: image,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          },
        )
      })

      // Karnataka coverage reveal
      gsap.fromTo(
        coverageRef.current,
        {
          y: 45,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: coverageRef.current,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        },
      )
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative overflow-hidden bg-[#0b0b0b] text-white"
    >
      {/* Ambient gold lighting */}
      <div className="pointer-events-none absolute -left-40 top-40 h-[400px] w-[400px] rounded-full bg-amber-500/[0.06] blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 top-[55%] h-[400px] w-[400px] rounded-full bg-orange-900/[0.07] blur-[140px]" />

      <div className="relative mx-auto max-w-[1600px] px-5 py-24 sm:px-8 md:px-10 md:py-32 lg:px-16 lg:py-36">
        {/* Section heading */}
        <div
          ref={headingRef}
          className="mb-14 md:mb-20 lg:mb-24"
        >
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              

              
            </div>

            <span className="text-right text-[8px] uppercase tracking-[0.25em] text-white/40 sm:text-[9px] md:tracking-[0.35em]">
              What We Offer
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <p className="mb-5 text-[9px] uppercase tracking-[0.3em] text-amber-400/80 md:text-[10px]">
                Flexibility in Every Detail
              </p>

              <h2 className="text-[10vw] font-light uppercase leading-[0.9] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[6vw]">
  Your Project.
  <br />
  <span className="text-white/30">
    Your Way.
  </span>
</h2>
            </div>

            <div className="max-w-md lg:justify-self-end lg:pb-2">
              <p className="text-sm leading-7 text-white/55 md:text-base md:leading-8">
                Need everything from start to finish, products
                without installation, or just a skilled team to
                do the work? Choose exactly what you need with
                Chetak Interiors.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-8 bg-amber-400" />

                <span className="text-[9px] uppercase tracking-[0.25em] text-white/45">
                  Interior Solutions Across Karnataka
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Service cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:gap-x-7 lg:gap-y-16"
        >
          {services.map((service, index) => (
            <article
              key={service.number}
              className={`service-card group ${
                index % 2 === 1 ? 'lg:translate-y-16' : ''
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[5/4] overflow-hidden bg-[#171717] sm:aspect-[4/3]">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  loading="lazy"
                  className="service-image absolute inset-[-5%] h-[110%] w-[110%] object-cover transition-[filter] duration-700 group-hover:brightness-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

                {/* Number */}
                <span className="absolute left-5 top-5 text-[9px] uppercase tracking-[0.3em] text-white/80 md:left-7 md:top-7">
                  {service.number}
                </span>

                {/* Category */}
                <span className="absolute right-5 top-5 max-w-[65%] text-right text-[8px] uppercase tracking-[0.2em] text-white/75 md:right-7 md:top-7 md:text-[9px]">
                  {service.category}
                </span>

                {/* Image title */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between md:bottom-7 md:left-7 md:right-7">
                  <div>
                    <p className="mb-2 text-[9px] uppercase tracking-[0.3em] text-amber-300">
                      {service.number} / Chetak Interiors
                    </p>

                    <h3 className="text-3xl font-light uppercase leading-[0.95] tracking-[-0.055em] text-white sm:text-4xl md:text-5xl">
                      {service.title}
                      <br />
                      <span className="text-white/70">
                        {service.subtitle}
                      </span>
                    </h3>
                  </div>

                  <span className="mb-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/50 text-lg text-white transition-all duration-300 group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-black">
                    ↗
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="border-b border-white/10 py-6 md:py-7">
                <p className="max-w-xl text-xs leading-6 text-white/55 sm:text-sm sm:leading-7">
                  {service.description}
                </p>

                {/* Service tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/10 px-3 py-2 text-[8px] uppercase tracking-[0.12em] text-white/55 transition-colors duration-300 group-hover:border-amber-400/30 group-hover:text-white/80 sm:text-[9px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/917975364571?text=${encodeURIComponent(
                    `Hello Chetak Interiors, I am interested in ${service.title} ${service.subtitle}. Please share more details.`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.25em] text-amber-300 transition-colors hover:text-white"
                >
                  Discuss Your Project
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>


        {/* Karnataka-wide service coverage */}
        <div
        ref={coverageRef}
        className="relative isolate mt-24 overflow-hidden border border-white/10 bg-[#101010] md:mt-36"
        >
        {/* Delivery background image */}
        <div
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{
            backgroundImage: "url('/images/delivery.png')",
            }}
            aria-hidden="true"
        />

        {/* Dark overlays for readability */}
        <div
            className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/85 to-black/20"
            aria-hidden="true"
        />

        <div
            className="absolute inset-0 -z-10 bg-black/20"
            aria-hidden="true"
        />

        {/* Decorative background text */}
        <div className="pointer-events-none absolute -bottom-5 right-0 select-none text-[22vw] font-light uppercase leading-none tracking-[-0.08em] text-white/[0.06] md:text-[15vw]">
            Karnataka
        </div>

        {/* Main content */}
        <div className="relative grid min-h-[460px] gap-10 p-6 sm:p-9 md:min-h-[540px] md:p-12 lg:grid-cols-[1fr_auto] lg:items-end lg:p-16">
            <div className="max-w-3xl">
            {/* Section label */}
            <div className="mb-6 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-400/50 bg-black/20 text-amber-300 backdrop-blur-sm">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    className="h-4 w-4"
                    aria-hidden="true"
                >
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                </svg>
                </span>

                <span className="text-[9px] uppercase tracking-[0.3em] text-amber-300 sm:text-[10px]">
                Our Service Reach
                </span>
            </div>

            {/* Heading */}
            <h3 className="text-4xl font-light uppercase leading-[0.95] tracking-[-0.06em] sm:text-5xl md:text-6xl lg:text-7xl">
                One Team.
                <br />
                <span className="text-white/55">
                Across Karnataka.
                </span>
            </h3>

            {/* Description */}
            <p className="mt-6 max-w-xl text-xs leading-7 text-white/75 sm:text-sm sm:leading-8">
                Based in Davanagere, we take on interior product
                and workmanship requirements across Karnataka.
                Tell us your location and project needs, and
                we can discuss the right solution for you.
            </p>

            {/* Location */}
            <p className="mt-5 text-[9px] uppercase tracking-[0.2em] text-white/55">
                Davanagere, Karnataka · India
            </p>

            {/* WhatsApp CTA */}
            <a
                href="https://wa.me/917975364571?text=Hello%20Chetak%20Interiors%2C%20I%20would%20like%20to%20discuss%20a%20project%20in%20Karnataka."
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex w-fit items-center gap-5 border border-amber-400/70 bg-black/25 px-6 py-4 text-[9px] uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-300 hover:bg-amber-400 hover:text-black sm:px-8"
            >
                Start a Conversation

                <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                ↗
                </span>
            </a>
            </div>
        </div>
        </div>

        {/* Bottom note */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-[8px] uppercase tracking-[0.25em] text-white/30 sm:text-[9px]">
            Designed Around Your Needs
        </span>

        <a
            href="tel:+917975364571"
            className="text-[9px] tracking-[0.15em] text-white/50 transition-colors hover:text-amber-300"
        >
            +91 79753 64571
        </a>
        </div>

    </div>
    </section>
  )
}

export default Services