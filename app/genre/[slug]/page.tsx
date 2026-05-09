import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cover } from "@/components/Cover";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  booksInGenre,
  genres,
  getAuthor,
  getGenre,
  ideasForBook,
} from "@/lib/data";
import type { Genre } from "@/lib/types";

export function generateStaticParams() {
  return genres.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const genre = getGenre(slug as Genre);
  if (!genre) return {};
  return {
    title: genre.name,
    description: genre.description,
  };
}

export default async function GenrePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const genre = getGenre(slug as Genre);
  if (!genre) notFound();
  const inGenre = booksInGenre(genre.slug);

  return (
    <>
      <Header active="genres" />

      <div className="container">
        <Breadcrumb
          items={[
            { label: "Genres", href: "/genres" },
            { label: genre.name },
          ]}
        />
      </div>

      <section className="theme-header" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div className="kicker">Genre</div>
          <h1>{genre.name}</h1>
          <p>{genre.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="kicker">{inGenre.length} books in the library</div>
              <h2>All books</h2>
            </div>
          </div>

          {inGenre.length === 0 ? (
            <p style={{ color: "var(--muted)" }}>
              No books in this genre yet — coming soon as the editorial team expands the library.
            </p>
          ) : (
            <div className="cover-grid">
              {inGenre.map((b) => {
                const a = getAuthor(b.authorSlug)!;
                const ideas = ideasForBook(b.slug);
                return (
                  <Link key={b.slug} href={`/book/${b.slug}`} className="cover-tile">
                    <Cover title={b.title} author={a.name} genre={b.genre} />
                    <div className="t">{b.title}</div>
                    <div className="a">
                      {a.name} · {ideas.length} ideas
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer minimal />
    </>
  );
}
