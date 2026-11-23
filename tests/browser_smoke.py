"""Browser smoke tests for dOCT Wiki: Chromium, synthetic source-sequence controls,
19 citations, navigation, quiz, 6-node graph, 390px and 320px.
Locally inject assets to avoid file:// and local server restrictions.
"""
import json
from pathlib import Path
from playwright.sync_api import sync_playwright
R=Path(__file__).resolve().parents[1]
D=R/'docs';E=R/'evidence';E.mkdir(exist_ok=True)
report={'date':'2026-11-23','runtime':'Chromium (Playwright)', 'checks':[]}
def verify(name,ok,details=''):
    report['checks'].append({'name':name,'passed':bool(ok),'detail':str(details)})
    if not ok:print('FAIL',name,details)
def page_for(browser,name,width,height):
    page=browser.new_page(viewport={'width':width,'height':height});errors=[]
    page.on('pageerror',lambda err:errors.append(str(err)))
    page.set_content((D/(name+'.html')).read_text('utf-8'),wait_until='domcontentloaded')
    page.add_style_tag(content=(D/'style.css').read_text('utf-8'))
    if name in ['slides','wiki']:
        page.add_script_tag(content=(D/'data.js').read_text('utf-8'))
        page.add_script_tag(content=(D/('slides.js' if name=='slides' else 'site.js')).read_text('utf-8'))
    return page,errors
with sync_playwright() as p:
    browser=p.chromium.launch(headless=True,executable_path='/usr/bin/chromium',args=['--no-sandbox'])
    for name in ['index','wiki','slides','workflow']:
        pg,errors=page_for(browser,name,1440,900)
        if name=='index': pg.screenshot(path=str(E/'homepage-desktop.png'))
        if name=='slides':
            verify('19 slides present',pg.evaluate('window.WIKI_DATA.slides.length')==19,'content count')
            pg.locator('#next-slide').click()
            verify('next button advances',pg.locator('#slide-num').inner_text()=='02')
            pg.keyboard.press('ArrowRight')
            verify('keyboard next advances',pg.locator('#slide-num').inner_text()=='03')
            for idx in range(19):
                pg.locator(f'.progress-dot[data-slide-index="{idx}"]').click()
                count=pg.locator('.slide .sources a').count()-1
                expected=pg.evaluate('(i)=>window.WIKI_DATA.slides[i].sources.length',idx)
                verify(f'slide {idx+1:02d} citations',count==expected,f'{count} vs {expected}')
                if idx==6:pg.screenshot(path=str(E/'ocds-correlations.png'))
                if idx==8:pg.screenshot(path=str(E/'tumor-spheroid.png'))
            pg.locator('.progress-dot[data-slide-index="4"]').click()
            verify('interactive synthetic waveform visible',pg.locator('[data-signal-mode]').count()==4)
            slow=pg.locator('.metric-inline').inner_text()
            pg.locator('[data-signal-mode="fast"]').click()
            fast=pg.locator('.metric-inline').inner_text()
            verify('waveform mode switches', '快速動態' in fast and '慢速動態' in slow)
            pg.locator('[data-signal-mode="drift"]').click()
            verify('drift warning', '配準' in pg.locator('.slide .smallnote').inner_text())
            pg.screenshot(path=str(E/'synthetic-waveform.png'))
            pg.locator('.progress-dot[data-slide-index="17"]').click()
            pg.locator('[data-quiz-index="1"]').click()
            verify('quiz correct feedback','正確' in pg.locator('.quiz-result').inner_text())
            pg.screenshot(path=str(E/'quiz-correct.png'))
            pg.locator('[data-quiz-index="0"]').click()
            verify('quiz wrong feedback','再想想' in pg.locator('.quiz-result').inner_text())
        if name=='wiki':
            verify('wiki title present',pg.locator('#wiki-article h1').count()==1)
            pg.locator('#wiki-search').fill('OCDS')
            verify('wiki searchable',pg.locator('#concept-links a').count()>=1)
            pg.locator('#wiki-search').fill('')
            pg.locator('#source-links a').first.click()
            pg.wait_for_function('document.querySelector("#wiki-article h1")?.textContent?.includes("Dynamic contrast")',timeout=3000)
            verify('source notes open',pg.locator('#wiki-article h1').count()==1)
            verify('source evidence location',pg.locator('#wiki-article').inner_text().find('來源依據位置')>=0)
            pg.screenshot(path=str(E/'wiki-source-record.png'))
        if name=='workflow':
            verify('six graph nodes',pg.locator('.flow-node').count()==6)
            pg.screenshot(path=str(E/'workflow-graph.png'))
        over=pg.evaluate('document.documentElement.scrollWidth - innerWidth')
        verify('desktop no overflow '+name,over<=0,over)
        verify('desktop no JS errors '+name,len(errors)==0,str(errors))
        pg.close()
    for width in [390,320]:
      for name in ['index','wiki','slides','workflow']:
        pg,errors=page_for(browser,name,width,844)
        if name=='slides':pg.locator('.progress-dot[data-slide-index="4"]').click()
        over=pg.evaluate('document.documentElement.scrollWidth - innerWidth')
        verify(f'{width}px no horizontal overflow '+name,over<=0,'overflow='+str(over))
        verify(f'{width}px no JS errors '+name,len(errors)==0,str(errors))
        if name=='slides' and width==390:pg.screenshot(path=str(E/'slides-mobile.png'))
        pg.close()
    browser.close()
report['passed']=all(x['passed'] for x in report['checks']);report['check_count']=len(report['checks'])
(R/'logs/browser-check.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n','utf-8')
print(('PASS' if report['passed'] else 'FAIL'),report['check_count'],'checks')
if not report['passed']:raise SystemExit(1)
