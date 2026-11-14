/* 茶路的文化叙事图及七叶故事档案。资料与文案集中在 content.js。 */
(() => {
  'use strict';
  const content=window.QIYE_CONTENT;
  const points=[[84,193],[228,153],[378,109],[522,65]];
  const icons=[
    '<path d="M22 39V21m0 6C5 28 5 14 7 12c13-1 17 6 15 15Zm0-5C20 6 31 4 38 5c2 13-5 19-16 17Z"/>',
    '<path d="M9 14h29l-3 25H12Zm2 8h25M18 15l-3 22m13-22 5 22M9 14q15-10 29 0M14 11V6h19v5"/>',
    '<path d="M8 39 19 23l7 8 8-18 10 26M5 39h42M18 15l5-7 5 7m-6-1v13"/>',
    '<path d="M9 22h28l-4 14q-10 7-20 0Zm28 3h5c8 0 4 11-7 9M16 15q-5-5 0-10m9 10q-5-5 0-10M8 42h31"/>'
  ];
  function icon(index) {return `<svg viewBox="0 0 50 50" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${icons[index]}</svg>`;}
  function roadMarkup(active,visited,previous) {
    const index=active<0?0:active, before=previous<0?0:previous;
    const point=content.roadStories[index], from=points[before],to=points[index];
    return `<div class="tea-atlas">
      <div class="atlas-scene"><img src="assets/field-2026/mountain-07.webp" alt="当代雅安茶山摄影，作为茶路故事的起点意象" width="2200" height="1467" loading="lazy"><div class="atlas-shade" aria-hidden="true"></div><p class="atlas-overline">从一片茶山，走向不同的生活</p>
        <svg class="atlas-path" viewBox="0 0 600 260" aria-hidden="true"><path d="M84 193C130 120 170 198 228 153S321 75 378 109 461 43 522 65" fill="none" stroke="#F4E8C9" stroke-width="2" stroke-dasharray="4 6"/>${points.map(([x,y],i)=>`<circle cx="${x}" cy="${y}" r="6" fill="${visited.includes(i)?'#C89B52':'#F7F5EF'}"/><text x="${x}" y="${y+26}" text-anchor="middle" fill="#FFFFFF" font-size="16">${content.roadStories[i].name}</text>`).join('')}<g class="atlas-parcel" style="--from-x:${from[0]}px;--from-y:${from[1]-17}px;--to-x:${to[0]}px;--to-y:${to[1]-17}px"><rect x="-11" y="-13" width="22" height="24" rx="4" fill="#C89B52" stroke="#FFF6DC"/><path d="M-11-4h22M-3-13v24m6-24v24" stroke="#FFF6DC" fill="none"/></g></svg>
        <span class="atlas-photo-note">当代雅安采风 / 示意图省略支线与中间节点</span>
      </div>
      <div class="atlas-stops" role="group" aria-label="翻阅茶路记忆">${content.roadStories.map((story,i)=>`<button type="button" data-road="${i}" aria-pressed="${active===i}" class="${visited.includes(i)?'is-visited':''}">${icon(i)}<span>${story.name}</span><small>${story.chapter}</small>${visited.includes(i)?'<b aria-hidden="true">✓</b>':''}</button>`).join('')}</div>
      <article class="atlas-story" aria-live="polite"><p class="eyebrow">0${index+1} / 04 · ${point.chapter}</p><h4>${point.title}</h4><p>${point.text}</p><blockquote>${point.detail}</blockquote><div class="atlas-source">${point.sourceIds.map(id=>{const source=content.sources.find(s=>s.id===id);return `<a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.publisher} ↗</a>`;}).join('')}</div></article>
      ${index<3?`<button type="button" class="atlas-continue" data-road="${index+1}">随茶前往${content.roadStories[index+1].name}<span>→</span></button>`:'<p class="atlas-arrival">路不止一条，交流从未停止。</p>'}
      <p class="atlas-context">文化联系示意：串联代表性节点，不代表唯一历史路线。蒙山绿茶与南路边茶属于不同的茶类和技艺传统。</p>
    </div>`;
  }
  const host=document.querySelector('#ip-archive');
  function renderIP(index=0) {
    if(!host)return;
    const chapter=content.ipChapters[index];
    const source=content.sources.find(s=>s.id===chapter.sourceId);
    host.innerHTML=`<div class="ip-story-index" role="group" aria-label="探索七叶故事档案">${content.ipChapters.map((item,i)=>`<button type="button" data-ip-chapter="${i}" aria-pressed="${index===i}"><span>0${i+1}</span><strong>${item.label}</strong><b aria-hidden="true">↗</b></button>`).join('')}</div><article class="ip-story-panel" aria-live="polite"><div><p class="eyebrow">QIYE / 0${index+1}</p><h3>${chapter.title}</h3><p>${chapter.text}</p></div><dl>${chapter.points.map(point=>`<div><dt>${point.name}</dt><dd>${point.text}</dd></div>`).join('')}</dl><p class="ip-story-note">${chapter.note}${source?` <a href="${source.url}" target="_blank" rel="noopener noreferrer">文化来源：${source.publisher} ↗</a>`:''}</p></article>`;
  }
  host?.addEventListener('click',event=>{const button=event.target.closest('[data-ip-chapter]');if(!button)return;const index=Number(button.dataset.ipChapter);renderIP(index);host.querySelector(`[data-ip-chapter="${index}"]`).focus({preventScroll:true});});
  renderIP();
  window.QiyeAtlas={roadMarkup};
})();
