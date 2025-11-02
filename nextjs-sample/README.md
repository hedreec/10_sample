# Next.js Sample (App Router)

VSCodeで開いてすぐ動かせる、超ミニマルなNext.jsサンプルです。  
`/api/properties` でダミー不動産データを返し、Homeページで検索＆フィルタ表示します。

## 動かし方

```bash
# 1) 依存インストール
npm install

# 2) 開発起動
npm run dev
# http://localhost:3000 へアクセス
```

## フォルダ構成

```
app/
  layout.tsx     # 共通レイアウト
  page.tsx       # トップ（クライアント側でAPIをfetch）
  about/page.tsx # 静的ページ
  api/properties/route.ts # APIルート(ダミーJSON)
styles/
  globals.css     # シンプルなスタイル
```

## 置き換えポイント

- `app/api/properties/route.ts` をDBや外部API連携に差し替えれば、そのまま実案件の骨子になります。
- TailwindやUIライブラリは後から追加可能です。

Happy hacking! 🛠️
