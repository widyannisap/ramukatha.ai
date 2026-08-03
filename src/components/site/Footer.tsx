import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

const groups = [
  {
    title: "Product",
    links: [
      { label: "AI Studio", to: "/pricing" },
      { label: "Portfolio", to: "/portfolio" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    title: "Use cases",
    links: [
      { label: "Product photography", to: "/portfolio" },
      { label: "Fashion models", to: "/portfolio" },
      { label: "Marketing videos", to: "/portfolio" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/" },
      { label: "Contact", to: "/" },
      { label: "Careers", to: "/" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand">
                <Sparkles className="h-4.5 w-4.5 text-primary-foreground" />
              </span>
              <span className="text-lg font-semibold">
                Ramukatha <span className="text-gradient">AI</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Studio-grade AI images and videos for brands, creators and online sellers — generated
              in minutes, licensed for commercial use.
            </p>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold">{group.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ramukatha AI. All rights reserved.</p>
          <p className="flex gap-5">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Security</span>
          </p>
        </div>
      </div>
    </footer>
  );
}