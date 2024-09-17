import Header from './Header'
import Hero from './HeroSection'
import Linktree from './Linktree'
import About from './about'
import Music from './Music'
import Shows from './UpcomingShows'
import Newsletter from './Newsletter'
import Footer from './footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <Hero />
      <Linktree />
      <About />
      <Music />
      <Shows />
      <Newsletter />
      <Footer />
    </div>
  )
}