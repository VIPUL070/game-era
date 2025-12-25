import About from "./comoponents/About";
import Collab from "./comoponents/Collab";
import Contact from "./comoponents/Contact";
import Features from "./comoponents/Features";
import Footer from "./comoponents/Footer";
import Hero from "./comoponents/Hero";
import Navbar from "./comoponents/Navbar";
import Story from "./comoponents/Story";

function App() {
  return (
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Story />
        <Collab />
        <Contact />
        <Footer />
      </main>
  )
}

export default App;
