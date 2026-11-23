# dOCT Wiki｜動態光學同調斷層掃描

主題：**從 OCT 結構影像到 dOCT 動態對比與生物驗證**

## 9 篇概念整理
- [OCT 與 dOCT：從結構到動態](concepts/intro.md) — 傳統 OCT 看散射結構；dOCT 在相同位置重複量測，分析時間變化。
- [時間序列、重複掃描與取樣](concepts/acquisition.md) — dOCT 的分析單位是同一位置多次取得的 OCT 訊號。
- [LIV：Logarithmic Intensity Variance](concepts/liv.md) — 以 dB 尺度的 OCT 訊號計算時間變異數，反映波動幅度。
- [OCDS：OCT Correlation Decay Speed](concepts/ocds.md) — 分析 OCT 訊號的時間自相關如何隨延遲 τ 衰減。
- [aLIV 與 Swiftness](concepts/aliv.md) — 以模型化方式區分動態散射體的佔比與運動快慢。
- [腫瘤球、細胞存活與生物驗證](concepts/viability.md) — 動態對比與細胞活性可能相關，但不是無需驗證的生死標記。
- [藥物反應：PTX、TAM、DOX](concepts/drug.md) — 不同藥物、濃度與時間可能造成不同的腫瘤球結構與動態反應。
- [Mask、漂移、噪聲與解讀風險](concepts/artifacts.md) — 先確認影像有效區和配準，再解釋波動的生物來源。
- [Common-path D-FFOCT 與抗震動](concepts/ffoct.md) — 共光路干涉可在特定架構中降低外部震動帶來的假動態。

## 延伸教學講義（7 篇，非新增 ingest 文獻）
- [L01 OCT 與 dOCT：從結構影像到細胞動態](../handouts/L01.md)（S01、S02）
- [L02 掃描與前處理：影格、時間間隔、配準與 mask](../handouts/L02.md)（S01、S02、S03）
- [L03 LIV、IV 與 MIV：如何量測訊號波動幅度？](../handouts/L03.md)（S01、S02、S03）
- [L04 OCDS 與 PSD：從時間相關性理解動態快慢](../handouts/L04.md)（S01、S02、S05）
- [L05 dOCT 藥物反應案例：MCF-7 腫瘤球與 PTX／TAM／DOX](../handouts/L05.md)（S02、S05）
- [L06 從動態訊號到存活率：Trypan blue 驗證與亮度校正](../handouts/L06.md)（S03、S02）
- [L07 降低假動態與進階解讀：Common-path、aLIV、Swiftness](../handouts/L07.md)（S04、S06、S01）

## 6 份已 ingest 來源
- [S01 Dynamic contrast optical coherence tomography (DyC-OCT) for label-free live cell imaging](sources/S01.md) — 2024
- [S02 Label-free visualization and quantification of the drug-type-dependent response of tumor spheroids by dynamic optical coherence tomography](sources/S02.md) — 2024
- [S03 Non-destructive viability assessment of cancer cell spheroids using dynamic optical coherence tomography with trypan blue validation](sources/S03.md) — 2024
- [S04 Common-path Optical Interferometry for Stabilized Dynamic Contrast Imaging: A Feasibility Study](sources/S04.md) — 2023
- [S05 Optical coherence tomography-based tissue dynamics imaging for longitudinal and drug response evaluation of tumor spheroids](sources/S05.md) — 2020
- [S06 Dynamic optical coherence tomography algorithm for label-free assessment of swiftness and occupancy of intratissue moving scatterers](sources/S06.md) — 2026

> 註：raw/ 保存來源書目與經查核後摘要，wiki/ 保存可互連知識頁；新增來源時需重新 ingest、檢查，必要時人工修訂觀點。
