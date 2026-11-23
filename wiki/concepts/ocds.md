# OCDS：OCT Correlation Decay Speed

> 分析 OCT 訊號的時間自相關如何隨延遲 τ 衰減。

## 重點
先將訊號序列計算時間自相關曲線 g(τ)，再在指定延遲區間對曲線斜率或衰減進行估計。

## 重點
在其他條件可比較時，相關性衰減快通常代表訊號在較短時間尺度內變化；但結果仍受掃描間隔、噪聲與擬合窗影響。

## 重點
OCDS_e 與 OCDS_l 使用不同延遲區間，對快速／較慢動態的敏感性不同，因此不能混為一談。

## 教學例子
觀察時間序列的「相似度還能維持多久」，與 LIV 只看波動範圍的想法不同。

## 支持來源
- [S01：Dynamic contrast optical coherence tomography (DyC-OCT) for label-free live cell imaging](../sources/S01.md)
- [S02：Label-free visualization and quantification of the drug-type-dependent response of tumor spheroids by dynamic optical coherence tomography](../sources/S02.md)
- [S05：Optical coherence tomography-based tissue dynamics imaging for longitudinal and drug response evaluation of tumor spheroids](../sources/S05.md)

## 相關頁面
- [LIV：Logarithmic Intensity Variance](./liv.md)
- [時間序列、重複掃描與取樣](./acquisition.md)
- [aLIV 與 Swiftness](./aliv.md)
