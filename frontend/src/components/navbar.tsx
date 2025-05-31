import { FlaskRound } from "lucide-react";
import { Link } from "react-router";
import Button from "./button";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 z-50">
      <nav className="flex h-14 items-center justify-between max-w-6xl w-full mx-auto">
        <Link to="/">
          <span className="flex items-center justify-center gap-2 font-bold">
            <FlaskRound />
            Collaboratory
          </span>
        </Link>
        <div>
          <div
            className="outline-white/30 backdrop-blur-xs bg-white/5 flex items-center gap-12 
          justify-center outline h-12 px-8 rounded-3xl"
          >
            <Link to="/">Features</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
          </div>
        </div>
        <Button>Log in</Button>
      </nav>
    </header>
  );
}
