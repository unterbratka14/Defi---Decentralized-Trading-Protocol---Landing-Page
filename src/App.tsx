import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Developers from "./components/Developers";
import SubScribe from "./components/SubScribe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Developers />
        <SubScribe />
        <Footer />
      </div>
    </>
  );
}

export default App;
