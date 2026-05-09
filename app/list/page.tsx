import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata = { title: "My list" };

export default function ListPage() {
  return (
    <>
      <Header active="list" />

      <div className="container">
        <Breadcrumb items={[{ label: "My list" }]} />
      </div>

      <section className="theme-header" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div className="kicker">Members</div>
          <h1>My list</h1>
          <p>Save ideas as you read. Group them into collections. Export them when you want.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            className="paywall"
            style={{ marginTop: "0", padding: "3rem 2.5rem" }}
          >
            <div className="kicker">Members</div>
            <h3>Save your first idea</h3>
            <p>
              Lists, collections, and exports are part of Crux Membership. $9.99/mo or $79/yr.
              Cancel anytime.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center" }}>
              <Link href="/pricing" className="btn btn-primary">
                See pricing
              </Link>
              <Link href="/" className="btn">
                Keep browsing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer minimal />
    </>
  );
}
