import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import ArticleCard from "@/components/ArticleCard";
import { ARTICLES } from "@/lib/articles";

const CATEGORY_TILES = [
  {
    label: "Starter Kits",
    description: "Simple, all-in-one pod kits built for a first move away from smoking.",
  },
  {
    label: "Refillable Pods",
    description: "Open-system pods you fill with your own e-liquid and re-coil yourself.",
  },
  {
    label: "Prefilled-style Pods",
    description: "Closed pods with a fixed or replaceable coil unit, filled ready to fit.",
  },
  {
    label: "Accessories",
    description: "Replacement coils, spare pods, chargers and the bits kits run on.",
  },
];

const CHOOSE_CHECKLIST = [
  {
    title: "Battery capacity",
    detail: "Smaller pens run around 350-500mAh, larger pod kits stretch to 800-1000mAh or more.",
  },
  {
    title: "Pod capacity",
    detail: "UK-regulated pods and tanks hold a maximum of 2ml of nicotine-containing e-liquid.",
  },
  {
    title: "Coil resistance and cost",
    detail: "Lower-ohm coils suit a looser draw; check replacement coils are easy to find before buying.",
  },
  {
    title: "Draw style",
    detail: "Tighter MTL draws feel closest to a cigarette; looser draws suit ex-vapers who prefer more vapour.",
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-tint">
        <Container className="py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary-dark">
              An independent UK pod-system reference
            </p>
            <h1 className="font-heading text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
              Understanding vape kits and pod systems.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Pod System Guide explains the pod-system category in plain terms: what these devices
              are, how the different formats work, and how to compare them before you buy. No
              brand promotion, just a structured reference for adults who already smoke or vape.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/guides"
                className="inline-flex items-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Browse guides
              </Link>
              <Link
                href="/guides/what-is-a-pod-system"
                className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary-dark ring-1 ring-primary/20 transition-colors hover:bg-tint"
              >
                Start with the basics
              </Link>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {CATEGORY_TILES.map((tile) => (
              <div
                key={tile.label}
                className="rounded-lg bg-white p-4 shadow-[0_4px_16px_-4px_rgba(29,111,224,0.15)] ring-1 ring-slate-100"
              >
                <h2 className="font-heading text-sm font-bold text-foreground">{tile.label}</h2>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{tile.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                What is a pod system?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                A pod system is a type of reusable vape kit built around a small, replaceable pod
                rather than a large refillable tank. The pod clips or slots into a rechargeable
                battery section, and either holds its own coil or accepts a coil you fit yourself.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                They sit between two other device types you will see in a UK vape shop:
                disposables, which were withdrawn from sale in June 2025 under UK single-use vape
                regulations, and larger sub-ohm tanks aimed at high-vapour, direct-to-lung vaping.
                Pod systems are usually smaller, simpler to use, and better suited to a
                mouth-to-lung style draw that feels closer to smoking.
              </p>
              <Link
                href="/guides/what-is-a-pod-system"
                className="mt-5 inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Read the full explainer &rarr;
              </Link>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg ring-1 ring-slate-100">
              <Image
                src="/images/pod-system-device-close-up.jpg"
                alt="Close-up of a grey pod-system vape device showing its compact battery section"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-tint">
        <Container className="py-16">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                Guides
              </h2>
              <p className="mt-2 max-w-xl text-slate-600">
                Structured explainers covering the pod-system category, written to help you
                understand the format before you compare individual kits.
              </p>
            </div>
            <Link
              href="/guides"
              className="inline-flex items-center rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-primary-dark ring-1 ring-primary/20 hover:bg-primary/5"
            >
              View all guides
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16">
          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            How to choose: a quick checklist
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Four things worth checking before you commit to a pod kit. Our{" "}
            <Link href="/guides/how-to-choose-your-first-pod-system" className="text-primary hover:text-primary-dark font-medium">
              full buying checklist
            </Link>{" "}
            goes into more detail on each.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {CHOOSE_CHECKLIST.map((item) => (
              <div key={item.title} className="rounded-lg bg-tint p-5">
                <h3 className="font-heading text-base font-bold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
