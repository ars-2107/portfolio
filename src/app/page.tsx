import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
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
      <div className="container mt-24 mx-auto px-12 py-4">
        <Hero />
        <Achievements />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
