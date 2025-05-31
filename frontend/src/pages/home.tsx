import About from "../components/about";
import Contact from "../components/contact";
import Features from "../components/features";
import Hero from "../components/hero";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Contact />
    </div>
  );
}
