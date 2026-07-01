import { Link } from "@tanstack/react-router";
import logoDark from "../assets2/hoy-logo-dark.png";
import { links } from "./ui-kit";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <img src={logoDark} alt="House of Yoga" className="h-16 w-auto" width={64} height={64} />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Experience the Yoga. A calm sanctuary to cultivate awareness, inner
              peace and conscious living through authentic Indian tradition.
            </p>
          </div>

          <div>
            <h4 className="text-[0.72rem] uppercase tracking-[0.28em] text-primary">Explore</h4>
            <ul className="mt-5 space-y-3">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-foreground/70 transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.72rem] uppercase tracking-[0.28em] text-primary">Connect</h4>
            <ul className="mt-5 space-y-3 text-sm text-foreground/70">
              <li>
                <a href="mailto:contact@thehouseofyoga.in" className="transition-colors hover:text-primary">
                  contact@thehouseofyoga.in
                </a>
              </li>
              <li>
                <a href="https://instagram.com/houseofyoga0" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
                  Instagram · @houseofyoga0
                </a>
              </li>
              <li>
                <a href="https://youtube.com/@Houseofyogaa" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
                  YouTube · @Houseofyogaa
                </a>
              </li>
              <li className="pt-2 text-muted-foreground">
                Kandivali West · Mumbai
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} House of Yoga. All rights reserved.</p>
          <p className="uppercase tracking-[0.24em]">Experience the Yoga.</p>
        </div>
      </div>
    </footer>
  );
}
