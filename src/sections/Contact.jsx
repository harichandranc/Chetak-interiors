
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  'Complete Interior Work',
  'Modular Kitchen',
  'Bedroom Interior',
  'Wardrobes & Sliding Doors',
  'Designer Doors',
  'TV Units & Showcases',
  'Laminations Only',
  'Product Purchase Only',
  'Installation / Fitting Only',
  'Other Requirements',
]

function Contact() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const imageRef = useRef(null)
  const detailsRef = useRef(null)
  const formRef = useRef(null)
  const reachRef = useRef(null)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
        },
      )

      gsap.fromTo(
        imageRef.current,
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)',
          duration: 1.2,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 85%',
          },
        },
      )

      gsap.fromTo(
        [detailsRef.current, formRef.current],
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: detailsRef.current,
            start: 'top 85%',
          },
        },
      )

      gsap.fromTo(
        reachRef.current,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: reachRef.current,
            start: 'top 90%',
          },
        },
      )
    }, section)

    return () => ctx.revert()
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const message = [
      'Hello Chetak Interiors, I would like to enquire about a project.',
      '',
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email || 'Not provided'}`,
      `Service: ${formData.service || 'Not specified'}`,
      `Project details: ${formData.message}`,
    ].join('\n')

    const whatsappUrl = `https://wa.me/917975364571?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-[#0a0908] text-white"
    >
      {/* Ambient gold lighting */}
      <div className="pointer-events-none absolute -left-40 top-40 h-[400px] w-[400px] rounded-full bg-amber-600/[0.06] blur-[140px]" />

      <div className="pointer-events-none absolute right-0 top-[30%] h-[400px] w-[400px] rounded-full bg-orange-700/[0.05] blur-[150px]" />

      <div className="relative mx-auto max-w-[1800px] px-5 pb-8 pt-28 sm:px-8 md:px-10 md:pt-36 lg:px-14 lg:pt-20">

        {/* Section header */}
        <div
          ref={headingRef}
          className="mb-10 flex items-center justify-between md:mb-12"
        >
          <div className="flex items-center gap-4 md:gap-6">
            

            <span className="h-px w-12 bg-amber-400/60 md:w-24" />

            <span className="text-[9px] uppercase tracking-[0.35em] text-white/65 md:text-[10px]">
              Get in Touch
            </span>
          </div>

          <span className="hidden text-[9px] uppercase tracking-[0.3em] text-white/40 sm:block">
            Chetak Interiors
          </span>
        </div>

        {/* Main contact layout */}
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.65fr_0.85fr] lg:items-stretch lg:gap-7 xl:gap-9">

          {/* Left column: headline and showroom */}
          <div className="flex min-w-0 flex-col">
            <div className="mb-8">
              <h2 className="text-[13vw] font-light uppercase leading-[0.82] tracking-[-0.075em] sm:text-7xl md:text-8xl lg:text-[5.4vw]">
                Let&apos;s
                <br />
                <span className="text-white/85">
                  Build Your
                </span>
                <br />
                <span className="font-serif italic tracking-[-0.06em] text-[#c99a55]">
                  Space.
                </span>
              </h2>
            </div>

            {/* Showroom image */}
            <div
              ref={imageRef}
              className="group relative mt-auto min-h-[320px] overflow-hidden sm:min-h-[420px] lg:min-h-[480px]"
            >
              <img
                src="/images/shop.png"
                alt="Chetak Interiors showroom exterior"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/10" />

              <div className="absolute bottom-6 left-5 right-5 sm:bottom-8 sm:left-7">
                <p className="text-[9px] uppercase tracking-[0.3em] text-amber-300">
                  Chetak Interiors
                </p>

                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/85">
                  Thoughtful designs. Quality materials.
                  Interior solutions made around you.
                </p>
              </div>

              <span className="absolute right-5 top-5 text-[9px] tracking-[0.25em] text-white/80">
                DAVANAGERE / KA
              </span>
            </div>
          </div>

          {/* Middle column: intro and contact details */}
          <div
            ref={detailsRef}
            className="flex min-w-0 flex-col pt-2 lg:pt-5"
          >
            <p className="mb-9 text-sm leading-7 text-white/60">
              Have a project in mind? Whether you need complete
              interior work, products only, laminations, or
              installation, we&apos;re here to help. Tell us what
              you need and we&apos;ll find the right solution.
            </p>

            {/* Phone */}
            <div className="flex gap-4 border-b border-white/10 py-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#c99a55]/70 text-[#c99a55]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.06 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z" />
                </svg>
              </div>

              <div className="min-w-0 pt-1">
                <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-amber-300/90">
                  Phone
                </p>

                <a
                  href="tel:+917975364571"
                  className="block text-sm text-white/85 transition-colors hover:text-[#d8ab6b]"
                >
                  +91 79753 64571
                </a>

                <a
                  href="tel:+917231036707"
                  className="mt-1 block text-sm text-white/85 transition-colors hover:text-[#d8ab6b]"
                >
                  +91 72310 36707
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 border-b border-white/10 py-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#c99a55]/70 text-[#c99a55]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 7L2 7" />
                </svg>
              </div>

              <div className="min-w-0 pt-1">
                <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-amber-300/90">
                  Email
                </p>

                <a
                  href="mailto:chetakinteriors@gmail.com"
                  className="break-all text-sm text-white/85 transition-colors hover:text-[#d8ab6b]"
                >
                  chetakinteriors@gmail.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4 border-b border-white/10 py-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#c99a55]/70 text-[#c99a55]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>

              <div className="min-w-0 pt-1">
                <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-amber-300/90">
                  Address
                </p>

                <p className="text-sm leading-6 text-white/75">
                  Plot No. 68-C,
                  <br />
                  Karur Industries Area,
                  <br />
                  Davanagere – 577006,
                  <br />
                  Karnataka, India.
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Plot+No+68-C+Karur+Industries+Area+Davanagere+577006"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-[#c99a55] transition-colors hover:text-white"
                >
                  Get Directions <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            {/* Service availability */}
            <div className="flex gap-4 py-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#c99a55]/70 text-[#c99a55]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z" />
                  <circle cx="7.5" cy="19" r="2" />
                  <circle cx="17.5" cy="19" r="2" />
                </svg>
              </div>

              <div className="min-w-0 pt-1">
                <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-amber-300/90">
                  Service Reach
                </p>

                <p className="text-sm text-white/85">
                  Across Karnataka
                </p>

                <p className="mt-2 text-xs leading-5 text-white/45">
                  Product delivery, material supply and
                  on-site work based on your requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Right column: enquiry form */}
          <div
            ref={formRef}
            className="h-fit min-w-0 border border-white/15 bg-gradient-to-br from-white/[0.055] to-white/[0.015] p-5 sm:p-8 lg:p-6 xl:p-8"
          >
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#d8ab6b]">
              Send Us a Message
            </p>

            <h3 className="mt-4 text-4xl font-light uppercase leading-none tracking-[-0.06em] sm:text-5xl">
              Enquire{' '}
              <span className="font-serif italic text-[#c99a55]">
                Now.
              </span>
            </h3>

            <p className="mb-7 mt-4 text-xs leading-6 text-white/45">
              Tell us about your space, your requirements
              and how we can help.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={100}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  aria-label="Full name"
                  className="min-w-0 w-full border border-white/20 bg-black/20 px-4 py-4 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#c99a55]"
                />

                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  required
                  maxLength={20}
                  pattern="[+0-9() -]{7,20}"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number *"
                  aria-label="Phone number"
                  className="min-w-0 w-full border border-white/20 bg-black/20 px-4 py-4 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#c99a55]"
                />
              </div>

              <input
                type="email"
                name="email"
                autoComplete="email"
                maxLength={150}
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address (Optional)"
                aria-label="Email address"
                className="w-full border border-white/20 bg-black/20 px-4 py-4 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#c99a55]"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                aria-label="Service interested in"
                className="w-full appearance-none border border-white/20 bg-[#11100e] px-4 py-4 text-sm text-white/70 outline-none transition-colors focus:border-[#c99a55]"
              >
                <option value="" className="bg-[#11100e]">
                  Service Interested In
                </option>

                {services.map((service) => (
                  <option
                    key={service}
                    value={service}
                    className="bg-[#11100e] text-white"
                  >
                    {service}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                required
                minLength={5}
                maxLength={3000}
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Project Details / Message *"
                aria-label="Project details or message"
                className="w-full resize-y border border-white/20 bg-black/20 px-4 py-4 text-sm leading-6 text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#c99a55]"
              />

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 bg-[#c99a55] px-5 py-4 text-[10px] font-medium uppercase tracking-[0.25em] text-black transition-colors duration-300 hover:bg-[#e0b776]"
              >
                Send Enquiry
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <p className="text-[10px] leading-5 text-white/35">
                Your enquiry will open WhatsApp with your
                details ready to send to our team.
              </p>
            </form>
          </div>
        </div>

        {/* Karnataka service coverage strip */}
        <div
          ref={reachRef}
          className="mt-12 border border-white/10 bg-white/[0.015] md:mt-16"
        >
          <div className="grid divide-y divide-white/10 md:grid-cols-2 md:divide-y-0 lg:grid-cols-[1.05fr_1fr_1fr_1fr] lg:divide-x lg:divide-white/10">

            {/* Coverage title */}
            <div className="flex items-center gap-5 p-6 sm:p-8">
              <div className="relative flex h-20 w-16 shrink-0 items-center justify-center text-[#c99a55]">
                <svg
                  viewBox="0 0 100 120"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-full w-full"
                  aria-label="Decorative Karnataka outline"
                  role="img"
                >
                  <path d="M36 5 50 13 68 10 74 21 91 26 82 43 87 57 76 68 78 82 65 96 58 113 45 108 37 94 25 87 28 73 16 61 20 44 11 32 23 20 25 10Z" />
                  <circle cx="49" cy="64" r="10" opacity=".45" />
                  <circle cx="49" cy="64" r="4" fill="currentColor" />
                </svg>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#c99a55]">
                  Our Service Reach
                </p>

                <h3 className="mt-3 text-3xl font-light uppercase leading-tight tracking-[-0.05em] sm:text-4xl">
                  Across
                  <br />
                  <span className="font-serif italic text-[#c99a55]">
                    Karnataka
                  </span>
                </h3>
              </div>
            </div>

            {/* Delivery */}
            <div className="flex gap-4 p-6 sm:p-8">
              <div className="shrink-0 text-[#c99a55]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  className="h-8 w-8"
                  aria-hidden="true"
                >
                  <path d="M2 6h12v12H2zM14 10h4l4 4v4h-8z" />
                  <circle cx="6.5" cy="20" r="2" />
                  <circle cx="18.5" cy="20" r="2" />
                </svg>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-[0.15em] text-[#d8ab6b]">
                  Statewide Delivery
                </h4>

                <p className="mt-3 text-xs leading-6 text-white/50">
                  We supply interior products and materials
                  across Karnataka, subject to delivery arrangements.
                </p>
              </div>
            </div>

            {/* Flexible services */}
            <div className="flex gap-4 p-6 sm:p-8">
              <div className="shrink-0 text-[#c99a55]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  className="h-8 w-8"
                  aria-hidden="true"
                >
                  <path d="M4 11V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v4" />
                  <path d="M3 11h18v8H3zM6 19v2M18 19v2" />
                  <path d="M7 11V8h10v3" />
                </svg>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-[0.15em] text-[#d8ab6b]">
                  Flexible Services
                </h4>

                <p className="mt-3 text-xs leading-6 text-white/50">
                  Complete projects, product-only orders,
                  laminations or installation as needed.
                </p>
              </div>
            </div>

            {/* Support */}
            <div className="flex gap-4 p-6 sm:p-8">
              <div className="shrink-0 text-[#c99a55]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  className="h-8 w-8"
                  aria-hidden="true"
                >
                  <path d="M12 2 21 6v6c0 5-3.8 8.5-9 10-5.2-1.5-9-5-9-10V6z" />
                  <path d="m8 12 2.5 2.5L16 9" />
                </svg>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-[0.15em] text-[#d8ab6b]">
                  Personal Support
                </h4>

                <p className="mt-3 text-xs leading-6 text-white/50">
                  Discuss your location and requirements.
                  We&apos;ll help you choose the right solution.
                </p>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default Contact