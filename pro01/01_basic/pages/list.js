// mockのところでつまづく
import PropertyCard from '../components/PropertyCard';

const mock = [
  { id:1, title:'神戸・海が見える1LDK', price:19800000, address:'兵庫県神戸市垂水区', area:45 },
  { id:2, title:'大阪・駅近ワンルーム', price:12800000, address:'大阪府大阪市北区', area:22 },
  { id:3, title:'京都・庭付き戸建て', price:42800000, address:'京都府京都市左京区', area:95 }
];

export default function List() {
  return (
    <div>
      <h2>物件一覧（モックデータ）</h2>
      <div className="grid">
        {mock.map(p => <PropertyCard key={p.id} {...p} />)}
      </div>
    </div>
  );
}
