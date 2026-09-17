import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Clients from './components/sections/Clients'
import Contact from './components/sections/Contact'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Values from './components/sections/Values'
import VisionMission from './components/sections/VisionMission'
import WhoWeAre from './components/sections/WhoWeAre'
import Work from './components/sections/Work'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <VisionMission />
        <Values />
        <Services />
        <Work />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
