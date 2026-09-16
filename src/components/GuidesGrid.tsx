"use client";

import { useState } from "react";
import { ARTICLES, CATEGORIES } from "@/lib/articles";
import ArticleCard from "./ArticleCard";

export default function GuidesGrid() {
  const [active, setActive] = useState<string>("All");

  const filtered = active === "All" ? ARTICLES : ARTICLES.filter((a) => a.category === active);

  const chips = ["All", ...CATEGORIES];

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter guides by category">
        {chips.map((chip) => {
          const isActive = chip === active;
          return (
            <button
              key={chip}
              type="button"
              onClick={() => setActive(chip)}
              aria-pressed={isActive}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-primary text-white"
                  : "bg-tint text-primary-dark hover:bg-primary/20"
              }`}
            >
              {chip}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="text-slate-600">No guides in this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
