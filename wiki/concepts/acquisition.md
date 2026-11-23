# 時間序列、重複掃描與取樣

> dOCT 的分析單位是同一位置多次取得的 OCT 訊號。

## 重點
固定相同 B-scan 位置，連續取得多張影格，可得到每個像素的 I(x,z,t) 序列；3D 掃描可在多個位置重複此程序。

## 重點
時間間隔 Δt、重複次數 N、總觀察時間決定可觀察快／慢動態的範圍及估計精度。

## 重點
2024 年 MCF-7 藥物研究的範例使用每位置 32 次影格，在 6.348 秒內取得，影格間隔為 204.8 ms；這是該研究設定，不是通用標準。

## 教學例子
如果兩張圖拍攝位置偏移，影像差異可能來自晃動而非細胞內活動，因此掃描對位是必要條件。

## 支持來源
- [S01：Dynamic contrast optical coherence tomography (DyC-OCT) for label-free live cell imaging](../sources/S01.md)
- [S02：Label-free visualization and quantification of the drug-type-dependent response of tumor spheroids by dynamic optical coherence tomography](../sources/S02.md)
- [S03：Non-destructive viability assessment of cancer cell spheroids using dynamic optical coherence tomography with trypan blue validation](../sources/S03.md)

## 相關頁面
- [OCT 與 dOCT：從結構到動態](./intro.md)
- [Mask、漂移、噪聲與解讀風險](./artifacts.md)
- [LIV：Logarithmic Intensity Variance](./liv.md)
- [OCDS：OCT Correlation Decay Speed](./ocds.md)
