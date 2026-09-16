import Link from "next/link";
import Container from "./Container";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Pod System Guide home">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white font-heading font-bold text-sm">
            PS
          </span>
          <span className="font-heading font-bold text-lg text-foreground">Pod System Guide</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/guides"
          className="hidden sm:inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark transition-colors shrink-0"
        >
          Browse guides
        </Link>
      </Container>

      <nav aria-label="Primary mobile" className="flex md:hidden border-t border-slate-100 overflow-x-auto">
        <Container className="flex gap-5 py-2">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-primary whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </Container>
      </nav>
    </header>
  );
}
