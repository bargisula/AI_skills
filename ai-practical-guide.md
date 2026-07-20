# AI 實戰落地指南：RAG、Agentic AI 與 2026 工作術

更新日期：2026/07/20

## 1. RAG 實作步驟（從零做出知識庫聊天系統）

**目標**：上傳公司文件後，能精準問答。

**推薦工具**：
- 框架：LlamaIndex（推薦）或 LangChain
- 向量資料庫：Chroma（本地）或 Pinecone
- LLM：Claude / GPT-4o

**詳細步驟**：
1. **資料準備**：把 PDF、Word 放到 `data/` 資料夾。
2. **清洗與分割**：用 `SimpleDirectoryReader` 讀取 + RecursiveCharacterTextSplitter（chunk 800 tokens，重疊 100）。
3. **向量化**：`OpenAIEmbedding(model="text-embedding-3-large")`。
4. **建立索引**：`VectorStoreIndex.from_documents(documents)`。
5. **查詢**：建立 QueryEngine，提示要求「附來源回答」。
6. **前端**：用 Streamlit 做聊天介面。

**成果**：一個可實際使用的內部搜尋工具。

## 2. Agentic AI 工作流（讓 AI 自主完成多步任務）

**推薦框架**：LangGraph（穩定）或 CrewAI（快速）。

**實戰範例**（市場研究 Agent）：
- Planner Agent 拆解任務
- Researcher Agent 使用 RAG + 網路搜尋
- Writer Agent 生成報告
- Reviewer Agent 檢查

**步驟**：
1. 定義 Graph（節點與邊緣）
2. 每個 Agent 給工具（包含剛才的 RAG）
3. 執行並加入人類審核點

**成果**：輸入主題 → AI 自動輸出完整報告。

## 3. 2026 AI 實戰工作術（每天可用的技巧）

**核心工具組合**：
- NotebookLM（總結會議、知識管理）
- Claude（寫作、邏輯）
- Perplexity（研究）
- Gamma / Napkin（簡報）

**高頻場景操作**：
- **會議總結**：上傳錄音到 NotebookLM → 提示「產生行動項目與責任人」。
- **寫郵件**：Claude + 提示「正式語氣，強調重點」。
- **做簡報**：Claude 寫內容 → Gamma 一鍵轉投影片。
- **快速研究**：Perplexity 查資料 + NotebookLM 整理。
- **知識庫**：用 NotebookLM 建立長期個人/團隊第二大腦。

**提示詞小技巧**： always 給角色 + 格式要求 + 範例。

---

