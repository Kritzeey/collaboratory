import About from "../components/about";
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
    </div>
  );
}
