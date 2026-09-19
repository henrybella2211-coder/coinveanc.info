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
  {
    slug: "pod-system-battery-capacity-mah-explained",
    title: "Pod system battery capacity explained: mAh and what it means for you",
    excerpt:
      "What the mAh figure on a pod system actually measures, how to turn it into a rough idea of runtime between charges, and why a bigger battery isn't automatically the right choice.",
    category: "Basics",
    readTime: "8 min read",
    lastUpdated: "2026-09-14",
    lastUpdatedDisplay: "14 September 2026",
    image: "/images/pod-device-battery-capacity.jpg",
    imageAlt: "A purple and pink pod-system vape device standing upright on a reflective surface, showing its integrated display",
    specBadges: ["350-1500mAh range", "USB-C charging", "Runtime varies"],
  },
  {
    slug: "al-fakher-hypermax-prime-50k",
    title: "Al Fakher HyperMax Prime 50K: where it fits in the pod system category",
    excerpt:
      "A closed, prefilled pod kit built around a coil-and-pod \"Snap Dual\" module. Here's how it maps onto the refillable-vs-replaceable split and typical pod-system battery bands.",
    category: "Buying Guides",
    readTime: "8 min read",
    lastUpdated: "2026-09-18",
    lastUpdatedDisplay: "18 September 2026",
    image: "/images/pod-vape-pen-devices-flatlay.jpg",
    imageAlt: "Several slim, pen-shaped rechargeable pod vape devices arranged in a diagonal pattern on a dark surface",
    specBadges: ["1000mAh battery", "Snap Dual pods", "USB-C charging"],
  },
  {
    slug: "single-coil-vs-dual-coil-pod-systems",
    title: "Single-coil vs dual-coil pod systems: what's the difference?",
    excerpt:
      "How pods built around one coil compare with pods that use two working together, and what that tends to mean for vapour, flavour and how quickly you get through battery and e-liquid.",
    category: "Comparisons",
    readTime: "8 min read",
    lastUpdated: "2026-09-17",
    lastUpdatedDisplay: "17 September 2026",
    image: "/images/pod-systems-single-vs-dual-coil.jpg",
    imageAlt: "Two pod-system vape devices in different colourways, one standing and one lying flat, positioned together for comparison",
    specBadges: ["1 or 2 coils", "MTL vs looser draw", "Consumption varies"],
  },
];

export function getArticleBySlug(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}
