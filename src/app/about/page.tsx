import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "About Pod System Guide, an independent UK information site covering pod-system vape kits.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="bg-tint">
        <Container className="py-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]} />
          <h1 className="mt-4 font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
            About Pod System Guide
          </h1>
        </Container>
      </div>
      <Container className="max-w-3xl py-12">
        <div className="space-y-5 text-base leading-relaxed text-slate-700">
          <p>
            Pod System Guide is an independent UK information website focused on one specific
            corner of vaping: pod systems. We exist to explain the category clearly, catalogue
            style, so that someone new to pod kits can understand what they are looking at before
            they buy, without wading through manufacturer marketing.
          </p>
          <p>
            This site is written and edited by our UK-based editorial team. We are not a retailer
            and we do not sell vape products, take payment for favourable coverage, or promote
            specific brands over others. Where we mention a named product or manufacturer, it is
            to illustrate a point about the wider category, not as a recommendation to buy that
            item specifically.
          </p>
          <p>
            Our content is aimed at adults aged 18 and over who already smoke or vape, or who are
            researching pod systems as a step away from smoking, and who want a structured,
            plain-English reference rather than a sales pitch. Nothing on this site is intended to
            encourage anyone under 18, or anyone who does not currently smoke or vape, to start.
          </p>
          <p>
            We keep articles reviewed and dated so you can see when a page was last checked. Where
            we state a regulatory or health fact, such as UK nicotine strength limits or age-of-sale
            law, we base it on official UK sources including GOV.UK, the MHRA, the NHS and Trading
            Standards. You can read more about how we research and update content on our{" "}
            <Link href="/editorial-policy" className="text-primary hover:text-primary-dark font-medium">
              editorial policy
            </Link>{" "}
            page.
          </p>
          <p>
            If you have a question about {SITE.name}, or spot something on the site that needs
            correcting, our{" "}
            <Link href="/contact" className="text-primary hover:text-primary-dark font-medium">
              contact page
            </Link>{" "}
            explains how to reach us.
          </p>
        </div>
      </Container>
    </div>
  );
}
