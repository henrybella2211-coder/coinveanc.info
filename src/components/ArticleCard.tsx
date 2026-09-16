import Image from "next/image";
import Link from "next/link";
import { ArticleMeta } from "@/lib/articles";
import SpecBadges from "./SpecBadges";

export default function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-[0_4px_20px_-4px_rgba(29,111,224,0.18)] ring-1 ring-slate-100">
      <Link href={`/guides/${article.slug}`} className="relative block aspect-[16/10] w-full overflow-hidden bg-tint">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <span className="mb-2 inline-block w-fit rounded-md bg-tint px-2 py-0.5 text-xs font-semibold text-primary-dark">
          {article.category}
        </span>
        <h3 className="font-heading text-lg font-semibold leading-snug text-foreground">
          <Link href={`/guides/${article.slug}`} className="hover:text-primary">
            {article.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{article.excerpt}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
          <span>{article.readTime}</span>
          <span>Updated {article.lastUpdatedDisplay}</span>
        </div>
        <div className="mt-4 border-t border-slate-100 pt-3">
          <SpecBadges items={article.specBadges} />
        </div>
      </div>
    </article>
  );
}
