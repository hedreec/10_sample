"use client";

import { useEffect, useMemo, useState } from "react";

type Property = {
  id: string;
  name: string;
  address: string;
  priceJPY: number;
  listedAt: string; // ISO string
};

export default function Page() {
  const [data, setData] = useState<Property[]>([]);
  const [q, setQ] = useState("");
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");

  useEffect(() => {
    fetch("/api/properties")
      .then((r) => r.json())
      .then((json) => setData(json.properties))
      .catch((e) => console.error(e));
  }, []);

  const filtered = useMemo(() => {
    return data
      .filter((p) => {
        const hit =
          p.name.toLowerCase().includes(q.toLowerCase()) ||
          p.address.toLowerCase().includes(q.toLowerCase());
        const inMin = minPrice === "" ? true : p.priceJPY >= Number(minPrice);
        const inMax = maxPrice === "" ? true : p.priceJPY <= Number(maxPrice);
        return hit && inMin && inMax;
      })
      .sort((a, b) => b.priceJPY - a.priceJPY);
  }, [data, q, minPrice, maxPrice]);

  return (
    <main className="card">
      <h1 style={{marginTop:0, marginBottom:12}}>不動産掲載履歴（ダミー）</h1>
      <p className="small">検索、価格フィルタ、/api/properties から取得したJSONの一覧表示デモです。</p>

      <div style={{display:"grid", gridTemplateColumns:"1fr", gap:10, marginTop:12}}>
        <input className="input" placeholder="キーワード（物件名・住所）" value={q} onChange={e=>setQ(e.target.value)} />
        <div style={{display:"grid", gridTemplateColumns:"repeat(2, 1fr)", gap:10}}>
          <input className="input" type="number" placeholder="最低価格(円)" value={minPrice} onChange={e=>setMinPrice(e.target.value === "" ? "" : Number(e.target.value))} />
          <input className="input" type="number" placeholder="最高価格(円)" value={maxPrice} onChange={e=>setMaxPrice(e.target.value === "" ? "" : Number(e.target.value))} />
        </div>
      </div>

      <ul className="list" style={{marginTop:16}}>
        {filtered.map((p) => (
          <li key={p.id} className="item">
            <h3>{p.name}</h3>
            <p className="small">{p.address}｜掲載開始: {new Date(p.listedAt).toLocaleDateString("ja-JP")}</p>
            <p style={{fontWeight:700}}>{p.priceJPY.toLocaleString()} 円</p>
          </li>
        ))}
        {filtered.length === 0 && <p className="small">該当なし</p>}
      </ul>
    </main>
  );
}
