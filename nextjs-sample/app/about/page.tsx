export const dynamic = "force-static"; // このページはビルド時に静的生成

export default function About() {
  return (
    <main className="card">
      <h1 style={{marginTop:0}}>About</h1>
      <p>このサンプルは、Next.js App Router + API Routes の最小構成です。</p>
      <ul>
        <li>Home: クライアントコンポーネントでAPIのJSONを取得し表示</li>
        <li>/api/properties: ダミーデータを返すAPI</li>
      </ul>
      <p>本番ではDBや外部APIに置き換えてください。</p>
    </main>
  );
}
