import Drawer from "./components/drawer/Drawer";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <>
      <Drawer />
      <div className="hero-section">
        <Hero />
      </div>
    </>
  );
}

export default App;
