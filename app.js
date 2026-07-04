let deferredPrompt;
const installButton = document.querySelector("#installButton");
const fallbackArticles = [
  {
    id: "codex-getting-started-workbench",
    title: "一般人如何快速上手 Codex：把資料夾變成 AI 工作台",
    date: "2026.07.04",
    sourceDate: "2026.05.01",
    category: "Codex 入門",
    tags: ["Codex", "AI Agent", "工作台", "資料整理"],
    sourceTitle: "一般人如何快速上手 Codex 超完整圖文教學：讓 AI 助理整理文件表格，建立自動化流程",
    sourceUrl: "https://www.playpcesor.com/2026/05/codex-ai.html",
    summary: "這篇文章適合作為 Codex 入門：它把 Codex 從寫程式工具，重新定位成能讀取本機資料夾、整理文件、處理表格、建立成果的 AI 工作台。",
    hero: "先不要急著自動化，先建立一個安全的專案資料夾，讓 AI 看懂材料，再交付小任務。",
    keyPoints: [
      { title: "ChatGPT 負責想，Codex 負責做", text: "ChatGPT 適合研究、發想與復盤；Codex 適合進入資料夾，完成文件、表格、簡報與小工具輸出。" },
      { title: "資料夾就是工作邊界", text: "對一般工作者來說，Codex 最好理解的方式，是把本機資料夾變成可以被 AI 處理的工作台。" },
      { title: "先盤點，不先修改", text: "第一次使用時，先請 Codex 回報看到了哪些檔案、可能代表什麼、適合做哪些小任務。" },
      { title: "用規則文件累積記憶", text: "當 Codex 理解專案後，可以建立 AGENTS.md 或專案規則文件，讓後續任務有共同原則。" }
    ],
    sections: [
      { heading: "這篇在講什麼", body: "文章主張 Codex 的價值不只屬於工程師。把工作資料放進可控資料夾後，Codex 就能協助整理文件、處理 PDF、分析表格、建立簡報草稿，甚至做出小型工具。" },
      { heading: "最重要的分工", body: "ChatGPT 更適合討論方向、研究資料與拆解任務；Codex 更適合接手實際文件與資料夾，完成具體成果。" },
      { heading: "上手方式", body: "先建立副本資料夾，把旅行票券、理財月報、課程講義、網站草稿或訪談資料放進去，第一步只讓 Codex 盤點。" },
      { heading: "可驗收的小任務", body: "好的第一個任務應該小、明確、容易確認，例如分類票券、整理行程、列出檔案用途、找出三個安全任務。" }
    ],
    workflow: ["建立副本資料夾", "請 Codex 先盤點內容", "選一個安全小任務", "執行並人工驗收", "把成功做法寫成規則文件"],
    take: "這篇適合放在本網站作為入門：它先定義 Codex 的工作邊界，再示範如何從低風險資料夾任務開始。"
  },
  {
    id: "codex-knowledge-workflow-cases",
    title: "Codex 知識工作案例：從文書編輯、課程教材到資料整理",
    date: "2026.07.04",
    sourceDate: "2026.06.30",
    category: "Codex 案例",
    tags: ["Codex", "知識工作", "Skill", "Workflow"],
    sourceTitle: "Codex 我常用的知識工作案例分享：從文書編輯、課程教材到資料整理的 AI 工作流",
    sourceUrl: "https://www.playpcesor.com/2026/06/codex-ai.html",
    summary: "這篇文章展示 Codex 如何從寫程式延伸到知識工作：接手做到一半的專案、處理簡報與 PDF、整理素材庫，並把成功流程寫成可重複使用的規則。",
    hero: "Codex 的價值不只在產出答案，而是在真實工作流程中接手那些繁瑣、重複、需要跨工具整理的中間步驟。",
    keyPoints: [
      { title: "讓 AI 跑中間迭代", text: "文案與內容調整不必一次求最終答案，可以讓 Codex 讀資料後產出多輪版本，再由人整合。" },
      { title: "轉成可用格式", text: "逐字稿轉提詞簡報、PDF 擷取裁切、簡報重排，都是格式細節多但耗時的知識工作。" },
      { title: "建立知識管線", text: "Codex 可以搜尋舊文章、整理圖片與案例、輸出課程大綱或簡報草稿。" },
      { title: "拆素材、寫規則", text: "把既有簡報、講義和報告拆成可重組素材，再把成功做法寫回規則或 skill。" }
    ],
    sections: [
      { heading: "這篇在講什麼", body: "文章整理作者近期使用 Codex 的知識工作場景，包括行銷文案、課程提詞簡報、PDF 處理、素材拆解、學習平台與 AI 操作流程。" },
      { heading: "核心觀念", body: "不要把 Codex 當成從零幻想答案的工具，而是把它放進已有資料、文件、規則與專案脈絡中，讓它接手中間步驟。" },
      { heading: "適合任務", body: "重複、繁瑣、格式明確、資料來源已存在、需要跨文件整理的工作，適合讓 Codex 先做初稿或批次處理。" },
      { heading: "人的角色", body: "人仍然負責定義目標、給出限制、驗收成果、判斷哪些素材值得保留，以及把成功流程變成下一次可沿用的規則。" }
    ],
    workflow: ["讓 Codex 讀專案脈絡", "指定輸出格式與限制", "先做小範圍測試", "確認後擴大批次處理", "把成功流程寫成規則或 skill"],
    take: "這篇適合作為進階案例：它展示 Codex 如何從單次任務，延伸成可持續累積的知識工作流。"
  }
];
const articles = Array.isArray(window.AI_SKILLS_ARTICLES) && window.AI_SKILLS_ARTICLES.length ? window.AI_SKILLS_ARTICLES : fallbackArticles;

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js");
  });

  let refreshing = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  });
}

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  installButton.hidden = false;
});

installButton?.addEventListener("click", async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  installButton.hidden = true;
});

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function articleUrl(article) {
  return `./article.html?id=${encodeURIComponent(article.id)}`;
}

function renderHome() {
  const list = document.querySelector("#articleList");
  if (!list) return;

  list.innerHTML = articles
    .map((article, index) => {
      const tags = article.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
      const cardClass = index === 0 ? "article-card library-card featured-card" : "article-card library-card compact-list-card";
      return `
        <article class="${cardClass}">
          <div>
            <p class="article-meta">${escapeHtml(article.date)} / ${escapeHtml(article.category)}</p>
            <h3>${escapeHtml(article.title)}</h3>
            <p>${escapeHtml(article.summary)}</p>
            <div class="tag-row">${tags}</div>
          </div>
          <a class="read-link" href="${articleUrl(article)}">閱讀整理</a>
        </article>
      `;
    })
    .join("");
}

function renderArticle() {
  const page = document.querySelector("#articlePage");
  if (!page) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || articles[0]?.id;
  const article = articles.find((item) => item.id === id) || articles[0];

  if (!article) {
    page.innerHTML = `<h1>目前沒有文章</h1><p>回首頁稍後再看。</p>`;
    return;
  }

  document.title = `${article.title}｜AI Skills`;
  const keyPoints = article.keyPoints
    .map((point) => `
      <li>
        <strong>${escapeHtml(point.title)}</strong>
        <span>${escapeHtml(point.text)}</span>
      </li>
    `)
    .join("");

  const sections = article.sections
    .map((section) => `<section><h3>${escapeHtml(section.heading)}</h3><p>${escapeHtml(section.body)}</p></section>`)
    .join("");

  const workflow = article.workflow.map((step) => `<li>${escapeHtml(step)}</li>`).join("");
  const tags = article.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
  const currentIndex = articles.findIndex((item) => item.id === article.id);
  const prev = articles[currentIndex - 1];
  const next = articles[currentIndex + 1];

  page.innerHTML = `
    <a class="back-link" href="./#articles">回文章列表</a>
    <header class="article-hero">
      <p class="eyebrow">${escapeHtml(article.category)}</p>
      <h1>${escapeHtml(article.title)}</h1>
      <p>${escapeHtml(article.hero)}</p>
      <div class="article-meta-line">
        <span>${escapeHtml(article.date)}</span>
        <span>來源日期 ${escapeHtml(article.sourceDate)}</span>
      </div>
      <div class="tag-row">${tags}</div>
    </header>

    <section class="summary-panel">
      <h2>一句話摘要</h2>
      <p>${escapeHtml(article.summary)}</p>
    </section>

    <section class="keypoint-strip">
      <p class="eyebrow">Key Points</p>
      <h2>重點摘要</h2>
      <ul>${keyPoints}</ul>
    </section>

    <section class="full-article article-content">
      <p class="eyebrow">Digest</p>
      <h2>整理內容</h2>
      <div class="article-body">${sections}</div>
    </section>

    <section class="workflow article-workflow">
      <div><p class="eyebrow">Workflow</p><h2>可執行流程</h2></div>
      <ol>${workflow}</ol>
    </section>

    <section class="source-box">
      <p>我的判斷</p>
      <strong>${escapeHtml(article.take)}</strong>
      <p class="source-title">來源文章</p>
      <a href="${escapeHtml(article.sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(article.sourceTitle)}</a>
    </section>

    <nav class="article-nav">
      ${prev ? `<a href="${articleUrl(prev)}">上一篇：${escapeHtml(prev.title)}</a>` : `<span></span>`}
      ${next ? `<a href="${articleUrl(next)}">下一篇：${escapeHtml(next.title)}</a>` : `<span></span>`}
    </nav>
  `;
}

if (document.body.dataset.page === "home") renderHome();
if (document.body.dataset.page === "article") renderArticle();
