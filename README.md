# dOCT Wiki → 互動教學 HTML 簡報

> **主題：從 OCT 結構影像到 Dynamic Optical Coherence Tomography（dOCT）的動態對比與細胞活性評估**

這是一套可直接部署 GitHub Pages 的課堂作業網站，包含 **6 篇來源摘要、9 篇互連 Wiki 概念、19 頁可操作 HTML 簡報、Loop / Graph、實際執行紀錄及檢查反思**。

## 先討論，後生成：本次範圍

- 教學對象：初次接觸 OCT/dOCT 的同學；保留重要科學界線，但不要求熟悉 Fourier-domain OCT。
- 教學目標：理解靜態 OCT 與 dOCT、時間序列、LIV、OCDS、aLIV/Swiftness、腫瘤球藥物反應、雜訊及活性驗證。
- 討論後的安全邊界：**LIV 不等於細胞活性；IV/MIV 不等於 dB² 的 LIV；OCDS_e 不等於 OCDS_l；common-path D-FFOCT 不是所有 dOCT 系統的通用架構。**
- 所有畫面內的時間序列和腫瘤球 SVG 均為**教學合成示意**，並非論文原始量測或可作生物判讀的實驗資料。

## 來源與 ingest

| 編號 | 來源 | 取得方式 |
|---|---|---|
| S01 | Ren et al. (2024), DyC-OCT mini review | 使用者提供 PDF |
| S02 | Abd El-Sadek et al. (2024), MCF-7 drug response | 使用者提供 PDF |
| S03 | Tan et al. (2024), trypan blue validation | 使用者提供 PDF |
| S04 | Lee et al. (2023), common-path D-FFOCT | 使用者提供 PDF |
| S05 | Abd El-Sadek et al. (2020), tissue dynamics imaging | 公開論文 DOI |
| S06 | Morishita et al. (2026 journal issue; online 2025), aLIV/Swiftness | 公開論文 DOI |

完整 DOI、摘要與使用限制在 `raw/`、`wiki/sources/` 與 `SOURCES.md`。本次 ingest 為**整理過的中英書目與中文摘要**，不是 PDF 全文匯入或自動向量化；使用者的四篇 PDF **不在公開 ZIP 內**，避免複製發佈原始研究全文。

## 網頁入口

- `docs/index.html`：網站首頁
- `docs/wiki.html`：可搜尋的 Wiki，9 個概念與 6 篇來源摘要
- `docs/slides.html`：19 頁教學 HTML 簡報；← → 翻頁；F 全螢幕；含可切換合成波形及互動小測驗
- `docs/workflow.html`：Loop／Graph、真實命令、故障注入及反思

網站為純 HTML/CSS/JS，不使用外部 CDN，下載後可以離線瀏覽。

## 重新執行流程（Node.js 22+）

```bash
npm run ingest
npm run query -- "LIV OCDS 存活"
npm run build
npm run check
```

故障注入：

```bash
npm run test:validator   # 刻意加入不存在的 S99，預期失敗
npm run test:claim       # 刻意注入「高 LIV = 活細胞」，預期失敗
npm run check            # 確認正式資料再次通過
```

可選 Chromium 網頁測試（需 Python Playwright 與 Chromium）：

```bash
python tests/browser_smoke.py
```

此測試檢查 19 頁引用、互動切換與小測驗、Wiki 搜尋、Node 01–06、桌機、390px 和 320px 手機無橫向溢出。

## Loop / Graph

```text
[01. 核對 4 篇 PDF 與 2 篇外部文獻]
          ↓
[02. Ingest Wiki]  ←── 資料與定義問題 ──┐
          ↓                               │
[03. Query Wiki、排教學順序] ──────────────┘
          ↓
[04. 引用與高風險說法檢查] ── 錯誤 ──↩ 回到 02–03
          ↓
[05. 生成 HTML 簡報／Wiki]
          ↓
[06. 桌機／手機與互動測試] ── 錯誤 ──↩ 回到 05
          ↓
        GitHub Pages
```

詳細反思及實際執行紀錄：`logs/RUN_REPORT.md` 和 `docs/workflow.html`。

## GitHub Pages 發布（建議方法）

1. 新建公開儲存庫，例如 `doct-wiki-presentation`，不要覆蓋之前的 LLM Wiki 專案。
2. 將 ZIP **解壓縮後的所有檔案內容**放到 Repository 最外層（`docs/` 必須是最外層的資料夾）。
3. 到 **Settings → Pages → Build and deployment** 設定：`Source = Deploy from a branch`、`Branch = main`、`Folder = /docs`，按 Save。
4. 待 GitHub Pages 完成部署，以 GitHub 顯示的實際 URL 為準：首頁 `https://帳號.github.io/doct-wiki-presentation/`、簡報 `.../slides.html`、Wiki `.../wiki.html`、流程 `.../workflow.html`。

本專案建議只採用 **main /docs** 分支部署；不用建立 GitHub Actions workflow，避免重複部署設定。

## 本次限制

- 本地查詢使用透明的關鍵字比對，沒有向量檢索或自動 LLM API 工具調用。
- Node.js 檢查器可以驗證來源存在性和部分高風險說法，但**不能自動保證每句科學推論都正確**。
- 原始文獻中的圖片、數據皆未重製進作品；頁面圖形是有標示的示意圖。若有更新研究或新增你的實驗結果，應回到來源核對並重建 Wiki 與簡報。
