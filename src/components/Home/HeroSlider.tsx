import React from "react";
import useIsMobile from "@/hooks/isMobile";
import MobileHeroSlider from "./MobileHeroSlider";
import DesktopHeroSlider from "./DesktopHeroSlider";

const HeroSlider: React.FC = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileHeroSlider /> : <DesktopHeroSlider />;
};

export default HeroSlider;
