import { Link } from "react-router";

export default function About() {
  return (
    <div className="h-dvh flex flex-col gap-8 w-full items-center justify-center">
      <div className="flex items-center justify-center flex-col">
        <div
          className="font-bold text-5xl/20 bg-linear-to-r from-blue to-sapphire bg-clip-text 
        text-transparent"
        >
          About
        </div>
        <div
          className="font-semibold text-xl max-w-[32rem] w-full flex items-center justify-center 
      text-center"
        >
          This project was made as a hobby project by Valerian, a computer
          science student in Universitas Indonesia
        </div>
      </div>
      <div
        className="flex items-center justify-center flex-col gap-8 p-8 rounded-xl outline 
      outline-white/30 bg-white/5"
      >
        <div className="w-full text-center font-bold text-2xl">
          Techs and Libraries used
        </div>
        <div className="grid grid-cols-4 gap-8">
          <div className="flex flex-col gap-6 items-center justify-center col-span-1 text-center">
            Frontend
            <Link to="https://react.dev/">
              <img className="size-24" src="react.svg" />
            </Link>
          </div>
          <div className="flex flex-col gap-6 items-center justify-center col-span-2 text-center">
            Common
            <div className="flex gap-8">
              <Link to="https://www.typescriptlang.org/">
                <img className="size-24" src="typescript.svg" />
              </Link>
              <Link to="https://nodejs.org/en">
                <img className="size-24" src="nodejs.svg" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-center col-span-1 text-center">
            Backend
            <Link to="https://nestjs.com/">
              <img className="size-24" src="nestjs.svg" />
            </Link>
          </div>
        </div>
        <div className="text-center flex w-full flex-col gap-6 items-center justify-center">
          Others
          <div className="flex w-full items-center justify-between">
            <Link to="https://vite.dev/">
              <img className="size-16" src="vite.svg" />
            </Link>
            <Link to="https://reactrouter.com/">
              <img className="size-16" src="reactrouter.svg" />
            </Link>
            <Link to="https://www.postgresql.org/">
              <img className="size-16" src="postgresql.svg" />
            </Link>
            <Link to="https://www.prisma.io/">
              <img className="size-16" src="prisma.svg" />
            </Link>
            <Link to="https://socket.io/">
              <img className="size-16" src="socketio.svg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
