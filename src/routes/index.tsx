import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Clock,
  Download,
  Image as ImageIcon,
  Layers,
  Palette,
  Quote,
  Shield,
  Sparkles,
  Video,
  Wand2,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { beforeAfter, faqs, plans, portfolioItems, testimonials } from "@/data/site";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ramukatha AI — Create Stunning AI Images & Videos" },
      {
        name: "description",
        content:
          "Ramukatha AI turns prompts and product photos into studio-grade images and marketing videos in minutes. Start free with 10 credits.",
      },
      { property: "og:title", content: "Ramukatha AI — Create Stunning AI Images & Videos" },
      {
        property: "og:description",
        content:
          "Studio-grade AI photography and video for brands, creators and online sellers. Start free.",
      },
    ],
  }),
  component: Index,
});

const imageTools = [
  { icon: Wand2, name: "Text to Image", desc: "Describe a scene, get a finished frame." },
  { icon: ImageIcon, name: "Product Photoshoot", desc: "Studio sets around your real product." },
  { icon: Palette, name: "AI Fashion Model", desc: "On-model shots without a casting call." },
  { icon: Layers, name: "Background Removal", desc: "Clean cutouts with true edge detail." },
  { icon: Sparkles, name: "Image Enhancement", desc: "Upscale, denoise and relight in one pass." },
  { icon: Zap, name: "Banner Generator", desc: "Campaign-ready sizes for every channel." },
];

const videoTools = [
  { icon: Video, name: "Text to Video", desc: "Prompt to cinematic clip in seconds." },
  { icon: Sparkles, name: "Image to Video", desc: "Bring any still into motion." },
  { icon: Zap, name: "Product Showcase", desc: "Turntables, reveals and hero shots." },
];

const features = [
  { icon: Zap, title: "Minutes, not weeks", desc: "Full campaigns rendered while your coffee is still warm." },
  { icon: Shield, title: "Commercial license", desc: "Every paid generation ships with full commercial rights." },
  { icon: Layers, title: "Brand consistency", desc: "Save brand kits so every asset matches your identity." },
  { icon: Download, title: "Export anywhere", desc: "HD and 4K exports sized for web, ads and print." },
  { icon: Clock, title: "Priority processing", desc: "Business plans jump the queue during peak hours." },
  { icon: Palette, title: "60+ visual styles", desc: "Editorial, lifestyle, minimal, festive and more." },
];

const steps = [
  { n: "01", title: "Upload or describe", desc: "Drop in a product photo, or just type what you imagine." },
  { n: "02", title: "Pick a style", desc: "Choose lighting, mood and format from curated presets." },
  { n: "03", title: "Generate", desc: "The studio renders variations you can refine instantly." },
  { n: "04", title: "Download & publish", desc: "Export watermark-free assets straight to your channels." },
];

function Index() {
  return (
    <>
      <Hero />
      <ToolShowcase />
      <BeforeAfter />
      <GalleryPreview />
      <Features />
      <HowItWorks />
      <PricingPreview />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={hero}
        alt="Abstract gradient artwork generated with Ramukatha AI"
        width={1600}
        height={1104}
        className="absolute inset-0 h-full w-full object-cover opacity-35 dark:opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border glass-panel px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            AI Creative Studio
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] md:text-6xl">
            Create stunning AI images & videos{" "}
            <span className="text-gradient">in minutes</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Ramukatha AI replaces the photoshoot, the studio and the edit suite. Upload a product,
            describe the scene, and publish campaign-ready visuals the same day.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-brand text-primary-foreground shadow-elegant hover:opacity-90">
              <Link to="/pricing">
                Start creating <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link to="/portfolio">View portfolio</Link>
            </Button>
          </div>
          <dl className="mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-6 md:grid-cols-4">
            {[
              ["2.4M+", "Assets generated"],
              ["18k", "Active brands"],
              ["45s", "Average render"],
              ["4.9/5", "Creator rating"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="text-2xl font-bold">{value}</dt>
                <dd className="text-xs text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-semibold uppercase tracking-wider text-primary">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-bold md:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function ToolShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <SectionHead
        eyebrow="AI Studio"
        title="Fifteen tools, one creative workspace"
        sub="Image and video generators built for commerce, not novelty."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {imageTools.map((tool) => (
          <div
            key={tool.name}
            className="group rounded-3xl border border-border bg-card/70 p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
          >
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand">
              <tool.icon className="h-5 w-5 text-primary-foreground" />
            </span>
            <h3 className="mt-5 text-base font-semibold">{tool.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{tool.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {videoTools.map((tool) => (
          <div
            key={tool.name}
            className="rounded-3xl border border-accent/30 bg-accent/10 p-6 shadow-soft"
          >
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent">
              <tool.icon className="h-5 w-5 text-accent-foreground" />
            </span>
            <h3 className="mt-5 text-base font-semibold">{tool.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{tool.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function BeforeAfter() {
  const [pos, setPos] = useState(50);
  return (
    <section className="bg-card/40 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHead
          eyebrow="Before & after"
          title="A phone snapshot becomes a studio shot"
          sub="Drag the slider to compare the original upload with the generated result."
        />
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-border shadow-elegant">
          <img
            src={beforeAfter.before}
            alt="Original uploaded product photo"
            loading="lazy"
            className="h-[24rem] w-full object-cover md:h-[32rem]"
          />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
            <img
              src={beforeAfter.after}
              alt="AI generated studio result"
              loading="lazy"
              className="h-[24rem] w-[100vw] max-w-none object-cover md:h-[32rem]"
            />
          </div>
          <div
            className="pointer-events-none absolute inset-y-0 w-0.5 bg-primary"
            style={{ left: `${pos}%` }}
          />
          <input
            type="range"
            min={0}
            max={100}
            value={pos}
            aria-label="Compare before and after"
            onChange={(e) => setPos(Number(e.target.value))}
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
          <span className="absolute bottom-4 left-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
            After
          </span>
          <span className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
            Before
          </span>
        </div>
      </div>
    </section>
  );
}

function GalleryPreview() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <SectionHead eyebrow="Portfolio" title="Made entirely inside Ramukatha AI" />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.slice(0, 6).map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-3xl border border-border shadow-soft"
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5">
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="text-xs text-white/70">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button asChild variant="outline" size="lg" className="rounded-full">
          <Link to="/portfolio">
            Explore the full gallery <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="bg-card/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead eyebrow="Why teams switch" title="Built for output, not experiments" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-3xl border border-border bg-background p-6 shadow-soft">
              <f.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <SectionHead eyebrow="How it works" title="Four steps from idea to asset" />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="rounded-3xl border border-border bg-card/70 p-6">
            <span className="text-3xl font-bold text-gradient">{s.n}</span>
            <h3 className="mt-4 font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PricingPreview() {
  return (
    <section className="bg-card/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead eyebrow="Pricing" title="Start free, scale when you ship more" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-3xl border p-8 ${
                plan.popular ? "border-primary/50 bg-background shadow-elegant" : "border-border bg-background"
              }`}
            >
              <h3 className="font-semibold">{plan.name}</h3>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {plan.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={plan.popular ? "default" : "outline"}
                className={`mt-8 rounded-full ${plan.popular ? "bg-brand text-primary-foreground hover:opacity-90" : ""}`}
              >
                <Link to="/pricing">{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <SectionHead eyebrow="Testimonials" title="Loved by brands and solo creators" />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {testimonials.map((t) => (
          <figure key={t.name} className="rounded-3xl border border-border bg-card/70 p-7 shadow-soft">
            <Quote className="h-6 w-6 text-primary" />
            <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand text-sm font-semibold text-primary-foreground">
                {t.name.charAt(0)}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold">{t.name}</span>
                <span className="block truncate text-xs text-muted-foreground">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="bg-card/40 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHead eyebrow="FAQ" title="Questions, answered" />
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((faq) => (
            <AccordionItem key={faq.q} value={faq.q}>
              <AccordionTrigger className="text-left text-base">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="overflow-hidden rounded-[2rem] bg-brand p-10 text-center shadow-elegant md:p-20">
        <h2 className="text-3xl font-bold text-primary-foreground md:text-5xl">
          Your studio is ready when you are
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-primary-foreground/80">
          Join 18,000 brands generating photography and video without a camera. 10 free credits, no
          card needed.
        </p>
        <Button asChild size="lg" variant="secondary" className="mt-9 rounded-full">
          <Link to="/pricing">
            Start creating free <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
