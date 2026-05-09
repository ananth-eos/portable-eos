import Link from "next/link";

export function Footer({ minimal = false }: { minimal?: boolean }) {
  if (minimal) {
    return (
      <footer className="site">
        <div className="container">
          <div
            className="copyright"
            style={{ marginTop: 0, paddingTop: 0, border: 0 }}
          >
            <span>
              © Crux. Original editorial commentary. Quotes are minimal and used as criticism.
            </span>
            <span>Built for readers who already have a reading list.</span>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="site">
      <div className="container">
        <div className="f-grid">
          <div>
            <div className="logo" style={{ marginBottom: "0.75rem" }}>
              Crux<span>.</span>
            </div>
            <p style={{ maxWidth: "320px" }}>
              The key ideas in any book. Curated by editors, written for skim-and-recall.
            </p>
          </div>
          <div>
            <h4>Browse</h4>
            <ul>
              <li><Link href="/library">All books</Link></li>
              <li><Link href="/genres">By genre</Link></li>
              <li><Link href="/library">By author</Link></li>
              <li><Link href="/library">New this week</Link></li>
            </ul>
          </div>
          <div>
            <h4>Members</h4>
            <ul>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/list">My list</Link></li>
              <li><Link href="/library">Connections</Link></li>
            </ul>
          </div>
          <div>
            <h4>About</h4>
            <ul>
              <li><Link href="/about">Editorial approach</Link></li>
              <li><Link href="/about">For authors</Link></li>
              <li><Link href="/about">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <span>
            © Crux. Original editorial commentary. Quotes are minimal and used as criticism.
          </span>
          <span>Built for readers who already have a reading list.</span>
        </div>
      </div>
    </footer>
  );
}
