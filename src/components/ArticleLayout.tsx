import { ReactNode } from "react";
import Image from "next/image";
import Container from "./Container";
import Breadcrumbs from "./Breadcrumbs";
import SpecBadges from "./SpecBadges";
import JsonLd from "./JsonLd";
import { ArticleMeta } from "@/lib/articles";
import { SITE } from "@/lib/site";

export default function ArticleLayout({
  article,
  children,
}: {
  article: ArticleMeta;
  children: ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.lastUpdated,
    dateModified: article.lastUpdated,
    author: {
      "@type": "Organization",
      name: `${SITE.name} editorial team`,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
    },
    image: `${SITE.url}${article.image}`,
    mainEntityOfPage: `${SITE.url}/guides/${article.slug}`,
  };

  return (
    <article>
      <JsonLd data={schema} />
      <div className="bg-tint">
        <Container className="py-10">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Guides", href: "/guides" },
              { label: article.title, href: `/guides/${article.slug}` },
            ]}
          />
          <span className="mt-4 inline-block w-fit rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-primary-dark ring-1 ring-primary/20">
            {article.category}
          </span>
          <h1 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
            {article.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-600">
            <span>{article.readTime}</span>
            <span aria-hidden="true">&middot;</span>
            <span>Last updated {article.lastUpdatedDisplay}</span>
          </div>
          <div className="mt-4">
            <SpecBadges items={article.specBadges} />
          </div>
        </Container>
      </div>

      <Container className="py-10">
        <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-lg ring-1 ring-slate-100">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            sizes="(min-width: 1024px) 800px, 100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="max-w-3xl">
          <div className="prose-guide space-y-5 text-[1.05rem] leading-relaxed text-slate-700">
            {children}
          </div>
        </div>
      </Container>
    </article>
  );
}
