import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import GuidesGrid from "@/components/GuidesGrid";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Every Pod System Guide explainer in one place: what pod systems are, how refillable and replaceable pods differ, and how to choose your first kit.",
  alternates: { canonical: "/guides" },
  openGraph: {
    title: `Guides | ${SITE.name}`,
    description:
      "Every Pod System Guide explainer in one place: what pod systems are, how refillable and replaceable pods differ, and how to choose your first kit.",
    url: `${SITE.url}/guides`,
  },
};

export default function GuidesPage() {
  return (
    <section>
      <div className="bg-tint">
        <Container className="py-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }]} />
          <h1 className="mt-4 font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
            Pod-system guides
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Structured, catalogue-style explainers covering the pod-system category: what it is,
            how the formats differ, and how to choose sensibly. Filter by topic below.
          </p>
        </Container>
      </div>
      <Container className="py-12">
        <GuidesGrid />
      </Container>
    </section>
  );
}
