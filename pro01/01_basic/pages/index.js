import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header>
        <h1>不動産学習アプリ 01_basic</h1>
        <nav>
          <Link href="/list">物件一覧</Link>{' '}
          <Link href="/about">この教材について</Link>{' '}
          <a className="btn" href="/api/hello">API Route の例</a>
        </nav>
      </header>
      <p>Next.js の基本を体験できます。ページ遷移・コンポーネント・API Route を把握しましょう。</p>
    </div>
  );
}
