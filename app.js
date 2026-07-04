let deferredPrompt;
const installButton = document.querySelector("#installButton");
const articles = window.AI_SKILLS_ARTICLES || [];

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js");
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
    .map((article) => {
      const tags = article.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
      return `
        <article class="article-card library-card">
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
    .map((point, index) => `
      <div class="insight-card compact-card">
        <span class="card-number">${String(index + 1).padStart(2, "0")}</span>
        <h3>${escapeHtml(point.title)}</h3>
        <p>${escapeHtml(point.text)}</p>
      </div>
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

    <section class="section grid-section article-keypoints">${keyPoints}</section>

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
