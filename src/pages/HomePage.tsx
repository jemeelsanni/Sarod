import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import Stats from '../sections/Stats'
import About from '../sections/About'
import Academics from '../sections/Academics'
import SchoolLife from '../sections/SchoolLife'
import Gallery from '../sections/Gallery'
import Admissions from '../sections/Admissions'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Academics />
        <SchoolLife />
        <Gallery />
        <Admissions />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
