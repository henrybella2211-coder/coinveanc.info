export type Category = "Basics" | "Comparisons" | "Buying Guides";

export interface ArticleMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  readTime: string;
  lastUpdated: string; // ISO date
  lastUpdatedDisplay: string;
  image: string;
  imageAlt: string;
  specBadges: string[];
}

export const CATEGORIES: Category[] = ["Basics", "Comparisons", "Buying Guides"];

export const ARTICLES: ArticleMeta[] = [
  {
    slug: "what-is-a-pod-system",
    title: "What is a pod system? A clear guide to this type of vape kit",
    excerpt:
      "A plain-English explainer covering what pod systems actually are, how they differ from disposables and sub-ohm tanks, and who they tend to suit best.",
    category: "Basics",
    readTime: "7 min read",
    lastUpdated: "2026-09-10",
    lastUpdatedDisplay: "10 September 2026",
    image: "/images/pod-system-device-lineup.jpg",
    imageAlt: "A row of small pod-system vape devices with visible e-liquid windows laid out on a table",
    specBadges: ["2ml pod capacity", "MTL draw", "Compact size"],
  },
  {
    slug: "refillable-vs-replaceable-pods",
    title: "Refillable vs replaceable pods: what's the difference?",
    excerpt:
      "Open refillable pods and closed replaceable-coil pods work differently day to day. Here's how running costs, convenience and flavour choice compare.",
    category: "Comparisons",
    readTime: "8 min read",
    lastUpdated: "2026-09-12",
    lastUpdatedDisplay: "12 September 2026",
    image: "/images/pod-refill-e-liquid-bottle.jpg",
    imageAlt: "A pod vape device next to a small e-liquid bottle being used to refill it",
    specBadges: ["Refillable & closed", "0.6-1.2Ω coils", "Running cost varies"],
  },
  {
    slug: "how-to-choose-your-first-pod-system",
    title: "How to choose your first pod system: a simple checklist",
    excerpt:
      "A practical checklist covering battery size, pod capacity, coil cost, draw style, portability and price bands to help you pick sensibly first time.",
    category: "Buying Guides",
    readTime: "9 min read",
    lastUpdated: "2026-09-15",
    lastUpdatedDisplay: "15 September 2026",
    image: "/images/pod-kits-comparison-table.jpg",
    imageAlt: "Several different pod-system vape kits of varying sizes arranged together for comparison",
    specBadges: ["£10-£35 typical", "350-900mAh", "Beginner friendly"],
  },
];

export function getArticleBySlug(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}
