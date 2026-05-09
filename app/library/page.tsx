import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cover } from "@/components/Cover";
import { Breadcrumb } from "@/components/Breadcrumb";
import { books, getAuthor, ideasForBook } from "@/lib/data";

export const metadata = { title: "Library" };

export default function LibraryPage() {
  return (
    <>
      <Header active="library" />

      <div className="container">
        <Breadcrumb items={[{ label: "Library" }]} />
      </div>

      <section className="theme-header" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div className="kicker">Library</div>
          <h1>Every book, every idea</h1>
          <p>{books.length} books curated by the editors. Each one decomposed into atomic ideas.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cover-grid">
            {books.map((b) => {
              const a = getAuthor(b.authorSlug)!;
              const ideas = ideasForBook(b.slug);
              return (
                <Link key={b.slug} href={`/book/${b.slug}`} className="cover-tile">
                  <Cover title={b.title} author={a.name} genre={b.genre} />
                  <div className="t">{b.title}</div>
                  <div className="a">
                    {a.name} · {ideas.length} ideas · {b.year}
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
