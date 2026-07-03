import { Link } from "@tanstack/react-router";

const WHATSAPP_URL = "https://wa.me/919372903445?text=Hi%20House%20of%20Yoga%2C%20I%27d%20like%20to%20join%20a%20free%20trial%20class.";

export const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/practice", label: "Practice With Us" },
  { to: "/wellness", label: "Wellness Programs" },
  { to: "/contact", label: "Contact" },
] as const;

export { WHATSAPP_URL };

interface CTAProps {
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
}

const base =
  "inline-flex items-center justify-center rounded-full px-8 py-3.5 text-[0.78rem] uppercase tracking-[0.22em] font-normal transition-all duration-500";

export function CTAButton({
  children,
  variant = "solid",
  className = "",
}: CTAProps) {
  const styles =
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:bg-foreground hover:text-background"
      : variant === "outline"
        ? "border border-foreground/30 text-foreground hover:bg-foreground hover:text-background"
        : "text-foreground hover:opacity-60";
  return <span className={`${base} ${styles} ${className}`}>{children}</span>;
}

export function CTALink({
  to,
  ...props
}: CTAProps & { to: string }) {
  return (
    <Link to={to}>
      <CTAButton {...props} />
    </Link>
  );
}

export function WhatsAppLink({
  children,
  variant = "solid",
  className = "",
}: CTAProps) {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
      <CTAButton variant={variant} className={className}>
        {children}
      </CTAButton>
    </a>
  );
}
