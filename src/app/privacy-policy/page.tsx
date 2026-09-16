import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Pod System Guide handles personal data, in line with UK GDPR and the Data Protection Act 2018.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <div className="bg-tint">
        <Container className="py-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy", href: "/privacy-policy" }]} />
          <h1 className="mt-4 font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
            Privacy policy
          </h1>
          <p className="mt-3 text-sm text-slate-600">Last updated 15 September 2026</p>
        </Container>
      </div>
      <Container className="max-w-3xl space-y-5 py-12 text-base leading-relaxed text-slate-700">
        <p>
          This policy explains what personal data {SITE.name} ({SITE.url}) collects, why, and how
          it is handled. We aim to keep this in plain language and in line with UK GDPR and the
          Data Protection Act 2018.
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground">Who we are</h2>
        <p>
          {SITE.name} is an independent UK vaping information website. We are not part of a
          retailer or manufacturer group and we do not sell products directly through this site.
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground">What data we collect</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Contact form submissions:</strong> if you use the contact form, it opens your
            own email application with a pre-filled message. We do not receive or store anything
            from that form on our servers; the email itself is only sent if you choose to send it
            from your own email client, and we then hold whatever information you include (such
            as your name and email address) in our inbox, for as long as reasonably needed to
            respond to you.
          </li>
          <li>
            <strong>Basic technical logs:</strong> like most websites, our hosting provider may
            automatically log basic technical information, such as IP address and browser type,
            for security and reliability purposes. We do not currently run any third-party
            analytics or advertising tracking on this site.
          </li>
        </ul>
        <p>
          We do not currently use cookies for analytics or advertising. See our{" "}
          <Link href="/cookie-policy" className="text-primary hover:text-primary-dark font-medium">
            cookie policy
          </Link>{" "}
          for full detail on cookies.
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground">How we use data</h2>
        <p>
          Any information you send us through the contact form is used solely to respond to your
          message. We do not sell, rent or share personal data with third parties for marketing
          purposes, and we do not use any data collected here to build advertising profiles.
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground">Legal basis</h2>
        <p>
          Where we process personal data, such as replying to a contact form email, we rely on
          legitimate interest in responding to enquiries sent to us, consistent with UK GDPR.
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground">Your rights</h2>
        <p>
          Under UK GDPR and the Data Protection Act 2018, you have rights including access to,
          correction of, and deletion of personal data we hold about you. To exercise any of these
          rights, or to ask a question about this policy, please use the details on our{" "}
          <Link href="/contact" className="text-primary hover:text-primary-dark font-medium">
            contact page
          </Link>
          .
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground">Changes to this policy</h2>
        <p>
          We may update this policy from time to time as the site evolves. The date at the top of
          this page reflects the last revision.
        </p>
      </Container>
    </div>
  );
}
