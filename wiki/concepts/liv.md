# LIV：Logarithmic Intensity Variance

> 以 dB 尺度的 OCT 訊號計算時間變異數，反映波動幅度。

## 重點
令 L(t)=10log10(I(t))，對同一像素的一組 L(t) 計算時間方差，LIV = mean[(L(t)−mean(L))²]（教學定義，I 必須使用一致的強度慣例）。

## 重點
高 LIV 代表在指定時間窗內訊號變化幅度較大；低 LIV 代表觀察到的波動幅度較小。

## 重點
LIV 不直接等於散射體移動速度，也不能不經生物對照就宣稱高 LIV 一定是活細胞。

## 教學例子
兩組訊號頻率不同但波動幅度相同，可能有接近的 LIV；此時需要 OCDS／頻譜或 Swiftness 類分析。

## 支持來源
- [S01：Dynamic contrast optical coherence tomography (DyC-OCT) for label-free live cell imaging](../sources/S01.md)
- [S02：Label-free visualization and quantification of the drug-type-dependent response of tumor spheroids by dynamic optical coherence tomography](../sources/S02.md)
- [S05：Optical coherence tomography-based tissue dynamics imaging for longitudinal and drug response evaluation of tumor spheroids](../sources/S05.md)

## 相關頁面
- [OCDS：OCT Correlation Decay Speed](./ocds.md)
- [aLIV 與 Swiftness](./aliv.md)
- [Mask、漂移、噪聲與解讀風險](./artifacts.md)
