import { useEffect, useState } from 'react';

export default function Home() {
  const [list, setList] = useState([]);
  const [form, setForm] = useState({ title:'', price:'', address:'', area:'' });

  async function load() {
    const res = await fetch('/api/properties');
    const data = await res.json();
    setList(data);
  }
  useEffect(() => { load(); }, []);

  async function create(e) {
    e.preventDefault();
    const payload = { ...form, price: Number(form.price), area: Number(form.area) };
    await fetch('/api/properties', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) });
    setForm({ title:'', price:'', address:'', area:'' });
    load();
  }

  async function del(id) {
    await fetch(`/api/properties/${id}`, { method:'DELETE' });
    load();
  }

  return (
    <div>
      <h1>不動産学習アプリ 02_db</h1>
      <form onSubmit={create}>
        <input placeholder="タイトル" value={form.title} onChange={e=>setForm(f=>({...f,title:e.target.value}))} required />
        <input placeholder="価格（円）" type="number" value={form.price} onChange={e=>setForm(f=>({...f,price:e.target.value}))} required />
        <input placeholder="所在地" value={form.address} onChange={e=>setForm(f=>({...f,address:e.target.value}))} required />
        <input placeholder="面積（㎡）" type="number" value={form.area} onChange={e=>setForm(f=>({...f,area:e.target.value}))} required />
        <button type="submit">登録</button>
      </form>

      <div className="list">
        {list.map(p => (
          <div className="item" key={p.id}>
            <div>
              <strong>{p.title}</strong><br/>
              価格: {p.price.toLocaleString()} 円 / 面積: {p.area} ㎡ / 所在地: {p.address}
            </div>
            <button onClick={()=>del(p.id)}>削除</button>
          </div>
        ))}
      </div>
    </div>
  );
}
