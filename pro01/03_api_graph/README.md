# Next.js 不動産学習パック（初学者向け）

このZIPは、**Next.js × 不動産プロジェクト** を段階的に学ぶためのスターター一式です。
フォルダは学習順に並んでいます。各フォルダは**独立した Next.js アプリ**です。

```
/01_basic      … Next.js 基礎（ページ遷移・コンポーネント・API Route）
/02_db         … PlanetScale（MySQL）+ Prisma + CRUD
/03_api_graph  … 国交省API（モック構成）+ CSVアップロード + グラフ表示
```

---

## 前提
- Node.js 18 以上（推奨: 20）
- npm または pnpm（以下は npm 例で記載）

各プロジェクト共通の初回セットアップ：
```bash
cd 01_basic   # or 02_db / 03_api_graph
npm install
npm run dev
```
ブラウザで http://localhost:3000 を開いてください。

### 03_api_graph のねらい
- CSVアップロード → DB保存
- グラフ描画（平均価格を市区町村別で可視化）
- 国交省API 連携の呼び出し型を理解（モック/パススルー）

#### セットアップ
```bash
cd 03_api_graph
npm install
cp .env.example .env   # PlanetScale の接続情報を設定
npm run prisma:generate
npm run prisma:push
npm run dev
```
- CSVは以下の列ヘッダを推奨: `title,price,address,area`
- 価格や面積は数値で記載

#### 国交省APIについて
- `/api/fetch-mlit` は **モック兼パススルー** のエンドポイントです。
- `MLIT_BASE_URL` 等を .env に設定すれば、サーバー側から外部APIにフェッチする雛形になります。
- 未設定時はダミーデータを返すため、**UI動作の学習**には問題ありません。
