import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function Button(props: Props) {
  return (
    <button
      className="flex px-12 gap-2 font-semibold text-white rounded-3xl cursor-pointer 
    items-center justify-center h-12 bg-linear-to-r from-lavender to-blue hover:from-blue
    hover:to-sapphire duration-250 transition-colors"
    >
      {props.children}
    </button>
  );
}
