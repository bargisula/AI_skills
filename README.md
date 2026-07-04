# AI Skills PWA

AI Skills 是一個部署到 Cloudflare Pages 的靜態 PWA 知識庫，用來整理 GPT、Claude、Codex、Agent、Skill 與 AI 工作流案例。

## Cloudflare Pages 設定

因為這是純靜態網站，可以這樣設定：

- Framework preset: `None`
- Build command: 留空
- Build output directory: `/`
- Root directory: `/`

如果 Cloudflare 要求填 build command，也可以填：

```bash
exit 0
```

## PWA 功能

- `manifest.webmanifest`：手機安裝名稱、主題色、icon
- `sw.js`：離線快取首頁與核心資源，`skipWaiting`/`clients.claim` 讓更新即時生效
- `icons/icon.svg`、`icons/icon-192.png`、`icons/icon-512.png`、`icons/apple-touch-icon.png`：App icon

## 新增文章

1. 在 `data/articles/` 新增一個 `<id>.json`（欄位參考同目錄下既有檔案）
2. 把 `id` 加進 `data/articles/index.json`（陣列順序 = 首頁顯示順序）
3. 執行：

```bash
node scripts/build-articles.mjs
```

這會重新產生 `data/articles.js`（實際被 `index.html`/`article.html`載入的檔案）與 `sitemap.xml`。commit 時記得把 JSON 原始檔跟這兩個產生出來的檔案一起加進去。

## 來源

本篇首篇整理來源：

- https://www.playpcesor.com/2026/06/codex-ai.html
