import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { portfolioCategories, portfolioItems, type PortfolioItem } from "@/data/site";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — AI Photography & Video Showcase" },
      {
        name: "description",
        content:
          "Browse AI-generated product photography, fashion models, food shots, banners and videos made with Ramukatha AI.",
      },
      { property: "og:title", content: "Portfolio — AI Photography & Video Showcase" },
      {
        property: "og:description",
        content: "Real client-grade results generated with the Ramukatha AI studio.",
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<PortfolioItem | null>(null);

  const items = useMemo(
    () =>
      portfolioItems.filter(
        (item) =>
          (category === "All" || item.category === category) &&
          (item.title + item.tool + item.category).toLowerCase().includes(query.toLowerCase()),
      ),
    [category, query],
  );

  const featured = portfolioItems.filter((i) => i.featured);

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="max-w-2xl">
        <span className="inline-flex rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Portfolio
        </span>
        <h1 className="mt-5 text-4xl font-bold md:text-5xl">
          Work generated in the <span className="text-gradient">Ramukatha studio</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          Every frame below was produced from a prompt and a reference photo — no camera, no set, no
          retoucher.
        </p>
      </div>

      <section className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Featured works
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {featured.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item)}
              className="group relative overflow-hidden rounded-3xl border border-border shadow-soft"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 text-left">
                <span className="block text-sm font-semibold text-white">{item.title}</span>
                <span className="block text-xs text-white/70">{item.category}</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <div className="mt-16 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                category === cat
                  ? "border-transparent bg-brand text-primary-foreground"
                  : "border-border text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative w-full lg:max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search works or tools"
            className="rounded-full pl-9"
          />
        </div>
      </div>

      {items.length === 0 ? (
        <p className="mt-16 text-center text-muted-foreground">
          No works match that search yet. Try another category.
        </p>
      ) : (
        <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item)}
              className="group block w-full break-inside-avoid overflow-hidden rounded-3xl border border-border bg-card text-left shadow-soft"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                  item.tall ? "h-[26rem]" : "h-64"
                }`}
              />
              <span className="flex items-center justify-between gap-3 p-4">
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold">{item.title}</span>
                  <span className="block text-xs text-muted-foreground">{item.tool}</span>
                </span>
                <Badge variant="secondary" className="shrink-0 rounded-full">
                  {item.category.split(" ")[0]}
                </Badge>
              </span>
            </button>
          ))}
        </div>
      )}

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-3xl overflow-hidden rounded-3xl p-0">
          {active && (
            <>
              <DialogTitle className="sr-only">{active.title}</DialogTitle>
              <img src={active.image} alt={active.title} className="max-h-[70vh] w-full object-contain bg-black" />
              <div className="flex items-center justify-between gap-4 p-5">
                <div className="min-w-0">
                  <p className="truncate font-semibold">{active.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {active.category} · {active.tool}
                  </p>
                </div>
                <button
                  onClick={() => setActive(null)}
                  aria-label="Close preview"
                  className="rounded-full border border-border p-2 text-muted-foreground hover:bg-secondary"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}