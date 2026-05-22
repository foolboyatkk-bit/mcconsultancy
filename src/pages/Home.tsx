import HeroCarousel from "../home/Hero";
import HighlightedServices from "../home/HighlightedServices";
import IntroductionSection from "../home/IntroductionSection";
import Main from "../home/Main";
import OurPartners from "../home/OurPartners";
import UniversitiesSection from "../home/Universitiessection";

function Home() {
  return (
    <div>
      <HeroCarousel />
      <Main />
      <IntroductionSection />
      <HighlightedServices />
      <UniversitiesSection />
      <OurPartners/>
    </div>
  );
}

export default Home;
