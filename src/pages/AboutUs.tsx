import EmpoweringHero from '../aboutus/AboutUsHero'
import AboutUsMain from '../aboutus/AboutUsMain'
import MissionVisionTimeline from '../aboutus/MissionVisionTimeline'
import FounderSection from '../aboutus/FounderSection'
import CertificatesAccreditations from '../aboutus/CertificatesAccreditations'
import WhyChooseUs from '../aboutus/WhyChooseUs'

function AboutUs() {
  return (
    <main className="w-full max-w-[100vw] overflow-x-hidden flex flex-col">
        <EmpoweringHero/>
        <AboutUsMain/>
        <MissionVisionTimeline/>
        <FounderSection/>
        <CertificatesAccreditations/>
        <WhyChooseUs/>
    </main>
  )
}

export default AboutUs