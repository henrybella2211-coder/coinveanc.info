import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "What cookies Pod System Guide uses, and what it does not use.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-white">
      <div className="bg-tint">
        <Container className="py-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cookie Policy", href: "/cookie-policy" }]} />
          <h1 className="mt-4 font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
            Cookie policy
          </h1>
          <p className="mt-3 text-sm text-slate-600">Last updated 15 September 2026</p>
        </Container>
      </div>
      <Container className="max-w-3xl space-y-5 py-12 text-base leading-relaxed text-slate-700">
        <p>
          This page explains, honestly and plainly, how {SITE.name} uses cookies and similar
          storage technologies.
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground">Our current position</h2>
        <p>
          This website does not currently use tracking or advertising cookies. We do not run
          third-party analytics, advertising networks, or social media tracking pixels on this
          site at present. There is no cookie consent banner because there is currently nothing
          non-essential to consent to.
        </p>
        <p>
          If this changes in the future, for example if we add privacy-friendly analytics to
          understand which guides are useful, we will update this policy first and add a consent
          mechanism where required by UK law (the Privacy and Electronic Communications
          Regulations, alongside UK GDPR).
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground">Strictly necessary storage</h2>
        <p>
          The site may use minimal, strictly necessary browser storage required simply to make
          pages function correctly, such as remembering your selected filter while browsing the{" "}
          <Link href="/guides" className="text-primary hover:text-primary-dark font-medium">
            guides page
          </Link>{" "}
          during your visit. This is not used to identify you personally, is not shared with any
          third party, and does not persist beyond your browser session in any meaningful way.
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground">Third-party content</h2>
        <p>
          Pages on this site do not embed third-party video players, ad networks or social media
          widgets that would typically set their own cookies. If that ever changes, this policy
          will be updated to name the provider and explain what it sets.
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground">Questions</h2>
        <p>
          If you have any questions about this policy, get in touch via our{" "}
          <Link href="/contact" className="text-primary hover:text-primary-dark font-medium">
            contact page
          </Link>
          .
        </p>
      </Container>
    </div>
  );
}
