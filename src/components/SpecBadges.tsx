const COLOURS = [
  "bg-primary/10 text-primary-dark",
  "bg-sky-100 text-sky-700",
  "bg-blue-100 text-blue-700",
];

export default function SpecBadges({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Key specification points">
      {items.map((item, i) => (
        <li key={item} className={`badge-chip ${COLOURS[i % COLOURS.length]}`}>
          {item}
        </li>
      ))}
    </ul>
  );
}
