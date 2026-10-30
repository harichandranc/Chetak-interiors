
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Intro() {
  const sectionRef = useRef(null)
  const mainImageRef = useRef(null)
  const smallImageRef = useRef(null)
  const titleRef = useRef(null)
  const numberRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const ctx = gsap.context(() => {
      // Main image parallax
      gsap.fromTo(
        mainImageRef.current,
        { y: 65, scale: 0.94 },
        {
          y: -45,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        },
      )

      // Floating wardrobe image parallax
      gsap.fromTo(
        smallImageRef.current,
        { y: -55, rotate: -5 },
        {
          y: 65,
          rotate: 2,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        },
      )

      // Heading reveal
      gsap.fromTo(
        titleRef.current,
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            end: 'top 55%',
            scrub: 1,
          },
        },
      )

      // Vertical details reveal
      gsap.fromTo(
        numberRef.current,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            end: 'top 25%',
            scrub: 1,
          },
        },
      )

      // Decorative line animation
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: 'left center',
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
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
      id="about"
      className="relative overflow-hidden bg-[#0b0b0b] text-white"
    >
      {/* Ambient lighting */}
      <div className="pointer-events-none absolute left-[5%] top-[10%] h-[350px] w-[350px] rounded-full bg-amber-500/[0.08] blur-[120px] md:h-[500px] md:w-[500px]" />

      <div className="pointer-events-none absolute right-0 top-[35%] h-[300px] w-[300px] rounded-full bg-orange-900/[0.08] blur-[120px] md:h-[450px] md:w-[450px]" />

      <div className="relative mx-auto max-w-[1600px] px-5 pb-12 pt-28 md:px-10 md:pb-16 md:pt-32 lg:px-16">

        {/* Top information */}
        <div className="mb-12 flex items-center justify-between md:mb-16">
          <div className="flex items-center gap-4">
          </div>

          <span className="text-right text-[9px] uppercase tracking-[0.3em] text-white/40">
            Chetak Interiors
          </span>
        </div>

        {/* Image composition */}
        <div className="relative mb-20 min-h-[390px] sm:min-h-[470px] md:mb-28 md:min-h-[600px] lg:min-h-[680px]">

          {/* Main image */}
          <div
            ref={mainImageRef}
            className="absolute left-0 top-[50px] h-[290px] w-[88%] overflow-hidden sm:h-[360px] md:left-[8%] md:top-[40px] md:h-[500px] md:w-[65%] lg:h-[570px] lg:w-[62%]"
          >
            <img
              src="/images/living-room.png"
              alt="Luxury living room with custom TV unit and modern interior finishes"
              loading="lazy"
              className="h-full w-full object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
              <p className="text-[8px] uppercase tracking-[0.3em] text-white/80 md:text-[9px]">
                Living Spaces 
              </p>
            </div>
          </div>

          {/* Floating secondary image */}
          <div
            ref={smallImageRef}
            className="absolute right-0 top-0 z-10 h-[180px] w-[48%] overflow-hidden border border-white/20 bg-[#151515] sm:h-[230px] md:right-[3%] md:top-[-5px] md:h-[310px] md:w-[30%] lg:right-[5%] lg:h-[350px] lg:w-[28%]"
          >
            <img
              src="/images/wardrobe.png"
              alt="Custom sliding wardrobe with premium wood laminations and illuminated shelving"
              loading="lazy"
              className="h-full w-full object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-black/10" />

            <div className="absolute right-3 top-3 md:right-5 md:top-5">
              <span className="text-[8px] uppercase tracking-[0.3em] text-white/80">
              
              </span>
            </div>
          </div>
        </div>
         
      </div>
    </section>
  )
}

export default Intro