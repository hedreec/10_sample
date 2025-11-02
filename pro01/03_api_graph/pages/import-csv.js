import { useState } from 'react';
import Papa from 'papaparse';

export default function ImportCSV() {
  const [rows, setRows] = useState([]);
  const [status, setStatus] = useState('');

  function onFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (res) => {
        setRows(res.data);
      }
    });
  }

  async function upload() {
    setStatus('アップロード中...');
    const valid = rows.map(r => ({
      title: r.title || '不明物件',
      price: Number(r.price || 0),
      address: r.address || '',
      area: Number(r.area || 0),
    }));
    const res = await fetch('/api/bulk-import', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ items: valid })
    });
    if (res.ok) setStatus('完了しました ✅');
    else setStatus('失敗しました ❌');
  }

  return (
    <div>
      <h2>CSVインポート</h2>
      <input type="file" accept=".csv" onChange={onFile} />
      <p>期待されるヘッダ: <code>title,price,address,area</code></p>
      <button onClick={upload} disabled={!rows.length}>DBへ一括登録</button>
      <p>{status}</p>
      <pre style={{maxWidth:840, whiteSpace:'pre-wrap'}}>{JSON.stringify(rows.slice(0,5), null, 2)}</pre>
    </div>
  );
}
