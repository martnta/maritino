import SocialLinks from '@/components/SocialLinks'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MainSection from '@/components/MainSection'
import LatestRelease from '@/components/LatestRelease'
import UpcomingShows from '@/components/UpcomingShows'
import Gallery from '@/components/Gallery'



export default function HomePage() {
  return (
    <div>
    
      <MainSection />
      <LatestRelease />
      <UpcomingShows />
      <Gallery />
      <SocialLinks />
    
    </div>
  )
}
