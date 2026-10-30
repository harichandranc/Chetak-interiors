
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function Hero() {
  const heroRef = useRef(null)
  const imageRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const image = imageRef.current
    const title = titleRef.current
    const subtitle = subtitleRef.current

    if (!hero || !image || !title || !subtitle) return

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      })

      intro
        .from(image, {
          scale: 1.2,
          opacity: 0,
          duration: 1.8,
        })
        .from(
          title.children,
          {
            yPercent: 120,
            opacity: 0,
            duration: 1.2,
            stagger: 0.08,
          },
          '-=1.1',
        )
        .from(
          subtitle,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.7',
        )
    }, hero)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const hero = heroRef.current
    const image = imageRef.current

    if (!hero || !image) return

    const handleMouseMove = (event) => {
      const rect = hero.getBoundingClientRect()

      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5

      gsap.to(image, {
        x: x * 20,
        y: y * 20,
        duration: 1,
        ease: 'power3.out',
        overwrite: 'auto',
      })
    }

    const handleMouseLeave = () => {
      gsap.to(image, {
        x: 0,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      })
    }

    hero.addEventListener('mousemove', handleMouseMove)
    hero.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove)
      hero.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen w-full items-end overflow-hidden bg-[#111] px-6 pb-16 pt-32 md:px-10 md:pb-20 lg:px-14"
    >
      {/* Background Image: Add Your Hero Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/80 z-10" />

        <div
          ref={imageRef}
          className="absolute inset-[-5%] bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero.png')",
          }}
        />

        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>

      {/* Top Information */}
      <div className="absolute left-6 right-6 top-32 z-20 flex justify-between text-[9px] uppercase tracking-[0.3em] text-white/70 md:left-10 md:right-10 md:top-36 lg:left-14 lg:right-14">
        <span>Chetak / Interiors</span>

        <span className="hidden md:block">
          Crafted for Living
        </span>

        <span>Since 2025</span>
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full">
        <div className="mb-8 overflow-hidden">
          <p
            ref={subtitleRef}
            className="max-w-xs text-xs uppercase leading-relaxed tracking-[0.2em] text-white/80 md:max-w-sm"
          >
            Design your dream space.
            <br />
            Crafted with detail. Built to last.
          </p>
        </div>

        <h1
          ref={titleRef}
          className="max-w-[1200px] overflow-hidden text-[15vw] font-light uppercase leading-[0.82] tracking-[-0.06em] md:text-[12vw] lg:text-[10vw]"
        >
          <span className="block">Chetak</span>
          <span className="block">Interiors.</span>
        </h1>

        {/* Bottom Details */}
        <div className="mt-10 flex items-end justify-between">
          <p className="hidden max-w-xs text-xs leading-relaxed text-white/70 md:block">
            Showcases, sliding doors, laminations,
            wardrobes and custom interiors —
            thoughtfully designed for your space.
          </p>

          <div className="ml-auto flex items-center gap-4">
            

            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero