import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Disclaimer",
  description: "Terms of use and editorial disclaimer for Pod System Guide.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="bg-white">
      <div className="bg-tint">
        <Container className="py-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms & Disclaimer", href: "/terms" }]} />
          <h1 className="mt-4 font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
            Terms of use &amp; disclaimer
          </h1>
          <p className="mt-3 text-sm text-slate-600">Last updated 15 September 2026</p>
        </Container>
      </div>
      <Container className="max-w-3xl space-y-5 py-12 text-base leading-relaxed text-slate-700">
        <p>
          These terms apply to your use of {SITE.name} ({SITE.url}). By using this site, you
          accept the terms below.
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground">Age and audience</h2>
        <p>
          This site is intended for adults aged 18 and over. Content is written for existing
          smokers and vapers, or adults researching vaping as an alternative to smoking, and is
          not intended to encourage anyone under 18, or anyone who does not already smoke or vape,
          to start. See our full{" "}
          <Link href="/age-notice" className="text-primary hover:text-primary-dark font-medium">
            age notice
          </Link>{" "}
          for more detail.
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground">Editorial and informational purpose only</h2>
        <p>
          Everything published on {SITE.name} is editorial and informational content, not medical,
          legal or professional advice. We are not medical professionals. Nothing on this site
          should be treated as a substitute for advice from a GP, pharmacist or other qualified
          professional, particularly regarding smoking cessation or health conditions.
        </p>
        <p>
          We describe device categories and general specifications to help readers understand the
          pod-system market. We do not test or personally review individual products, and any
          specifications mentioned (such as battery capacity, pod capacity or coil resistance) are
          general figures typical of the category, not verified measurements of a specific unit
          you may buy.
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground">No liability for third-party products</h2>
        <p>
          Where we refer to a specific manufacturer or product name, this is for illustrative
          purposes only and is not an endorsement, recommendation or guarantee. We accept no
          liability for the performance, safety, quality or legality of any third-party product,
          and any purchase decision you make is your own responsibility. Always buy from
          reputable, UK-compliant retailers.
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground">External links</h2>
        <p>
          This site links to official external sources, such as GOV.UK, the NHS and the MHRA,
          where relevant to explain regulation or health guidance. We are not responsible for the
          content, accuracy or availability of external websites we link to, and a link does not
          imply endorsement of everything on that site.
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground">Intellectual property</h2>
        <p>
          The text, design and original imagery on {SITE.name} belong to us unless otherwise
          stated, and may not be reproduced without permission. Photographs used on this site are
          sourced under the Unsplash License and belong to their respective photographers.
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground">Changes</h2>
        <p>
          We may update these terms from time to time. Continued use of the site after changes are
          published means you accept the revised terms.
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground">Contact</h2>
        <p>
          Questions about these terms can be sent via our{" "}
          <Link href="/contact" className="text-primary hover:text-primary-dark font-medium">
            contact page
          </Link>
          .
        </p>
      </Container>
    </div>
  );
}
