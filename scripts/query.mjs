import {concepts,write} from './core.mjs';
const query=process.argv.slice(2).join(' ').trim()||'LIV OCDS 細胞存活';
const terms=[...new Set((query.toLowerCase().match(/[a-z0-9_-]+|[\u4e00-\u9fff]{2,}/g)||[]))];
const aliases={intro:['oct','doct','動態','結構'],acquisition:['scan','影格','取樣','時間窗'],liv:['liv','variance','方差','變異數','幅度'],ocds:['ocds','correlation','相關','速度'],aliv:['aliv','swiftness','佔比'],viability:['viability','存活','壞死','trypan'],drug:['drug','ptx','tam','dox','藥物'],artifacts:['mask','noise','雜訊','漂移','配準'],ffoct:['ffoct','common-path','共光路','震動']};
const score=c=>{const title=c.title.toLowerCase(),lead=c.lead.toLowerCase(),content=[...c.content,c.example].join(' ').toLowerCase(),alias=(aliases[c.id]||[]).join(' ').toLowerCase();return terms.reduce((n,t)=>n+(title.includes(t)?8:0)+(lead.includes(t)?3:0)+(alias.includes(t)?6:0)+(content.includes(t)?1:0),0)};
const results=concepts().map(c=>({id:c.id,title:c.title,score:score(c),sources:c.sourceIds})).sort((a,b)=>b.score-a.score).slice(0,5);
const output={query,results,method:'keyword matching over maintained Wiki concept notes; not a vector database, LLM API, or automatic research validation'};
write('logs/query-result.json',JSON.stringify(output,null,2)+'\n'); console.log(JSON.stringify(output,null,2));
