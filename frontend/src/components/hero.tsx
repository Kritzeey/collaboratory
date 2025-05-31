import { Star } from "lucide-react";
import Button from "./button";

export default function Hero() {
  return (
    <div className="flex h-dvh w-full items-center justify-center">
      <div
        className="flex items-center justify-center flex-col gap-8 py-20 rounded-xl px-32 
      outline-white/30 bg-white/5 outline backdrop-blur-3xl"
      >
        <div className="flex items-center justify-center flex-col">
          <div
            className="text-6xl/20 font-bold bg-linear-to-r from-mauve to-pink bg-clip-text 
          text-transparent"
          >
            Collaboratory
          </div>
          <div className="text-xl font-bold">create, collaborate.</div>
        </div>
        <Button>
          <Star />
          Get Started!
        </Button>
      </div>
    </div>
  );
}
