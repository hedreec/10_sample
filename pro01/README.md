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

## 学習の進め方（おすすめ）
1. **01_basic** で Next.js の骨格を掴む（ページ・コンポーネント・API Route）
2. **02_db** で PlanetScale + Prisma による DB CRUD を体験
3. **03_api_graph** で CSV 取り込み → 集計API → グラフ可視化の一連を構築
   - 国交省APIは `.env` にベースURLを設定すればパススルー動作
   - 未設定でもモックが返るので UI 学習は継続可能

## PlanetScale 簡易手順（学習向け）
- DB作成 → 接続情報コピー → 各プロジェクトの `.env` に `DATABASE_URL` 設定
- Prisma 生成とスキーマ反映：
```bash
npm run prisma:generate
npm run prisma:push
```
- データをGUIで確認：
```bash
npm run prisma:studio
```

## よくあるつまずき
- **DB接続エラー**: `sslaccept=strict` がURLに含まれているか確認
- **Prisma Client が見つからない**: `npm run prisma:generate` を実行してから `dev` を起動
- **CORS**: 外部APIはサーバー側（API Route）でフェッチするのが安全（この教材はその雛形つき）

---

困ったら、`02_db` の API 実装を参考に、`03_api_graph` にも横展開してください。
