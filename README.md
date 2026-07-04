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
- `sw.js`：離線快取首頁與核心資源
- `icons/icon.svg`：App icon

## 來源

本篇首篇整理來源：

- https://www.playpcesor.com/2026/06/codex-ai.html
