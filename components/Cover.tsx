import Link from "next/link";
import type { Genre } from "@/lib/types";

type Props = {
  title: string;
  author: string;
  genre: Genre;
  size?: "sm" | "md" | "lg";
  href?: string;
  width?: string | number;
};

export function Cover({ title, author, genre, size = "md", href, width }: Props) {
  const className = `cover${size === "lg" ? " cover-lg" : size === "sm" ? " cover-sm" : ""}`;
  const titleLines = title.split(/\s+/);
  const renderedTitle =
    titleLines.length <= 2
      ? title
      : titleLines.slice(0, Math.ceil(titleLines.length / 2)).join(" ") +
        "\n" +
        titleLines.slice(Math.ceil(titleLines.length / 2)).join(" ");

  const style = width ? { width: typeof width === "number" ? `${width}px` : width } : undefined;

  const inner = (
    <>
      <div className="t" style={{ whiteSpace: "pre-line" }}>{renderedTitle}</div>
      <div className="a">{author}</div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={className} data-genre={genre} style={style}>
        {inner}
      </Link>
    );
  }
  return (
    <div className={className} data-genre={genre} style={style}>
      {inner}
    </div>
  );
}
