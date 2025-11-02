import { useState } from 'react';

export default function MLIT() {
  const [q, setQ] = useState({ prefecture: '兵庫県', city: '神戸市', year: '2024' });
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('');

  async function run() {
    setStatus('取得中...');
    const res = await fetch(`/api/fetch-mlit?prefecture=${encodeURIComponent(q.prefecture)}&city=${encodeURIComponent(q.city)}&year=${encodeURIComponent(q.year)}`);
    const json = await res.json();
    setData(json);
    setStatus('完了');
  }

  return (
    <div>
      <h2>国交省API（モック/パススルー）</h2>
      <div style={{display:'grid',gap:8,maxWidth:480}}>
        <input value={q.prefecture} onChange={e=>setQ({...q, prefecture:e.target.value})} placeholder="都道府県" />
        <input value={q.city} onChange={e=>setQ({...q, city:e.target.value})} placeholder="市区町村" />
        <input value={q.year} onChange={e=>setQ({...q, year:e.target.value})} placeholder="年（例: 2024）" />
        <button onClick={run}>検索</button>
      </div>
      <p>{status}</p>
      <pre style={{maxWidth:900, whiteSpace:'pre-wrap'}}>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
