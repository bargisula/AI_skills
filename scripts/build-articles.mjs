import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const articlesDir = path.join(root, "data", "articles");
const siteUrl = "https://bargisula-ai-skills.pages.dev";

const order = JSON.parse(fs.readFileSync(path.join(articlesDir, "index.json"), "utf8"));

const articles = order.map((id) => {
  const file = path.join(articlesDir, `${id}.json`);
  const article = JSON.parse(fs.readFileSync(file, "utf8"));
  if (article.id !== id) {
    throw new Error(`data/articles/${id}.json has id "${article.id}", expected "${id}"`);
  }
  return article;
});

const articlesJs = `window.AI_SKILLS_ARTICLES = ${JSON.stringify(articles, null, 2)};\n`;
fs.writeFileSync(path.join(root, "data", "articles.js"), articlesJs, "utf8");

const urls = [siteUrl + "/", ...articles.map((a) => `${siteUrl}/article.html?id=${encodeURIComponent(a.id)}`)];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
  .map((u) => `  <url><loc>${u}</loc></url>`)
  .join("\n")}\n</urlset>\n`;
fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap, "utf8");

console.log(`built data/articles.js and sitemap.xml from ${articles.length} article(s):`, order);
