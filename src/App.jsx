import About from "./comoponents/About";
import Hero from "./comoponents/Hero";
import Navbar from "./comoponents/Navbar";

function App() {
  return (
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
      </main>
  )
}

export default App;
