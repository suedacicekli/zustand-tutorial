import Drawer from "../../components/drawer/Drawer";
import HeroSection from "../../components/hero/HeroSection";

function Hero() {
  return (
    <>
      <Drawer />
      <div className="hero-section">
        <HeroSection />
      </div>
    </>
  );
}

export default Hero;
