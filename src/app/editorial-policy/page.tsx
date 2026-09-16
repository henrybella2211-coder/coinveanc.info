import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "How Pod System Guide researches, writes and keeps its content up to date.",
  alternates: { canonical: "/editorial-policy" },
};

export default function EditorialPolicyPage() {
  return (
    <div className="bg-white">
      <div className="bg-tint">
        <Container className="py-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Editorial Policy", href: "/editorial-policy" }]} />
          <h1 className="mt-4 font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
            Editorial policy
          </h1>
          <p className="mt-3 text-sm text-slate-600">Last updated 15 September 2026</p>
        </Container>
      </div>
      <Container className="max-w-3xl space-y-5 py-12 text-base leading-relaxed text-slate-700">
        <p>
          This page sets out how {SITE.name} researches, writes and maintains its guides, so you
          know what to expect from the content on this site.
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground">How we research</h2>
        <p>
          Our guides are written around the pod-system device category as a whole, not around
          individual products. When we state a factual specification, such as a coil resistance
          range or a regulatory pod capacity limit, we base it on publicly available regulation
          and widely documented industry norms rather than a single manufacturer&rsquo;s marketing
          material.
        </p>
        <p>
          For regulatory and health-related claims, such as UK nicotine strength limits, the age
          of sale for vaping products, or the single-use vapes ban, we reference official UK
          sources including GOV.UK, the Medicines and Healthcare products Regulatory Agency
          (MHRA), the NHS, and Trading Standards guidance.
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground">How we write</h2>
        <p>
          We clearly separate factual specification claims from editorial opinion. Where you see
          phrasing like &ldquo;we think&rdquo; or &ldquo;in our view&rdquo;, that is our own
          editorial judgement, not a verified fact. We do not publish invented statistics, invented
          review scores, fake testimonials or claims of having personally tested a product, since
          we do not run product testing on this site.
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground">No paid placement</h2>
        <p>
          {SITE.name} does not accept payment, free products, or any other consideration in
          exchange for favourable coverage of a brand, retailer or specific product. Where a
          named product or manufacturer appears in an article, it is included to illustrate a
          point about the wider pod-system category, not as sponsored content.
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground">Keeping content current</h2>
        <p>
          Each guide displays a &ldquo;Last updated&rdquo; date. We review published guides
          periodically, particularly when UK vaping regulation changes, such as the 2025 ban on
          single-use disposable vapes, and update the relevant pages accordingly.
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground">Corrections</h2>
        <p>
          If you spot a factual error on this site, please tell us via our{" "}
          <Link href="/contact" className="text-primary hover:text-primary-dark font-medium">
            contact page
          </Link>
          . We will review genuine corrections promptly and update the relevant page, noting the
          revised date.
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground">Who writes our content</h2>
        <p>
          Content is written and edited by our UK-based editorial team. In keeping with our
          approach to accuracy, we do not publish fictitious author names, qualifications or
          biographies.
        </p>
      </Container>
    </div>
  );
}
