import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { getArticleBySlug } from "@/lib/articles";
import { SITE } from "@/lib/site";

const article = getArticleBySlug("pod-system-battery-capacity-mah-explained")!;

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
        Every pod system lists a battery figure somewhere on the box or product page, written as a
        number followed by &ldquo;mAh&rdquo;. It is one of the first specs people compare when
        shortlisting a kit, but the number on its own does not tell you much unless you know what
        it measures and, just as importantly, what it does not promise.
      </p>

      <h2>What mAh actually measures</h2>
      <p>
        mAh stands for milliamp-hour, a unit of electrical charge. In plain terms, it describes how
        much energy a battery can store, not how long a specific device will run for. A 900mAh
        battery holds roughly twice the charge of a 450mAh battery, all else being equal, but
        &ldquo;all else being equal&rdquo; rarely applies in practice, because two devices with the
        same mAh figure can still behave quite differently depending on their wattage, coil
        resistance and how the internal electronics manage power.
      </p>
      <p>
        This is why mAh is best treated as a rough indicator of battery size rather than a precise
        promise of runtime. It is a genuinely useful figure for comparing devices, just not one you
        can convert into an exact number of hours or puffs without more information.
      </p>

      <h2>Turning mAh into a rough idea of runtime</h2>
      <p>
        As a general guide, a higher mAh figure tends to mean a device lasts longer between charges
        for a given person&rsquo;s usage pattern, since there is simply more stored charge to draw
        on. But actual runtime is shaped by several things working together, not the battery figure
        alone:
      </p>
      <ul>
        <li>
          <strong>Wattage and coil resistance.</strong> A device firing at higher wattage, or paired
          with a lower-resistance coil, draws more current per puff, so it gets through the same
          battery faster than a lower-wattage setup with an otherwise identical mAh rating.
        </li>
        <li>
          <strong>How often and how long you puff.</strong> Someone taking short, occasional draws
          through the day will comfortably outlast someone taking long, frequent pulls on the same
          device.
        </li>
        <li>
          <strong>Screen or LED use.</strong> Pod kits with a display or indicator light draw a
          small amount of extra power just by being on, which adds up slightly over a full day.
        </li>
        <li>
          <strong>Battery age.</strong> Rechargeable batteries hold slightly less charge as they go
          through more charge cycles, so a two-year-old pod kit will generally not last as long on a
          full charge as it did when new.
        </li>
      </ul>
      <p>
        Because of this, treat any runtime estimate, including the ones in this guide, as a rough
        guide rather than a precise promise. The only reliable way to know how a specific device
        behaves for you is to use it for a few days and see how your own habits line up with its
        battery.
      </p>

      <h2>Typical mAh ranges for pod systems</h2>
      <p>
        Pod-system batteries vary a fair amount by device size, but most fall into one of three
        rough bands.
      </p>
      <table>
        <caption>Typical pod-system battery ranges (indicative)</caption>
        <thead>
          <tr>
            <th scope="col">Device type</th>
            <th scope="col">Typical battery</th>
            <th scope="col">Rough day-to-day feel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Slim, pocketable pod kit</td>
            <td>Around 350&ndash;500mAh</td>
            <td>Often needs a top-up once or twice a day for a moderate vaper</td>
          </tr>
          <tr>
            <td>Mid-size pod kit</td>
            <td>Around 500&ndash;900mAh</td>
            <td>Usually covers most of a day for light-to-moderate use</td>
          </tr>
          <tr>
            <td>Larger pod kit or pod mod</td>
            <td>Roughly 900&ndash;1500mAh, occasionally more</td>
            <td>Can comfortably cover a full day for most users</td>
          </tr>
        </tbody>
      </table>
      <p>
        These bands line up with what we cover in more detail, alongside pod capacity and coil
        cost, in our{" "}
        <Link href="/guides/how-to-choose-your-first-pod-system">
          checklist for choosing your first pod system
        </Link>
        .
      </p>

      <h2>Why bigger isn&rsquo;t automatically better</h2>
      <p>
        A larger mAh figure sounds like a straightforward win, but it comes with a trade-off that
        is easy to overlook when comparing specs on a screen: battery cells take up physical space
        and add weight. A pod kit built around a 1500mAh cell will generally be noticeably thicker
        and heavier in the hand than one built around 400mAh, even before accounting for the pod and
        housing around it.
      </p>
      <p>
        For someone who wants a device that disappears into a pocket, a slim, lower-mAh pod kit that
        needs charging more often may still be the better everyday choice than a bulkier
        high-capacity one. For someone who vapes heavily through the day, or who finds it
        inconvenient to charge more than once, the extra size and weight of a larger battery is
        usually a fair trade for fewer top-ups. Neither approach is wrong; it depends on what you
        would rather manage, a slightly bigger device or a slightly more frequent charge.
      </p>

      <h2>Fast charging and USB-C</h2>
      <p>
        Most newer pod systems charge over USB-C rather than the older micro-USB connector still
        found on some budget or legacy devices. USB-C generally supports faster charging and is more
        widely available, since it is the same connector used by most recent phones, tablets and
        laptops, so you are less likely to need a dedicated cable just for your vape kit.
      </p>
      <p>
        Some manufacturers advertise their own fast-charging figures for specific models, but these
        vary between devices and are set by the manufacturer rather than being a fixed standard
        across the category, so it is worth checking the specific product listing rather than
        assuming one figure applies across the board. A device with a smaller mAh rating will also
        tend to reach a full charge sooner than a larger one, simply because there is less capacity
        to fill, which can offset some of the runtime difference between a compact and a larger pod
        kit if you are able to top up little and often.
      </p>

      <h2>Reading the spec sheet sensibly</h2>
      <p>
        When you are comparing pod kits on battery capacity, it helps to look at the mAh figure
        alongside the device&rsquo;s size, its charging connector, and roughly how heavily you
        expect to use it, rather than treating mAh as a single score to maximise. Our{" "}
        <Link href="/guides/what-is-a-pod-system">guide to what a pod system actually is</Link>{" "}
        covers the wider spec sheet, including pod capacity and coil resistance, if you are starting
        your comparison from scratch.
      </p>
    </ArticleLayout>
  );
}
