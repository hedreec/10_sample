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

### 01_basic のねらい
- Next.jsの基本（ページ、リンク、API Route）を体験
- コンポーネント分割とPropsの受け渡し

#### 実行
```bash
cd 01_basic
npm install
npm run dev
```
