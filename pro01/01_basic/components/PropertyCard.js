export default function PropertyCard({ title, price, address, area }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>価格: {price.toLocaleString()} 円</p>
      <p>所在地: {address}</p>
      <p>面積: {area} ㎡</p>
    </div>
  );
}
