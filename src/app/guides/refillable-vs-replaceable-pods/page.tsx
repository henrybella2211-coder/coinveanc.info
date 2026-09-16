import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { getArticleBySlug } from "@/lib/articles";
import { SITE } from "@/lib/site";

const article = getArticleBySlug("refillable-vs-replaceable-pods")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.excerpt,
  alternates: { canonical: `/guides/${article.slug}` },
  openGraph: {
    title: article.title,
    description: article.excerpt,
    url: `${SITE.url}/guides/${article.slug}`,
    type: "article",
    images: [{ url: article.image, width: 1600, height: 1459 }],
  },
};

export default function Page() {
  return (
    <ArticleLayout article={article}>
      <p>
        Once you understand{" "}
        <Link href="/guides/what-is-a-pod-system">what a pod system actually is</Link>, the next
        decision is usually format: refillable, or replaceable. Both are common on UK vape shop
        shelves, and neither is objectively better; they suit different habits and priorities.
      </p>

      <h2>Refillable pods: how they work</h2>
      <p>
        A refillable (open-system) pod has a small fill port, usually sealed with a silicone bung
        or twist cap, that you top up directly from a bottle of e-liquid. The pod itself holds a
        coil, and on most refillable systems that coil can be pulled out and swapped for a fresh
        one when the flavour starts to taste burnt or muted, without needing to replace the whole
        pod.
      </p>
      <p>
        Because you are buying e-liquid separately, you get to choose from the full range of
        UK-regulated nic salt and freebase e-liquids on the market, rather than being limited to
        whatever a specific pod range offers. That flexibility is the main appeal for anyone who
        likes to try different flavours or brands.
      </p>

      <h2>Replaceable pods: how they work</h2>
      <p>
        A closed or replaceable-style pod comes with its coil built into the pod housing itself.
        Some are sold pre-filled and ready to use; others have a small fill port so you still add
        your own e-liquid, but the coil and pod are replaced together as a single unit rather than
        separately. When the flavour fades, you swap in a new pod rather than a new coil.
      </p>
      <p>
        This format tends to be simpler day to day, since there is no separate coil to line up or
        seat correctly, but it usually limits you to pods designed for that specific device or
        range.
      </p>

      <h2>Running costs compared</h2>
      <p>
        Running costs depend heavily on how often you vape and which coils or pods a given device
        uses, so treat the figures below as a general guide rather than a precise calculation.
      </p>
      <table>
        <caption>Rough ongoing cost comparison (UK, indicative only)</caption>
        <thead>
          <tr>
            <th scope="col">Format</th>
            <th scope="col">What you buy</th>
            <th scope="col">Typical cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Refillable pod</td>
            <td>10ml e-liquid bottle + replacement coils (packs of 3-5)</td>
            <td>E-liquid typically £3&ndash;£5 per 10ml; coil packs typically £8&ndash;£12</td>
          </tr>
          <tr>
            <td>Replaceable pod</td>
            <td>Pre-filled or fillable replacement pods (packs of 2-4)</td>
            <td>Typically £8&ndash;£13 per pack, varies by range</td>
          </tr>
        </tbody>
      </table>
      <p>
        In our view, refillable systems tend to work out cheaper over months of regular use,
        mainly because a coil usually costs less to replace than a whole pod. Many UK vapers find
        the gap narrows if they vape lightly, since either format will simply last longer.
      </p>

      <h2>Convenience trade-offs</h2>
      <ul>
        <li>
          Refilling takes a few extra seconds and a steady hand; spills are rare but possible if
          you overfill the port.
        </li>
        <li>
          Replaceable pods avoid handling e-liquid bottles day to day, which some people prefer,
          especially somewhere like a car or workplace.
        </li>
        <li>
          Coil swaps on refillable systems mean carrying a spare coil if you travel; replaceable
          pod users need to carry spare pods instead.
        </li>
        <li>
          Refillable systems are broadly compatible with any bottled e-liquid at the correct
          strength; replaceable pods are limited to what is sold for that specific pod range.
        </li>
      </ul>

      <h2>Flavour and e-liquid choice</h2>
      <p>
        Flavour choice is where the two formats diverge most. A refillable pod can be filled with
        any bottled e-liquid on the UK market that fits the nicotine strength cap of 20mg/ml,
        which in practice means hundreds of flavours across dozens of brands, spanning menthol,
        fruit, tobacco and dessert styles. Nic salt e-liquids, which tend to deliver nicotine more
        smoothly at higher strengths, are widely available in this format.
      </p>
      <p>
        A replaceable pod range is usually tied to whatever flavours that manufacturer offers for
        that specific pod. Some ranges are generous, with a dozen or more flavours; others are more
        limited. If trying a wide variety of flavours matters to you, that is worth checking before
        you commit to a closed pod system, since switching flavours later may mean switching
        devices too.
      </p>

      <h2>Maintenance and everyday care</h2>
      <p>
        Refillable pods benefit from being kept reasonably topped up, since running a coil dry even
        briefly can produce a harsh, burnt taste and shorten the coil&rsquo;s life. Wiping the fill
        port and contacts occasionally, and priming a new coil with a few drops of e-liquid before
        first use, both help avoid early burnt hits.
      </p>
      <p>
        Replaceable pods need less day-to-day attention since there is no separate coil to prime,
        though it is still worth checking the pod is seated firmly in the battery section, as a
        loose connection is a common cause of leaking or reduced vapour on this format too.
      </p>

      <h2>Which is easier for a beginner?</h2>
      <p>
        Replaceable pods generally have the lower learning curve. There is nothing to fill, no
        coil to seat, and less that can go wrong in the first few weeks of switching from smoking
        or from disposables. If your priority is simplicity while you get used to vaping, this
        format is a sensible starting point.
      </p>
      <p>
        Refillable pods ask a little more of you upfront: choosing an e-liquid, filling the pod
        correctly, and occasionally swapping a coil. In exchange, you get more flavour choice and,
        typically, a lower cost per week once you are past the first purchase.
      </p>
      <p>
        Neither choice is permanent. Plenty of vapers start on a closed, replaceable pod system
        for the first few weeks, then move to a refillable one once they have settled on a flavour
        and nicotine strength they get on with. Our{" "}
        <Link href="/guides/how-to-choose-your-first-pod-system">
          checklist for choosing your first pod system
        </Link>{" "}
        walks through this alongside battery size, coil availability and price bands, so you can
        weigh format against the rest of the spec sheet in one place.
      </p>
    </ArticleLayout>
  );
}
