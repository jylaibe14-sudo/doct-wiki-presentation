# 2026-11-23 dOCT Wiki 實際執行與驗證紀錄

## 逐節點執行

| 順序 | 操作 | 真實結果／資料 |
|---|---|---|
| 01 | 核對 4 篇使用者 PDF 和 2 篇外部研究 | S01–S06 書目、來源位置、範圍限制寫入 `raw/` |
| 02 | `npm run ingest` | PASS：6 篇來源筆記、9 篇概念筆記、索引 |
| 03 | `npm run query -- 'LIV OCDS 存活'` | PASS：相關概念 liv／ocds／aliv／viability 等，輸出至 `logs/query-result.json` |
| 04 | `npm run build` | PASS：19 張教學投影片的數據寫入 `docs/data.js` |
| 05 | `npm run check` | PASS：6 sources、9 concepts、19 slides、**51** slide–source links |
| 06 | `npm run test:validator` | **EXPECTED FAIL**：檢查器成功攔截刻意注入的 `S99` 引用 |
| 07 | `npm run test:claim` | **EXPECTED FAIL**：檢查器成功攔截刻意注入的「高 LIV = 活細胞」錯誤主張 |
| 08 | `npm run check` | PASS：正式資料沒有被故障注入改壞 |
| 09 | 首次 Chromium browser smoke 測試 | 發現鍵盤焦點造成翻頁檢查失敗、手機 390px 溢出 18px、320px 溢出 88px |
| 10 | 修改鍵盤事件與進度列 CSS | 重跑 Chromium，解決兩個螢幕寬度的橫向溢出；調整圖表不被 flex 版面壓縮 |
| 11 | `python tests/browser_smoke.py` | **PASS：56 項檢查，全數通過**（包含全部來源連結、Wiki 查詢、波形切換、答題、桌機與手機） |

## 反思：Node 03 為何是最容易出錯的內容節點？

從文獻「波動與存活有相關性」到教學口語「高 LIV 代表活細胞」有一個很危險的推論跳躍。S03 的 intensity variance / median intensity variance（IV/MIV）也容易被和 S02 的 dB-scale LIV 混淆。對初學者來說，這比缺少一條引用連結更容易造成誤解。

因此新增以下前置措施：

1. **Node 01／02（比之前更早）：** 來源筆記強制包含 `caution` 與 `evidence` 欄位；明確區別 IV 與 LIV、D-FFOCT 與一般 dOCT。
2. **Node 04：** 為所有投影片校驗來源 ID 與 Wiki 映射、加入一條已知的高風險錯誤主張檢查；故障注入測試確認檢查器會拒絕 S99 及錯誤主張。
3. **Node 06：** 增加真實 Chromium 的排版與互動檢查，發現手機寬度與圖表壓縮即回退修改 HTML/CSS。

## 限制與誠實聲明

- `S99` 與「高 LIV = 活細胞」是**刻意模擬的錯誤**，並非正式資料本身真的有這些錯誤。
- 浏览器初次失敗是真實執行發現；56 項通過紀錄在 `logs/browser-check.json`。
- 這個資料管線沒有自動 LLM API、PDF 全文 ingest、向量資料庫；語意正確性仍需人工與原論文對照。
