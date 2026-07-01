import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import logoDark from "../assets2/hoy-logo-dark.png";
import { links } from "./ui-kit";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-background/85 backdrop-blur-md py-3 shadow-[0_8px_30px_-20px_rgba(0,0,0,0.25)]" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoDark} alt="House of Yoga" className="h-14 w-auto" width={56} height={56} />
          <span className="hidden text-[0.8rem] uppercase tracking-[0.32em] text-foreground sm:block">
            House of Yoga
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[0.74rem] uppercase tracking-[0.18em] text-foreground/70 transition-colors duration-300 hover:text-primary [&.active]:text-primary"
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Toggle menu"
        >
          <span className={`h-px w-6 bg-foreground transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-foreground transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-foreground transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      <div
        className={`overflow-hidden bg-background/95 backdrop-blur-md transition-all duration-500 lg:hidden ${
          open ? "max-h-96 border-t border-border" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="py-3 text-[0.8rem] uppercase tracking-[0.18em] text-foreground/75 [&.active]:text-primary"
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
