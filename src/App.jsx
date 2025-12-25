import About from "./comoponents/About";
import Features from "./comoponents/Features";
import Hero from "./comoponents/Hero";
import Navbar from "./comoponents/Navbar";

function App() {
  return (
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Features />
      </main>
  )
}

export default App;
