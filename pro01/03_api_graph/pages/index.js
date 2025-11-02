import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>不動産学習アプリ 03_api_graph</h1>
      <nav>
        <Link href="/import-csv">CSVインポート</Link>{' '}
        <Link href="/charts">グラフ表示</Link>{' '}
        <Link href="/mlit">国交省API（モック）</Link>
      </nav>
      <p>CSV→DB→可視化の流れを学び、本番API連携の雰囲気を掴みます。</p>
    </div>
  );
}
