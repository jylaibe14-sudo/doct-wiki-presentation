# AGENTS.md — dOCT Wiki Lab

## 任務
維護一套以 Dynamic Optical Coherence Tomography（dOCT）為主題、可查證且適合新手的中文 Wiki 與 HTML 教學簡報。以研究來源推導內容，不得只依模型記憶補上未經證實的實驗數據。

## 專案結構
- `raw/Sxx.json`：來源書目、來源類型、論文依據位置、摘要、重點、使用限制
- `knowledge/concepts.json`：9 個概念，含原始來源 IDs 與相關頁
- `knowledge/slides.json`：19 張教學頁，逐張標記 Wiki 頁與來源 IDs
- `wiki/`：`npm run ingest` 產生的知識庫 Markdown
- `docs/`：可在 GitHub Pages 使用的靜態網頁
- `scripts/`：ingest、query、build、validate
- `logs/` 和 `evidence/`：執行紀錄、失敗測試與截圖

## 硬性科學規則
1. `LIV = temporal variance of dB-scaled OCT signal`；只能先說反映觀測到的波動**幅度**。
2. `OCDS` 量化時間自相關衰減；不得直接把它稱為粒子實際速度，且 OCDS_e 與 OCDS_l 不能混淆。
3. S03 使用 `IV`、`MIV` 與亮度正規化；不可不加註記就改成 LIV，或直接比較不同單位的值。
4. `aLIV / Swiftness` 是 S06 的模型化指標；不得寫成對每個細胞直接追蹤得到的真實速度。
5. S04 是 `D-FFOCT common-path interferometry`；不可把噪聲抑制倍率套用到所有 OCT 儀器。
6. 不得寫「高 LIV 就是活細胞」「低 LIV 就是細胞死亡」「dOCT 可無條件量測精準存活率」。
7. 使用者提供的 PDF 不應直接複製到公開 Repository；除非取得適當公開授權，使用 DOI 與整理摘要即可。
8. 自製示意圖須標示 `合成／教學示意，非實驗量測`；不可虛構研究原始曲線。

## 變更流程
- 新來源：先核對 DOI、年份、原文位置，再寫 `raw/Sxx.json`，`evidence` 與 `caution` 不可空白。
- 新觀點：更新 `knowledge/concepts.json`，補足來源與雙向關聯，禁止孤兒頁。
- 新投影片：每頁需 `wiki` 與 `sources`，所有引文可點回 Wiki，必須有 beginner-friendly learning objective。
- 執行：`npm run ingest && npm run build && npm run check`，再做瀏覽器 smoke test。
- 驗證發現問題：來源問題回 Node 01–03；HTML 問題回 Node 05；修正後重跑相同檢查。

## 不可過度宣稱
請把「從 PDF 提取摘要」與「保存全文」「自動語意檢索」「LLM agent 自我修正」清楚區分；本專案是可重現的半自動工作流，人工閱讀與審查仍不可省略。
