import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { About, Skills, Services, Projects, AI, Learn } from "./components/Sections";
import { Contact, Footer } from "./components/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#05060a] text-slate-200">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.10),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.10),transparent_55%)]" />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects />
          <AI />
          <Learn />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
