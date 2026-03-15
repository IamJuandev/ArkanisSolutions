import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-[#E2E8F0]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
