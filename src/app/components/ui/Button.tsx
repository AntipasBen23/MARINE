import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
}

export default function Button({ children, onClick, href, variant = "primary", className }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition hover:opacity-90";
  
  const variantStyles = {
    primary: "text-white",
    outline: "border-2 text-white hover:bg-white/20",
  };

  const styles = cn(baseStyles, variantStyles[variant], className);

  if (href) {
    return (
      <a href={href} className={styles} style={variant === "primary" ? { backgroundColor: 'rgb(224, 151, 65)' } : { borderColor: 'rgb(224, 151, 65)' }}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles} style={variant === "primary" ? { backgroundColor: 'rgb(224, 151, 65)' } : { borderColor: 'rgb(224, 151, 65)' }}>
      {children}
    </button>
  );
}