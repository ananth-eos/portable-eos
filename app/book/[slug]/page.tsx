import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cover } from "@/components/Cover";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  books,
  getAuthor,
  getBook,
  getGenre,
  ideasForBook,
  relatedBooksFor,
} from "@/lib/data";

export function generateStaticParams() {
  return books.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) return {};
  const author = getAuthor(book.authorSlug);
  return {
    title: `${book.title} — ${author?.name ?? ""}`.trim(),
    description: book.thesis,
  };
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) notFound();
  const author = getAuthor(book.authorSlug);
  const genre = getGenre(book.genre);
  const ideas = ideasForBook(book.slug);
  const related = relatedBooksFor(book);
  const totalMin = ideas.reduce((sum, i) => sum + i.readMin, 0);

  return (
    <>
      <Header active="library" />

      <div className="container">
        <Breadcrumb
          items={[
            { label: "Library", href: "/library" },
            { label: genre?.name ?? "", href: `/genre/${book.genre}` },
            { label: book.title },
          ]}
        />

        <section className="book-header">
          <Cover
            title={book.title}
            author={author?.name ?? ""}
            genre={book.genre}
            size="lg"
            width={220}
          />
          <div className="book-meta">
            <span className="era" data-genre={book.genre}>
              {genre?.name} · {book.tags.join(" · ")}
            </span>
            <h1>{book.title}</h1>
            <div className="byline">
              <Link href={`/author/${book.authorSlug}`}>{author?.name}</Link>
              {" · "}
              {book.year}
              {book.publisher ? ` · ${book.publisher}` : ""}
            </div>
            <div className="facts">
              <span>
                <b>{book.pages}</b> pages
              </span>
              <span>
                <b>{ideas.length}</b> key ideas
              </span>
              <span>
                <b>{totalMin} min</b> to read all ideas
              </span>
              {book.rating && (
                <span>
                  <b>{book.rating.toFixed(1)}</b>★ goodreads
                </span>
              )}
            </div>
            <p>{book.framing}</p>
            <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem" }}>
              <a href="#ideas" className="btn btn-primary">
                Jump to the ideas →
              </a>
              <Link href="/list" className="btn">
                + Add to my list
              </Link>
            </div>
          </div>
        </section>

        <section style={{ maxWidth: "780px", margin: "0 auto", padding: "1rem 0 2rem" }}>
          <div className="thesis">
            <div className="label">The book in one line</div>
            <p>{book.thesis}</p>
          </div>
        </section>

        <section id="ideas" style={{ padding: "2rem 0 5rem" }}>
          <div className="section-head">
            <div>
              <div className="kicker">
                {ideas.length} ideas · curated by the editors · ~{totalMin} min read
              </div>
              <h2>The key ideas</h2>
            </div>
            <div style={{ fontSize: "0.8125rem", color: "var(--muted)" }}>
              In the order they&apos;re argued
            </div>
          </div>

          <div className="ideas-list">
            {ideas.map((i) => (
              <Link key={i.slug} href={`/idea/${i.slug}`} className="idea-row">
                <div className="idea-row-num">{String(i.position).padStart(2, "0")}</div>
                <div className="idea-row-text">{i.text}</div>
                <div className="idea-row-meta">
                  {i.chapterRef} · {i.readMin} min
                </div>
              </Link>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            {ideas[0] && (
              <Link href={`/idea/${ideas[0].slug}`} className="btn btn-primary">
                Read the first idea →
              </Link>
            )}
            <Link href="/list" className="btn">
              Save all {ideas.length} to my list
            </Link>
          </div>
        </section>

        {related.length > 0 && (
          <section style={{ padding: "3rem 0 5rem", borderTop: "1px solid var(--border)" }}>
            <div className="section-head">
              <div>
                <div className="kicker">In conversation with</div>
                <h2>Books that argue alongside this one</h2>
              </div>
              <Link href="/library" className="more">
                See all connections →
              </Link>
            </div>

            <div className="grid">
              {related.map((rb) => {
                const note = book.relatedNotes?.[rb.slug];
                const ra = getAuthor(rb.authorSlug);
                return (
                  <Link key={rb.slug} href={`/book/${rb.slug}`} className="card" data-genre={rb.genre}>
                    <span className="era" data-genre={rb.genre}>
                      {capitalize(rb.genre)} · {rb.year}
                    </span>
                    <p className="idea-text long">{note ?? rb.thesis}</p>
                    <div className="source">
                      <b>{ra?.name}</b>
                      <span className="dot"></span>
                      {rb.title}
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>

      <Footer minimal />
    </>
  );
}

function capitalize(s: string) {
  return s[0].toUpperCase() + s.slice(1);
}
