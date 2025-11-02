export const metadata = {
  title: "Next.js Sample | Real Estate Listing History",
  description: "A tiny Next.js demo app with an API route and a searchable list.",
};

import "./../styles/globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <div className="container">
          <header style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16}}>
            <div style={{display:"flex", alignItems:"center", gap:10}}>
              <span style={{fontWeight:700}}>🏠 Next.jsサンプル</span>
              <span className="badge">App Router</span>
            </div>
            <nav style={{display:"flex", gap:12}}>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
            </nav>
          </header>
          {children}
          <footer>
            <hr />
            <p>
              Tips: <span className="kbd">npm run dev</span> で起動。/api/properties でAPI応答を確認できます。
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
