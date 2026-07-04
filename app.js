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
    summary: "這篇文章把 Codex 重新定位成能讀取本機資料夾、整理文件、處理表格、建立成果的 AI 工作台，而不只是寫程式工具；建議先建立一個安全的專案資料夾，讓 AI 看懂材料，再從低風險的小任務開始交付，跑通後把成功做法寫成規則文件。",
    keyPoints: [
      { title: "ChatGPT 負責想，Codex 負責做", text: "ChatGPT 適合研究、發想與復盤；Codex 適合進入資料夾，完成文件、表格、簡報與小工具輸出。" },
      { title: "資料夾就是工作邊界", text: "對一般工作者來說，Codex 最好理解的方式，是把本機資料夾變成可以被 AI 處理的工作台。" },
      { title: "先盤點，不先修改", text: "第一次使用時，先請 Codex 回報看到了哪些檔案、可能代表什麼、適合做哪些小任務。" },
      { title: "用規則文件累積記憶", text: "當 Codex 理解專案後，可以建立 AGENTS.md 或專案規則文件，讓後續任務有共同原則。" }
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
    summary: "這篇文章展示 Codex 如何從寫程式延伸到知識工作：它的價值不只在產出答案，而是接手真實工作流程中那些繁瑣、重複、需要跨工具整理的中間步驟，例如接手做到一半的專案、處理簡報與 PDF、整理素材庫，並把成功流程寫成可重複使用的規則。",
    keyPoints: [
      { title: "讓 AI 跑中間迭代", text: "文案與內容調整不必一次求最終答案，可以讓 Codex 讀資料後產出多輪版本，再由人整合。" },
      { title: "轉成可用格式", text: "逐字稿轉提詞簡報、PDF 擷取裁切、簡報重排，都是格式細節多但耗時的知識工作。" },
      { title: "建立知識管線", text: "Codex 可以搜尋舊文章、整理圖片與案例、輸出課程大綱或簡報草稿。" },
      { title: "拆素材、寫規則", text: "把既有簡報、講義和報告拆成可重組素材，再把成功做法寫回規則或 skill。" }
    ],
    workflow: [
      { step: "搜尋與整理", prompt: "請搜尋我資料夾裡跟「[主題]」有關的舊文章、筆記與圖片，列出每一份的標題、日期、一句話重點，並依主題分類整理成清單。" },
      { step: "製作課程大綱", prompt: "根據上面整理好的清單，幫我規劃一份課程大綱：列出每個章節標題、學習目標、預計時長，並標註哪些既有素材可以直接沿用、哪些需要補充。" },
      { step: "要求輸出", prompt: "請把第一章節展開成完整簡報草稿，條列重點、每頁不超過 5 行，並在最後附上這份簡報引用了哪些原始素材。" }
    ],
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

function renderWorkflowStep(step) {
  if (typeof step === "string") return `<li>${escapeHtml(step)}</li>`;
  return `
    <li>
      <strong>${escapeHtml(step.step)}</strong>
      <blockquote class="prompt-quote">
        <p>${escapeHtml(step.prompt)}</p>
        <button type="button" class="copy-btn" data-prompt="${escapeHtml(step.prompt)}">複製</button>
      </blockquote>
    </li>
  `;
}

document.addEventListener("click", async (event) => {
  const button = event.target.closest(".copy-btn");
  if (!button) return;
  try {
    await navigator.clipboard.writeText(button.dataset.prompt);
    const original = button.textContent;
    button.textContent = "已複製";
    setTimeout(() => { button.textContent = original; }, 1500);
  } catch {
    /* clipboard unavailable, ignore */
  }
});

let activeFilter = null;
let searchQuery = "";

function matchesFilter(article, filter) {
  if (!filter) return true;
  return article.tags.includes(filter) || article.category.includes(filter);
}

function matchesSearch(article, query) {
  if (!query) return true;
  const haystack = [article.title, article.summary, article.category, ...article.tags].join(" ").toLowerCase();
  return haystack.includes(query.toLowerCase());
}

function renderHome() {
  const list = document.querySelector("#articleList");
  if (!list) return;

  const filtered = articles.filter((article) => matchesFilter(article, activeFilter) && matchesSearch(article, searchQuery));

  const status = document.querySelector("#filterStatus");
  if (status) {
    const parts = [];
    if (activeFilter) parts.push(`分類：${escapeHtml(activeFilter)}`);
    if (searchQuery) parts.push(`關鍵字：${escapeHtml(searchQuery)}`);
    if (parts.length) {
      status.hidden = false;
      status.innerHTML = `${parts.join("・")}（${filtered.length} 篇）<button type="button" id="clearFilter">清除篩選</button>`;
      document.querySelector("#clearFilter")?.addEventListener("click", () => {
        searchQuery = "";
        const input = document.querySelector("#searchInput");
        if (input) input.value = "";
        setFilter(null);
      });
    } else {
      status.hidden = true;
      status.innerHTML = "";
    }
  }

  if (!filtered.length) {
    list.innerHTML = `<p class="empty-state">沒有符合條件的文章。</p>`;
    return;
  }

  list.innerHTML = filtered
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

function setFilter(filter) {
  activeFilter = activeFilter === filter ? null : filter;
  document.querySelectorAll(".chip").forEach((button) => {
    const isActive = button.dataset.filter === activeFilter;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  renderHome();
}

function setupFilters() {
  document.querySelectorAll(".chip").forEach((button) => {
    button.addEventListener("click", () => setFilter(button.dataset.filter));
  });
  const input = document.querySelector("#searchInput");
  input?.addEventListener("input", () => {
    searchQuery = input.value.trim();
    renderHome();
  });
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

  const hasExecution = Array.isArray(article.workflow) && article.workflow.length > 0;
  const executionSection = hasExecution
    ? `
    <section class="workflow article-workflow">
      <div><p class="eyebrow">Execution</p><h2>操作說明</h2></div>
      <ol>${article.workflow.map(renderWorkflowStep).join("")}</ol>
    </section>
  `
    : "";

  const tags = article.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
  const currentIndex = articles.findIndex((item) => item.id === article.id);
  const prev = articles[currentIndex - 1];
  const next = articles[currentIndex + 1];

  page.innerHTML = `
    <a class="back-link" href="./#articles">回文章列表</a>
    <header class="article-hero">
      <p class="eyebrow">${escapeHtml(article.category)}</p>
      <h1>${escapeHtml(article.title)}</h1>
      <p>${escapeHtml(article.summary)}</p>
      <div class="article-meta-line">
        <span>${escapeHtml(article.date)}</span>
        <span>來源日期 ${escapeHtml(article.sourceDate)}</span>
      </div>
      <div class="tag-row">${tags}</div>
    </header>

    <section class="keypoint-strip">
      <p class="eyebrow">Key Points</p>
      <h2>重點摘要</h2>
      <ul>${keyPoints}</ul>
    </section>

    ${executionSection}

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

if (document.body.dataset.page === "home") {
  renderHome();
  setupFilters();
}
if (document.body.dataset.page === "article") renderArticle();
