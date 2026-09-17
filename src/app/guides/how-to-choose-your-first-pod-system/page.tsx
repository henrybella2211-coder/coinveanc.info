import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { getArticleBySlug } from "@/lib/articles";
import { SITE } from "@/lib/site";

const article = getArticleBySlug("how-to-choose-your-first-pod-system")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.excerpt,
  alternates: { canonical: `/guides/${article.slug}` },
  openGraph: {
    title: article.title,
    description: article.excerpt,
    url: `${SITE.url}/guides/${article.slug}`,
    type: "article",
    images: [{ url: article.image, width: 1600, height: 2400 }],
  },
};

export default function Page() {
  return (
    <ArticleLayout article={article}>
      <p>
        Faced with a wall of pod kits in a vape shop, or a long list on a retailer&rsquo;s
        website, it helps to work through the same few questions every time. This checklist
        covers the points that actually change how a pod system feels to use day to day.
      </p>

      <h2>1. Battery capacity</h2>
      <p>
        Battery capacity is measured in mAh (milliamp hours); the higher the number, the longer
        the device runs between charges, though a larger battery usually means a bigger, heavier
        device too.
      </p>
      <ul>
        <li>
          <strong>Around 350&ndash;500mAh</strong>: slim, pocketable devices, typically needing a
          top-up charge once or twice a day for a moderate vaper.
        </li>
        <li>
          <strong>Around 500&ndash;900mAh</strong>: a common middle ground, usually lasting most of
          a day for light-to-moderate use.
        </li>
        <li>
          <strong>900mAh and above</strong>: larger pod kits that can comfortably last a full day
          for most users, at the cost of a bulkier device.
        </li>
      </ul>
      <p>
        For more on what the mAh figure actually measures and how to turn it into a rough sense of
        real-world runtime, see our{" "}
        <Link href="/guides/pod-system-battery-capacity-mah-explained">
          guide to pod-system battery capacity and mAh
        </Link>
        .
      </p>

      <h2>2. Pod capacity</h2>
      <p>
        UK regulation caps pre-filled and refillable pods containing nicotine e-liquid at 2ml, so
        this figure will not vary much between devices. What does vary is how many pods come in
        the box, and whether spare pods are sold in convenient multi-packs. Check pod availability
        before buying rather than after.
      </p>

      <h2>3. Coil resistance and replacement cost</h2>
      <p>
        Coil resistance, measured in ohms (&Omega;), affects both the draw and the running cost.
        Most pod-system coils sit somewhere between roughly 0.6&Omega; and 1.2&Omega;, which
        supports a mouth-to-lung style draw. Before buying, it is worth checking:
      </p>
      <ul>
        <li>Whether the pod uses a single coil or a dual-coil setup; our{" "}
          <Link href="/guides/single-coil-vs-dual-coil-pod-systems">
            single-coil vs dual-coil comparison
          </Link>{" "}
          covers how this affects vapour, flavour and running cost.</li>
        <li>Whether replacement coils (or replacement pods, on closed systems) are stocked by
          UK retailers, not just available from the manufacturer abroad.</li>
        <li>Roughly how often a coil needs replacing with regular use, usually every one to two
          weeks for a daily vaper, though this varies with e-liquid and usage.</li>
        <li>The price per coil or pod when bought in a multi-pack, since single units usually
          cost more per item.</li>
      </ul>
      <p>
        If you are still deciding between formats, our{" "}
        <Link href="/guides/refillable-vs-replaceable-pods">
          comparison of refillable and replaceable pods
        </Link>{" "}
        covers running costs in more detail.
      </p>

      <h2>4. MTL vs looser DTL-leaning draw</h2>
      <p>
        Most pod systems are tuned for mouth-to-lung (MTL) vaping, where you draw vapour into your
        mouth first, similar to a cigarette, before inhaling. Some pod kits offer an adjustable
        airflow ring that loosens the draw slightly toward a direct-to-lung (DTL) feel, which some
        ex-smokers prefer once they are used to vaping. If you are coming straight from smoking, a
        tighter MTL draw usually feels more familiar; if you previously used a sub-ohm tank, you
        may prefer a pod kit with adjustable airflow.
      </p>

      <h2>5. Size and portability</h2>
      <p>
        Weigh up how and where you will actually use the device. A slim, pen-style pod kit slips
        into a pocket easily but usually has a smaller battery; a chunkier pod kit holds more
        charge but is less discreet. Neither is wrong, but it is worth handling a device in person
        where possible before committing.
      </p>

      <h2>6. Indicative price bands</h2>
      <p>
        Prices vary by retailer and by what is included in the box, but as a rough guide:
      </p>
      <table>
        <caption>Typical UK price bands for pod-system kits (indicative)</caption>
        <thead>
          <tr>
            <th scope="col">Kit type</th>
            <th scope="col">Typical price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Entry-level pod kit (basic, single pod included)</td>
            <td>Roughly £10&ndash;£20</td>
          </tr>
          <tr>
            <td>Mid-range pod kit (larger battery, spare pod included)</td>
            <td>Roughly £20&ndash;£35</td>
          </tr>
        </tbody>
      </table>
      <p>
        These figures are typical high-street and online ranges rather than fixed prices; always
        check current pricing with the retailer.
      </p>

      <h2>7. Nicotine strength</h2>
      <p>
        UK-regulated e-liquid is capped at 20mg/ml (2%) nicotine strength. Many pod-system users
        who have recently switched from smoking start around 10-20mg/ml, particularly with nic
        salt e-liquids, then step down gradually as their body adjusts. If you are choosing between
        strengths, it is worth knowing that a stronger e-liquid is not automatically
        &ldquo;better&rdquo;; it simply delivers nicotine faster, which suits some people and feels
        too harsh to others. Pharmacy staff and vape shop staff can generally advise on a sensible
        starting strength if you mention how much you currently smoke.
      </p>

      <h2>8. Where to buy safely</h2>
      <p>
        Buy from an established UK vape shop, pharmacy, or a well-known online retailer that
        clearly states TPD compliance and UK nicotine strength limits (up to 20mg/ml). Be cautious
        of unregulated marketplace listings, particularly imported devices or e-liquids that do
        not carry UK-compliant labelling, correct nicotine warnings, or child-resistant packaging.
        Trading Standards is the relevant UK body if you encounter vape products you believe are
        being sold illegally, such as to under-18s or without proper labelling.
      </p>

      <h2>Common first-purchase mistakes</h2>
      <ul>
        <li>
          <strong>Buying on looks alone.</strong> A sleek device with poor coil availability
          becomes frustrating within weeks once the included pods run out.
        </li>
        <li>
          <strong>Choosing too high a nicotine strength.</strong> Going in at the maximum 20mg/ml
          without needing to can feel harsh on the throat; it is easier to step up from a lower
          strength than to step down from one that feels uncomfortable.
        </li>
        <li>
          <strong>Ignoring battery habits.</strong> A heavy vaper buying the smallest, slimmest
          device on the shelf often ends up needing to charge it multiple times a day, which
          defeats the point of portability.
        </li>
        <li>
          <strong>Not checking pod stock locally.</strong> A kit is only as convenient as its
          ongoing supply of pods or coils; check a UK retailer actually stocks replacements before
          you buy the device.
        </li>
      </ul>

      <h2>Putting it together</h2>
      <p>
        No single kit will score top marks on every point above; the right choice is usually a
        trade-off. Someone who values discretion above all else might accept a smaller battery
        and more frequent charging; someone who vapes heavily through the day is better served by
        a larger pod kit even if it is less pocketable. Working through this checklist against
        two or three shortlisted kits, rather than picking on price or looks alone, tends to give
        a better result first time.
      </p>
    </ArticleLayout>
  );
}
