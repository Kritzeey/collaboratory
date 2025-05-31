import { Mail } from "lucide-react";
import { Link } from "react-router";
import Footer from "./footer";

export default function Contact() {
  return (
    <div className="relative gap-8 h-dvh w-full items-center justify-center flex flex-col">
      <div
        className="font-bold text-5xl/20 bg-linear-to-r from-blue to-sapphire bg-clip-text 
        text-transparent"
      >
        Contact Me
      </div>
      <div className="flex gap-8 p-6 outline outline-white/30 bg-white/5 rounded-xl">
        <Link to="https://www.linkedin.com/in/valhize">
          <img src="linkedin.svg" className="size-16" />
        </Link>
        <Link to="https://github.com/Kritzeey">
          <img src="github.svg" className="size-16" />
        </Link>
        <Link to="mailto:valerian14emmanuel@gmail.com">
          <Mail size={64} />
        </Link>
      </div>

      <Footer />
    </div>
  );
}
