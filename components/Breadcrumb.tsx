import Link from "next/link";

type Crumb = { label: string; href?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <div className="breadcrumb">
      {items.map((c, i) => {
        const last = i === items.length - 1;
        return (
          <span key={i}>
            {c.href && !last ? (
              <Link href={c.href}>{c.label}</Link>
            ) : (
              <span style={last ? { color: "var(--text)" } : undefined}>{c.label}</span>
            )}
            {!last && <span>›</span>}
          </span>
        );
      })}
    </div>
  );
}
