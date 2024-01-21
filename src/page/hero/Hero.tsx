import Drawer from "../../components/drawer/Drawer";
import HeroSection from "../../components/hero/HeroSection";
import Team from "../../components/hero/Team";

function Hero() {
  return (
    <>
      <Drawer />
      <div className="hero-section">
        <HeroSection />
        <Team />
      </div>
    </>
  );
}

export default Hero;
