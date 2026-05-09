import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { genres, genreCounts, booksInGenre } from "@/lib/data";

export const metadata = { title: "Genres" };

export default function GenresIndexPage() {
  return (
    <>
      <Header active="genres" />

      <div className="container">
        <Breadcrumb items={[{ label: "Genres" }]} />
      </div>

      <section className="theme-header" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div className="kicker">Browse</div>
          <h1>Genres</h1>
          <p>Eight ways to find what to read next.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="genre-grid">
            {genres.map((g) => {
              const live = booksInGenre(g.slug).length;
              return (
                <Link key={g.slug} href={`/genre/${g.slug}`} className="genre-tile" data-genre={g.slug}>
                  <div className="name">{g.name}</div>
                  <div className="count">
                    {genreCounts[g.slug]} books · {live} curated
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
