import { useEffect } from 'react'
import Lenis from 'lenis'

function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
    }

    lenis.on('scroll', () => {
      // Scroll event is available for GSAP animations later.
    })

    let animationFrame

    const animate = (time) => {
      raf(time)
      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrame)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}

export default SmoothScroll