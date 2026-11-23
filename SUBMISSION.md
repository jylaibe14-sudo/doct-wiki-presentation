# dOCT Wiki 作業繳交文字（可直接複製）

**繳交標題：**【學校簡稱】 【學號】 【系級簡稱】 【姓名】 dOCT Wiki：從 OCT 到細胞動態成像

> 請先把專案上傳到新的 GitHub Repository，完成 GitHub Pages 部署並實際打開測試後，再把下面的「【待填】」改為公開網址。不要把尚未部署的預期網址說成已上線。

## 1. LLM Wiki 主題與簡介

**主題：dOCT Wiki｜從 OCT 結構影像到 Dynamic Optical Coherence Tomography 的動態對比與細胞活性評估。**

這份 Wiki 面向不熟悉 OCT 的同學，整理 OCT／dOCT 概念、重複掃描時間序列、LIV、OCDS、aLIV／Swiftness、腫瘤球藥物反應、trypan blue 交叉驗證，以及 mask、配準與噪聲風險。學習者可搜尋主題，從條目點入相關概念與原始研究。本文將量測到的「訊號波動」和需要證據的「生物存活」區分，避免過度解讀。

## 2. LLM Wiki 連結或成果

- Wiki：**【待填】/wiki.html**
- GitHub Repository：**【待填】**
- 成果：6 份來源摘要（4 篇提供的 PDF＋2 篇補充研究）、9 篇概念 Wiki 與索引，分別保留原始論文 DOI／研究限制。
- 已 ingest 6 份來源：S01 Ren et al. 2024、S02 Abd El-Sadek et al. 2024、S03 Tan et al. 2024、S04 Lee et al. 2023、S05 Abd El-Sadek et al. 2020、S06 Morishita et al. 2025/2026。

> 本次 ingest 是先閱讀／核對資料，再整理成結構化摘要與 Wiki 筆記，非自動抓取論文全文。

## 3. 教學 HTML 簡報連結

- HTML 簡報：**【待填】/slides.html**
- 內容：19 頁，依「OCT 與 dOCT → 重複影格 → LIV、OCDS → 腫瘤球應用 → 生物驗證 → 干擾控制 → aLIV／Swiftness → 小測驗」安排。
- 功能：鍵盤及按鈕翻頁、19 頁來源跳轉、4 種合成波形切換、快慢相關性示意、互動問答。
- 所有合成曲線都是教學示意，不是原始研究測試結果。

## 4. Loop / Graph 設計

```text
01 核對論文／蒐集來源
       ↓
02 Ingest Wiki ── 摘要/術語錯誤 → ↩ 回 01
       ↓
03 Wiki Query、整理教學順序
       ↓
04 來源和高風險主張檢查 ── 引用或解讀錯誤 → ↩ 回 02–03
       ↓
05 生成 HTML 簡報與 Wiki
       ↓
06 瀏覽器與手機測試 ── 排版或互動失敗 → ↩ 回 05
       ↓
      GitHub Pages 發佈
```

重複執行的是 02–04 的來源整理與內容驗證迴圈，以及 05–06 的版面與互動檢查迴圈。目的是先排除引文／科學推論錯誤，再花時間設計簡報，降低返工與錯誤公開的風險。

## 5. 實際執行和檢查紀錄（2026/11/23）

| 項目 | 做法 | 實際結果 |
|---|---|---|
| Ingest | `npm run ingest` | PASS：6 份來源、9 篇概念筆記 |
| Wiki Query | `npm run query -- 'LIV OCDS 存活'` | PASS：回傳 LIV、OCDS、aLIV、viability 等相關條目 |
| Build | `npm run build` | PASS：19 頁 HTML 簡報資料 |
| 引文檢查 | `npm run check` | PASS：51 個來源對應 |
| 故障注入 1 | 故意引用 `S99` | EXPECTED FAIL，驗證器有攔截 |
| 故障注入 2 | 故意寫「高 LIV = 活細胞」 | EXPECTED FAIL，驗證器有攔截 |
| Chromium 測試 | `python tests/browser_smoke.py` | PASS：56 項測試，含 390px 與 320px 手機 |

完整證據：`logs/RUN_REPORT.md`、`logs/browser-check.json`、`evidence/`。

## 6. 反思

**哪個節點最常出錯？** 教學內容轉換（Node 03）最有科學解讀風險：容易把 LIV 的波動幅度說成存活率，或混淆 IV/MIV 與 LIV。這也是我最需要設置提前檢查的節點。瀏覽器實測另發現進度列在手機版造成橫向溢出，以及自相關示意圖被排版壓縮。

**把檢查提前放在哪裡？** 我將指標定義與使用限制前移到來源 ingest（Node 01–02），在產生 HTML 前先做來源與高風險主張檢查（Node 04），不等整份簡報做完才回查。

**有調整 workflow 嗎？** 有。在原本「取得→整理→產生」流程加入內容驗證迴圈（錯誤來源與說法需退回），以及手機／互動的實際瀏覽器關卡（視覺錯誤退回 HTML 節點）。這次故障注入、鍵盤翻頁及手機版的修正過程證明，驗證流程能在公開部署前找到問題。

> 補充說明：這份作業是 LLM 輔助閱讀與整理來源、Node.js 可重現的半自動產生／檢查流程，沒有假稱使用線上 LLM API 自動全文檢索或讓 agent 完全自主執行。
