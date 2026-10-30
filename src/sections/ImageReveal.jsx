
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function ImageReveal() {
  const sectionRef = useRef(null)
  const imageWrapperRef = useRef(null)
  const imageRef = useRef(null)
  const labelRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const imageWrapper = imageWrapperRef.current
    const image = imageRef.current
    const label = labelRef.current

    if (!section || !imageWrapper || !image || !label) return

    const ctx = gsap.context(() => {
      // Expand the exterior image as the visitor scrolls
      gsap.fromTo(
        imageWrapper,
        {
          width: '78%',
          height: '65vh',
          borderRadius: '3px',
        },
        {
          width: '100%',
          height: '100vh',
          borderRadius: '0px',
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'center center',
            scrub: 1,
          },
        },
      )

      // Cinematic image parallax
      gsap.fromTo(
        image,
        {
          scale: 1.2,
          yPercent: -6,
        },
        {
          scale: 1,
          yPercent: 6,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        },
      )

      // Reveal the showroom information
      gsap.fromTo(
        label,
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 65%',
            end: 'top 35%',
            scrub: 1,
          },
        },
      )
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="showroom"
      className="relative flex min-h-[130vh] items-center justify-center overflow-hidden bg-[#0a0a0a] px-3 md:px-0"
    >
      {/* Expanding showroom exterior image */}
      <div
        ref={imageWrapperRef}
        className="relative h-[65vh] w-[78%] overflow-hidden"
      >
        <img
          ref={imageRef}
          src="/images/shop.png"
          alt="Chetak Interiors showroom exterior"
          loading="lazy"
          className="absolute inset-[-10%] h-[120%] w-[120%] object-cover object-center"
        />

        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/20" />


        {/* Center content */}
        <div
          ref={labelRef}
          className="absolute inset-0 flex items-center justify-center px-5"
        >
          <div className="max-w-4xl text-center">
            <p className="mb-5 text-[9px] uppercase tracking-[0.35em] text-white/75 md:text-xs">
              Welcome to Chetak Interiors
            </p>

          

            <p className="mx-auto mt-6 max-w-md text-xs leading-relaxed text-white/75 md:text-sm">
              Discover thoughtful designs, premium finishes
              and bespoke interior solutions for every space.
            </p>

            <a
              href="tel:+917975364571"
              className="mt-8 inline-flex items-center gap-4 border border-white/50 px-6 py-4 text-[9px] uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-black"
            >
              Enquire About Your Project
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Bottom-left location */}
        <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8">
          <p className="text-[8px] uppercase tracking-[0.25em] text-white/70 md:text-[9px]">
            Karur Industries Area
          </p>
          <p className="mt-2 text-[8px] tracking-[0.15em] text-white/50 md:text-[9px]">
            Davanagere, Karnataka
          </p>
        </div>

        {/* Bottom-right detail */}
        <span className="absolute bottom-5 right-5 text-[8px] uppercase tracking-[0.3em] text-white/70 md:bottom-8 md:right-8">
          Crafted for Living ↗
        </span>
      </div>
    </section>
  )
}

export default ImageReveal
