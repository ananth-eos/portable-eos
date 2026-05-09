import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cover } from "@/components/Cover";
import { Breadcrumb } from "@/components/Breadcrumb";
import { IdeaCard } from "@/components/IdeaCard";
import {
  getAuthor,
  getBook,
  getIdea,
  ideas,
  ideasForBook,
  relatedIdeas,
} from "@/lib/data";

export function generateStaticParams() {
  return ideas.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const idea = getIdea(slug);
  if (!idea) return {};
  const book = getBook(idea.bookSlug);
  return {
    title: `${truncate(idea.text, 60)} — ${book?.title ?? ""}`.trim(),
    description: idea.distilled,
  };
}

export default async function IdeaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idea = getIdea(slug);
  if (!idea) notFound();
  const book = getBook(idea.bookSlug);
  if (!book) notFound();
  const author = getAuthor(book.authorSlug);

  const allIdeasInBook = ideasForBook(book.slug);
  const idxInBook = allIdeasInBook.findIndex((i) => i.slug === idea.slug);
  const next = allIdeasInBook[idxInBook + 1];
  const prev = allIdeasInBook[idxInBook - 1];
  const related = relatedIdeas(idea.relatedIdeaSlugs);

  return (
    <>
      <Header active="library" />

      <div className="container">
        <Breadcrumb
          items={[
            { label: "Library", href: "/library" },
            { label: book.title, href: `/book/${book.slug}` },
            { label: `Idea ${String(idea.position).padStart(2, "0")} of ${allIdeasInBook.length}` },
          ]}
        />
      </div>

      <article className="container">
        <section className="idea-hero">
          <span className="era" data-genre={book.genre}>
            {capitalize(book.genre)} · {book.title} · Idea{" "}
            {String(idea.position).padStart(2, "0")} of {allIdeasInBook.length}
          </span>
          <blockquote style={{ marginTop: "1.5rem" }}>{idea.text}</blockquote>
          <div className="idea-source">
            <Cover
              title={book.title}
              author={author?.name ?? ""}
              genre={book.genre}
              size="sm"
              href={`/book/${book.slug}`}
              width={56}
            />
            <div className="meta">
              <div className="title">
                <Link href={`/book/${book.slug}`}>{book.title}</Link>, {idea.chapterRef}
              </div>
              <div className="byline">
                {author?.name} · {book.year}
                {book.publisher ? ` · ${book.publisher}` : ""}
              </div>
            </div>
          </div>
        </section>

        <section className="idea-body">
          <h3>Why this matters</h3>
          {idea.whyItMatters.split(/\n\n+/).map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <div className="thesis">
            <div className="label">The argument, distilled</div>
            <p>{idea.distilled}</p>
          </div>

          {idea.whereElse && (
            <>
              <h3>Where else this argument shows up</h3>
              <p>{idea.whereElse}</p>
            </>
          )}

          {idea.howToUse && (
            <>
              <h3>How to use it</h3>
              <p>{idea.howToUse}</p>
            </>
          )}
        </section>

        <div className="actions-bar">
          <Link href="/list" className="btn">
            + Save to my list
          </Link>
          <button className="btn">↗ Share idea</button>
          <button className="btn">↻ Mark as read</button>
          <div style={{ marginLeft: "auto", display: "flex", gap: "0.5rem" }}>
            {prev && (
              <Link href={`/idea/${prev.slug}`} className="btn">
                ← Previous
              </Link>
            )}
            {next ? (
              <Link href={`/idea/${next.slug}`} className="btn">
                Next →
              </Link>
            ) : (
              <Link href={`/book/${book.slug}`} className="btn">
                Back to book
              </Link>
            )}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="related">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="kicker">Related ideas in the library</div>
                <h2>The argument continues</h2>
              </div>
              <Link href="/library" className="more">
                See all connections →
              </Link>
            </div>

            <div className="grid">
              {related.map((r) => (
                <IdeaCard key={r.slug} idea={r} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer minimal />
    </>
  );
}

function capitalize(s: string) {
  return s[0].toUpperCase() + s.slice(1);
}
function truncate(s: string, max: number) {
  return s.length > max ? s.slice(0, max).trim() + "…" : s;
}
