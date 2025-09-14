import HeroSlider from '../components/Home/HeroSlider';
import Introduction from '../components/Home/Introduction';
import InfoCards from '../components/Home/InfoCards';
import Partners from '../components/Home/Partners';
import ProjectsCarousel from '../components/Home/ProjectsCarousel';
import Newsletter from '../components/Home/Newsletter';
import type React from 'react';
import CompanyValuesSection from '../components/Home/CompanyValuesSection';

const Home: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <HeroSlider />
      <Introduction />
      <InfoCards />
      <ProjectsCarousel />
      <CompanyValuesSection />
      <Partners />
      <Newsletter />
    </div>
  );
}

export default Home;