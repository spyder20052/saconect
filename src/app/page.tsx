import { Hero } from '../components/Hero'
import LogosRow from '../components/LogosRow'
import WhySigfox from '../components/WhySigfox'
import UseCasesGrid from '../components/UseCasesGrid'
import CoverageTeaser from '../components/CoverageTeaser'
import StatsBar from '../components/StatsBar'
import AboutSection from '../components/AboutSection'
import PartnersSection from '../components/PartnersSection'
import NewsletterSection from '../components/NewsletterSection'

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* About right after hero */}
      <AboutSection />


      {/* Why Sigfox */}
      <WhySigfox />

      {/* Use cases grid */}
      <UseCasesGrid />

      {/* Coverage teaser */}
      <CoverageTeaser />

      {/* Stats */}
      <StatsBar />

      {/* Newsletter */}
      <NewsletterSection />

      {/* Partners right after newsletter */}
      <PartnersSection />

    </div>
  )
}
