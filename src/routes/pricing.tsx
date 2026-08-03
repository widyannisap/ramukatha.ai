import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { comparison, faqs, plans } from "@/data/site";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Ramukatha AI Plans & Credits" },
      {
        name: "description",
        content:
          "Simple plans for AI image and video generation: start free, scale with Pro, or run a team on Business.",
      },
      { property: "og:title", content: "Pricing — Ramukatha AI Plans & Credits" },
      {
        property: "og:description",
        content: "Start free with 10 credits, or unlock HD watermark-free exports on Pro.",
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Pricing
        </span>
        <h1 className="mt-5 text-4xl font-bold md:text-5xl">
          Plans that scale with your <span className="text-gradient">creative output</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          Every plan includes the full studio. Pay only for the credits you actually generate with.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-3xl border p-8 ${
              plan.popular
                ? "border-primary/50 bg-card shadow-elegant"
                : "border-border bg-card/60 shadow-soft"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-8 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-primary-foreground">
                Most popular
              </span>
            )}
            <h2 className="text-lg font-semibold">{plan.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{plan.tagline}</p>
            <p className="mt-6 flex items-baseline gap-2">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-sm text-muted-foreground">{plan.period}</span>
            </p>
            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <Button
              className={`mt-8 w-full rounded-full ${
                plan.popular ? "bg-brand text-primary-foreground hover:opacity-90" : ""
              }`}
              variant={plan.popular ? "default" : "outline"}
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>

      <section className="mt-24">
        <h2 className="text-center text-3xl font-bold">Compare every feature</h2>
        <div className="mt-8 overflow-x-auto rounded-3xl border border-border bg-card/60">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="p-5 font-semibold">Feature</th>
                <th className="p-5 font-semibold">Free</th>
                <th className="p-5 font-semibold">Pro</th>
                <th className="p-5 font-semibold">Business</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.feature} className="border-b border-border/60 last:border-0">
                  <td className="p-5 font-medium">{row.feature}</td>
                  {[row.free, row.pro, row.business].map((value, i) => (
                    <td key={i} className="p-5 text-muted-foreground">
                      {value === "—" || value === "No" ? (
                        <Minus className="h-4 w-4" />
                      ) : value === "Yes" ? (
                        <Check className="h-4 w-4 text-accent" />
                      ) : (
                        value
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-3xl">
        <h2 className="text-center text-3xl font-bold">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((faq) => (
            <AccordionItem key={faq.q} value={faq.q}>
              <AccordionTrigger className="text-left text-base">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mt-24 overflow-hidden rounded-3xl border border-border bg-brand p-10 text-center shadow-elegant md:p-16">
        <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
          Your next campaign is ten minutes away
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
          Start with 10 free credits. No credit card, no watermarked surprises on paid plans.
        </p>
        <Button asChild size="lg" variant="secondary" className="mt-8 rounded-full">
          <Link to="/portfolio">See what's possible</Link>
        </Button>
      </section>
    </div>
  );
}