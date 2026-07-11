window.AI_SKILLS_ARTICLES = [
  {
    "id": "ai-coding-git-fundamentals-beginners",
    "title": "AI Coding 新手該懂的 6 個 Git 名詞：不用學完整系統，先保住方向盤",
    "date": "2026.07.09",
    "sourceDate": "2026.07.09",
    "category": "AI Coding 入門",
    "tags": [
      "Git",
      "AI Coding",
      "新手教學",
      "Codex"
    ],
    "sourceTitle": "Codex 中文社群貼文：AI coding 初學者該懂的基礎名詞",
    "sourceUrl": "https://www.facebook.com/groups/1713764039757273/",
    "summary": "這篇整理 Codex 中文社群一則貼文的核心觀念：AI coding 新手不需要一開始就懂高階架構，但至少要懂 6 個 Git 基礎名詞——repo、branch、git status、diff、commit、rollback。這些詞的共通用途不是為了寫程式，是為了在讓 AI 代理動手改程式碼的過程中，讓人類始終保有「看得懂、擋得住、退得回去」的能力。核心提醒是：AI 說「已經修好了」不代表真的修好了，真正該相信的是 diff 顯示出來的實際差異，這跟我們前面討論的「模型看到的永遠是真實結果，不是自己的猜測」是同一個道理，只是這裡的「真實結果」換成了人類自己要去核對。",
    "keyPoints": [
      {
        "title": "repo：先搞清楚自己在哪個專案資料夾",
        "text": "repo 就是專案的完整倉庫——程式碼、設定檔、文件、測試、Git 版本紀錄全部在裡面。AI 說「我改好了」，改的東西一定在某個 repo 裡；讓 AI 開始大改之前，先用 `git remote -v` 或看資料夾路徑確認自己現在人在哪個專案，不要連自己在哪都沒搞清楚。"
      },
      {
        "title": "branch：讓 AI 大改前，先開一個試驗區",
        "text": "branch 是分支，可以想成跟主線分開的試驗區。小修補在主分支還好，但要讓 AI 做比較大範圍的修改時，先用 `git checkout -b 描述性名稱`（例如 `ai-refactor-auth`）開一個新分支再動手——試驗成功就合回主線，失敗也不會污染原本能跑的版本。"
      },
      {
        "title": "git status：AI 動手前後都該看一次",
        "text": "這個指令會告訴你目前在哪個 branch、哪些檔案被改了、哪些還沒被 Git 追蹤、repo 乾不乾淨。養成習慣：讓 AI 改檔前跑一次，改完後再跑一次——這是最低成本、卻最容易被新手跳過的檢查點。"
      },
      {
        "title": "diff：AI 說完成，不代表真的完成",
        "text": "diff 是修改前後的實際差異，`git diff` 看還沒 commit 的變動，`git diff --stat` 先看改動範圍有多大再決定要不要細看內容。AI 有沒有動到不該碰的檔案？有沒有順手改了其他功能？有沒有把測試刪掉或用繞過方式讓錯誤暫時不再出現？有沒有把可讀的程式碼改成更難懂的版本？這些問題只有看 diff 才有答案。新手不用一次看懂全部，先抓三件事：改了哪些檔案、每個檔案大概改了什麼、有沒有超出原本要求的範圍。"
      },
      {
        "title": "commit：小步存檔，訊息要寫得未來看得懂",
        "text": "一組修改確認可用就 commit 起來，之後出問題比較容易追到是哪一次造成的。比較安全的節奏是：小改一次→看 diff→跑測試→沒問題再 commit，而不是讓 AI 連續改好幾輪、改到最後自己都不知道哪一步開始壞掉。commit message 也要寫清楚在做什麼，不要每次都只寫 fix、update、change，那是留給未來的自己看不懂的坑。"
      },
      {
        "title": "rollback：出事之前，先知道怎麼退回去",
        "text": "rollback 是把錯誤修改撤回去的統稱，實際操作依情況不同：`git restore <檔名>` 還原單一檔案、`git revert <commit>` 安全地撤銷某次 commit（不改動歷史，適合已經推上遠端的情況）、`git reset` 則會動到歷史紀錄，效果更激烈，新手應該先避開，除非清楚知道自己在做什麼。新手不用一開始全部背起來，但每次讓 AI 大幅修改前，先問自己一句：如果這次改壞了，我知道怎麼退回原本狀態嗎？答案不確定，就先不要讓 AI 大改。"
      }
    ],
    "workflow": [
      "進入正確的 repo，用 `git remote -v` 或檢查資料夾路徑確認自己在哪個專案。",
      "看目前在哪個 branch；要讓 AI 做較大範圍修改前，先 `git checkout -b` 開一個新分支。",
      "跑一次 `git status`，記住目前的乾淨狀態。",
      "讓 AI 在小範圍內修改，不要一次要求大改。",
      "跑 `git diff`（或 `git diff --stat` 先看範圍），確認改動內容跟範圍符合預期。",
      "問自己：如果這次改壞了，能不能用 `git restore`／`git revert` 退回去？確定可以才繼續。",
      "確認沒問題後才 `git commit`，並寫清楚這次做了什麼。"
    ],
    "take": "這篇最有價值的地方不是名詞解釋本身（這些指令 Google 得到），是背後那個心法：這 6 個詞存在的唯一目的，是讓人類在 AI 動手改程式碼的過程裡，隨時保有「看得懂發生了什麼、擋得住不對勁的地方、退得回上一個能跑的狀態」的能力。跟我們前面聊 agent 原理時的結論剛好對上——AI 輸出的是一個宣稱，不是事實，diff 就是人類自己動手做的那個『比對真實結果』的步驟，Git 在這裡本質上是在幫人類補上 AI 本身沒有的那道驗證迴圈。"
  },
  {
    "id": "gpt-5-6-codex-chatgpt-integration",
    "title": "GPT-5.6 上線：Codex 併入 ChatGPT，是不是要把所有用戶都變成「代理式工作者」？",
    "date": "2026.07.09",
    "sourceDate": "2026.07.09",
    "category": "AI 產業動態",
    "tags": [
      "GPT-5.6",
      "Codex",
      "ChatGPT",
      "OpenAI",
      "Agent"
    ],
    "sourceTitle": "OpenAI launches its new family of models with GPT-5.6",
    "sourceUrl": "https://techcrunch.com/2026/07/09/openai-launches-its-new-family-of-models-with-gpt-5-6/",
    "summary": "OpenAI 在 2026 年 7 月 9 日正式讓 GPT-5.6 全面上線，同時涵蓋 ChatGPT、Codex 跟 API 三個入口。這次推出三個模型分級（Sol／Terra／Luna），新增可平行開 4 個子代理處理複雜任務的 Ultra 模式，並同步推出企業向的「ChatGPT Work」。多篇報導都提到 Codex 的代理式工作能力正被整合進 ChatGPT 桌面版，讓一般聊天使用者也能直接用到原本只有 Codex 才有的多步驟任務執行能力。Codex 中文社群裡也有人（李東昇）把這次更新解讀為 OpenAI 想把「跟 AI 聊天」的使用者，逐步轉變成「把工作交給 AI 代理執行」的使用者，並認為這對 Anthropic 形成生態系等級的競爭壓力，不只是單一模型的比較。",
    "keyPoints": [
      {
        "title": "三個模型分級：Sol／Terra／Luna",
        "text": "Sol 是主力款，官方稱是目前最強的程式碼模型，token 使用效率比前代提升 54%；Terra 是中階選項；Luna 是最平價的版本，三者依任務複雜度跟預算分層使用。"
      },
      {
        "title": "Ultra 模式：預設平行開 4 個子代理",
        "text": "Ultra 模式會把可拆解的任務同時交給 4 個子代理平行處理，用更多 token 換取更好的結果跟更快的完成時間；官方明講這是「花更多錢換更多產出」的選項，不是省錢功能。ChatGPT Work 的 Ultra 僅開放 Pro／Enterprise 方案，Codex 的 Ultra 則是 Plus 以上方案才能用。"
      },
      {
        "title": "ChatGPT Work：企業向的「代理式工作」入口",
        "text": "跟 GPT-5.6 同步推出的新產品，定位是給企業團隊的工作夥伴，橫跨桌面、網頁、行動裝置，訴求從單純聊天問答，變成能讀取文件、串接工具、跑多步驟流程、直接產出可用成果。"
      },
      {
        "title": "Codex 跟 ChatGPT 走向同一個入口",
        "text": "多篇報導提到 Codex 的代理能力被逐步整合進 ChatGPT 桌面版介面，讓使用者可以在同一個 App 裡切換一般對話、ChatGPT Work、Codex，不需要另外學習或安裝一個新產品才能用到「代理式工作」的能力。"
      },
      {
        "title": "社群觀點：這對 Anthropic 是不是生態系等級的壓力",
        "text": "Codex 中文社群的討論（李東昇）認為，這一步的重點不是模型變強，而是 OpenAI 用「把代理能力融入既有的龐大 ChatGPT 用戶入口」取代「要求用戶另外學一個新產品」，讓原本只是聊天的使用者不知不覺變成代理式工作的使用者；相較於 Claude Code 在程式開發市場的口碑，OpenAI 的優勢在使用者基數跟入口規模，這篇分析把這個局面稱為「SaaS 轉向 AaaS（Agent as a Service）」的競爭主戰場轉移。"
      }
    ],
    "take": "GPT-5.6 上線、Ultra 模式用多子代理平行處理、Codex 跟 ChatGPT 走向同一入口，這幾件事本身都查證屬實，不是誇大的行銷話術。但「這代表 Anthropic 已經落居下風」這個結論還是社群的解讀跟推論，不是既成事實——使用者基數大不代表這些使用者真的會把工作交給代理執行，介面整合也不等於代理能力本身更強。比較務實的看法是：這確實拉近了「一般聊天使用者」跟「代理式工作能力」之間的距離，值得持續觀察後續採用率，但現在下「戰局已定」的結論還太早。"
  },
  {
    "id": "loop-engineering-guide-2026",
    "title": "Loop Engineering 是什麼：從寫 Prompt 到設計會自我修正的工作迴圈",
    "date": "2026.07.09",
    "sourceDate": "2026.07.06",
    "category": "Agent 工作流",
    "tags": [
      "Loop Engineering",
      "Agent",
      "Prompt",
      "Claude Code",
      "Codex"
    ],
    "sourceTitle": "MapleFeather：迴圈工程是什麼？從寫 Prompt 到設計 Loop",
    "sourceUrl": "https://maplefeather.com/article/loop-engineering-guide-2026",
    "summary": "Loop Engineering 的重點不是把 prompt 寫得更漂亮，而是把「下指令、看結果、修正、再試一次」這件事變成一個可重複、可驗證、可停止的工作迴圈。最近 Boris Cherny、Peter Steinberger、Addy Osmani 等人談到的 loop，核心都是同一件事：人不再一步步手動提示 agent，而是設計一套會替 agent 派工、檢查、重試、收斂的系統。真正可用的 loop 必須有目標、驗證、停止條件與成本控制，否則只是把錯誤自動放大。",
    "keyPoints": [
      {
        "title": "Prompt 管一次輸出，Loop 管整個過程",
        "text": "Prompt Engineering 解決的是「這次要怎麼問」；Loop Engineering 解決的是「如果結果不對，系統要怎麼自己檢查、重試、停止」。"
      },
      {
        "title": "核心流程是探索、規劃、執行、驗證、迭代",
        "text": "一個基本 loop 會先讀狀態、產生計畫、執行任務、跑檢查，沒通過就把錯誤帶回下一輪；通過才交付。"
      },
      {
        "title": "沒有驗證，就不要急著上 loop",
        "text": "Loop 最適合有明確檢查標準的任務，例如測試是否通過、資料是否去重、連結是否有效；如果只能靠人的品味判斷，就不適合全自動迴圈。"
      },
      {
        "title": "停止條件比聰明模型更重要",
        "text": "可靠的 loop 需要最多重試次數、token 預算、連續無改善就停止等規則；不然它會在你沒注意時一直燒 token。"
      },
      {
        "title": "它是 prompt、context、harness 之上的新一層",
        "text": "arXiv 研究把 loop specification 定義成一個有 trigger、goal、verification、stopping rule、memory 的可重複 artifact；它不是取代 prompt，而是把 prompt 放進更大的執行系統裡。"
      }
    ],
    "workflow": [
      {
        "step": "先不要自動化全部，只挑一個小任務",
        "prompt": "請幫我挑出這個工作流中最適合做成 loop 的一小段。條件是：每週重複發生、錯了可以重跑、能用明確規則檢查結果。"
      },
      {
        "step": "寫出 loop specification",
        "prompt": "請把這個任務整理成 loop specification：trigger、goal、input、execution steps、verification、stopping rule、memory。每一項都要具體，不要寫抽象原則。"
      },
      {
        "step": "先設驗證，不先追求自動執行",
        "prompt": "請先設計驗證條件：什麼情況算通過、什麼情況算失敗、失敗訊息要怎麼回饋給下一輪。沒有自動驗證的部分請標記為需要人工確認。"
      },
      {
        "step": "加上停止線與預算",
        "prompt": "請為這個 loop 設定安全限制：最多重試 5 次、最多使用 3 個來源、超過 20 分鐘停止、連續 2 次沒有改善就停止並回報原因。"
      },
      {
        "step": "跑完後沉澱成規則",
        "prompt": "這次 loop 跑完後，請輸出三件事：完成結果、失敗或重試紀錄、下次可以改進的 loop 規則。"
      }
    ],
    "take": "我的判斷是，Loop Engineering 會成為 agent 工作流的核心概念，但它不適合一開始就拿來做全自動創作。最好的切入點是那些『重複、可驗證、錯了能重跑』的小工作，例如檢查來源、去除重複資料、跑測試、整理格式。對一般使用者來說，先不要追求全自動代理人，先學會設計一個最小 loop：一個目標、一個檢查、一條停止線。這比寫一大段萬能 prompt 更有價值。"
  },
  {
    "id": "short-prompts-loop-engineering-claude-harness-2026",
    "title": "提示詞正在變短：從長 prompt 到 Claude Harness 與 Loop Engineering",
    "date": "2026.07.09",
    "sourceDate": "2026.06-07",
    "category": "Prompt / Agent",
    "tags": [
      "Claude",
      "Prompt",
      "Harness",
      "Loop Engineering",
      "Agent"
    ],
    "sourceTitle": "數位時代：Anthropic 工程師談 Claude harness（補充 Times of India 與 arXiv 研究）",
    "sourceUrl": "https://www.bnext.com.tw/article/91455/anthropic-engineer-claude-harness",
    "summary": "最近提示詞的變化，不是大家突然不需要 prompt，而是長篇咒語式提示詞的價值下降了。新的方向是：人只下短而清楚的目標，真正複雜的上下文、工具、檢查、重試、權限與驗證，交給 harness 或 loop 處理。Boris Cherny 對 Claude Code 的說法可以理解成：未來工程師不是一直手寫 prompt，而是在設計一套會替 agent 產生 prompt、檢查結果、持續迭代的工作迴圈。",
    "keyPoints": [
      {
        "title": "從長 prompt 變成短目標",
        "text": "以前常見做法是把角色、限制、格式、步驟全部塞進一段長 prompt；現在更有效的做法，是用短目標描述要完成什麼，讓系統層、工具層和流程層補上上下文。"
      },
      {
        "title": "Prompt 的責任被 harness 接走",
        "text": "Agent harness 不是單純的 prompt 模板，而是包住模型的執行層：它負責選 context、開工具、記狀態、跑驗證、記錄錯誤，讓模型不只是回答，而是能完成任務。"
      },
      {
        "title": "Loop engineering 取代反覆追問",
        "text": "Boris Cherny 談到的 loop engineering，重點是讓 AI 代理人自己產生與修正 prompt；人類從逐步下指令，改成設計一個會反覆執行、檢查、修正的迴圈。"
      },
      {
        "title": "少寫不是隨便寫",
        "text": "短 prompt 不等於模糊 prompt。有效短 prompt 仍要說清楚任務、輸出、邊界與驗收條件，只是不要把所有細節都塞在單次對話裡。"
      },
      {
        "title": "最近研究也支持：prompt 只是系統的一部分",
        "text": "Scrum 題庫研究顯示，引用來源的提示比單純 zero-shot 更穩；forecasting 研究則指出，多數 prompt 小修小補對複雜預測幫助有限。這代表可靠性不能只靠文字技巧，要靠資料、驗證與流程。"
      }
    ],
    "workflow": [
      {
        "step": "舊寫法：長 prompt 一次塞滿",
        "prompt": "你是一位頂尖顧問，請用專業但易懂的語氣，按照背景、問題、分析、建議、風險、結論的格式，幫我完整分析 Claude harness 與提示詞趨勢，請不要遺漏任何重點。"
      },
      {
        "step": "新寫法：短目標 + 明確交付物",
        "prompt": "整理 Claude harness 與提示詞變短的趨勢，寫成一篇給一般工作者看的 1200 字文章，重點放在實務工作流，不要寫成技術論文。"
      },
      {
        "step": "把限制拆成驗收條件",
        "prompt": "完成後請自我檢查三件事：一、是否有解釋 harness 是什麼；二、是否有說明為什麼 prompt 變短；三、是否給出一般人能照做的提示詞範例。"
      },
      {
        "step": "把來源檢查獨立出來",
        "prompt": "請列出文章中需要來源支撐的主張，逐一標註來源。沒有來源的地方請改寫成我的判斷，不要寫成確定事實。"
      },
      {
        "step": "變成可重複 loop",
        "prompt": "之後每篇 AI 工具文章都照這個流程：搜尋來源、寫摘要、抽 5 個重點、補一段實務工作流、做來源檢查、再寫入 PWA。"
      }
    ],
    "take": "我的判斷是：提示詞工程沒有消失，但它正在下沉。以前我們把 prompt 當成一段魔法文字；現在更像產品規格的一部分。真正有價值的不是把提示詞寫得很長，而是把短指令放進一個會選資料、叫工具、檢查結果、重試修正的 harness。對一般使用者來說，最實用的改法是：不要再追求萬能長 prompt，改成「一句短目標 + 交付物格式 + 驗收條件」。"
  },
  {
    "id": "gpt-powerpoint-agent-workflow-2026",
    "title": "GPT 與 PPT 結合的新方向：從自動生成簡報，到 PowerPoint Agent 工作流",
    "date": "2026.07.08",
    "sourceDate": "2026.05-06",
    "category": "AI 簡報工作流",
    "tags": [
      "GPT",
      "PowerPoint",
      "Copilot",
      "Office Agent",
      "簡報"
    ],
    "sourceTitle": "綜合來源：Microsoft 365 Copilot、PowerPoint Agent 與 PPT-Eval 研究",
    "sourceUrl": "https://www.windowscentral.com/microsoft/microsoft-office/new-copilot-keyboard-shortcuts-are-coming-to-microsoft-365",
    "summary": "GPT 與 PPT 的結合正在從「幫我生幾頁投影片」走向「讓 AI 進入 PowerPoint 工作流程」：Microsoft 正在把 Copilot 入口整合進 Word、Excel、PowerPoint；PowerPoint Agent 則把簡報製作拆成規劃、生成、檢查、修正的流程；研究端也開始用 PPT-Eval 這類基準測試衡量 AI 是否真的會操作簡報，而不只是產出文字大綱。",
    "keyPoints": [
      {
        "title": "入口變近：Copilot 會更像 Office 的內建操作層",
        "text": "Microsoft 正在統一 Microsoft 365 裡的 Copilot 入口，包含 PowerPoint；使用者可以用快捷鍵或畫面上的 Copilot 按鈕，把 AI 叫進目前正在編輯的文件或簡報。"
      },
      {
        "title": "角色改變：從聊天機器人變成簡報代理人",
        "text": "PowerPoint Agent 的方向不是只回覆文字，而是接收自然語言任務後，協助建立簡報結構、產生頁面、檢查內容一致性，並把結果輸出成 Office 檔案。"
      },
      {
        "title": "真正難點在版面與修正，不是文字生成",
        "text": "簡報任務同時牽涉文字、圖像、版面、順序與主題一致性；PPT-Eval 這類研究指出，現有電腦使用型 agent 在 PowerPoint 任務上仍有明顯挑戰。"
      },
      {
        "title": "企業價值在工作流，而不是單張投影片",
        "text": "可用的 AI 簡報流程應該包含資料蒐集、受眾定位、章節規劃、投影片生成、人工審稿、版本管理，而不是只追求一次生成漂亮模板。"
      },
      {
        "title": "下一步會是人機協作的簡報工廠",
        "text": "人負責判斷主張、取捨內容與確認商業語氣；AI 負責把資料轉成草稿、補齊頁面、統一格式與反覆修改。"
      }
    ],
    "workflow": [
      {
        "step": "先給 AI 明確簡報任務",
        "prompt": "請幫我把「GPT 與 PPT 結合的最新發展」整理成 8 頁簡報大綱，受眾是一般企業工作者，目標是讓他們知道 AI 簡報工具正在從自動生成走向 Agent 工作流。"
      },
      {
        "step": "要求先規劃，不要直接做頁面",
        "prompt": "先不要產生投影片。請先列出簡報主線、每頁標題、每頁一句話重點、需要補充的資料來源，以及哪幾頁適合放流程圖或比較表。"
      },
      {
        "step": "把資料轉成頁面草稿",
        "prompt": "根據剛才的大綱，請產生每一頁的投影片文案。每頁最多 5 個 bullet，每個 bullet 不超過 18 個中文字，語氣要像企業內訓教材。"
      },
      {
        "step": "讓 AI 做自我檢查",
        "prompt": "請檢查這份簡報草稿是否有三個問題：一、每頁是否只有一個主張；二、前後邏輯是否連貫；三、有沒有把工具功能誇大成已經完全自動化。請列出需要修改的頁面。"
      },
      {
        "step": "最後再交給 PowerPoint 或設計工具排版",
        "prompt": "請把修正後內容轉成 PowerPoint 可用的頁面結構：頁碼、頁面標題、主文案、建議視覺元素、講者備註。"
      }
    ],
    "take": "這則題目值得追蹤，因為它代表 GPT 類工具正在進入 Office 的實際工作現場。短期最可用的做法不是期待 AI 一次做出完美簡報，而是把它當成「簡報助理」：先規劃、再生成、再檢查、再交給人修。長期如果 PowerPoint Agent 這類工具成熟，簡報製作會從手工排版，轉成管理一條 AI 協作流程。"
  },
  {
    "id": "opc-ai-agent-tools-2026",
    "title": "一人公司熱門 AI Agent 盤點：從「人用工具」到「人管智能體」",
    "date": "2026.07.05",
    "sourceDate": "2026.02.26",
    "category": "AI Agent 架構",
    "tags": [
      "Agent",
      "一人公司",
      "OPC",
      "自動化"
    ],
    "sourceTitle": "OPC（一人公司）：AI 时代的组织革命，一个人如何调度\"千军万马\"？",
    "sourceUrl": "https://www.cnblogs.com/informatics/p/19642782",
    "summary": "這篇文章的核心論點是「一個人＋一套 AI 智能體＝一家公司」：傳統企業存在是因為市場交易成本高於內部協調成本，AI 大幅降低了市場摩擦，讓個人有能力像組織一樣運作。文章特別強調一人公司（OPC）跟傳統自由接案的關鍵差異，不在於工具好不好用，而在於是「人用工具」還是「人管智能體」——前者還是自己動手做每一步，後者是把任務交給會自主規劃、執行、迭代的 agent 團隊。目前熱門的自動化/agent 平台包括 OpenClaw（開源個人助理）、Dify、Coze、n8n；各功能領域也各有代表工具。中國目前「一人公司」數量已破 1,600 萬間，佔企業總數 27.4%，典型工具棧月成本約人民幣 130-260 元。",
    "keyPoints": [
      {
        "title": "核心論點：交易成本重構",
        "text": "傳統上企業存在是因為市場交易成本高於內部協調成本；AI 大幅降低市場摩擦，讓個人不需要團隊也能承接原本需要組織才能完成的工作。"
      },
      {
        "title": "關鍵差異：人用工具 vs 人管智能體",
        "text": "自由接案者是自己動手做每一步（人用工具）；真正的 OPC 是把任務交給會自主規劃、執行、迭代的 agent 團隊去做，自己負責調度跟決策（人管智能體）。"
      },
      {
        "title": "各功能領域代表工具",
        "text": "開發：Cursor、Windsurf、GitHub Copilot；設計：Midjourney、DALL-E、Figma AI；內容：ChatGPT、Claude、Jasper；影片：Runway、Pika、可靈、Seedance。"
      },
      {
        "title": "自動化/agent 平台",
        "text": "OpenClaw（開源個人助理，前身是 Clawdbot／Moltbot，我們前面深挖過的 Hermes Agent 也屬於同個生態）、Dify（開源 LLM 應用開發平台）、Coze（字節跳動出品，介面化組 bot）、n8n（工作流自動化，很多人拿來串 Telegram、LLM、GitHub）。"
      },
      {
        "title": "規模與成本數據",
        "text": "中國「一人公司」數量截至 2025 年 6 月已破 1,600 萬間，佔企業總數 27.4%；典型工具棧月成本約人民幣 130-260 元，對比請一位員工的成本大約是 1/20。"
      }
    ],
    "take": "我目前的 OPC 是虛擬的——只有一顆 LLM 在對話，還是「人用工具」的階段，沒有主控器真正去操作、執行、調度。這篇文章點出的「人用工具」跟「人管智能體」的分界，剛好可以當作自我檢查的座標：什麼時候我手上這套東西才算真正跨過去，而不是還在跟 AI 聊天。這是出於對這項技術的研究興趣，不是真的要開公司。"
  },
  {
    "id": "chatgpt-projects-pricing-vs-notebooklm",
    "title": "ChatGPT Projects 免費版跟 Plus 版差在哪？跟 NotebookLM 怎麼選",
    "date": "2026.07.05",
    "sourceDate": "2026.07.03",
    "category": "ChatGPT 進階",
    "tags": [
      "ChatGPT",
      "Projects",
      "NotebookLM",
      "方案比較"
    ],
    "sourceTitle": "ChatGPT專案功能怎麼用？免費、Plus版差異、自訂指令範例、5步驟設定教學一次看",
    "sourceUrl": "https://www.bnext.com.tw/article/91370/chatgpt-projects-tutorial",
    "summary": "這篇文章補上了上一篇「Projects 怎麼寫」沒講的兩件事：免費版、Plus/Go、Pro/Enterprise 三個方案在檔案數與協作人數上的具體差異，以及 ChatGPT Projects 跟 NotebookLM 該怎麼分工——不是二選一，而是「生成新內容」用 Projects、「從指定來源精準摘要並附引用」用 NotebookLM。另外也整理了一套 5 步驟的實際設定流程。",
    "keyPoints": [
      {
        "title": "三個方案的檔案與協作人數上限",
        "text": "免費版每個 Project 最多 5 個檔案、5 位協作者；Plus/Go 版本 25 個檔案、10 位協作者；Pro/Enterprise 則到 40 個檔案、100 位協作者。"
      },
      {
        "title": "Project 命名建議用「主題＋時間範圍」",
        "text": "例如「Q3行銷企劃-2026」，比單純寫「行銷」更好搜尋跟辨識，Project 一多就不會找不到。"
      },
      {
        "title": "自訂指令要包含五個要素",
        "text": "角色設定、目標、資料優先順序、輸出格式、禁止事項——這跟我們前一篇文章提到的指令範本邏輯一致，算是業界通用的寫法。"
      },
      {
        "title": "三種常見用途",
        "text": "內容生產（維持品牌語氣一致）、市場研究（分析資料集）、學習準備（當學習助手），對應到不同職務的日常需求。"
      },
      {
        "title": "跟 NotebookLM 的分工",
        "text": "ChatGPT Projects 強項是生成新內容；NotebookLM 強項是從指定來源精準摘要並附上引用出處。兩者用途不同，不是二選一，看任務是「要生成」還是「要溯源摘要」來選工具。"
      }
    ],
    "workflow": [
      "先幫 Project 取名，用「主題＋時間範圍」的格式，例如「Q3行銷企劃-2026」，比單純的關鍵字好搜尋。",
      "寫自訂指令，至少包含角色設定、目標、資料優先順序、輸出格式、禁止事項這五個要素。",
      "上傳參考文件（PDF、試算表、Word），數量上限依方案而定（免費 5 個／Plus 25 個／Pro 40 個）。",
      "在 Project 裡直接開新對話，不用重複交代背景，AI 會沿用已上傳的資料與指令。",
      "如果之前已經在一般對話裡討論過同樣主題，可以把舊對話轉移進這個 Project，累積上下文而不是從零開始。"
    ],
    "take": "跟前一篇「Projects 怎麼寫」互補：那篇講怎麼寫指令跟管理檔案版本，這篇補上方案限制的具體數字，跟什麼時候該用 NotebookLM 而不是 ChatGPT Projects。"
  },
  {
    "id": "codex-skills-plugins-automation-overview",
    "title": "Codex 一支影片看懂 Skill、外掛與自動化：從表格到架站全包辦",
    "date": "2026.07.05",
    "sourceDate": "2026.05.20",
    "category": "Codex 案例",
    "tags": [
      "Codex",
      "Skill",
      "Plugin",
      "自動化"
    ],
    "sourceTitle": "一個 AI 助手打趴整套 Office 軟體！超強 Codex 從表格簡報、合併列印、架設網站全部一手包辦！",
    "sourceUrl": "https://www.youtube.com/watch?v=W5ymBPi53Tw",
    "summary": "這支影片整理了 Codex 這類 AI 助手目前能做到的完整範圍：從打包 SOP 的 Skill、可直接部署網站或寄信的 Plugin，到能操作瀏覽器、排程自動檢查信箱的進階自動化功能，幾乎可以取代大半套 Office 軟體的工作。特別值得一提的是介面設計技能：這類技能通常不是讓 AI 亂生成網頁，而是先禁用常見的 AI 陳腔濫調（紫粉漸層、預設字體、假見證），用 OKLCH 色彩系統跟預先宣告的設計規範，讓輸出的儀表板真的有設計感，不是一眼就看出來是 AI 做的。",
    "keyPoints": [
      {
        "title": "Skill 是打包好的 SOP",
        "text": "技能把重複性任務的標準作業流程包起來，需要時才觸發，不用一直佔用 AI 的思考空間；可以是專案層級（例如整理攤位申請表、自動重新命名並登記到 Excel）或全域層級（例如通用的 Word 表格排版規範）。"
      },
      {
        "title": "Frontend Design 技能能做出真正有設計感的介面",
        "text": "儀表板/介面設計技能常見的做法是先建立「反陳腔濫調清單」——禁用紫粉漸層、Inter 等預設字體、假造的使用者見證，改用 OKLCH 這種感知均勻的色彩系統，並在動工前先宣告好設計 tokens（配色、字體、間距），出一版 v0 草稿讓人確認方向，而不是一次生成整個網頁。"
      },
      {
        "title": "外掛程式是更完整的工具包",
        "text": "簡報外掛可以依提示詞直接生成多頁 PPT；Gmail 外掛能讀取信箱，依不同身份客製化草擬邀請信並存進草稿夾；Netlify 外掛能把寫好的網站程式碼直接推上伺服器正式部署。"
      },
      {
        "title": "進階自動化：電腦操作、排程、規劃模式",
        "text": "Computer Use 讓 AI 像真人一樣操作瀏覽器（例如自動開網站、移動游標填留言表單）；自動化排程可以讓 AI 每天固定時間檢查信箱有沒有新信、更新 Excel；規劃模式會在動工前先擬定完整計畫、問答釐清需求，而不是直接開始寫。"
      },
      {
        "title": "AGENTS.md 是專案的操作守則",
        "text": "放在專案資料夾裡的 Markdown 文件，讓 AI 每次對話都能讀到必要的背景資訊與規則，搭配自訂指令與記憶功能記住使用者偏好，減少每次都要重新交代一遍的麻煩。"
      }
    ],
    "workflow": [
      "去 skill marketplace（例如 skillstore.io、smithery.ai）或官方 GitHub 找 frontend-design / web-design-skill，下載後放進 Claude Code 或 Codex 的 skills 資料夾。",
      {
        "step": "先用這個 prompt 測試，確認它會先出草稿而不是直接生成整頁",
        "prompt": "請用 frontend-design skill 幫我設計一個數據儀表板，先給我 v0 草稿版面配置跟設計 tokens（配色、字體、間距），不要直接寫完整程式碼，我確認方向後再繼續。"
      },
      "檢查回覆有沒有先宣告設計系統（顏色、字型、間距）；沒有的話代表這個技能沒有真的照完整流程走。",
      "確認完稿沒有落入常見陳腔濫調：紫粉漸層、Inter/Roboto/Arial 預設字體、假造的使用者見證。"
    ],
    "take": "適合已經在用 Codex/Claude Code、想知道還有哪些功能沒用到的人；儀表板/介面設計這塊如果只是丟一句「幫我做個儀表板」，AI 很容易做出一眼假貨感的版面，關鍵在於先讓它宣告設計規範、出草稿，而不是直接生成完整頁面。"
  },
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
