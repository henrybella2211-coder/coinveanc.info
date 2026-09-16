import Link from "next/link";
import Container from "./Container";
import { SITE } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-primary/20 bg-white mt-16">
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-heading font-bold text-xs">
                PS
              </span>
              <span className="font-heading font-bold text-base text-foreground">Pod System Guide</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{SITE.description}</p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-sm text-foreground mb-3">Site</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-slate-600 hover:text-primary">Home</Link></li>
              <li><Link href="/guides" className="text-slate-600 hover:text-primary">Guides</Link></li>
              <li><Link href="/about" className="text-slate-600 hover:text-primary">About</Link></li>
              <li><Link href="/contact" className="text-slate-600 hover:text-primary">Contact</Link></li>
              <li><Link href="/editorial-policy" className="text-slate-600 hover:text-primary">Editorial policy</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-sm text-foreground mb-3">Legal</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="text-slate-600 hover:text-primary">Privacy policy</Link></li>
              <li><Link href="/cookie-policy" className="text-slate-600 hover:text-primary">Cookie policy</Link></li>
              <li><Link href="/terms" className="text-slate-600 hover:text-primary">Terms &amp; disclaimer</Link></li>
              <li><Link href="/age-notice" className="text-slate-600 hover:text-primary">Age notice</Link></li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="bg-tint">
        <Container className="py-3">
          <p className="text-xs text-slate-700 text-center leading-relaxed">
            This website and its content are intended for adults aged 18 and over who already smoke or vape, or who
            are seeking factual information. Nothing on this site is intended to encourage anyone under 18, or
            anyone who does not currently smoke or vape, to start.
          </p>
        </Container>
      </div>

      <div className="border-t border-slate-100">
        <Container className="py-4">
          <p className="text-xs text-slate-500 text-center">
            &copy; {year} {SITE.name}. Independent UK vaping information site. All content is editorial and for
            general information only.
          </p>
        </Container>
      </div>
    </footer>
  );
}
