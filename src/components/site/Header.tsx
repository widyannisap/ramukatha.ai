import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { LogOut, Menu, Moon, Sun, Sparkles, User as UserIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/theme";
import { useAuth } from "@/lib/auth";

const nav = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/pricing", label: "Pricing" },
];

export function Header() {
  const { theme, toggle } = useTheme();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-panel border-x-0 border-t-0">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 md:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand shadow-elegant">
            <Sparkles className="h-4.5 w-4.5 text-primary-foreground" />
          </span>
          <span className="truncate text-lg font-semibold tracking-tight">
            Ramukatha <span className="text-gradient">AI</span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="mr-2 hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "text-foreground bg-secondary" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={toggle}>
            {theme === "dark" ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </Button>

          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <Link to="/pricing">Pricing</Link>
          </Button>

          {user ? (
            <div className="hidden items-center gap-2 sm:flex">
              <span className="flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm font-medium">
                <UserIcon className="h-4 w-4 text-muted-foreground" />
                <span className="max-w-[10rem] truncate">
                  {user.email}
                </span>
              </span>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Sign out"
                onClick={async () => {
                  await signOut();
                  navigate({ to: "/" });
                }}
              >
                <LogOut className="h-4.5 w-4.5" />
              </Button>
            </div>
          ) : (
            <>
              <Button asChild variant="ghost" className="hidden sm:inline-flex">
                <Link to="/signin">Sign in</Link>
              </Button>
              <Button asChild className="hidden rounded-full bg-brand text-primary-foreground shadow-elegant hover:opacity-90 sm:inline-flex">
                <Link to="/signin">Start creating</Link>
              </Button>
            </>
          )}

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border px-5 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          {user ? (
            <div className="mt-3 flex items-center justify-between gap-2 rounded-xl border border-border px-3 py-2">
              <span className="flex min-w-0 items-center gap-2 text-sm font-medium">
                <UserIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="truncate">{user.email}</span>
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={async () => {
                  await signOut();
                  setOpen(false);
                  navigate({ to: "/" });
                }}
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <>
              <Button asChild variant="ghost" className="mt-3 w-full">
                <Link to="/signin" onClick={() => setOpen(false)}>
                  Sign in
                </Link>
              </Button>
              <Button asChild className="mt-2 w-full rounded-full bg-brand text-primary-foreground">
                <Link to="/signin" onClick={() => setOpen(false)}>
                  Start creating
                </Link>
              </Button>
            </>
          )}
        </div>
      )}
    </header>
  );
}