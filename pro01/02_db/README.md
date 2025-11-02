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

### 02_db のねらい
- PlanetScale（MySQL）+ Prisma による DB 接続
- 物件データの CRUD（作成・一覧・削除）
- Next.js API Routes から Prisma Client を呼び出す

#### セットアップ（PlanetScale）
1. PlanetScale でデータベースを作成  
2. 接続文字列をコピーして `.env` に設定  
3. 初回スキーマ反映：
```bash
npm install
npm run prisma:generate
npm run prisma:push
npm run dev
```
4. ブラウザで http://localhost:3000 を開く

#### 注意
- PlanetScale はスキーマ変更時に `prisma db push` が簡単です（学習用途）。
- 本番運用ではブランチ戦略やマイグレーション運用を検討してください。
