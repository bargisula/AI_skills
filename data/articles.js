window.AI_SKILLS_ARTICLES = [
  {
    "id": "claude-code-first-day-2026-07-24",
    "title": "Claude Code 第一天：15 分鐘完成安裝、登入與第一次 AI 協作修改",
    "date": "2026.07.24",
    "sourceDate": "2026.04.15",
    "category": "AI Agent 工作流",
    "tags": [
      "Claude Code",
      "CLI",
      "PowerShell",
      "Prompt",
      "CLAUDE.md"
    ],
    "sourceTitle": "Your first day in Claude Code",
    "sourceUrl": "https://support.claude.com/en/articles/14552382-your-first-day-in-claude-code",
    "summary": "Anthropic 的入門文件把 Claude Code 的第一天拆成安裝、登入、進入專案、審核修改與建立專案記憶。Windows 使用者可用 PowerShell 指令安裝，再用幾個明確 prompt 完成探索、找程式碼、修 bug 與 Git 操作。",
    "keyPoints": [
      {
        "title": "Windows 直接用 PowerShell 安裝",
        "text": "原文提供 `irm https://claude.ai/install.ps1`，也列出 npm 與 macOS/Linux 安裝方式，並提醒不要用 sudo 執行 npm 安裝。",
        "tone": "action"
      },
      {
        "title": "先確認版本，再登入並進入專案",
        "text": "安裝後執行 `claude --version`；啟動 Claude 後可輸入 `/login`，接著在目標 repository 執行 `cd path/to/your/project` 再啟動 Claude。",
        "tone": "action"
      },
      {
        "title": "每次修改先看 diff 再批准",
        "text": "Claude Code 會在變更檔案或執行命令前詢問，使用者可選 Yes、Yes and don't ask again 或 No，並可用 Shift+Tab 切換 Plan、Accept Edits 與預設模式。",
        "tone": "risk"
      },
      {
        "title": "用 /init 建立專案記憶",
        "text": "一天結束前在專案中執行 `/init`，產生 `CLAUDE.md`，讓後續 session 自動讀取專案慣例。",
        "tone": "opportunity"
      }
    ],
    "workflow": [
      {
        "step": "安裝並確認 Claude Code",
        "prompt": "在 Windows PowerShell 貼上 `irm https://claude.ai/install.ps1`，完成後執行 `claude --version` 確認安裝成功；若使用 npm，改用 `npm install -g @anthropic-ai/claude-code`，不要加 `sudo`。",
        "take": "先確認 CLI 能啟動，再進入任何專案。"
      },
      {
        "step": "登入並從目標專案啟動",
        "prompt": "先執行 `claude`，在 Claude Code 中輸入 `/login` 並完成瀏覽器登入；接著在終端機執行 `cd path/to/your/project`，再執行 `claude` 開啟目標 repository。",
        "take": "Claude Code 直接讀取目前專案，不需要先上傳檔案。"
      },
      {
        "step": "用五個低風險 prompt 熟悉工作流",
        "prompt": "依序貼上：`Give me a 5-bullet summary of what this codebase does and where the entry point is.`、`Where is user authentication handled? Show me the file and the key function.`、`Add a docstring to the function <name> in <file>. Keep it to 2 lines.`、`This test is failing: <paste the error>. Find the cause and fix it.`、`Stage my changes and write a commit message that follows our existing style.`；每次先檢查回覆與 diff，再決定是否批准。",
        "take": "先從盤點、查找與小修改開始，再讓 AI 處理真實 bug 或 Git。"
      },
      {
        "step": "建立專案記憶",
        "prompt": "在專案根目錄的 Claude Code session 執行 `/init`，確認產生 `CLAUDE.md`，讓它記錄並在未來 session 自動載入 codebase conventions。",
        "take": "把一次性的理解沉澱成下一次可重用的上下文。"
      }
    ],
    "take": "Claude Code 的第一天不必從複雜功能開始：安裝、登入、進入 repository、審核一次小修改，最後用 `/init` 建立專案記憶，就能跑完一條安全而可重複的入門路徑。"
  },
  {
    "id": "vscode-agent-chat-workflow-2026-07-24",
    "title": "VS Code Agent 工作流：用 #context、快捷鍵與 diff 審核把 AI 放進編輯器",
    "date": "2026.07.24",
    "sourceDate": "2026.07.15",
    "category": "AI Agent 工作流",
    "tags": [
      "VS Code",
      "GitHub Copilot",
      "Agent",
      "Prompt",
      "MCP"
    ],
    "sourceTitle": "Use chat in VS Code",
    "sourceUrl": "https://code.visualstudio.com/docs/chat/chat-overview",
    "summary": "VS Code 官方文件說明如何在 Agents window、Chat view 與 Inline chat 之間切換，並用 `#` mentions 精準補充檔案、symbol、codebase 或 terminal context。AI 修改後可透過 inline diff、Keep/Undo 與 checkpoints 逐步審核。",
    "keyPoints": [
      {
        "title": "依任務選 Agents window 或 Chat view",
        "text": "Agents window 適合跨專案的高階任務，可用 `code --agents` 開啟；Chat view 適合 workspace 內的 coding task，Windows/Linux 可用 Ctrl+Alt+I。",
        "tone": "action"
      },
      {
        "title": "用 #mentions 補上真正需要的上下文",
        "text": "在 prompt 中輸入 `#`，可引用 `#file`、資料夾、symbol、`#codebase`、`#terminalSelection` 或 `#fetch`，避免只靠自然語言猜檔案。",
        "tone": "change"
      },
      {
        "title": "用 / 指令與明確 prompt 提高可控性",
        "text": "輸入 `/` 可查看 slash commands 與 Agent Skills；官方示例是 `Add input validation to the signup form`，並建議具體描述目標、檔案與 symbol。",
        "tone": "action"
      },
      {
        "title": "接受前檢查 inline diff 與 checkpoints",
        "text": "AI 修改後可逐項 Keep 或 Undo，Source Control 的 stage 也可接受 pending edits；checkpoints 則提供回到先前狀態的快照。",
        "tone": "risk"
      }
    ],
    "workflow": [
      {
        "step": "開啟適合的 Agent 介面",
        "prompt": "若要跨多個 project 協調高階任務，執行 `code --agents` 開啟 Agents window；若只在目前 workspace 修改程式，開啟 Chat view，Windows/Linux 使用 `Ctrl+Alt+I`。",
        "take": "先選對介面，讓任務範圍與上下文邊界清楚。"
      },
      {
        "step": "用具體 prompt 加上檔案上下文",
        "prompt": "在 chat 輸入 `Add input validation to the signup form`，再用 `#` 選取相關檔案、symbol 或 `#codebase`；若要帶入終端機錯誤，加入 `#terminalSelection`。",
        "take": "任務、目標檔案與錯誤上下文要一起給。"
      },
      {
        "step": "用 slash command 或 skill 重複常見任務",
        "prompt": "在 chat 輸入 `/`，從清單選擇適合的 slash command 或 Agent Skill；把重複工作改寫成具體、可重用的 prompt，而不是只寫「幫我改善程式」。",
        "take": "把常見任務變成可重複觸發的操作。"
      },
      {
        "step": "逐項審核修改並保留回復點",
        "prompt": "AI 回覆後開啟變更檔案的 inline diff，逐項按 Keep 或 Undo；需要整批確認時到 Source Control stage，若結果不對則使用 checkpoints 回到先前快照。",
        "take": "AI 產生修改，人的工作是審核每個變更邊界。"
      }
    ],
    "take": "VS Code 的 Agent 工作流不是把 prompt 丟進黑盒子，而是用正確介面、`#` context、`/` commands 與 diff/checkpoint 審核，把 AI 的每次修改留在可追蹤的編輯循環裡。"
  },
  {
    "id": "vscode-agents-workflow-2026-07-22",
    "title": "VS Code Agent 工作流：從開啟代理到規劃、修改與測試一條龍",
    "date": "2026.07.22",
    "sourceDate": "2026.07.15",
    "category": "AI Agent 工作流",
    "tags": [
      "VS Code",
      "Copilot",
      "Agent Mode",
      "Plan",
      "MCP"
    ],
    "sourceTitle": "Build with agents in VS Code",
    "sourceUrl": "https://code.visualstudio.com/docs/agents/overview",
    "summary": "VS Code 官方文件示範如何在工作區啟用 Agent，選擇 Copilot CLI，交給代理規劃、跨檔案修改、執行命令與自我修正。文件也清楚列出 Plan、權限層級、Agent Skills、prompt file、MCP 與 sandbox 等可配置元件。",
    "keyPoints": [
      {
        "title": "先確認 chat.agent.enabled",
        "text": "若組織政策關閉 chat.agent.enabled，需請管理員開啟，否則無法使用 VS Code Agent。",
        "tone": "action"
      },
      {
        "title": "用 Plan agent 先產出步驟",
        "text": "複雜任務可先選 Plan agent，審閱並修正實作計畫後再進行檔案變更。",
        "tone": "change"
      },
      {
        "title": "可選擇不同執行位置與權限",
        "text": "Agent 可在 VS Code 本機、Copilot CLI、GitHub cloud 或第三方 provider 執行，並可設定每次核准或較高自主權。",
        "tone": "risk"
      },
      {
        "title": "把重複工作包成 Skills 或 prompt file",
        "text": "VS Code 可用 Agent Skills、prompt files、custom agents、MCP servers 與 hooks 讓工作流可重複使用。",
        "tone": "opportunity"
      }
    ],
    "workflow": [
      {
        "step": "啟用 Agent 並選定工作區",
        "prompt": "在 VS Code 確認 chat.agent.enabled 已開啟；登入 GitHub 後選 Open in Agents，選擇工作區資料夾，再選 Copilot CLI agent 開始 session。",
        "take": "先把代理綁定到正確工作區，避免在錯誤資料夾修改檔案。"
      },
      {
        "step": "用 Plan agent 拆解需求",
        "prompt": "請使用 Plan agent，將這個需求拆成可驗收的步驟：[貼上需求]。先不要修改任何檔案，請列出會碰到的檔案、命令、測試與風險。",
        "take": "先審計畫，再讓 Agent 動手。"
      },
      {
        "step": "用具體 prompt 執行修改",
        "prompt": "Add a dark mode toggle to the header and make sure it works on mobile。請先說明預計修改的檔案，完成後執行相關測試並回報結果。",
        "take": "官方示例顯示，需求要包含功能與驗收條件，而不只是『幫我改漂亮』。"
      },
      {
        "step": "設定權限與可重用工作流",
        "prompt": "請將這個重複任務整理成 Agent Skill 或 prompt file：[任務]，並列出需要的 MCP、hooks、權限層級與 sandbox 邊界。",
        "take": "把一次性對話整理成團隊可重複的工作流。"
      }
    ],
    "take": "VS Code Agent 的效率來自『先規劃、再授權、最後驗證』：把工作區、代理類型、權限和可重用指示一起設定，才不會只得到一次性的生成結果。"
  },
  {
    "id": "gemini-cli-tools-reference-2026-07-24",
    "title": "Gemini CLI 工具怎麼用：用 @、! 與 /tools 控制檔案和 Shell 權限",
    "date": "2026.07.24",
    "sourceDate": "2026.05.13",
    "category": "AI Agent 工作流",
    "tags": [
      "Gemini CLI",
      "Shell",
      "Tools",
      "Sandbox",
      "MCP"
    ],
    "sourceTitle": "Tools reference",
    "sourceUrl": "https://geminicli.com/docs/reference/tools/",
    "summary": "Gemini CLI 官方工具參考文件列出檔案、Shell、Web、MCP 與 tracker 工具，並說明如何用 `@` 讀檔、用 `!` 執行 shell、用 `/tools` 查看工具與用 policy deny 規則保護 `.env`。這是一份可以直接照著測試工具邊界的操作文件。",
    "keyPoints": [
      {
        "title": "用 @ 觸發 read_many_files",
        "text": "文件說明 `@` 可觸發 `read_many_files`，適合把多個檔案或資料夾內容送進上下文，而不是逐一手動貼上。",
        "tone": "action"
      },
      {
        "title": "用 ! 觸發 run_shell_command",
        "text": "`!` 可觸發 `run_shell_command`；這讓 Gemini CLI 能執行 shell，但也代表使用者需要先理解確認、sandbox 與 trusted folder 的安全邊界。",
        "tone": "risk"
      },
      {
        "title": "先用 /tools 檢查可用工具",
        "text": "在 CLI 輸入 `/tools` 可列出工具，輸入 `/tools desc` 可查看描述；文件也列出工具參數，例如 `read_file` 的 `file_path`、`start_line`、`end_line`。",
        "tone": "action"
      },
      {
        "title": "用 policy deny 保護敏感檔案",
        "text": "官方範例以 `file_path` 的正規表示式匹配 `.env`，對 `write_file` 設定 `decision = deny` 與訊息 `Writing to .env files is not allowed.`。",
        "tone": "risk"
      }
    ],
    "workflow": [
      {
        "step": "列出目前可用工具",
        "prompt": "在 Gemini CLI 輸入 `/tools`，確認工具清單；再輸入 `/tools desc` 查看每個工具的描述與可接受的參數，先不要直接執行未知工具。",
        "take": "先盤點工具能力，再決定要授予哪種操作。"
      },
      {
        "step": "用 @ 讀取指定檔案內容",
        "prompt": "在對話中使用 `@` 指定要讀取的檔案或資料夾，讓 CLI 觸發 `read_many_files`；要求它先列出讀取到的檔名與用途，不要在第一次操作就修改檔案。",
        "take": "先建立可驗證的上下文，再進入修改。"
      },
      {
        "step": "用 ! 執行一個可控 shell 命令",
        "prompt": "在確認 trusted folder、sandbox 與 mutator confirmation 規則後，使用 `!` 觸發 `run_shell_command`，先選擇低風險的列出或檢查命令，執行前閱讀確認提示。",
        "take": "Shell 是高權限工具，先從可逆、唯讀命令開始。"
      },
      {
        "step": "加入 .env 寫入拒絕規則",
        "prompt": "在 Gemini CLI policy 設定加入官方示例：`toolName = \"write_file\"`、`argsPattern = '\"file_path\":\".*\\.env\"'`、`decision = \"deny\"`、`priority = 100`，並設定 `denyMessage = \"Writing to .env files is not allowed.\"`。",
        "take": "把敏感檔案保護寫成規則，不靠每次對話提醒。"
      }
    ],
    "take": "Gemini CLI 的重點不是工具越多越好，而是先用 `/tools` 看清邊界，再用 `@` 讀取、`!` 執行，最後用 policy deny 對 `.env` 等敏感路徑建立硬性保護。"
  },
  {
    "id": "ai-employee-architecture-lesson1-2026-07-22",
    "title": "《AI 員工架構設計》第一課：AI System Architecture",
    "date": "2026.07.22",
    "sourceDate": "2026.07.22",
    "category": "AI Agent 架構",
    "tags": [
      "AI System Architecture",
      "Orchestrator",
      "Workflow",
      "Memory",
      "Agent 架構"
    ],
    "sourceTitle": "原創課程筆記（Alpha × GPT）",
    "sourceUrl": "https://bargisula-ai-skills.pages.dev/",
    "summary": "這門課不教怎麼用 GPT／Claude／Gemini，而是教怎麼把 AI、程式、資料、工具組合成一個會持續完成工作的系統。核心是七層架構（介面／協調／能力／記憶／知識／工具／模型）——Model 只是最後一層的推理引擎，Workflow 才是真正的主體。",
    "keyPoints": [
      {
        "title": "看新框架，先問它改了七層架構的哪一層",
        "text": "以後遇到任何新工具或框架，不要先問「它用 GPT 還是 Claude」，先問「它在七層架構（介面、協調、能力、記憶、知識、工具、模型）中，改變的是哪一層」，這樣才不會被表面的模型差異混淆真正的架構差異。",
        "tone": "change"
      },
      {
        "title": "Orchestrator 是決策者不是執行者，Hybrid 是業界主流",
        "text": "純 Rule Based（全 Python）快但一多規則就變義大利麵；純 AI Based 有彈性但容易漂移、難除錯、成本高；業界主流是 Hybrid：Python 管權限／安全／Router／Retry／Queue，AI 負責理解需求與規劃，最後由 Python 執行，OpenAI Agent SDK、Anthropic Claude Agent、LangGraph 都往這個方向走。",
        "tone": "action"
      },
      {
        "title": "Memory 是會變的經驗，Knowledge 是不變的資料",
        "text": "Memory 是 AI 自己累積的經驗（使用者偏好、專案背景、過去討論），會持續變動；Knowledge 是世界上本身不會變的資料（勞基法 PDF、Notion 文件、公司規章），變的是它被使用的方式。混用這兩者會讓系統設計失焦。",
        "tone": "change"
      },
      {
        "title": "AI 的輸出必須是可執行的決策，不是自然語言",
        "text": "AI 分類完不能只回「這封信很重要」，要回結構化 JSON（priority、action、confidence、reason、summary），而且 priority 不等於 action——老闆說 FYI 時 priority 高但 action 是 ignore，這個區分要在輸出格式裡就處理好，後面的 Python 才有辦法直接執行。",
        "tone": "risk"
      },
      {
        "title": "Learning Loop 用三層分級，記憶不能什麼都存",
        "text": "AI 判斷錯誤時，把「判錯原因」分三層存：Rules（幾乎不變，寫死在程式裡，例如老闆的信永遠不能自動歸檔）、Preferences（屬於使用者、長期影響，例如某客戶的信永遠設 High）、Experiences（先暫存，同樣情況出現夠多次才升級成 Preference）。全部都存進 Memory 會讓它變成垃圾場。",
        "tone": "opportunity"
      }
    ],
    "workflow": [
      {
        "step": "設計一個具體工作流：Gmail 自動分流",
        "prompt": "需求「整理今天 Gmail，重要的做成待辦，不重要的歸檔」的正確畫法不是 Python 呼叫 AI，是 Workflow 包住 AI：Orchestrator 先用 Python Tool 抓信（query 用 is:unread newer_than:1d 先過濾），過濾完的信才丟給 LLM 做分類判斷，判斷結果做 Decision & Validation，通過的分兩支：Todo 用 Python 建待辦、Archive 用 Python 歸檔，最後統一由 Python 做 Report & Notify。",
        "take": "1000 封信不要全丟給 AI，Python 過濾在前面，AI 只處理過濾後的少量決策，因為 Python 快又免費，AI 貴。"
      },
      {
        "step": "訂 AI 決策輸出的固定 JSON 格式",
        "prompt": "要求 AI 分類的輸出固定包含這五個欄位：priority（重要程度）、action（todo/archive/ignore）、confidence（0~1 信心值）、reason（判斷理由，例如「老闆交辦明天下午五點前截止」）、summary（一句話摘要，例如「Q3 預算審核」），不要讓它只回一句自然語言判斷。",
        "take": "priority 高不代表 action 就是 todo（老闆說 FYI 時 priority 高但 action 是 ignore），這個區分要寫進 prompt 的規則裡。"
      },
      {
        "step": "按重要程度套用四級驗證",
        "prompt": "Level 1 直接執行（不重要的例行判斷）；Level 2 看 confidence，設一個門檻（例如 confidence > 0.95 才自動歸檔，否則 ask_user）；Level 3 用 Rule 硬擋（例如「老闆的信不能自動 Archive」直接寫死在程式裡，不讓 AI 決定）；Level 4 用 AI Reviewer 雙重確認（Agent A 分類、Agent B 覆核，兩者一致才真正執行），流程越重要就往高 Level 套。",
        "take": "不是所有判斷都要同等級的把關，重要的流程才需要疊到 Level 3、Level 4。"
      },
      {
        "step": "把學習迴圈接回 Memory，並分區存放",
        "prompt": "AI 判斷 → User 修正 → 記錄修正原因 → 依三層分級（Rules / Preferences / Experiences）存回對應的 Memory → 下次判斷變準。同時 Memory 本身要按用途分區（Global Memory、Email Memory、Investment Memory、Teaching Memory…），檢索時只拿當下相關的那一區，不要整包一起撈。",
        "take": "把判錯原因『全部』寫回 Memory 不分級、不分區，長期下來 Memory 會變成查不動的垃圾場。"
      }
    ],
    "take": "AI 不等於系統，Model 只是七層架構裡最後一層的推理引擎；真正的主體是 Workflow，AI 只是 Workflow 裡的一個節點，負責做決策，流程、安全、執行都交給 Python；Memory 是會變的經驗、Knowledge 是不變的資料，兩者要分開設計；而讓助理用越久越聰明而不是越用越亂的關鍵，是把判斷錯誤按 Rules／Preferences／Experiences 分三層寫回分區管理的 Memory，這就是 Learning Loop。"
  },
  {
    "id": "claude-code-ios-app-no-swift-2026-07-07",
    "title": "他從HTML版本出發，一個晚上做出飲控App！全程他只需要說「這裡不對」",
    "date": "2026.07.20",
    "sourceDate": "2026.07.07",
    "category": "AI Agent 工作流",
    "tags": [
      "Claude Code",
      "Xcode",
      "iOS App",
      "Plan Mode",
      "無程式背景"
    ],
    "sourceTitle": "他從HTML版本出發，一個晚上做出飲控App！全程他只需要說「這裡不對」",
    "sourceUrl": "https://www.bnext.com.tw/article/91436/claude-code-ios-app-no-swift",
    "summary": "不會寫 Swift 的人，用 Claude Code 搭配 Xcode，一個晚上做出一支能裝到 iPhone 上的飲控 App。關鍵不是技術多深，是先用 /plan 模式把需求說清楚、再讓 Claude Code 寫程式碼、自己只需要盯著 Xcode 預覽畫面說「這裡不對」。",
    "keyPoints": [
      {
        "title": "先做 HTML 網頁版，把需求想清楚再動工",
        "text": "直接跳去做 iOS App 容易需求邊做邊改，先用 HTML 做一個網頁版本，把功能、畫面邏輯釐清，之後轉成 App 才不會一路砍掉重練。",
        "tone": "action"
      },
      {
        "title": "用 /plan 指令進入計畫模式，先列清單再逐條刪減",
        "text": "把想要的功能一次說清楚，讓 Claude Code 用 /plan 列出完整功能清單，再逐條問自己「這個我真的會用嗎」，刪掉不必要的功能後才真正開始寫。",
        "tone": "action"
      },
      {
        "title": "Claude Code 寫 Swift，Xcode 即時預覽，人只給視覺回饋",
        "text": "在電腦上建專案資料夾，Claude Code 直接寫入 Swift 程式碼，Xcode 同時打開同一個資料夾，程式碼一更新，Xcode 右側預覽畫面就跟著變化，使用者只需要說「按鈕太小」「這裡不對」這類視覺回饋。",
        "tone": "change"
      },
      {
        "title": "免費開發者帳號能裝到自己手機，但憑證 7 天就過期",
        "text": "不用付費 Apple 開發者帳號，用一般 Apple 帳號透過開發者測試模式就能把 App 裝到自己的 iPhone，但簽署憑證每 7 天會過期，過期後要回 Xcode 重新簽署才能繼續用。",
        "tone": "risk"
      }
    ],
    "workflow": [
      {
        "step": "先做網頁版本釐清需求",
        "prompt": "用 HTML／CSS／JS 做出功能的網頁版原型（例如這篇的飲控工具：勾選預設食材組合，自動算出三大營養素），把畫面邏輯跟功能範圍先定下來。",
        "take": "網頁版改起來成本低，先在這裡把需求吵完，不要留到 App 階段才改架構。"
      },
      {
        "step": "用 /plan 模式列功能清單再刪減",
        "prompt": "在 Claude Code 輸入 /plan，把想要的功能一次講清楚，等 AI 列出完整功能清單後，逐條自問「這個我真的會用嗎」，刪掉非必要功能，確認過的清單才是真正要開發的範圍。",
        "take": "先刪功能再開工，比寫到一半發現用不到再砍便宜很多。"
      },
      {
        "step": "Claude Code + Xcode 協作寫 App，只給視覺回饋",
        "prompt": "在電腦建一個專案資料夾，用 Xcode 打開這個資料夾，讓 Claude Code 在同一個資料夾寫入 Swift 程式碼；每次改完看 Xcode 右側即時預覽，只需要回饋像「按鈕太小」「這裡的顏色不對」這種具體視覺問題，權限開啟、套件安裝都跟著 AI 的指引做。",
        "take": "不用懂 Swift 語法，你的角色是盯畫面挑錯，不是寫程式碼。"
      },
      {
        "step": "用免費帳號部署到自己手機並記得定期重簽",
        "prompt": "用一般 Apple 帳號透過 Xcode 的開發者測試模式把 App 安裝到自己的 iPhone；因為沒有付費開發者帳號，簽署憑證每 7 天會過期，過期後要回到 Xcode 對同一個專案重新執行簽署流程才能繼續打開 App。",
        "take": "免費部署可以用，但記得排提醒，7 天沒重簽 App 會直接打不開。"
      }
    ],
    "take": "沒有 Swift 背景也能靠 Claude Code 做出真正能裝上手機的 App，前提是先用 HTML 版本跟 /plan 模式把需求收斂清楚，開發階段把自己定位成「盯畫面給回饋」的角色，並記得免費簽署憑證 7 天過期要重簽這個實際會踩到的坑。"
  },
  {
    "id": "how-to-build-ai-agent-reverse-workflow-2026-07-17",
    "title": "非工程師，怎麼建立你的AI Agent？先「反向拆解工作流」",
    "date": "2026.07.20",
    "sourceDate": "2026.07.17",
    "category": "AI Agent 工作流",
    "tags": [
      "AI Agent",
      "工作流拆解",
      "Tools",
      "Skills",
      "ROI"
    ],
    "sourceTitle": "非工程師，怎麼建立你的AI Agent？他實戰後建議：先「反向拆解工作流」！",
    "sourceUrl": "https://www.bnext.com.tw/article/91536/how-to-build-ai-agent",
    "summary": "AI Agent 的本質是「微型組織設計」，非工程師也能上手：先定義最終要產出的結果，再往回推每一步需要的輸入，把每一步的 Output 接成下一步的 Input，並分清楚 Tools（讓 AI 做動作）跟 Skills（教 AI 方法）的差異。",
    "keyPoints": [
      {
        "title": "AI Agent 是微型組織設計，不是寫程式",
        "text": "把建 Agent 想成設計一個小型工作流程/組織分工，而不是技術專案，非工程師也能用專案管理的邏輯來規劃每個環節該產出什麼。",
        "tone": "change"
      },
      {
        "title": "從終點往回推，而不是從第一步往前想",
        "text": "先明確定義最終要產出的結果（例如「安排好的面試行程」），再逐步回推每一步各自需要什麼輸入資料，比從頭開始想「第一步要做什麼」更容易拆對。",
        "tone": "action"
      },
      {
        "title": "Tools 跟 Skills 是兩件不同的事",
        "text": "Tools 讓 AI 能執行具體動作（例如發信），Skills 是教 AI 執行的方法（例如怎麼整理洞察），兩者要分開設計，Agent 才不會有工具卻不知道怎麼用。",
        "tone": "opportunity"
      },
      {
        "title": "自動化前先算 ROI，不是能做就做",
        "text": "用「任務頻率 × 每次省下的時間」對比「維護 Agent 的成本」，只有前者明顯大於後者才值得投入自動化，不然維護成本可能比手動做還貴。",
        "tone": "risk"
      }
    ],
    "workflow": [
      {
        "step": "定義終點輸出，往回推每一步的輸入",
        "prompt": "先寫清楚 Agent 最終要交付的具體成果是什麼，再倒著問「這個結果需要哪些輸入」、「那個輸入又是從哪一步的輸出來的」，一路推回到最初的觸發點，建立 Input-Output 鏈。",
        "take": "從結果往回推，比從頭往前想更不容易漏掉中間步驟。"
      },
      {
        "step": "分開設計 Tools 跟 Skills",
        "prompt": "先列出這個 Agent 需要能做哪些具體動作（Tools，例如發信、查資料、寫檔），再分別教它每個動作該怎麼判斷跟執行（Skills，例如怎麼篩選出重要洞察），兩份清單分開寫。",
        "take": "有 Tools 沒 Skills，Agent 會有工具但用不對方法。"
      },
      {
        "step": "先算 ROI 再決定要不要自動化",
        "prompt": "估算這個任務多久發生一次、每次自動化能省多少時間，乘出總效益，再對比維護這個 Agent（改 prompt、修錯誤、更新流程）預估要花多少時間，效益明顯大於維護成本才動手做。",
        "take": "不是能自動化就要自動化，先算完帳再動手。"
      }
    ],
    "take": "建 AI Agent 不需要工程背景，用「終點往回推」取代「從頭往前想」，把 Tools（能做什麼）跟 Skills（怎麼做）分開設計，動手前先算清楚 ROI，就是非工程師也能落地的實戰方法。"
  },
  {
    "id": "claude-code-ai-adoption-5-stages-2026-07-17",
    "title": "一人用AI產出翻10倍，全公司卻沒跟上？Claude Code創始人揭「AI採用5階地圖」",
    "date": "2026.07.20",
    "sourceDate": "2026.07.17",
    "category": "AI Agent 工作流",
    "tags": [
      "Claude Code",
      "AI 採用",
      "組織管理",
      "ROI",
      "Agent"
    ],
    "sourceTitle": "一人用AI產出翻10倍，全公司卻沒跟上？Claude Code創始人揭「AI採用5階地圖」，看懂你卡在哪",
    "sourceUrl": "https://www.bnext.com.tw/article/91541/claude-code-ai-adoption-5-stages",
    "summary": "Anthropic 主管 Boris Cherny 提出「AI 採用 5 階框架」：卡關、助理、指揮官、監督式自治、AI 原生。重點不是衝到最高階，而是先誠實診斷團隊卡在哪一階、把該階段的瓶頸（審批流程、信任度、驗收效率、規範）補齊，再往下一階走。",
    "keyPoints": [
      {
        "title": "個人與團隊的 AI 落差，來自「階段」沒對齊",
        "text": "很多組織是「一人用 AI 產出翻 10 倍，全公司卻沒跟上」，不是工具不夠好，是團隊還卡在低階段（審批、信任），個人已經跑到指揮官階段，中間的落差就是瓶頸所在。",
        "tone": "risk"
      },
      {
        "title": "5 階地圖：卡關→助理→指揮官→監督式自治→AI 原生",
        "text": "卡關卡在資安審批、助理卡在信任程度、指揮官（同時管 5-10 個 AI 分身）卡在驗收效率、監督式自治（管約 100 個分身）卡在規範與決策速度、AI 原生只需下意圖指令。",
        "tone": "change"
      },
      {
        "title": "升級階段要同步補防護欄，不是單純加使用量",
        "text": "每往上一階，風險跟自治程度都會提高，沒有同步建立驗證機制跟規範，衝太快只會失控，不會真的提升產出。",
        "tone": "action"
      },
      {
        "title": "衡量 ROI 要看省下的工程工時，不是用量",
        "text": "用「使用量」評估 AI 導入成效容易失真，真正該看的是實際省下多少工程人工時數，才知道有沒有真的往下一階段推進。",
        "tone": "opportunity"
      }
    ],
    "workflow": [
      {
        "step": "誠實自我診斷團隊現在卡在哪一階",
        "prompt": "對照 5 階地圖（卡關/助理/指揮官/監督式自治/AI 原生），誠實列出團隊現在能同時穩定管理幾個 AI 分身、審核流程有多重、瓶頸具體是審批、信任還是驗收效率。",
        "take": "不要跳著看高階段的做法，先確認自己真的在哪一階。"
      },
      {
        "step": "針對當前階段的瓶頸做局部突破",
        "prompt": "卡關階段推動資安審批流程改革；助理階段建立可信的產出審核 SOP；指揮官階段優化驗收效率（例如自動化驗證腳本）；監督式自治階段寫清楚規範文件與防護機制。",
        "take": "每個階段的解法不一樣，用高階段的解法救低階段的瓶頸沒有用。"
      },
      {
        "step": "升級前先補防護欄，再衝下一階",
        "prompt": "在放寬 AI 自治範圍（例如從逐案審核改成批次抽查）之前，先把對應的驗證機制、異常回報流程建好，並用「省下的工程工時」而非用量來驗證這一階段真的比上一階段有效率。",
        "take": "防護欄要走在自治範圍前面，不是出事後才補。"
      }
    ],
    "take": "AI 導入落差的解法不是要求全公司立刻學會用到最高階，而是先找出團隊真正卡住的那一階、把那一階的瓶頸（審批、信任、驗收、規範）處理掉，用省下的工程工時而不是用量來驗證進度，再穩步往下一階走。"
  },
  {
    "id": "ai-practical-guide-2026-07-20",
    "title": "AI 實戰落地指南：RAG、Agentic AI 與 2026 工作術",
    "date": "2026.07.20",
    "sourceDate": "2026.07.20",
    "category": "AI Agent 工作流",
    "tags": [
      "RAG",
      "Agentic AI",
      "LangGraph",
      "NotebookLM",
      "Claude",
      "Perplexity",
      "工作術"
    ],
    "sourceTitle": "原創整理筆記（Alpha）",
    "sourceUrl": "https://bargisula-ai-skills.pages.dev/",
    "summary": "把 RAG 知識庫、Agentic AI 多步驟工作流，跟 2026 年日常最常用的 AI 工具組合，整理成一份可以直接照做的實戰指南：從零建一個問答知識庫、讓 AI 自主完成多步驟任務、到每天開會寫信做簡報的固定套路。",
    "keyPoints": [
      {
        "title": "RAG 不是理論，是四個工具的固定組合",
        "text": "LlamaIndex 或 LangChain 做框架、Chroma 或 Pinecone 存向量、Claude 或 GPT-4o 回答問題，把 PDF/Word 丟進去、清洗分割、向量化、建索引、查詢，就是一個能用的內部知識庫。",
        "tone": "action"
      },
      {
        "title": "Agentic AI 的關鍵是拆角色，不是硬塞一個超級提示詞",
        "text": "用 LangGraph 或 CrewAI 把任務拆成 Planner、Researcher、Writer、Reviewer 四個角色，每個角色給對應工具，中間加人類審核點，比單一大 prompt 穩定得多。",
        "tone": "change"
      },
      {
        "title": "每天真的會用到的，是固定的工具配對，不是新奇功能",
        "text": "會議總結配 NotebookLM、寫信配 Claude、做簡報用 Claude 寫內容再丟 Gamma 轉投影片、研究用 Perplexity 查完再用 NotebookLM 整理，組合固定下來效率才會穩定。",
        "tone": "action"
      },
      {
        "title": "提示詞的共通公式：角色＋格式要求＋範例",
        "text": "不管是 RAG 查詢、Agent 任務、還是日常寫作，提示詞品質的差異幾乎都來自有沒有給角色設定、明確格式要求、跟一個範例，而不是句子寫得多長。",
        "tone": "opportunity"
      }
    ],
    "workflow": [
      {
        "step": "建一個知識庫問答系統（RAG）",
        "prompt": "把公司文件放進 data/ 資料夾，用 SimpleDirectoryReader 讀取，RecursiveCharacterTextSplitter 切成 800 tokens、重疊 100，text-embedding-3-large 向量化，VectorStoreIndex 建索引，QueryEngine 查詢時要求「附來源回答」，前端用 Streamlit 做聊天介面。",
        "take": "重點是清洗與分割那一步，切太大會查不準，切太小會失去上下文。"
      },
      {
        "step": "搭一個市場研究 Agent（Agentic AI）",
        "prompt": "用 LangGraph 定義 Graph（節點與邊緣），Planner Agent 拆解任務、Researcher Agent 用 RAG＋網路搜尋、Writer Agent 生成報告、Reviewer Agent 檢查，每個 Agent 給對應工具，執行中加入人類審核點。",
        "take": "人類審核點不是可有可無，是防止 Agent 走偏最便宜的方法。"
      },
      {
        "step": "把每天的 AI 工作術固定成 SOP",
        "prompt": "會議錄音丟 NotebookLM 產生行動項目與責任人；寫信用 Claude＋「正式語氣，強調重點」；簡報先用 Claude 寫內容，再丟 Gamma 一鍵轉投影片；研究先用 Perplexity 查資料，再用 NotebookLM 整理成長期知識庫。",
        "take": "固定工具配對，才不用每次都重新想「這次要用哪個 AI」。"
      }
    ],
    "take": "這份指南的核心不是介紹新工具，而是把 RAG、Agentic AI、跟日常 AI 工作術，各自收斂成一套可以重複執行的固定流程——知識庫要能查、Agent 要能拆角色加審核點、日常工具要配對固定，效率才會累積，而不是每次都重新摸索。"
  },
  {
    "id": "ai-adoption-knowledge-base-skill-library-2026-07-16",
    "title": "AI 導入的終點，不是教大家寫 Prompt，而是讓人只要按一個按鈕",
    "date": "2026.07.16",
    "sourceDate": "2026.07.16",
    "category": "AI Agent 工作流",
    "tags": [
      "AI 導入",
      "HR Agent",
      "Knowledge Base",
      "Skill",
      "Agent",
      "工作流"
    ],
    "sourceTitle": "AI 導入的實戰拆解：從參照型知識庫到 Skill Library",
    "sourceUrl": "https://www.bnext.com.tw/article/91473/ai-adoption-knowledge-base-skill-library",
    "summary": "AI 導入的關鍵，不是訓練每個人都會寫 Prompt，而是把公司的知識與工作流程封裝成員工可以直接使用的按鈕。從參照型知識庫、動作型 Skill 到共用 Skill Library，企業需要先整理資料與流程，再把 AI 包裝成熟悉的工作入口。",
    "keyPoints": [
      {
        "title": "AI 導入最大的阻力不是技術",
        "text": "要求每個員工學會寫 Prompt，容易讓一部分人放棄；更好的方向是把複雜操作封裝在熟悉的介面後面。",
        "tone": "change"
      },
      {
        "title": "先建立參照型知識庫",
        "text": "職缺說明書、主管清單、表單範本、規章與系統網址，都要先整理成 AI 能查詢的資料來源。",
        "tone": "action"
      },
      {
        "title": "再建立動作型知識庫，也就是 Skill",
        "text": "人要先跑過一次流程，記錄觸發條件、輸入資料、處理邏輯與預期產出；給人看的 SOP 不一定適合直接交給 AI。",
        "tone": "change"
      },
      {
        "title": "最後才做成共用系統",
        "text": "Skill Library 或部門網站可以把高頻任務變成按鈕，並由指定角色統一維護版本。",
        "tone": "opportunity"
      },
      {
        "title": "知識庫沒有維護，Agent 只會放大錯誤",
        "text": "如果參照資料與動作流程沒有先整理，直接做 Agent 或聊天機器人，AI 就只能猜測回答。",
        "tone": "risk"
      }
    ],
    "workflow": [
      {
        "step": "選一個高頻、規則明確的工作",
        "prompt": "請找出一個每天重複、輸入與輸出相對穩定的工作，列出它的觸發條件、輸入資料、判斷步驟與預期產出。",
        "take": "先從小範圍建立可驗證的工作單位。"
      },
      {
        "step": "整理參照文件",
        "prompt": "請將這項工作需要查詢的規章、範本、名單與系統連結整理成一份 AI 參照型知識庫，標示每份文件的用途與更新責任人。",
        "take": "讓 AI 有可靠資料可以查。"
      },
      {
        "step": "把人跑過的流程改寫成 Skill",
        "prompt": "請把這項工作拆成觸發條件、輸入、處理邏輯、例外情況與輸出格式，改寫成 AI 可以執行的 Skill。",
        "take": "不要只把給人看的 SOP 丟給 AI。"
      },
      {
        "step": "包裝成按鈕並維護版本",
        "prompt": "請設計一個讓非技術員工可以直接使用的表單或按鈕介面，並規劃 Skill 的版本更新、測試與權限管理流程。",
        "take": "讓使用者感覺不到複雜的 AI 操作。"
      }
    ],
    "take": "這個案例真正重要的地方，不是 HR Agent 本身，而是揭示了 AI 導入的順序：先整理參照資料，再拆解動作流程，最後才做成系統介面。AI 導入的終點，不是讓所有人都學會操作 AI，而是讓正確的 AI 能力出現在正確的工作入口。"
  },
  {
    "id": "ai-coding-agent-repo-workflow-2026-07-14",
    "title": "Coding Agent 正從補全走向整個 Repo：使用時要把任務拆成可驗證的迴圈",
    "date": "2026.07.14",
    "sourceDate": "2026.07.07-13",
    "category": "AI 程式開發",
    "tags": [
      "Coding Agent",
      "Codex",
      "Claude Code",
      "GitHub Copilot",
      "測試"
    ],
    "sourceTitle": "Adoption and Impact of Command-Line AI Coding Agents；The Shift to Agentic AI: Evidence from Codex",
    "sourceUrl": "https://arxiv.org/abs/2607.01418",
    "summary": "最新研究與產業報導都指向同一個變化：coding agent 的工作單位已從一行程式碼或單一函式，擴大到 repository、issue 與完整開發迴圈。真正可用的做法是讓 agent 讀規則、提出計畫、修改小範圍、執行測試，再由人確認差異。",
    "keyPoints": [
      {
        "title": "工作單位從補全變成任務",
        "text": "Agent 可以理解檔案關係、執行命令與修改多個檔案，因此任務描述與驗收標準比單句 prompt 更重要。"
      },
      {
        "title": "Repo 規則是第一層護欄",
        "text": "README、AGENTS.md、測試命令與禁止操作應在 agent 動手前被讀取並確認。"
      },
      {
        "title": "最可靠的是短迴圈",
        "text": "先計畫、再小改、立即測試、檢視 diff；每一輪都保留可回退的版本。"
      },
      {
        "title": "人仍要驗證產品判斷",
        "text": "測試通過不等於需求完成，仍需檢查 UX、權限、資料安全與是否改到不相關檔案。"
      }
    ],
    "workflow": [
      {
        "step": "先讓 agent 讀 repo 規則",
        "prompt": "請先讀 README、AGENTS.md、package.json 與相關測試檔。只回報你確認到的規則、可用命令與不確定之處，不要修改檔案。",
        "take": "先建立共享上下文。"
      },
      {
        "step": "把 issue 改成驗收清單",
        "prompt": "請將這個需求拆成 3-7 個可驗證條件，標示涉及檔案、需要新增的測試，以及明確不在範圍內的項目。",
        "take": "讓成果可以用 diff 與測試逐項核對。"
      },
      {
        "step": "限制一次修改的範圍",
        "prompt": "請只完成第一個驗收條件，修改前先列計畫，完成後執行最小相關測試並回報檔案變更。",
        "take": "小步驟能降低範圍漂移。"
      },
      {
        "step": "做測試與 diff 審查",
        "prompt": "請執行專案指定的 lint、test 或 build，接著檢查 git diff：列出通過項目、失敗原因、潛在副作用與仍需人工確認的地方。",
        "take": "把看起來能跑提升成可交付證據。"
      }
    ],
    "take": "coding agent 的效率來自更大的上下文，但穩定性來自小迴圈。最適合的起手式是指定一個可測試的 issue，要求 agent 先讀規則、先計畫、每輪只改一小塊，最後交付測試結果與 diff。"
  },
  {
    "id": "ai-coding-git-fundamentals-beginners",
    "title": "AI Coding 新手該懂的 6 個 Git 名詞：不用學完整系統，先保住方向盤",
    "date": "2026.07.11",
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
    "date": "2026.07.11",
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
