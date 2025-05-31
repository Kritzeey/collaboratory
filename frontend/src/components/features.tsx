import { FileText, KanbanSquare, MessageCircleMore } from "lucide-react";
import Card from "./card";

export default function Features() {
  return (
    <div className="gap-12 h-dvh flex flex-col w-full items-center justify-center">
      <div
        className="font-bold text-5xl/20 bg-linear-to-r from-blue to-sapphire bg-clip-text 
      text-transparent"
      >
        Features
      </div>
      <div className="grid grid-cols-3 gap-16 max-w-4xl">
        <Card
          iconColor="#a6e3a1"
          icon={<MessageCircleMore size={36} color="white" />}
          text="Real-time chat*"
          subtext="Communicate with your team. Share your ideas, images, and more!"
        />
        <Card
          iconColor="#cba6f7"
          icon={<KanbanSquare size={36} color="white" />}
          text="Kanban board*"
          subtext="Track your progress and organize tasks. Keep your project on track!"
        />
        <Card
          iconColor="#f5e0dc"
          icon={<FileText size={36} color="white" />}
          text="Markdown*"
          subtext="Write your ideas and targets using the feature-rich markdown editor!"
        />
      </div>
      <div>*coming soon!</div>
    </div>
  );
}
