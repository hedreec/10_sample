import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function Charts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/api/stats')
      .then(r => r.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h2>市区町村別 平均価格（円）</h2>
      <div className="chart-wrap">
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="city" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="avgPrice" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p>※ 住所のうち、市区町村名は単純抽出で推定しています。</p>
    </div>
  );
}
