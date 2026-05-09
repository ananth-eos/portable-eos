import Link from "next/link";
import { getBook, getAuthor } from "@/lib/data";
import type { Idea } from "@/lib/types";

export function IdeaCard({ idea }: { idea: Idea }) {
  const book = getBook(idea.bookSlug);
  if (!book) return null;
  const author = getAuthor(book.authorSlug);
  const long = idea.text.length > 110;

  return (
    <Link href={`/idea/${idea.slug}`} className="card" data-genre={book.genre}>
      <span className="era" data-genre={book.genre}>
        {capitalize(book.genre)} · {book.year}
      </span>
      <p className={`idea-text${long ? " long" : ""}`}>{idea.text}</p>
      {idea.tags.length > 0 && (
        <div className="tags">
          {idea.tags.slice(0, 2).map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
      )}
      <div className="source">
        <b>{author?.name}</b>
        <span className="dot"></span>
        {book.title}
        <span className="dot"></span>
        {idea.chapterRef}
      </div>
    </Link>
  );
}

function capitalize(s: string) {
  return s[0].toUpperCase() + s.slice(1);
}
