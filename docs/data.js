/* 由 npm run build 從 raw/ 與 knowledge/ 生成；無需伺服器可直接預覽 */
window.WIKI_DATA={
  "project": "dOCT Wiki：看見細胞的動態",
  "generated": "2026-11-23",
  "sources": [
    {
      "id": "S01",
      "slug": "dyc-oct-review",
      "title": "Dynamic contrast optical coherence tomography (DyC-OCT) for label-free live cell imaging",
      "authors": "Chao Ren 等",
      "year": 2024,
      "type": "Mini review（使用者提供 PDF）",
      "url": "https://doi.org/10.1038/s42003-024-05973-5",
      "tags": [
        "DyC-OCT",
        "STD",
        "LIV",
        "OCDS",
        "PSD"
      ],
      "summary": "整理動態對比 OCT 的物理直覺、重複掃描、STD/LIV、OCDS、頻譜分析及生物活體影像應用。",
      "findings": [
        "對同一組織位置重複 OCT 成像，可觀測每個像素或體素的訊號隨時間變動。",
        "STD/LIV 等波動幅度統計與 OCDS 的時間相關衰減速度衡量的是不同動態面向。",
        "頻譜分析（PSD）可觀察不同頻率範圍，通常需要更多重複影格；取樣頻率決定可觀察的動態範圍。"
      ],
      "caution": "使用「動態」不代表已辨識唯一生物來源；細胞運動、機械擾動與系統噪聲均可能改變訊號。本文屬 DyC-OCT 迷你綜述。",
      "evidence": "PDF 第 1–3 頁：Principles、Pattern extraction algorithms、Applications",
      "related": [
        "intro",
        "acquisition",
        "liv",
        "ocds",
        "artifacts"
      ]
    },
    {
      "id": "S02",
      "slug": "spheroid-drug-2024",
      "title": "Label-free visualization and quantification of the drug-type-dependent response of tumor spheroids by dynamic optical coherence tomography",
      "authors": "Ibrahim Abd El-Sadek 等",
      "year": 2024,
      "type": "研究論文（使用者提供 PDF）",
      "url": "https://doi.org/10.1038/s41598-024-53171-4",
      "tags": [
        "MCF-7",
        "drug response",
        "LIV",
        "OCDS_l"
      ],
      "summary": "以 3D dOCT 比較 MCF-7 腫瘤球在三種抗癌藥物處理後的結構與動態變化。",
      "findings": [
        "研究使用 paclitaxel（PTX）、tamoxifen citrate（TAM）、doxorubicin（DOX），各藥物設 0、0.1、1、10 µM 條件，觀察第 1、3、6 天。",
        "以 logarithmic intensity variance（LIV）與 late OCT correlation decay speed（OCDS_l）比較不同時間、藥物及濃度下的動態對比。",
        "10 µM TAM 有結構破壞與 LIV、OCDS_l 降低；PTX 和 DOX 的體積變化模式不同，因此不能僅用體積大小推定藥物反應。"
      ],
      "caution": "結論來自該研究的 MCF-7 腫瘤球與特定藥物／掃描條件；不能套用所有癌症、藥物或直接視為臨床療效。",
      "evidence": "PDF 第 1–4 頁：Abstract、Results／Fig. 1–3；Methods 含 32 次重複影格",
      "related": [
        "drug",
        "viability",
        "liv",
        "ocds",
        "acquisition"
      ]
    },
    {
      "id": "S03",
      "slug": "trypan-validation-2024",
      "title": "Non-destructive viability assessment of cancer cell spheroids using dynamic optical coherence tomography with trypan blue validation",
      "authors": "Koh Hui Tan 等",
      "year": 2024,
      "type": "研究論文（使用者提供 PDF）",
      "url": "https://doi.org/10.1364/BOE.533339",
      "tags": [
        "viability",
        "trypan blue",
        "IV",
        "normalization",
        "PBS",
        "DMSO"
      ],
      "summary": "利用超過 240 顆 MCF-7 癌細胞球與 trypan blue 活性檢測相互比對，研究 dOCT 動態強度變異作為存活性量化指標的可行性。",
      "findings": [
        "針對 3D 細胞球取得多次體積 OCT 訊號，計算 intensity variance（IV），並以 median IV（MIV）統計。",
        "以 trypan blue exclusion assay 提供與光學量測獨立的細胞存活率參考。",
        "DMSO、PBS 會造成 OCT 亮度偏差，作者提出以迴歸為基礎的 OCT 亮度正規化方法改善和存活率檢測的對應。"
      ],
      "caution": "IV／MIV 與 LIV（dB 強度方差）不是相同定義；trypan blue 為取樣後破壞性的驗證，單個球的活性並非所有條件都能獨立量測。研究不能證明 dOCT 無條件等同存活率。",
      "evidence": "PDF 第 1–5 頁：Abstract、Fig. 1–2、Methods 2.1–2.2",
      "related": [
        "viability",
        "artifacts",
        "acquisition",
        "liv"
      ]
    },
    {
      "id": "S04",
      "slug": "common-path-2023",
      "title": "Common-path Optical Interferometry for Stabilized Dynamic Contrast Imaging: A Feasibility Study",
      "authors": "Seung-Jin Lee、Young-Wan Choi、Woo June Choi",
      "year": 2023,
      "type": "研究論文（使用者提供 PDF）",
      "url": "https://doi.org/10.3807/COPP.2023.7.1.65",
      "tags": [
        "common-path",
        "D-FFOCT",
        "noise",
        "interferometry"
      ],
      "summary": "探討 common-path 干涉架構如何減少 D-FFOCT 對環境震動敏感的問題。",
      "findings": [
        "傳統雙光路 Linnik FFOCT 容易受外界震動引起的光程差變化影響，干擾動態對比。",
        "共光路干涉讓參考光與樣品光共享更多傳播路徑，有助抑制外界機械擾動。",
        "研究在指定擾動條件下展示較穩定的動態影像，摘要報告對噪聲的不敏感程度提高超過十倍。"
      ],
      "caution": "研究使用 D-FFOCT 與特定裝置；不能直接將「十倍」視為所有 swept-source 或 spectral-domain dOCT 系統的改善量。",
      "evidence": "PDF 第 1–4 頁：Abstract、Method、Fig. 1–2",
      "related": [
        "ffoct",
        "artifacts",
        "intro"
      ]
    },
    {
      "id": "S05",
      "slug": "foundational-2020",
      "title": "Optical coherence tomography-based tissue dynamics imaging for longitudinal and drug response evaluation of tumor spheroids",
      "authors": "Ibrahim Abd El-Sadek 等",
      "year": 2020,
      "type": "研究論文（公開網頁來源）",
      "url": "https://doi.org/10.1364/BOE.404336",
      "tags": [
        "LIV",
        "OCDS_e",
        "OCDS_l",
        "tumor spheroid"
      ],
      "summary": "早期以 OCT 訊號時間序列的 LIV 與早期／晚期 OCDS 分析腫瘤球長期變化及藥物反應。",
      "findings": [
        "LIV 量化 OCT 訊號波動幅度，不能直接表示動態頻率或速度。",
        "OCDS_e 與 OCDS_l 在不同延遲區段分析自相關衰減，對快、慢動態的敏感性可能不同。",
        "在論文研究的腫瘤球條件下，LIV 與 OCDS_l 的變化可配合其他觀察解釋存活邊緣與壞死區域。"
      ],
      "caution": "早期與晚期 OCDS 的高低不能互換，也不能將所有低動態區直接斷言是壞死；需對照模型、掃描時間尺度及參考檢測。",
      "evidence": "期刊全文 Section 2.2、Results；PMC7687946，2020",
      "related": [
        "ocds",
        "liv",
        "viability",
        "drug"
      ]
    },
    {
      "id": "S06",
      "slug": "aliv-swiftness-2026",
      "title": "Dynamic optical coherence tomography algorithm for label-free assessment of swiftness and occupancy of intratissue moving scatterers",
      "authors": "Rion Morishita 等",
      "year": 2026,
      "type": "研究論文（線上發表 2025-12；公開網頁來源）",
      "url": "https://doi.org/10.1364/BOE.574972",
      "tags": [
        "aLIV",
        "Swiftness",
        "dynamic scatterer ratio",
        "motion"
      ],
      "summary": "提出與傳統 LIV／OCDS 不同的可解釋量化觀點，以 aLIV 與 Swiftness 表徵移動散射體的佔比與運動快速程度。",
      "findings": [
        "作者指出傳統 LIV／OCDS 數值與真實組織運動之間不是簡單的直接比例關係。",
        "以 aLIV（asymptotic logarithmic intensity variance）相關特徵探討動態散射體佔比。",
        "以 Swiftness 相關特徵提供動態散射體運動快慢的另一種衡量方式。"
      ],
      "caution": "aLIV 和 Swiftness 依賴其擬合模型、測量條件及訊雜比；不應將示意波形的簡化算式當成論文的正式擬合公式，或將 Swiftness 解讀為可直接換算的細胞移動速度。",
      "evidence": "Bio. Opt. Express 17(1):322–345 (2026)，2025-12-16 線上發表；PubMed PMID 41532111",
      "related": [
        "aliv",
        "liv",
        "ocds",
        "artifacts"
      ]
    }
  ],
  "concepts": [
    {
      "id": "intro",
      "title": "OCT 與 dOCT：從結構到動態",
      "tag": "01 / 入門",
      "lead": "傳統 OCT 看散射結構；dOCT 在相同位置重複量測，分析時間變化。",
      "content": [
        "OCT 利用低相干干涉與背向散射訊號取得深度解析影像，是非侵入式的三維結構成像方法。",
        "動態 OCT（D-OCT）重複掃描同一位置，觀察 OCT 強度／相位訊號隨時間的統計變化，形成組織內活動的功能性對比；這不是直接拍到某顆細胞器的軌跡。",
        "dOCT 與動態對比 OCT（DyC-OCT）、dynamic full-field OCT（D-FFOCT）概念相近，但儀器幾何與訊號處理未必一致。"
      ],
      "example": "一般 OCT 像一張「剖面照」；dOCT 像在同一剖面拍很多張，再比較像素的時間波動。",
      "sourceIds": [
        "S01",
        "S04",
        "S05"
      ],
      "related": [
        "acquisition",
        "liv",
        "ffoct"
      ]
    },
    {
      "id": "acquisition",
      "title": "時間序列、重複掃描與取樣",
      "tag": "02 / 訊號取得",
      "lead": "dOCT 的分析單位是同一位置多次取得的 OCT 訊號。",
      "content": [
        "固定相同 B-scan 位置，連續取得多張影格，可得到每個像素的 I(x,z,t) 序列；3D 掃描可在多個位置重複此程序。",
        "時間間隔 Δt、重複次數 N、總觀察時間決定可觀察快／慢動態的範圍及估計精度。",
        "2024 年 MCF-7 藥物研究的範例使用每位置 32 次影格，在 6.348 秒內取得，影格間隔為 204.8 ms；這是該研究設定，不是通用標準。"
      ],
      "example": "如果兩張圖拍攝位置偏移，影像差異可能來自晃動而非細胞內活動，因此掃描對位是必要條件。",
      "sourceIds": [
        "S01",
        "S02",
        "S03"
      ],
      "related": [
        "intro",
        "artifacts",
        "liv",
        "ocds"
      ]
    },
    {
      "id": "liv",
      "title": "LIV：Logarithmic Intensity Variance",
      "tag": "03 / 動態指標",
      "lead": "以 dB 尺度的 OCT 訊號計算時間變異數，反映波動幅度。",
      "content": [
        "令 L(t)=10log10(I(t))，對同一像素的一組 L(t) 計算時間方差，LIV = mean[(L(t)−mean(L))²]（教學定義，I 必須使用一致的強度慣例）。",
        "高 LIV 代表在指定時間窗內訊號變化幅度較大；低 LIV 代表觀察到的波動幅度較小。",
        "LIV 不直接等於散射體移動速度，也不能不經生物對照就宣稱高 LIV 一定是活細胞。"
      ],
      "example": "兩組訊號頻率不同但波動幅度相同，可能有接近的 LIV；此時需要 OCDS／頻譜或 Swiftness 類分析。",
      "sourceIds": [
        "S01",
        "S02",
        "S05"
      ],
      "related": [
        "ocds",
        "aliv",
        "artifacts"
      ]
    },
    {
      "id": "ocds",
      "title": "OCDS：OCT Correlation Decay Speed",
      "tag": "04 / 動態指標",
      "lead": "分析 OCT 訊號的時間自相關如何隨延遲 τ 衰減。",
      "content": [
        "先將訊號序列計算時間自相關曲線 g(τ)，再在指定延遲區間對曲線斜率或衰減進行估計。",
        "在其他條件可比較時，相關性衰減快通常代表訊號在較短時間尺度內變化；但結果仍受掃描間隔、噪聲與擬合窗影響。",
        "OCDS_e 與 OCDS_l 使用不同延遲區間，對快速／較慢動態的敏感性不同，因此不能混為一談。"
      ],
      "example": "觀察時間序列的「相似度還能維持多久」，與 LIV 只看波動範圍的想法不同。",
      "sourceIds": [
        "S01",
        "S02",
        "S05"
      ],
      "related": [
        "liv",
        "acquisition",
        "aliv"
      ]
    },
    {
      "id": "aliv",
      "title": "aLIV 與 Swiftness",
      "tag": "05 / 進階",
      "lead": "以模型化方式區分動態散射體的佔比與運動快慢。",
      "content": [
        "aLIV（asymptotic LIV）描述 LIV 對時間取樣視窗的飽和行為，可與動態散射體佔比相關聯。",
        "Swiftness 是從相應的時間尺度／模型取得的運動快慢量化指標，不等同於直接追蹤單一顆粒的速度。",
        "這些指標仍有模型假設及 SNR／取樣時間限制；不應將 aLIV、Swiftness 和傳統 LIV、OCDS 當作相同物理量。"
      ],
      "example": "一區域可能「活動粒子多但移動慢」，另一區域「活動粒子少卻移動快」：只用單一波動數值較難區分。",
      "sourceIds": [
        "S06",
        "S01"
      ],
      "related": [
        "liv",
        "ocds",
        "acquisition"
      ]
    },
    {
      "id": "viability",
      "title": "腫瘤球、細胞存活與生物驗證",
      "tag": "06 / 應用",
      "lead": "動態對比與細胞活性可能相關，但不是無需驗證的生死標記。",
      "content": [
        "3D 腫瘤球中心可能因氧氣與營養運輸受限而發生壞死，周邊較易出現活細胞；仍受培養條件與細胞種類影響。",
        "2024 年 MCF-7 研究以 trypan blue 排除試驗（解離球體後測量）對照 dOCT IV，提供獨立的生物學依據。",
        "注意：這篇研究的 IV／MIV 強度方差和其他研究的 LIV（對數 dB 強度方差）不同；兩者不可直接比較數字。"
      ],
      "example": "可以先把低 LIV 區標為「低動態」，再用染色、培養條件及其他檢測評估其是否與壞死區一致。",
      "sourceIds": [
        "S02",
        "S03",
        "S05"
      ],
      "related": [
        "drug",
        "artifacts",
        "liv"
      ]
    },
    {
      "id": "drug",
      "title": "藥物反應：PTX、TAM、DOX",
      "tag": "07 / 實驗",
      "lead": "不同藥物、濃度與時間可能造成不同的腫瘤球結構與動態反應。",
      "content": [
        "2024 Scientific Reports 以 MCF-7 腫瘤球比較 PTX、TAM、DOX，0／0.1／1／10 µM 條件，1、3、6 天觀察。",
        "TAM 0.1、1 µM 的球體表現接近控制組；10 µM 可見結構破壞及 LIV、OCDS_l 降低。",
        "DOX 1 與 10 µM 的球體體積可能有相反變化趨勢，但 LIV／OCDS_l 隨治療時間下降，說明體積與動態不能互相取代。"
      ],
      "example": "若腫瘤球縮小，不能直接宣稱細胞已死亡；應同時觀察時間序列動態及獨立的生物檢測。",
      "sourceIds": [
        "S02",
        "S05"
      ],
      "related": [
        "viability",
        "liv",
        "ocds"
      ]
    },
    {
      "id": "artifacts",
      "title": "Mask、漂移、噪聲與解讀風險",
      "tag": "08 / 品質控制",
      "lead": "先確認影像有效區和配準，再解釋波動的生物來源。",
      "content": [
        "背景低訊號、飽和影像、陰影、影像飄移或樣品整體運動都可能扭曲時間變異度、相關分析與彩圖結果。",
        "Mask 應有可重現的閾值／形態學規則，並保留與結構 OCT 的疊合對照；避免挑選能讓彩圖「看起來更活躍」的參數。",
        "PBS／DMSO 引起的 OCT 亮度偏差應納入控制與正規化評估；不同掃描裝置／設定不宜直接套同一 cutoff。"
      ],
      "example": "原始影格發生水平位移時，LIV 可能變高；這是量測品質問題，不能直接解讀為細胞更活躍。",
      "sourceIds": [
        "S01",
        "S03",
        "S04",
        "S06"
      ],
      "related": [
        "acquisition",
        "ffoct",
        "viability"
      ]
    },
    {
      "id": "ffoct",
      "title": "Common-path D-FFOCT 與抗震動",
      "tag": "09 / 儀器設計",
      "lead": "共光路干涉可在特定架構中降低外部震動帶來的假動態。",
      "content": [
        "2023 年 Lee 等以 common-path interferometry 改良動態 full-field OCT，對比傳統分離式干涉路徑。",
        "兩條光路受外界震動的非共同變化會造成額外干涉訊號變動；共光路可減少此類差動光程變化。",
        "這是 D-FFOCT 設備層級的研究，不能直接宣稱所有 dOCT 設備都具備同樣的抗震改善。"
      ],
      "example": "桌面晃動讓影像閃爍：需要先排除干涉架構與環境造成的波動，才能討論細胞活動。",
      "sourceIds": [
        "S04",
        "S01"
      ],
      "related": [
        "intro",
        "artifacts"
      ]
    }
  ],
  "slides": [
    {
      "id": "s01",
      "type": "cover",
      "eyebrow": "dOCT WIKI LAB / 生醫光學教學",
      "title": "看見細胞的「動態」",
      "subtitle": "從 OCT 結構影像到 Dynamic Optical Coherence Tomography：如何讀取波動、辨識噪聲與評估細胞活動？",
      "points": [
        "19 頁互動簡報",
        "6 份來源摘要",
        "9 篇 Wiki 知識頁"
      ],
      "sources": [
        "S01",
        "S05"
      ],
      "wiki": "intro"
    },
    {
      "id": "s02",
      "type": "goals",
      "eyebrow": "01 / 學習目標",
      "title": "學完這份簡報，你會知道",
      "subtitle": "以第一次接觸 OCT 的學習者為出發點。",
      "points": [
        "OCT 與 dOCT 有什麼差別？",
        "如何從重複影格分析時間波動？",
        "LIV、OCDS 和 aLIV／Swiftness 各自看什麼？",
        "如何避免把雜訊誤判成細胞活動？"
      ],
      "sources": [
        "S01",
        "S05",
        "S06"
      ],
      "wiki": "intro"
    },
    {
      "id": "s03",
      "type": "split",
      "eyebrow": "02 / 先理解 OCT",
      "title": "同一份影像，兩種問題",
      "subtitle": "結構資訊與動態資訊互相補充。",
      "leftTitle": "傳統 OCT：靜態結構",
      "left": [
        "散射強弱與組織邊界",
        "深度解析的剖面／體積影像",
        "不能直接判讀細胞內活動"
      ],
      "rightTitle": "dOCT：時間變化",
      "right": [
        "重複掃描同一位置",
        "分析每個像素的強度變動",
        "映射組織內活動相關對比"
      ],
      "sources": [
        "S01",
        "S05"
      ],
      "wiki": "intro"
    },
    {
      "id": "s04",
      "type": "pipeline",
      "eyebrow": "03 / 資料從哪裡來",
      "title": "同一位置，要量測很多次",
      "subtitle": "從原始 OCT 影格到一張 dOCT 動態圖。",
      "steps": [
        "固定 B-scan 位置",
        "取得 N 張 OCT",
        "逐像素取時間序列",
        "移動與雜訊檢查",
        "計算 LIV／OCDS",
        "輸出動態彩圖"
      ],
      "footnote": "2024 年 MCF-7 藥物研究的例子：每位置 32 張、間隔 204.8 ms。這不是所有 dOCT 的通用設定。",
      "sources": [
        "S01",
        "S02"
      ],
      "wiki": "acquisition"
    },
    {
      "id": "s05",
      "type": "signal",
      "eyebrow": "04 / 互動體驗",
      "title": "同樣看起來在變，原因可能不同",
      "subtitle": "點選訊號情境，比較時間序列、LIV 示意值與自相關行為。",
      "points": [
        "所有曲線均為教學合成訊號，不是論文量測資料。",
        "切換「慢速動態」、「快速動態」、「近乎靜止」與「整體漂移」觀察差異。"
      ],
      "footnote": "此互動只是理解概念的可視化，不實作正式 OCDS 擬合，也不能估計真實生物存活率。",
      "sources": [
        "S01",
        "S04",
        "S05"
      ],
      "wiki": "acquisition"
    },
    {
      "id": "s06",
      "type": "metrics",
      "eyebrow": "05 / 指標一：LIV",
      "title": "LIV 主要描述波動「幅度」",
      "subtitle": "先把 OCT 強度轉為 dB 尺度，再看時間序列的離散程度。",
      "cards": [
        [
          "定義",
          "LIV ≈ Varₜ[L(t)]",
          "其中 L(t) 為 dB 尺度的 OCT 訊號"
        ],
        [
          "高 LIV",
          "波動幅度較大",
          "不等於一定移動得比較快"
        ],
        [
          "低 LIV",
          "波動幅度較小",
          "不等於細胞一定死亡"
        ]
      ],
      "footnote": "重要：LIV 使用 dB 尺度；Tan 等（S03）的 IV/MIV 不是相同量。",
      "sources": [
        "S01",
        "S03",
        "S05"
      ],
      "wiki": "liv"
    },
    {
      "id": "s07",
      "type": "decay",
      "eyebrow": "06 / 指標二：OCDS",
      "title": "OCDS 描述「相關性消失得多快」",
      "subtitle": "訊號隨時間延遲 τ 的相似程度可畫成自相關曲線。",
      "points": [
        "相關性下降快：變化可能發生在較短時間尺度。",
        "OCDS_e／OCDS_l 使用不同的時間延遲區段。",
        "時間間隔、擬合視窗與噪聲會影響結果。"
      ],
      "footnote": "曲線為示意，不代表實際 OCT 自相關函數或論文結果。",
      "sources": [
        "S01",
        "S05"
      ],
      "wiki": "ocds"
    },
    {
      "id": "s08",
      "type": "metrics",
      "eyebrow": "07 / 指標比較",
      "title": "三類指標回答不同問題",
      "subtitle": "不要把不同指標的數值直接互換。",
      "cards": [
        [
          "LIV / STD",
          "有多大的波動？",
          "波動幅度／對比"
        ],
        [
          "OCDS",
          "波動發生多快？",
          "時間相關性衰減"
        ],
        [
          "aLIV / Swiftness",
          "活動散射體多不多、快不快？",
          "模型化的佔比與快慢指標"
        ]
      ],
      "sources": [
        "S01",
        "S05",
        "S06"
      ],
      "wiki": "aliv"
    },
    {
      "id": "s09",
      "type": "spheroid",
      "eyebrow": "08 / 生醫實例",
      "title": "腫瘤球為什麼需要「動態」？",
      "subtitle": "三維腫瘤球可有外層與中心不同的生理狀態。",
      "points": [
        "中心區域可能氧氣、營養供應受限。",
        "活細胞、壞死過程與藥物作用可能形成不同動態分布。",
        "但低動態只能先稱作低動態，需生物檢測驗證。"
      ],
      "footnote": "截面示意圖不是任一篇論文的原始量測；不代表所有腫瘤球中心一定壞死。",
      "sources": [
        "S02",
        "S03",
        "S05"
      ],
      "wiki": "viability"
    },
    {
      "id": "s10",
      "type": "case",
      "eyebrow": "09 / 藥物試驗",
      "title": "三種藥物，同一種細胞球，反應不同",
      "subtitle": "S02｜2024 Scientific Reports：MCF-7、PTX／TAM／DOX。",
      "cards": [
        [
          "TAM",
          "10 µM",
          "結構破壞，LIV 和 OCDS_l 下降"
        ],
        [
          "PTX",
          "多數測試濃度",
          "隨時間有體積及動態降低趨勢"
        ],
        [
          "DOX",
          "1 與 10 µM",
          "體積可呈不同方向；動態仍下降"
        ]
      ],
      "footnote": "研究設計：0／0.1／1／10 µM，觀察第 1、3、6 天；此為該研究結果而非通用藥效預測。",
      "sources": [
        "S02"
      ],
      "wiki": "drug"
    },
    {
      "id": "s11",
      "type": "split",
      "eyebrow": "10 / 如何解讀",
      "title": "體積變化 ≠ 細胞存活率",
      "subtitle": "不同影像指標必須一起看，避免只用單一彩圖下結論。",
      "leftTitle": "直接可觀察",
      "left": [
        "OCT 結構與腫瘤球形狀",
        "LIV／OCDS_l 動態圖",
        "時間與濃度之間的變化"
      ],
      "rightTitle": "需要額外證據",
      "right": [
        "細胞是否存活、壞死",
        "受藥物影響的確切機制",
        "能否推廣到其他組織／病人"
      ],
      "sources": [
        "S02",
        "S03"
      ],
      "wiki": "viability"
    },
    {
      "id": "s12",
      "type": "metrics",
      "eyebrow": "11 / 生物學驗證",
      "title": "Trypan blue：用獨立方法比對 dOCT",
      "subtitle": "S03｜Biomedical Optics Express（2024），超過 240 顆 MCF-7 細胞球。",
      "cards": [
        [
          "dOCT",
          "多次 3D 掃描",
          "計算 IV 與 MIV"
        ],
        [
          "生物驗證",
          "Trypan blue",
          "球體解離後測量細胞存活率"
        ],
        [
          "偏差校正",
          "DMSO / PBS",
          "考量亮度偏差後改善對應"
        ]
      ],
      "footnote": "S03 使用的是 IV/MIV，不是 logarithmic LIV；trypan blue 驗證本身會破壞樣本。",
      "sources": [
        "S03"
      ],
      "wiki": "viability"
    },
    {
      "id": "s13",
      "type": "noise",
      "eyebrow": "12 / 量測品質",
      "title": "不是所有波動都來自細胞",
      "subtitle": "機械震動、配準偏移、背景雜訊也會讓畫面看似「很活躍」。",
      "leftTitle": "可能的假動態",
      "left": [
        "樣品整體位移",
        "光程差隨震動變化",
        "低 SNR、錯誤 mask／背景"
      ],
      "rightTitle": "先做的檢查",
      "right": [
        "比對原始連續影格與結構圖",
        "時間序列配準及訊號品質檢查",
        "固定 mask 規則與對照條件"
      ],
      "sources": [
        "S01",
        "S03",
        "S04"
      ],
      "wiki": "artifacts"
    },
    {
      "id": "s14",
      "type": "split",
      "eyebrow": "13 / 光學系統",
      "title": "Common-path 減少干擾訊號",
      "subtitle": "S04｜Common-path D-FFOCT 是相關但不同的全場 OCT 架構。",
      "leftTitle": "傳統雙光路",
      "left": [
        "參考／樣品光路分離",
        "外部震動易產生相對光程差",
        "可能污染動態對比"
      ],
      "rightTitle": "共光路設計",
      "right": [
        "更多共通傳播路徑",
        "抑制外界震動的差動訊號",
        "研究中提高穩定性"
      ],
      "footnote": "原論文的「十倍以上」只適用其試驗環境，不能擴大為所有 dOCT 系統。",
      "sources": [
        "S04"
      ],
      "wiki": "ffoct"
    },
    {
      "id": "s15",
      "type": "metrics",
      "eyebrow": "14 / 更新的方法",
      "title": "aLIV 與 Swiftness：再拆開兩個面向",
      "subtitle": "S06｜後續研究提出更可解釋的動態散射體表徵。",
      "cards": [
        [
          "傳統 LIV",
          "波動大小",
          "可能把佔比與速率混在一起"
        ],
        [
          "aLIV",
          "飽和波動特徵",
          "與動態散射體佔比相關"
        ],
        [
          "Swiftness",
          "時間尺度特徵",
          "描述相對運動快慢"
        ]
      ],
      "footnote": "這裡是方法直覺整理，不是可直接取代論文擬合程序的演算法規格。",
      "sources": [
        "S06"
      ],
      "wiki": "aliv"
    },
    {
      "id": "s16",
      "type": "pipeline",
      "eyebrow": "15 / 實驗判讀實務",
      "title": "一張 dOCT 圖應該怎麼檢查？",
      "subtitle": "先資料品質，再動態分析，最後才做生物解釋。",
      "steps": [
        "檢查 raw OCT",
        "對位與時間窗",
        "排除背景／mask",
        "計算動態指標",
        "同條件做對照",
        "生物學驗證"
      ],
      "footnote": "由 6 份來源綜合整理的建議流程；不是某一論文的完整操作手冊。",
      "sources": [
        "S01",
        "S02",
        "S03",
        "S04",
        "S06"
      ],
      "wiki": "artifacts"
    },
    {
      "id": "s17",
      "type": "pipeline",
      "eyebrow": "16 / 作業核心：Wiki graph",
      "title": "從文獻到教學簡報：可回溯的 loop",
      "subtitle": "每張投影片都能反查來源 S01–S06 與相應的 Wiki 條目。",
      "steps": [
        "核對論文來源",
        "Ingest 摘要 Wiki",
        "查詢相關概念",
        "檢查引用與限制",
        "生成 HTML",
        "測試瀏覽器"
      ],
      "footnote": "校驗若失敗：返回 Ingest／概念整理；手機排版失敗：返回 HTML 生成。",
      "sources": [
        "S01",
        "S02",
        "S03",
        "S04",
        "S05",
        "S06"
      ],
      "wiki": "intro"
    },
    {
      "id": "s18",
      "type": "quiz",
      "eyebrow": "17 / 互動小測驗",
      "title": "如果某區域的 LIV 高，可以直接說它是活細胞嗎？",
      "subtitle": "選一個答案，看看解釋。",
      "question": "高 LIV 最直接支持的解釋是？",
      "options": [
        "該區域細胞一定存活且代謝旺盛",
        "指定時間窗內的 OCT 訊號波動幅度較大",
        "細胞移動速度一定比其他區域快"
      ],
      "answer": 1,
      "explanation": "LIV 反映波動幅度；機械擾動與訊號雜訊也會影響結果，還需要對照與生物驗證。",
      "sources": [
        "S01",
        "S03",
        "S05"
      ],
      "wiki": "liv"
    },
    {
      "id": "s19",
      "type": "finish",
      "eyebrow": "18 / Takeaways",
      "title": "記住這四句話",
      "subtitle": "從訊號到生物結論，中間不能跳過檢查。",
      "points": [
        "OCT 看結構；dOCT 看同位置訊號的時間變化。",
        "LIV 看波動幅度；OCDS 分析相關性衰減。",
        "高／低動態不是「活／死」的絕對判斷。",
        "用 Wiki 記錄來源、限制與檢查，讓簡報可追溯。"
      ],
      "sources": [
        "S01",
        "S02",
        "S03",
        "S05",
        "S06"
      ],
      "wiki": "intro"
    }
  ]
};
