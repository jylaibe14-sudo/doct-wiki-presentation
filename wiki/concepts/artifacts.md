# Mask、漂移、噪聲與解讀風險

> 先確認影像有效區和配準，再解釋波動的生物來源。

## 重點
背景低訊號、飽和影像、陰影、影像飄移或樣品整體運動都可能扭曲時間變異度、相關分析與彩圖結果。

## 重點
Mask 應有可重現的閾值／形態學規則，並保留與結構 OCT 的疊合對照；避免挑選能讓彩圖「看起來更活躍」的參數。

## 重點
PBS／DMSO 引起的 OCT 亮度偏差應納入控制與正規化評估；不同掃描裝置／設定不宜直接套同一 cutoff。

## 教學例子
原始影格發生水平位移時，LIV 可能變高；這是量測品質問題，不能直接解讀為細胞更活躍。

## 支持來源
- [S01：Dynamic contrast optical coherence tomography (DyC-OCT) for label-free live cell imaging](../sources/S01.md)
- [S03：Non-destructive viability assessment of cancer cell spheroids using dynamic optical coherence tomography with trypan blue validation](../sources/S03.md)
- [S04：Common-path Optical Interferometry for Stabilized Dynamic Contrast Imaging: A Feasibility Study](../sources/S04.md)
- [S06：Dynamic optical coherence tomography algorithm for label-free assessment of swiftness and occupancy of intratissue moving scatterers](../sources/S06.md)

## 相關頁面
- [時間序列、重複掃描與取樣](./acquisition.md)
- [Common-path D-FFOCT 與抗震動](./ffoct.md)
- [腫瘤球、細胞存活與生物驗證](./viability.md)
