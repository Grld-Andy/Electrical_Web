import Header from '../components/Home/Header';
import HeroSlider from '../components/Home/HeroSlider';
import Introduction from '../components/Home/Introduction';
import InfoCards from '../components/Home/InfoCards';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import SafetySection from '../components/Home/SafetySection';
import Partners from '../components/Home/Partners';
import ProjectsCarousel from '../components/Home/ProjectsCarousel';
import Newsletter from '../components/Home/Newsletter';
import Footer from '../components/Home/Footer';
import type React from 'react';


const Home: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header />
      <main>
        <HeroSlider />
        <Introduction />
        <InfoCards />
        <WhyChooseUs />
        <SafetySection />
        <Partners />
        <ProjectsCarousel />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default Home;