
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    number: '01',
    title: 'Living Spaces',
    category: 'Living Room Interiors',
    image: '/images/living-room.png',
    description:
      'Statement TV units, elegant finishes and thoughtful layouts.',
  },
  {
    number: '02',
    title: 'Wardrobes',
    category: 'Sliding Door Solutions',
    image: '/images/wardrobe.png',
    description:
      'Custom wardrobes, sliding doors and smart storage solutions.',
  },
  {
    number: '03',
    title: 'Kitchen Design',
    category: 'Modular Kitchen Interiors',
    image: '/images/kitchen.png',
    description:
      'Functional modular kitchens with premium laminates and modern finishes.',
  },
  {
    number: '04',
    title: 'Bedroom',
    category: 'Bedroom Interiors',
    image: '/images/bedroom.png',
    description:
      'Comfortable bedroom spaces with bespoke wardrobes and elegant details.',
  },
  {
    number: '05',
    title: 'Doors',
    category: 'Designer Doors',
    image: '/images/doors.png',
    description:
      'Stylish doors with refined finishes to complement every interior.',
  },
  {
    number: '06',
    title: 'Showcases',
    category: 'Custom Cabinetry',
    image: '/images/showcase.png',
    description:
      'Custom showcase units and display cabinets designed around your space.',
  },
  {
    number: '07',
    title: 'Laminations',
    category: 'Premium Surface Finishes',
    image: '/images/lamination.png',
    description:
      'Beautiful laminate textures, colours and finishes for bespoke interiors.',
  },
  {
    number: '08',
    title: 'Dream Spaces',
    category: 'Complete Interior Solutions',
    image: '/images/dream-space.png',
    description:
      'A thoughtful blend of materials, lighting and functionality for your home.',
  },
]

function Gallery() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const progressRef = useRef(null)

  
useEffect(() => {
  const section = sectionRef.current
  const track = trackRef.current
  const progress = progressRef.current

  if (!section || !track || !progress) return

  let refreshFrame

  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia()

    mm.add('(min-width: 1024px)', () => {
      const getDistance = () =>
        Math.max(0, track.scrollWidth - window.innerWidth)

      gsap.set(track, { x: 0 })
      gsap.set(progress, {
        scaleX: 0,
        transformOrigin: 'left center',
      })

      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getDistance()}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      gsap.to(progress, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getDistance()}`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })

      const refresh = () => ScrollTrigger.refresh()

      track.querySelectorAll('img').forEach((img) => {
        if (!img.complete) {
          img.addEventListener('load', refresh)
          img.addEventListener('error', refresh)
        }
      })

      refreshFrame = requestAnimationFrame(refresh)

      return () => {
        cancelAnimationFrame(refreshFrame)

        track.querySelectorAll('img').forEach((img) => {
          img.removeEventListener('load', refresh)
          img.removeEventListener('error', refresh)
        })

        tween.scrollTrigger?.kill()
      }
    })
  }, section)

  return () => {
    cancelAnimationFrame(refreshFrame)
    ctx.revert()
  }
}, [])


  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative hidden h-screen overflow-hidden bg-[#080808] text-white lg:block"
    >

      {/* Background typography */}
      <div className="pointer-events-none absolute bottom-[-3%] left-0 z-0 whitespace-nowrap text-[18vw] font-light uppercase leading-none tracking-[-0.08em] text-white/[0.035]">
        Chetak Interiors
      </div>

      {/* Horizontal scrolling track */}
      <div
        ref={trackRef}
        className="relative z-10 flex h-screen w-max items-center gap-[6vw] px-[9vw] will-change-transform"
      >
        {/* Gallery introduction */}
        <div className="flex h-[55vh] w-[29vw] shrink-0 flex-col justify-end pb-10">
          <p className="mb-5 text-[9px] uppercase tracking-[0.35em] text-amber-200/60">
            Designed for living
          </p>

          <h2 className="text-[7vw] font-light uppercase leading-[0.82] tracking-[-0.07em] text-white">
            Spaces
            <br />
            <span className="text-white/35">That Inspire.</span>
          </h2>

          <p className="mt-8 max-w-xs text-xs leading-relaxed text-white/45">
            Discover thoughtful interiors, bespoke cabinetry,
            premium finishes and beautiful details crafted
            to make your space your own.
          </p>
        </div>

        {/* Project cards */}
        {projects.map((project, index) => (
          <article
            key={project.number}
            className={`group relative shrink-0 overflow-hidden bg-[#151515] ${
              index % 2 === 0
                ? 'h-[58vh] w-[43vw]'
                : 'h-[68vh] w-[38vw]'
            }`}
          >
            <img
              src={project.image}
              alt={project.category}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />

            {/* Cinematic overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-black/20" />

            {/* Number */}
            <span className="absolute left-5 top-5 text-[9px] uppercase tracking-[0.3em] text-white/75">
              {project.number}
            </span>

            {/* Category and title */}
            <div className="absolute bottom-6 left-6 right-6">
              <p className="mb-3 text-[8px] uppercase tracking-[0.3em] text-amber-100/75">
                {project.category}
              </p>

              <div className="flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-4xl font-light uppercase leading-none tracking-[-0.055em] text-white xl:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 max-w-xs text-[11px] leading-relaxed text-white/65">
                    {project.description}
                  </p>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 text-lg transition-all duration-300 group-hover:border-amber-200 group-hover:bg-amber-200 group-hover:text-black">
                  ↗
                </div>
              </div>
            </div>
          </article>
        ))}

        {/* Final card */}
        <div className="flex h-[55vh] w-[28vw] shrink-0 flex-col justify-end pb-10">
          <p className="mb-5 text-[9px] uppercase tracking-[0.3em] text-white/35">
            Your vision, our craft
          </p>

          <h3 className="text-[5vw] font-light uppercase leading-[0.9] tracking-[-0.06em]">
            Design Your
            <br />
            <span className="text-white/35">Dream Space.</span>
          </h3>

          <a
            href="tel:+917975364571"
            className="mt-8 inline-flex w-fit items-center gap-5 border border-white/25 px-5 py-4 text-[9px] uppercase tracking-[0.2em] transition-colors duration-300 hover:border-amber-200 hover:text-amber-200"
          >
            Discuss Your Project
            <span>↗</span>
          </a>

          <p className="mt-8 text-[9px] uppercase leading-relaxed tracking-[0.2em] text-white/35">
            Davanagere, Karnataka
            <br />
            +91 79753 64571
          </p>
        </div>
      </div>

      {/* Scroll progress indicator */}
      <div className="absolute bottom-8 left-10 right-10 z-20 h-px bg-white/10 lg:left-14 lg:right-14">
        <div
          ref={progressRef}
          className="h-px w-full origin-left bg-amber-100/80"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>
    </section>
  )
}

export default Gallery
