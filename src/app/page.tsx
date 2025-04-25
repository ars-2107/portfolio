import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Playground from "./components/Playground";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";
import "./bg.css"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] bg-opacity-100">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Navbar />
      <div className="container mt-24 mx-auto px-6 py-4 md:px-12 md:py-6 sm:px-24 sm:py-8">
        <Hero />
        <Achievements />
        <About />
        <Projects />
        <Playground />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
