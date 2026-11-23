(()=>{
'use strict';
const slides=window.WIKI_DATA?.slides, bySource=Object.fromEntries((window.WIKI_DATA?.sources||[]).map(x=>[x.id,x]));
if(!slides) throw new Error('Missing dOCT Wiki data');
const stage=document.getElementById('slide-stage'),prev=document.getElementById('prev-slide'),next=document.getElementById('next-slide'),num=document.getElementById('slide-num'),total=document.getElementById('slide-total'),progress=document.getElementById('slide-progress');
let current=0,selected=null,signalMode='slow';
const e=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const points=a=>`<div class="big-list">${(a||[]).map(t=>`<div>${e(t)}</div>`).join('')}</div>`;
const sourceBar=s=>`<div class="sources"><small>對應來源</small>${s.sources.map(id=>`<a title="${e(bySource[id]?.title||id)}" href="wiki.html#source-${e(id)}" target="_blank" rel="noopener">${e(id)}</a>`).join('')}<a href="wiki.html#concept-${e(s.wiki)}" target="_blank" rel="noopener">Wiki ↗</a></div>`;
const panel=(title,items)=>`<div class="contrast"><h3>${e(title)}</h3><ul>${items.map(x=>`<li>${e(x)}</li>`).join('')}</ul></div>`;
const boxes=s=>`<div class="card3">${s.cards.map(x=>`<div class="cardi"><b>${e(x[0])}</b><h3>${e(x[1])}</h3><p>${e(x[2]||'')}</p></div>`).join('')}</div>`;
const flow=steps=>`<div class="diagram">${steps.map((x,i)=>`<div class="step">${e(x)}</div>${i<steps.length-1?'<div class="arrow">→</div>':''}`).join('')}</div>`;
function polyline(vals,{stroke='#8edddc',w=3}={}){
 let pts=vals.map((y,i)=>`${(50+i*690/(vals.length-1)).toFixed(1)},${(177-y*124).toFixed(1)}`).join(' ');
 return `<polyline points="${pts}" fill="none" stroke="${stroke}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
}
function gridSvg(){let html='<rect width="780" height="240" fill="#0b1a28" rx="14"/>';
 for(let i=0;i<7;i++)html+=`<line x1="${50+115*i}" y1="25" x2="${50+115*i}" y2="177" stroke="#25445b" stroke-width="1"/>`;
 for(let i=0;i<4;i++)html+=`<line x1="50" y1="${37+i*45}" x2="740" y2="${37+i*45}" stroke="#25445b" stroke-width="1"/>`;
 return html+'<text x="395" y="217" text-anchor="middle" fill="#aac9d4" font-size="16">時間 t →</text><text x="50" y="19" fill="#aac9d4" font-size="13">OCT dB 訊號（合成示意）</text>';
}
const configs={slow:{label:'慢速動態',amplitude:.65,cycles:3,drift:0,note:'波動明顯，但頻率較低。LIV 會反映幅度；時間尺度需其他分析。'},fast:{label:'快速動態',amplitude:.65,cycles:14,drift:0,note:'波動幅度接近慢速模式，但切換更快；LIV 不直接告訴你速度。'},still:{label:'近乎靜止',amplitude:.06,cycles:3,drift:0,note:'訊號波動幅度很小；但低波動不代表一定是死亡組織。'},drift:{label:'整體漂移',amplitude:.08,cycles:2,drift:1.1,note:'整體線性飄移會抬高時間方差，可能造成假動態，需先做配準／品質控管。'}};
function signalGraph(){const c=configs[signalMode],n=120;
 const v=Array.from({length:n},(_,i)=>{const t=i/(n-1);return c.amplitude*Math.sin(t*Math.PI*2*c.cycles)+c.drift*(t-.5)+.025*Math.sin(i*1.713)});
 const mean=v.reduce((a,b)=>a+b,0)/n,variance=v.reduce((a,b)=>a+(b-mean)**2,0)/n,scaled=v.map(x=>.5+x/2.6);
 return `<div class="signal-control" role="group" aria-label="合成訊號類型">${Object.entries(configs).map(([k,x])=>`<button type="button" data-signal-mode="${k}" class="${signalMode===k?'active':''}" aria-pressed="${signalMode===k}">${e(x.label)}</button>`).join('')}</div><svg class="doct-svg" viewBox="0 0 780 240" role="img" aria-label="${e(c.label)}的合成訊號時間序列">${gridSvg()}${polyline(scaled,{stroke:'#9df4ec'})}</svg><div class="metric-inline"><span>情境：<strong>${e(c.label)}</strong></span><span>合成訊號的方差：<strong>${variance.toFixed(3)} dB²（示意）</strong></span></div><p class="smallnote">${e(c.note)}</p>`;
}
function decaySvg(){const n=110;const mk=(rate,color)=>polyline(Array.from({length:n},(_,i)=>Math.exp(-rate*i/(n-1))),{stroke:color,w:4});let p='<rect width="780" height="240" fill="#0b1a28" rx="14"/>';
 for(let i=0;i<6;i++)p+=`<line x1="${50+138*i}" y1="40" x2="${50+138*i}" y2="177" stroke="#25445b"/>`;
 for(let i=0;i<4;i++)p+=`<line x1="50" y1="${48+i*40}" x2="740" y2="${48+i*40}" stroke="#25445b"/>`;
 p+=mk(1.15,'#85dcdd')+mk(5.8,'#ffb58e');p+='<text x="395" y="222" text-anchor="middle" fill="#aac9d4" font-size="16">延遲時間 τ →</text><text x="50" y="23" fill="#aac9d4" font-size="14">正規化自相關（示意）</text><text x="495" y="64" fill="#9df4ec" font-size="16">慢衰減</text><text x="175" y="141" fill="#ffb58e" font-size="16">快衰減</text>';
 return `<svg class="doct-svg" viewBox="0 0 780 240" role="img" aria-label="快與慢的自相關衰減示意曲線">${p}</svg>`;
}
function spheroidGraphic(){let svg=`<svg width="290" height="290" viewBox="0 0 300 300" role="img" aria-label="腫瘤球示意剖面：外周相對活躍、中央可能低動態；非實驗資料"><defs><radialGradient id="sphere"><stop offset="0%" stop-color="#263345"/><stop offset="42%" stop-color="#31516b"/><stop offset="72%" stop-color="#4fc4be"/><stop offset="100%" stop-color="#1a4156"/></radialGradient></defs><circle cx="150" cy="145" r="122" fill="url(#sphere)" stroke="#a1e8dd" stroke-width="3"/><circle cx="150" cy="145" r="57" fill="#22303f" stroke="#8ea5b6" stroke-dasharray="6 8" stroke-width="2"/>`;
 for(let i=0;i<85;i++){const a=i*2.399,r=66+(i*31%52),cx=150+Math.cos(a)*r,cy=145+Math.sin(a)*r;svg+=`<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${2+i%3}" fill="${i%4?'#c1f7eb':'#81afc3'}" opacity="${.35+i%4*.12}"/>`}
 return svg+'<text x="150" y="151" fill="#e6edf6" font-size="16" text-anchor="middle">中心</text><text x="150" y="284" fill="#c9e9e7" font-size="14" text-anchor="middle">剖面教學示意</text></svg>';
}
function visual(s){switch(s.type){
 case 'cover':return `<div style="max-width:1050px"><div class="kicker" style="font-size:1rem;letter-spacing:.18em">非染色 · 深度解析 · 動態對比</div><h1 style="margin-top:15px">看見細胞的<br><span class="hero-accent">「動態」</span></h1><p class="subtitle" style="font-size:clamp(1.12rem,2vw,1.55rem)">${e(s.subtitle)}</p><div class="pillrow">${s.points.map(p=>`<span class="pill">${e(p)}</span>`).join('')}</div></div>`;
 case 'goals':return points(s.points);
 case 'split':case 'noise':return `<div class="cols">${panel(s.leftTitle,s.left)}${panel(s.rightTitle,s.right)}</div>`;
 case 'pipeline':return flow(s.steps);
 case 'signal':return signalGraph();
 case 'decay':return decaySvg()+points(s.points);
 case 'metrics':case 'case':return boxes(s);
 case 'spheroid':return `<div class="spheroid-diagram">${spheroidGraphic()}<div class="spheroid-legend">${points(s.points)}</div></div>`;
 case 'quiz':return `<div class="focus-question">${e(s.question)}</div><div class="quiz-options">${s.options.map((option,i)=>`<button type="button" class="${selected===i?(i===s.answer?'right':'wrong'):''}" data-quiz-index="${i}" aria-pressed="${selected===i}">${e(option)}</button>`).join('')}</div>${selected!==null?`<div class="quiz-result ${selected===s.answer?'':'error'}">${selected===s.answer?'✓ 正確！':'再想想：'} ${e(s.explanation)}</div>`:''}`;
 case 'finish':return `${points(s.points)}<div class="pillrow"><a class="pill" href="wiki.html">↗ 讀 9 篇 Wiki</a><a class="pill" href="workflow.html">↗ 看 Loop 與檢查紀錄</a></div>`;
 default:return points(s.points||[]);
}}
function render(){const s=slides[current],isCover=s.type==='cover';
 stage.innerHTML=`<section class="slide" aria-label="投影片 ${current+1}：${e(s.title)}"><div class="eyebrow">${e(s.eyebrow)}</div>${isCover?'':`<h2>${e(s.title)}</h2><p class="subtitle">${e(s.subtitle||'')}</p>`}${visual(s)}${s.footnote?`<p class="subtle-note">${e(s.footnote)}</p>`:''}${sourceBar(s)}</section>`;
 num.textContent=String(current+1).padStart(2,'0');total.textContent=String(slides.length).padStart(2,'0');prev.disabled=current===0;next.disabled=current===slides.length-1;
 progress.innerHTML=slides.map((_,i)=>`<button class="progress-dot ${i===current?'active':(i<current?'seen':'')}" data-slide-index="${i}" title="跳到第 ${i+1} 頁" aria-label="跳到第 ${i+1} 頁" aria-current="${i===current?'step':'false'}"></button>`).join('');
 progress.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',()=>jump(Number(btn.dataset.slideIndex))));
 stage.querySelectorAll('[data-quiz-index]').forEach(btn=>btn.addEventListener('click',()=>{selected=Number(btn.dataset.quizIndex);render()}));
 stage.querySelectorAll('[data-signal-mode]').forEach(btn=>btn.addEventListener('click',()=>{signalMode=btn.dataset.signalMode;render()}));
 if(location.hash!=='#'+(current+1))history.replaceState(null,'','#'+(current+1));
}
function jump(i){if(i<0||i>=slides.length)return;current=i;selected=null;render()}
prev.addEventListener('click',()=>jump(current-1));next.addEventListener('click',()=>jump(current+1));
window.addEventListener('keydown',event=>{if(event.target?.closest?.('input,textarea'))return;
 if(['ArrowRight','PageDown',' '].includes(event.key)){event.preventDefault();jump(current+1)}
 if(['ArrowLeft','PageUp'].includes(event.key)){event.preventDefault();jump(current-1)}
 if(event.key.toLowerCase()==='f'&&!event.ctrlKey&&!event.metaKey){const elem=document.documentElement;if(!document.fullscreenElement)elem.requestFullscreen?.();else document.exitFullscreen?.();}
});
const start=Number(location.hash.slice(1));if(Number.isInteger(start)&&start>=1&&start<=slides.length)current=start-1;
render();
})();
