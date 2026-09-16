import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Pod System Guide editorial team.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="bg-tint">
        <Container className="py-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]} />
          <h1 className="mt-4 font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
            Contact us
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Questions about the site, or spotted something that needs correcting? We would like
            to hear from you.
          </p>
        </Container>
      </div>
      <Container className="max-w-xl py-12">
        <div className="rounded-lg bg-tint p-6 ring-1 ring-primary/10">
          <ContactForm />
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Prefer to email directly? Write to{" "}
          <a href={`mailto:${SITE.email}`} className="font-medium text-primary hover:text-primary-dark">
            {SITE.email}
          </a>
          . {SITE.name} is an independent editorial site; we do not offer product sales, technical
          support for specific devices, or phone support.
        </p>
      </Container>
    </div>
  );
}
