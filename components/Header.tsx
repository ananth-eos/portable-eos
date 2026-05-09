import Link from "next/link";

export function Header({ active }: { active?: "discover" | "genres" | "library" | "list" }) {
  return (
    <header className="site">
      <div className="container nav">
        <Link href="/" className="logo">
          Crux<span>.</span>
        </Link>
        <nav className="nav-links">
          <Link href="/" className={active === "discover" ? "active" : undefined}>
            Discover
          </Link>
          <Link href="/genres" className={active === "genres" ? "active" : undefined}>
            Genres
          </Link>
          <Link href="/library" className={active === "library" ? "active" : undefined}>
            Library
          </Link>
          <Link href="/list" className={active === "list" ? "active" : undefined}>
            My list
          </Link>
        </nav>
        <div className="nav-right">
          <div className="search-wrap">
            <span className="search-icon">⌕</span>
            <input className="search" placeholder="Find a book or author…" />
          </div>
          <Link href="/signin" className="btn">
            Sign in
          </Link>
          <Link href="/pricing" className="btn btn-primary">
            Start free
          </Link>
        </div>
      </div>
    </header>
  );
}
