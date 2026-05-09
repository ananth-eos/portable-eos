import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cover } from "@/components/Cover";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  authors,
  booksByAuthor,
  getAuthor,
  ideasForBook,
} from "@/lib/data";

export function generateStaticParams() {
  return authors.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) return {};
  return { title: author.name, description: author.bio };
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) notFound();
  const authorBooks = booksByAuthor(author.slug);

  return (
    <>
      <Header active="library" />

      <div className="container">
        <Breadcrumb
          items={[{ label: "Library", href: "/library" }, { label: author.name }]}
        />
      </div>

      <section className="theme-header" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <div className="kicker">Author</div>
          <h1>{author.name}</h1>
          <p style={{ marginTop: "1.5rem" }}>{author.bio}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="kicker">
                {authorBooks.length} {authorBooks.length === 1 ? "book" : "books"} in the library
              </div>
              <h2>Books</h2>
            </div>
          </div>

          <div className="cover-grid">
            {authorBooks.map((b) => {
              const ideas = ideasForBook(b.slug);
              return (
                <Link key={b.slug} href={`/book/${b.slug}`} className="cover-tile">
                  <Cover title={b.title} author={author.name} genre={b.genre} />
                  <div className="t">{b.title}</div>
                  <div className="a">
                    {b.year} · {ideas.length} ideas
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer minimal />
    </>
  );
}
