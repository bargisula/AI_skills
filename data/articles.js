window.AI_SKILLS_ARTICLES = [
  {
    "id": "hermes-agent-architecture",
    "title": "Hermes Agent 核心架構：學習迴圈怎麼運作？",
    "date": "2026.07.04",
    "sourceDate": "2026.04.14",
    "category": "AI Agent 架構",
    "tags": [
      "Hermes Agent",
      "Agent",
      "自主學習",
      "架構"
    ],
    "sourceTitle": "Hermes Agent 完整實測：自我進化 AI Agent 架構，全面取代 OpenClaw！",
    "sourceUrl": "https://rain.tips/2026/04/14/hermes-agent-%E5%AE%8C%E6%95%B4%E5%AF%A6%E6%B8%AC%EF%BC%9A%E8%87%AA%E6%88%91%E9%80%B2%E5%8C%96-ai-agent-%E6%9E%B6%E6%A7%8B%EF%BC%8C%E5%85%A8%E9%9D%A2%E5%8F%96%E4%BB%A3-openclaw%EF%BC%81/",
    "summary": "Hermes Agent 最大的特色是內建「學習迴圈」：任務結束後寫入完整紀錄、下次執行前先查歷史經驗、同一套流程成功 3 次以上就自動變成可重複使用的技能，還會透過使用者建模記住你的偏好。整體架構分成介面、訊息路由、規劃執行、記憶、工具、資料六層，讓它不只是回答問題，而是真的會「越用越懂你」的自主代理人。",
    "keyPoints": [
      {
        "title": "完整任務紀錄",
        "text": "每次任務結束，Agent 會寫入包含工具執行結果、錯誤訊息、耗時資料的結構化紀錄，不是單純的日誌。"
      },
      {
        "title": "先查歷史經驗再執行",
        "text": "執行新任務前，會先搜尋過去的失敗紀錄，避免重蹈覆轍，而不是每次都從零開始。"
      },
      {
        "title": "成功流程自動變技能",
        "text": "同一套流程成功執行 3 次以上，系統會自動把它抽象成可重複使用的技能（依 agentskills.io 標準寫成 Markdown），可以版本控管、分享。"
      },
      {
        "title": "跨會話記住使用者偏好",
        "text": "透過 Honcho 使用者建模，記住你偏好用 CLI 還是 GUI、慣用的技術選型、曾經拒絕過的做法。"
      },
      {
        "title": "六層分層架構",
        "text": "從上到下分成 Presentation（介面）、Gateway（訊息路由）、Agent（規劃執行）、Memory（短中長期記憶）、Tool（60+ 工具）、Data（資料儲存）六層。"
      }
    ],
    "take": "適合想搞懂「為什麼 Hermes Agent 用起來感覺越用越懂你」背後原理的人；如果只是想動手裝起來用，看下一篇安裝教學就好。"
  },
  {
    "id": "hermes-agent-setup-guide",
    "title": "Hermes Agent 怎麼安裝與設定？5 個設計理念 + 實際指令",
    "date": "2026.07.04",
    "sourceDate": "2026.05.01",
    "category": "AI Agent 架構",
    "tags": [
      "Hermes Agent",
      "Agent",
      "安裝教學",
      "指令"
    ],
    "sourceTitle": "5 key design points + 4 steps to get started: How do I see Hermes Agent as more than just another CLI Agent?",
    "sourceUrl": "https://ai-chain.tw/en/blog/hermes-agent-5-designs-4-getting-started-steps/",
    "summary": "Hermes Agent 的設計理念是把 Agent 當成常駐服務，而不是本機工具：部署在 VPS 或雲端、透過 Telegram 等訊息平台喚醒、模型可以隨時換不綁死單一供應商，目標是做出一個結合記憶、技能、排程、gateway 的最小可行「作業系統」，而不是優化單次對話。實際安裝只需要一行指令，接著設定模型、跑一個小任務驗證、開沙盒模式、確認對話能跨 session 接續即可上手。",
    "keyPoints": [
      {
        "title": "Remote-first 架構",
        "text": "Agent 不綁在本機，而是當成常駐服務部署在 VPS、GPU 叢集或 serverless 環境，透過 Telegram 等訊息平台喚醒。"
      },
      {
        "title": "學習迴圈優先於記憶",
        "text": "重點不是把記憶當附加功能，而是把重複出現的工作流程直接轉換成可重複使用的程式。"
      },
      {
        "title": "訊息平台是主要入口",
        "text": "直接整合 Telegram、Discord、Slack、WhatsApp 等平台作為主要操作入口，減少團隊導入的摩擦。"
      },
      {
        "title": "模型可隨時切換",
        "text": "架構把基礎設施跟模型選擇分開，用指令就能換供應商，不綁死單一模型。"
      },
      {
        "title": "當成一個小型作業系統",
        "text": "目標不是優化單次對話，而是把記憶、技能、排程、gateway、遠端執行整合成一個可長期運作的最小可行系統。"
      }
    ],
    "workflow": [
      {
        "step": "安裝",
        "prompt": "curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash"
      },
      {
        "step": "設定模型（至少要 64K context window）",
        "prompt": "hermes model"
      },
      {
        "step": "用 TUI 介面實際測試一個任務",
        "prompt": "hermes --tui"
      },
      {
        "step": "開啟沙盒模式，避免指令直接動到本機",
        "prompt": "hermes config set terminal.backend docker"
      },
      {
        "step": "確認對話可以跨 session 接續",
        "prompt": "hermes --continue"
      }
    ],
    "take": "適合已經想動手裝起來用的人；先裝好、設定模型、跑一個小任務驗證，再決定要不要接訊息平台或排程。想先了解背後原理的話，看前一篇架構解析。"
  },
  {
    "id": "chatgpt-23-use-cases-5-categories",
    "title": "ChatGPT 23 種實用情境，怎麼歸類成 5 大類？",
    "date": "2026.07.04",
    "sourceDate": "2026.06.11",
    "category": "ChatGPT 入門",
    "tags": [
      "ChatGPT",
      "使用情境",
      "入門",
      "分類整理"
    ],
    "sourceTitle": "ChatGPT怎麼用？ChatGPT中文教學：帳號註冊、23種技巧（2026）",
    "sourceUrl": "https://frankchiu.io/ai-chatgpt-intro/",
    "summary": "原文列出 23 種 ChatGPT 使用情境，涵蓋文書處理、語言潤飾到職涯應用，但清單式的呈現不容易記住；把它們依用途重新歸類成 5 大類後，遇到新任務時可以先問「這屬於哪一類」，再從對應類別裡找具體做法，比死記 23 個情境更容易上手。",
    "keyPoints": [
      {
        "title": "辦公文書處理",
        "text": "數據分析與試算表處理、簡報與報告草稿、會議逐字稿轉重點紀要、大量檔案與欄位命名、長文與 PDF 摘要。"
      },
      {
        "title": "語言文字潤飾",
        "text": "翻譯、外語書信與商業郵件潤飾、錯字與文法校對、內容創作與擴寫。"
      },
      {
        "title": "查資料與學習研究",
        "text": "資訊搜尋（AI 搜尋引擎）、概念問答、學術文獻搜尋、深度研究（多來源調查報告）。"
      },
      {
        "title": "職涯與商業應用",
        "text": "行銷與商業策略、履歷與求職準備、智慧購物比價、寫程式與除錯。"
      },
      {
        "title": "互動陪伴與自動化",
        "text": "純聊天、圖像生成、語音對話、角色扮演模擬、情感陪伴、Agent 自動化任務。"
      }
    ],
    "take": "這篇適合當查詢型參考：不用一次讀完 23 點，遇到任務時先定位到 5 大類的哪一類，再往下找具體做法。"
  },
  {
    "id": "chatgpt-projects-setup-guide",
    "title": "ChatGPT Projects 怎麼寫？先搞懂 4 個常見誤區",
    "date": "2026.07.04",
    "sourceDate": "2026.05.28",
    "category": "ChatGPT 進階",
    "tags": [
      "ChatGPT",
      "Projects",
      "工作區",
      "指令設計"
    ],
    "sourceTitle": "ChatGPT Projects 中文教學：把聊天、檔案與指令整理成長期工作區",
    "sourceUrl": "https://masonailab.com/tools/chatgpt-projects-guide-2026/",
    "summary": "Projects 是把聊天、檔案與指令整理成長期工作區的功能，但很多人一開始會犯 4 個錯：把它當雲端硬碟亂塞檔案、指令寫得太空泛、Project 開太多太細、不管理檔案版本。真正有效的用法是取一個目的導向的名稱、用固定框架寫指令、把檔案分成三層管理，讓 Project 只用在會長期、重複使用的主題上。",
    "keyPoints": [
      {
        "title": "把 Project 當雲端硬碟",
        "text": "什麼都往裡面塞，檔案一多，AI 反而抓不到重點資料，Project 不是雲端硬碟。"
      },
      {
        "title": "指令寫得太空泛",
        "text": "像「請專業回答」這種話沒有實質作用，指令要講清楚輸出格式、語氣、資料優先順序、禁止事項。"
      },
      {
        "title": "Project 切得太細",
        "text": "建太多零碎的 Project 反而增加管理負擔，應該依「會長期使用的主題」來開，不是每個小任務都開一個。"
      },
      {
        "title": "不做版本管理",
        "text": "同一份文件上傳多個版本會讓 AI 混淆，要嘛刪掉舊版，要嘛檔名加日期戳記，例如「2026-05-客戶訪談摘要.md」。"
      }
    ],
    "workflow": [
      "幫 Project 取一個具體、目的導向的名稱，例如「A 客戶提案與會議」，不要用「工作」「資料」這種籠統名稱。",
      {
        "step": "套用這個範本，設定 Project 的 Instructions",
        "prompt": "你是我的[具體角色]\n\n主要目標：\n[清楚的目標]\n\n資料優先順序：\n一、優先使用[已上傳的資料]\n二、資料不足時，[說明如何處理、是否要主動告知]\n三、不要[明確禁止的事]\n\n輸出格式：\n[結構要求、語氣風格]\n\n禁止事項：\n[硬性底線]"
      },
      "把檔案分三層管理：長期參考資料（品牌指南、SOP，長期都用得到）、專案專屬資料（客戶紀錄、會議逐字稿，更新時記得加日期戳記）、一次性素材（截圖、草稿留在單次對話就好，不要放進 Project）。"
    ],
    "take": "適合已經會用 ChatGPT 基本功能、想把長期性工作（不是一次性小事）整理成固定工作區的人；如果只是「幫我改一封信」這種單次需求，不需要為此開 Project。"
  },
  {
    "id": "codex-getting-started-workbench",
    "title": "一般人如何快速上手 Codex：把資料夾變成 AI 工作台",
    "date": "2026.07.04",
    "sourceDate": "2026.05.01",
    "category": "Codex 入門",
    "tags": [
      "Codex",
      "AI Agent",
      "工作台",
      "資料整理"
    ],
    "sourceTitle": "一般人如何快速上手 Codex 超完整圖文教學：讓 AI 助理整理文件表格，建立自動化流程",
    "sourceUrl": "https://www.playpcesor.com/2026/05/codex-ai.html",
    "summary": "這篇文章把 Codex 重新定位成能讀取本機資料夾、整理文件、處理表格、建立成果的 AI 工作台，而不只是寫程式工具；建議先建立一個安全的專案資料夾，讓 AI 看懂材料，再從低風險的小任務開始交付，跑通後把成功做法寫成規則文件。",
    "keyPoints": [
      {
        "title": "ChatGPT 負責想，Codex 負責做",
        "text": "文章把 ChatGPT 定位在研究、發想、企劃與復盤；Codex 則負責進入資料夾，完成文件、簡報、表格、整理與小工具輸出。"
      },
      {
        "title": "資料夾就是工作邊界",
        "text": "對一般工作者來說，Codex 最好理解的方式不是寫程式，而是把一個本機資料夾變成可以被 AI 處理的工作台。"
      },
      {
        "title": "先盤點，不先修改",
        "text": "第一次使用時，應先請 Codex 回報看到了哪些檔案、可能代表什麼、適合做哪些小任務，確認後再執行。"
      },
      {
        "title": "用規則文件累積記憶",
        "text": "當 Codex 理解專案後，可以建立 AGENTS.md 或專案規則文件，讓後續任務有共同原則，也方便下次接手。"
      }
    ],
    "workflow": [
      "建立一個副本資料夾，把要處理的檔案複製進去（不要用原始檔案）。",
      {
        "step": "請 Codex 盤點內容",
        "prompt": "請你看過這個資料夾裡的所有檔案，列出檔名、檔案類型，並簡短說明你認為這份檔案的用途。先只回報，不要修改、搬移或刪除任何檔案。"
      },
      {
        "step": "請 Codex 建議安全的第一個任務",
        "prompt": "根據你剛才的盤點結果，幫我列出 3 個風險低、容易驗收的候選任務（例如分類、整理、列清單），並說明為什麼適合當作第一個任務。"
      },
      {
        "step": "執行並人工驗收",
        "prompt": "請執行第一個建議任務，過程中先說明你打算怎麼做，完成後列出實際改動了哪些檔案，讓我逐一核對。"
      },
      {
        "step": "沉澱成規則文件",
        "prompt": "這次任務完成後，幫我把資料夾理解、任務原則和這次的處理方式寫成一份 AGENTS.md 規則文件，讓下次可以直接沿用。"
      }
    ],
    "take": "這篇適合放在本網站作為第一篇入門：它先定義 Codex 的工作邊界，再示範如何從低風險資料夾任務開始。"
  },
  {
    "id": "codex-knowledge-workflow-cases",
    "title": "Codex 知識工作案例：從文書編輯、課程教材到資料整理",
    "date": "2026.07.04",
    "sourceDate": "2026.06.30",
    "category": "Codex 案例",
    "tags": [
      "Codex",
      "知識工作",
      "Skill",
      "Workflow"
    ],
    "sourceTitle": "Codex 我常用的知識工作案例分享：從文書編輯、課程教材到資料整理的 AI 工作流",
    "sourceUrl": "https://www.playpcesor.com/2026/06/codex-ai.html",
    "summary": "這篇文章展示 Codex 如何從寫程式延伸到知識工作：它的價值不只在產出答案，而是接手真實工作流程中那些繁瑣、重複、需要跨工具整理的中間步驟，例如接手做到一半的專案、處理簡報與 PDF、整理素材庫，並把成功流程寫成可重複使用的規則。",
    "keyPoints": [
      {
        "title": "讓 AI 跑中間迭代",
        "text": "文案、行銷與內容調整不必一次求最終答案，可以讓 Codex 讀專案資料後產出多輪版本，最後由人挑選整合。"
      },
      {
        "title": "把完成內容轉成可用格式",
        "text": "逐字稿轉提詞簡報、PDF 擷取裁切、簡報重排，都是創造性不高但耗時的知識工作。"
      },
      {
        "title": "建立知識管線",
        "text": "Codex 可以搜尋舊文章、整理圖片與案例、輸出課程大綱或簡報草稿，把分散素材串成成果。"
      },
      {
        "title": "拆素材、寫規則",
        "text": "把既有簡報、講義和報告拆成可重組素材，再把成功做法寫回規則或 skill。"
      }
    ],
    "workflow": [
      {
        "step": "搜尋與整理",
        "prompt": "請搜尋我資料夾裡跟「[主題]」有關的舊文章、筆記與圖片，列出每一份的標題、日期、一句話重點，並依主題分類整理成清單。"
      },
      {
        "step": "製作課程大綱",
        "prompt": "根據上面整理好的清單，幫我規劃一份課程大綱：列出每個章節標題、學習目標、預計時長，並標註哪些既有素材可以直接沿用、哪些需要補充。"
      },
      {
        "step": "要求輸出",
        "prompt": "請把第一章節展開成完整簡報草稿，條列重點、每頁不超過 5 行，並在最後附上這份簡報引用了哪些原始素材。"
      }
    ],
    "take": "這篇適合作為進階案例：它展示 Codex 如何從單次任務，延伸成可持續累積的知識工作流。"
  }
];
