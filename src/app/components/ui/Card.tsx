import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={cn("bg-white p-6 rounded-lg shadow-sm", className)}>
      {children}
    </div>
  );
}