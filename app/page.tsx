import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cover } from "@/components/Cover";
import {
  books,
  genres,
  genreCounts,
  getAuthor,
  getBook,
  ideasForBook,
} from "@/lib/data";

export default function HomePage() {
  const featured = getBook("atomic-habits")!;
  const featuredAuthor = getAuthor(featured.authorSlug)!;
  const featuredIdeas = ideasForBook(featured.slug).slice(0, 4);

  return (
    <>
      <Header active="discover" />

      <section className="hero">
        <div className="container">
          <h1>
            The key ideas in any book.
            <br />
            <em>Not summaries.</em>
          </h1>
          <p>
            The 5–10 atomic ideas that make a book worth reading — written by editors, in plain
            English. Skim, save, return.
          </p>
          <div className="hero-search">
            <span className="search-icon">⌕</span>
            <input placeholder={`Search ${books.length.toLocaleString()} books — try "Atomic Habits"`} />
          </div>
          <div className="hero-suggestions">
            <span>Popular:</span>
            {books.slice(0, 5).map((b) => (
              <Link key={b.slug} href={`/book/${b.slug}`}>
                {b.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="kicker">Featured this week</div>
              <h2>The book everyone&apos;s reading, in {featured.ideaSlugs.length} ideas</h2>
            </div>
            <Link href={`/book/${featured.slug}`} className="more">
              Open the full breakdown →
            </Link>
          </div>

          <div className="featured">
            <Cover
              title={featured.title}
              author={featuredAuthor.name}
              genre={featured.genre}
              size="lg"
              href={`/book/${featured.slug}`}
            />
            <div>
              <div className="kicker">
                {capitalize(featured.genre)} · {featured.year} ·{" "}
                {featured.ideaSlugs.length} key ideas · {totalReadMin(featured.slug)} min read
              </div>
              <h2>{featured.title}</h2>
              <div className="byline">{featuredAuthor.name}</div>
              <ul className="preview-ideas">
                {featuredIdeas.map((i) => (
                  <li key={i.slug}>{i.text}</li>
                ))}
              </ul>
              <Link href={`/book/${featured.slug}`} className="btn btn-primary">
                Read all {featured.ideaSlugs.length} ideas
              </Link>
              <Link href="/list" className="btn" style={{ marginLeft: "0.5rem" }}>
                + Add to my list
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="kicker">Browse</div>
              <h2>By genre</h2>
            </div>
          </div>

          <div className="genre-grid">
            {genres.map((g) => (
              <Link key={g.slug} href={`/genre/${g.slug}`} className="genre-tile" data-genre={g.slug}>
                <div className="name">{g.name}</div>
                <div className="count">{genreCounts[g.slug]} books</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="kicker">New this week</div>
              <h2>Recently added</h2>
            </div>
            <Link href="/library" className="more">
              All new books →
            </Link>
          </div>

          <div className="cover-grid">
            {books.map((b) => {
              const author = getAuthor(b.authorSlug)!;
              return (
                <Link key={b.slug} href={`/book/${b.slug}`} className="cover-tile">
                  <Cover title={b.title} author={author.name} genre={b.genre} />
                  <div className="t">{b.title}</div>
                  <div className="a">
                    {author.name} · {b.ideaSlugs.length} ideas
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="kicker">Why ideas, not summaries</div>
              <h2>What you&apos;ll find on every book page</h2>
            </div>
          </div>

          <div className="grid-wide">
            <div className="thread-card">
              <div className="kicker">01</div>
              <h3>The book in one line</h3>
              <p className="sub">
                Every book opens with the editor&apos;s distilled thesis — the single sentence the
                rest of the book is arguing.
              </p>
            </div>
            <div className="thread-card">
              <div className="kicker">02</div>
              <h3>5–10 atomic ideas</h3>
              <p className="sub">
                The actual claims the book makes, each as a standalone unit you can read in 30
                seconds, with context underneath.
              </p>
            </div>
            <div className="thread-card members">
              <div className="members-badge">Members</div>
              <div className="kicker">03</div>
              <h3>Cross-book connections</h3>
              <p className="sub">
                Each idea links to where else the argument shows up — what <em>Atomic Habits</em>{" "}
                shares with <em>The Power of Habit</em>, where they disagree.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function capitalize(s: string) {
  return s[0].toUpperCase() + s.slice(1);
}

function totalReadMin(bookSlug: string) {
  return ideasForBook(bookSlug).reduce((sum, i) => sum + i.readMin, 0);
}
