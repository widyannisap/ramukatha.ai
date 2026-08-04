import product from "@/assets/gallery-product.jpg";
import fashion from "@/assets/gallery-fashion.jpg";
import food from "@/assets/gallery-food.jpg";
import banner from "@/assets/gallery-banner.jpg";
import video from "@/assets/gallery-video.jpg";

export const portfolioCategories = [
  "All",
  "Product Photography",
  "AI Fashion Models",
  "Food Photography",
  "Marketing Banners",
  "Social Media Content",
  "Mockups",
  "Before & After",
  "AI Videos",
] as const;

export type PortfolioItem = {
  id: string;
  title: string;
  category: (typeof portfolioCategories)[number];
  image: string;
  tool: string;
  featured?: boolean;
  tall?: boolean;
  videoUrl?: string;
};

export const portfolioItems: PortfolioItem[] = [
  { id: "p1", title: "Matte Serum Studio Set", category: "Product Photography", image: product, tool: "Product Photoshoot", featured: true, tall: true },
  { id: "p2", title: "Saffron Silk Editorial", category: "AI Fashion Models", image: fashion, tool: "AI Fashion Model", featured: true, tall: true },
  { id: "p3", title: "Copper Biryani Hero", category: "Food Photography", image: food, tool: "Text to Image" },
  { id: "p4", title: "Multi-Device Launch Banner", category: "Marketing Banners", image: banner, tool: "Banner Generator", featured: true },
  { id: "p5", title: "Sneaker Drop Teaser", category: "AI Videos", image: video, tool: "Product Showcase Video", videoUrl: "https://cdn.coverr.co/videos/coverr-a-pair-of-sneakers-on-a-table-2533/1080p.mp4", featured: true },
  { id: "p6", title: "Skincare Carousel Set", category: "Social Media Content", image: product, tool: "Social Media Video", videoUrl: "https://cdn.coverr.co/videos/coverr-putting-cream-on-the-face-2999/1080p.mp4" },
  { id: "p7", title: "Device Mockup Pack", category: "Mockups", image: banner, tool: "Mockup Generator" },
  { id: "p8", title: "Studio Cleanup: Before & After", category: "Before & After", image: food, tool: "Image Enhancement" },
  { id: "p9", title: "Runway Lookbook Frames", category: "AI Fashion Models", image: fashion, tool: "AI Fashion Model", tall: true },
  { id: "p10", title: "Golden Hour Bottle Set", category: "Product Photography", image: product, tool: "Background Removal" },
  { id: "p11", title: "Festive Menu Campaign", category: "Food Photography", image: food, tool: "Photo Merge" },
  { id: "p12", title: "Cinematic Ad Loop", category: "AI Videos", image: video, tool: "Animated Advertisement", videoUrl: "https://cdn.coverr.co/videos/coverr-a-fashion-model-wearing-a-colorful-dress-3107/1080p.mp4", featured: true, tall: true },
];

export const beforeAfter = { before: food, after: product };

export const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    tagline: "Try the studio, no card required.",
    cta: "Start free",
    features: [
      "10 image credits monthly",
      "Watermarked exports",
      "Basic image tools",
      "Community support",
      "720p previews",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    tagline: "For creators shipping content weekly.",
    cta: "Upgrade to Pro",
    popular: true,
    features: [
      "500 image credits monthly",
      "100 video credits monthly",
      "HD exports, no watermark",
      "All 9 image tools + 6 video tools",
      "Private gallery & version history",
      "Email support",
    ],
  },
  {
    name: "Business",
    price: "$99",
    period: "per month",
    tagline: "For teams and high-volume sellers.",
    cta: "Talk to sales",
    features: [
      "2,500 image + 600 video credits",
      "Priority processing queue",
      "4K exports & brand kits",
      "Team seats and shared galleries",
      "API access (coming soon)",
      "Dedicated support manager",
    ],
  },
];

export const comparison = [
  { feature: "Monthly image credits", free: "10", pro: "500", business: "2,500" },
  { feature: "Monthly video credits", free: "—", pro: "100", business: "600" },
  { feature: "Watermark-free exports", free: "No", pro: "Yes", business: "Yes" },
  { feature: "Max export quality", free: "720p", pro: "HD 1080p", business: "4K" },
  { feature: "Priority processing", free: "No", pro: "No", business: "Yes" },
  { feature: "Team seats", free: "1", pro: "3", business: "15" },
  { feature: "Brand kits", free: "No", pro: "1", business: "Unlimited" },
  { feature: "Support", free: "Community", pro: "Email", business: "Dedicated" },
];

export const testimonials = [
  {
    name: "Ananya Rao",
    role: "Founder, Bloom Skincare",
    quote:
      "We replaced a $4,000 monthly photoshoot budget with Ramukatha AI. Our catalogue looks better than the studio version.",
  },
  {
    name: "Marcus Feld",
    role: "Head of Growth, Loop Commerce",
    quote:
      "The product showcase videos take four minutes instead of four days. Our ad testing velocity tripled.",
  },
  {
    name: "Priya Nair",
    role: "Freelance Creative Director",
    quote:
      "The fashion model tool is uncanny. Clients cannot tell which frames came from a camera and which came from the studio.",
  },
  {
    name: "Dan Whitfield",
    role: "Etsy Seller",
    quote:
      "I listed 60 products in a weekend with clean, consistent imagery. Conversion is up 38% since the switch.",
  },
];

export const faqs = [
  {
    q: "What is a credit?",
    a: "One credit equals one generated image. Video generations cost credits based on duration — a 5-second clip uses 5 video credits.",
  },
  {
    q: "Do I own what I create?",
    a: "Yes. On paid plans you receive a full commercial license for every image and video you generate, including advertising use.",
  },
  {
    q: "Can I use my own product photos?",
    a: "Absolutely. Upload a reference photo and the studio keeps your product accurate while rebuilding the lighting, background and scene.",
  },
  {
    q: "Do unused credits roll over?",
    a: "Pro and Business credits roll over for one billing cycle. Free plan credits reset monthly.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, cancel in one click from the billing page. You keep access until the end of the current period.",
  },
  {
    q: "Is there an API?",
    a: "An API is on the Business roadmap. Join the waitlist from your dashboard to get early access.",
  },
];