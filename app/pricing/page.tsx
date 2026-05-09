import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <>
      <Header />

      <section className="theme-header" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div className="kicker">Pricing</div>
          <h1>Read the ideas. Pay if they earn it.</h1>
          <p>
            Books, authors, and individual idea pages are free forever. Membership unlocks the
            connective tissue — collections, cross-book threads, and the things that make the
            library more than a list.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            className="grid-wide"
            style={{ maxWidth: "920px", margin: "0 auto", alignItems: "stretch" }}
          >
            <div className="thread-card" style={{ minHeight: "420px" }}>
              <div className="kicker">Free</div>
              <h3>Reader</h3>
              <p className="sub">
                Every book page. Every idea. Every author. No paywall on the long tail.
              </p>
              <ul style={{ listStyle: "none", padding: 0, marginTop: "0.75rem" }}>
                <li style={{ padding: "0.25rem 0", color: "var(--muted)" }}>✓ All book pages</li>
                <li style={{ padding: "0.25rem 0", color: "var(--muted)" }}>✓ All idea pages</li>
                <li style={{ padding: "0.25rem 0", color: "var(--muted)" }}>✓ All author pages</li>
                <li style={{ padding: "0.25rem 0", color: "var(--muted)" }}>✓ Keyword search</li>
              </ul>
              <div className="stats" style={{ flexDirection: "column", gap: "0.5rem" }}>
                <span style={{ fontSize: "1rem", color: "var(--text)" }}>$0 forever</span>
                <Link href="/" className="btn">
                  Start reading
                </Link>
              </div>
            </div>

            <div className="thread-card members" style={{ minHeight: "420px", gridColumn: "span 2" }}>
              <div className="members-badge">Members</div>
              <h3>Crux Membership</h3>
              <p className="sub">
                Cross-book threads, collections, semantic search, offline export, and early access
                to newly published books.
              </p>
              <ul style={{ listStyle: "none", padding: 0, marginTop: "0.75rem" }}>
                <li style={{ padding: "0.25rem 0" }}>✓ Editor-curated cross-book threads</li>
                <li style={{ padding: "0.25rem 0" }}>✓ &ldquo;My list&rdquo; — save ideas, build collections</li>
                <li style={{ padding: "0.25rem 0" }}>
                  ✓ Semantic search (&ldquo;what books talk about loss aversion?&rdquo;)
                </li>
                <li style={{ padding: "0.25rem 0" }}>
                  ✓ Export your saved ideas to EPUB or markdown
                </li>
                <li style={{ padding: "0.25rem 0" }}>
                  ✓ Early access to newly added books (one week before free)
                </li>
              </ul>
              <div
                className="stats"
                style={{ flexDirection: "column", gap: "0.5rem", alignItems: "flex-start" }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "1.5rem",
                      color: "var(--text)",
                      fontFamily: "var(--serif)",
                      fontWeight: 500,
                    }}
                  >
                    $9.99
                  </span>
                  <span style={{ marginLeft: "0.5rem" }}>per month</span>
                </div>
                <div style={{ color: "var(--muted)" }}>or $79/year — save $40 (about 35%)</div>
                <Link href="/signin" className="btn btn-primary">
                  Become a member
                </Link>
              </div>
            </div>
          </div>

          <div
            style={{
              maxWidth: "620px",
              margin: "3rem auto 0",
              textAlign: "center",
              color: "var(--muted)",
              fontSize: "0.9375rem",
            }}
          >
            <p style={{ marginBottom: "0.75rem" }}>
              Cancel anytime. Annual members get a 30-day refund window.
            </p>
            <p>
              Crux costs roughly half of comparable services because the product is leaner — ideas,
              not 15-minute audio summaries. We&apos;d rather respect your time than fill it.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
