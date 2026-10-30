import SmoothScroll from './components/SmoothScroll'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Intro from './sections/Intro'
import ImageReveal from './sections/ImageReveal'
import Gallery from './sections/Gallery'
import Services from './sections/Services'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <SmoothScroll>
      <main
        id="top"
        className="min-h-screen bg-black text-white"
      >
        <Navbar />

        <Hero />

        <Intro />

        <ImageReveal />

        <Gallery />

        <Services />

        <Contact />

        <Footer />
      </main>
    </SmoothScroll>
  )
}

export default App