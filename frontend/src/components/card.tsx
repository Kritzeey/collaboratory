interface Props {
  icon: any;
  text: string;
  subtext: string;
  iconColor: string;
}

export default function Card(props: Props) {
  return (
    <div
      className="p-6 flex flex-col items-center gap-4 rounded-xl w-full col-span-1 outline 
    outline-white/30 bg-white/5"
    >
      <div
        className="size-16 rounded-xl flex items-center justify-center"
        style={{ background: props.iconColor }}
      >
        {props.icon}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="w-full font-bold text-xl">{props.text}</div>
        <div className="font-medium text-md">{props.subtext}</div>
      </div>
    </div>
  );
}
