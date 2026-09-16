import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { getArticleBySlug } from "@/lib/articles";
import { SITE } from "@/lib/site";

const article = getArticleBySlug("what-is-a-pod-system")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.excerpt,
  alternates: { canonical: `/guides/${article.slug}` },
  openGraph: {
    title: article.title,
    description: article.excerpt,
    url: `${SITE.url}/guides/${article.slug}`,
    type: "article",
    images: [{ url: article.image, width: 1600, height: 1067 }],
  },
};

export default function Page() {
  return (
    <ArticleLayout article={article}>
      <p>
        &ldquo;Pod system&rdquo; is one of those terms that gets used a lot in UK vape shops
        without ever quite being defined. If you are new to vaping, or coming back to it after
        disposables were withdrawn from sale, it helps to know exactly what the phrase means
        before you start comparing individual kits.
      </p>

      <h2>A device category, not a brand</h2>
      <p>
        A pod system is a type of reusable vape kit built around a small, refillable or
        replaceable &ldquo;pod&rdquo; that clips or slots into a rechargeable battery section.
        It is not a single product or a manufacturer name; it is a category, in the same way
        &ldquo;hatchback&rdquo; describes a shape of car rather than one specific model. Dozens of
        manufacturers make pod systems, and they vary a fair amount in size, battery capacity and
        how the pod itself works.
      </p>
      <p>
        What sets the category apart from other device types on a vape shop shelf is the pod
        itself. Rather than filling a large glass or plastic tank directly onto the device, as you
        would with a sub-ohm tank, you either fill or replace a small self-contained pod that sits
        against the battery.
      </p>

      <h2>How pod systems differ from disposables and sub-ohm tanks</h2>
      <p>
        It is easiest to place pod systems by comparing them with the two other main device types
        you will come across.
      </p>
      <ul>
        <li>
          <strong>Disposables</strong> were single-use vapes designed to be thrown away once the
          battery or e-liquid ran out. They became illegal to sell in the UK from 1 June 2025
          under the single-use vapes regulations, so any device offered for sale now needs to be
          rechargeable. Pod systems fill much of the gap disposables left, since many are similarly
          compact and simple to use, but they are reusable rather than throwaway.
        </li>
        <li>
          <strong>Sub-ohm tanks</strong> are larger, hold more e-liquid, and are built around coils
          with a resistance below 1 ohm, producing bigger vapour clouds and a looser,
          direct-to-lung (DTL) draw. They are generally aimed at more experienced vapers who have
          moved away from a cigarette-like draw entirely.
        </li>
      </ul>
      <p>
        Pod systems sit between the two: reusable like a sub-ohm tank, but compact and
        straightforward like a disposable, with most models tuned for a tighter mouth-to-lung
        (MTL) draw that feels closer to drawing on a cigarette.
      </p>

      <h2>Open (refillable) pods vs closed pod formats</h2>
      <p>
        Within the pod-system category, there are two broad formats worth knowing about.
      </p>
      <ul>
        <li>
          <strong>Open, refillable pods</strong> have a fill port you top up yourself with a
          bottle of e-liquid, and typically use a replaceable coil that sits inside the pod. You
          choose your own e-liquid brand and flavour, and running costs tend to be lower once
          you have bought your first e-liquid and spare coils.
        </li>
        <li>
          <strong>Closed, replaceable-style pods</strong> come with the coil built into the pod
          unit itself, either pre-filled or ready to fill from a small port, and you replace the
          whole pod (not just the coil) once it wears out or runs dry. UK regulation still permits
          this format provided the device is rechargeable rather than single-use; what changed in
          2025 was the ban on disposable, non-rechargeable devices, not closed pods generally.
        </li>
      </ul>
      <p>
        We cover this distinction in far more depth, including running costs and which suits a
        beginner best, in{" "}
        <Link href="/guides/refillable-vs-replaceable-pods">
          our guide to refillable vs replaceable pods
        </Link>
        .
      </p>

      <h2>Pod capacity: what the 2ml limit means</h2>
      <p>
        Under the Tobacco and Related Products Regulations (TRPR), UK-regulated pre-filled pods
        and cartridges containing nicotine e-liquid are capped at 2ml of capacity, while refillable
        tanks and bottles of nicotine e-liquid are capped at 10ml. Nicotine strength itself is
        capped at 20mg/ml (2%). This is why you will see pods marketed around that 2ml figure
        regardless of brand; it is a regulatory limit rather than a design choice by any one
        manufacturer. Some devices work around this by using two pods, or by accepting a larger
        refillable pod for zero-nicotine or short-fill e-liquid, but the nicotine-containing
        capacity itself stays within that limit.
      </p>

      <table>
        <caption>Typical pod-system specifications at a glance</caption>
        <thead>
          <tr>
            <th scope="col">Spec</th>
            <th scope="col">Typical range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pod capacity (nicotine e-liquid)</td>
            <td>Up to 2ml per pod (TRPR limit)</td>
          </tr>
          <tr>
            <td>Battery capacity</td>
            <td>Roughly 350mAh to 1000mAh</td>
          </tr>
          <tr>
            <td>Coil resistance</td>
            <td>Around 0.6&ndash;1.2&Omega; for an MTL-leaning draw</td>
          </tr>
          <tr>
            <td>Nicotine strength</td>
            <td>Up to 20mg/ml (2%), UK regulated</td>
          </tr>
        </tbody>
      </table>

      <h2>Who tends to suit a pod system</h2>
      <p>
        Pod systems are generally a good fit for a few kinds of vaper:
      </p>
      <ul>
        <li>People switching from smoking who want a device that feels closer to a cigarette in
          hand and draw.</li>
        <li>Anyone who previously used disposables and needs a reusable equivalent now that they
          are off the shelf.</li>
        <li>Vapers who value portability and low fuss over maximum vapour production.</li>
        <li>Beginners who would rather not deal with adjustable wattage, airflow rings and other
          settings found on more advanced kits.</li>
      </ul>
      <p>
        According to the NHS, vaping is not risk-free, but it is considered substantially less
        harmful than smoking and can support people trying to stop smoking, though it is not
        intended for non-smokers or under-18s. If you are weighing up whether a pod system is
        right for you as a smoking-cessation tool, the NHS Better Health service is a sensible
        official starting point.
      </p>

      <p>
        Once the category makes sense, the next practical step is usually deciding between
        refillable and closed pod formats, and then working through a proper buying checklist.
        Our{" "}
        <Link href="/guides/how-to-choose-your-first-pod-system">
          guide to choosing your first pod system
        </Link>{" "}
        walks through battery size, running costs and price bands in more detail.
      </p>
    </ArticleLayout>
  );
}
