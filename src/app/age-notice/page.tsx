import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Age Notice",
  description: "Pod System Guide is intended for adults aged 18 and over.",
  alternates: { canonical: "/age-notice" },
};

export default function AgeNoticePage() {
  return (
    <div className="bg-white">
      <div className="bg-tint">
        <Container className="py-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Age Notice", href: "/age-notice" }]} />
          <h1 className="mt-4 font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
            Age notice: 18+
          </h1>
        </Container>
      </div>
      <Container className="max-w-3xl space-y-5 py-12 text-base leading-relaxed text-slate-700">
        <p>
          {SITE.name} and all of its content are intended solely for adults aged 18 and over. This
          includes people who already smoke or vape, and adults who are researching vaping
          factually, for example as a possible step away from smoking.
        </p>
        <p>
          Nothing published on this site is intended to encourage anyone under the age of 18 to
          start vaping, and nothing is intended to encourage anyone who does not currently smoke
          or vape to take it up. Vaping products are age-restricted in the UK; it is illegal to
          sell vaping or tobacco products to anyone under 18, and retailers are expected to carry
          out ID checks, commonly under a &ldquo;Challenge 25&rdquo; policy.
        </p>
        <p>
          According to the NHS, vaping is not risk-free, but is considered substantially less
          harmful than smoking and can support some smokers trying to quit. It is not intended for
          people who have never smoked. If you are under 18, please leave this site.
        </p>
        <p>
          This notice also appears in the footer of every page. For our full terms, including
          our editorial and liability disclaimer, see{" "}
          <Link href="/terms" className="text-primary hover:text-primary-dark font-medium">
            terms &amp; disclaimer
          </Link>
          .
        </p>
      </Container>
    </div>
  );
}
