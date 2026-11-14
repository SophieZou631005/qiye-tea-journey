/* 种下、制茶与采风的展示模块。文化文案和摄影条目在 content.js 维护。 */
(() => {
  'use strict';
  const content = window.QIYE_CONTENT;
  const treePositions = [[65,177,.8],[119,157,.9],[178,182,1.1],[237,146,.85],[298,176,1],[354,150,.8],[407,181,.9]];

  function gardenMarkup(phase) {
    const step = content.gardenSteps[phase];
    const trees = treePositions.map(([x,y,scale],i) => `<g transform="translate(${x} ${y}) scale(${scale})"><circle class="garden-seed" r="4" style="--order:${i}"/><g class="garden-tree" style="--order:${i}"><path class="tree-stem" d="M0 0Q-3-22 0-48"/><path fill="#728B68" d="M-1-17Q-35-17-31-40Q-5-41-1-17Z"/><path fill="#9CAD83" d="M0-28Q3-57 25-55Q29-34 0-28Z"/><path fill="#B9C8A1" d="M0-44Q-10-63 3-73Q14-57 0-44Z"/><path class="tree-vein" d="M-2-19-22-34M1-30 19-49"/></g></g>`).join('');
    return `<div class="memory-garden garden-phase-${phase}">
      <div class="garden-scene" role="img" aria-label="七株茶树的记忆山景：${step.title}"><svg viewBox="0 0 470 250" aria-hidden="true">
        <circle class="garden-sun" cx="361" cy="57" r="23" fill="#C89B52"/>
        <path d="M0 137 89 66 154 119 235 58 323 118 411 76 470 111V250H0Z" fill="#DDE5D2"/>
        <path d="M0 181Q115 111 235 154T470 139V250H0Z" fill="#CEDBC0"/>
        <path d="M0 219Q127 139 268 191T470 181V250H0Z" fill="#E8EDDE"/>
        <g fill="none" stroke="#B3C49F" opacity=".65"><path d="M0 213Q128 133 275 184T470 178"/><path d="M0 233Q133 155 280 204T470 198"/></g>
        ${trees}
        <g class="garden-cloud" fill="#F7F8F0"><ellipse cx="156" cy="83" rx="107" ry="23"/><ellipse cx="272" cy="102" rx="143" ry="26"/><ellipse cx="417" cy="63" rx="75" ry="18"/></g>
        <g class="garden-rain" stroke="#849C85" stroke-width="2" stroke-linecap="round">${Array.from({length:12},(_,i)=>`<path d="m${46+i*33} ${78+i%3*12}-5 13" style="--order:${i}"/>`).join('')}</g>
      </svg><span class="garden-scene-note">蒙顶山 / 七株记忆的想象</span></div>
      <ol class="garden-steps" aria-label="茶山生长进程">${['落种','润雨','见光'].map((name,i)=>`<li class="${phase>i?'is-done':''}" ${phase===i?'aria-current="step"':''}><span>0${i+1}</span>${name}${phase>i?'<b aria-hidden="true">✓</b>':''}</li>`).join('')}</ol>
      <div class="garden-story" aria-live="polite"><span class="eyebrow">${step.eyebrow}</span><h4>${step.title}</h4><p>${step.text}</p></div>
      ${phase===1?'<div class="rain-control"><label for="garden-rain">轻推云层，给茶山送来一场雨 <output id="rain-value">0%</output></label><input id="garden-rain" type="range" min="0" max="100" step="5" value="0" aria-describedby="rain-help"><p id="rain-help">拖至右端，或轻点下方按钮。键盘可用方向键。</p></div>':''}
      <button type="button" class="garden-action" data-garden-action="${phase}">${step.action}<span aria-hidden="true">${phase===3?'↺':'↗'}</span></button>
      <p class="garden-footnote">一次共同照料，让七株记忆一同生长。此为文化意象，非种植教学。</p>
    </div>`;
  }

  function craftHands(index) {
    if(index!==0 && index!==2) return '';
    return `<svg class="craft-hands" viewBox="0 0 320 200" aria-hidden="true"><g class="hand-left"><path d="M12 169 68 126Q77 118 87 110L124 88Q130 85 133 90Q135 94 129 99L111 113Q108 116 112 118L139 102Q145 99 148 104Q149 108 144 113L117 139Q103 154 85 154L40 189Z"/><path d="m81 139 30-24"/></g><g transform="translate(320 0) scale(-1 1)"><g class="hand-right"><path d="M12 169 68 126Q77 118 87 110L124 88Q130 85 133 90Q135 94 129 99L111 113Q108 116 112 118L139 102Q145 99 148 104Q149 108 144 113L117 139Q103 154 85 154L40 189Z"/><path d="m81 139 30-24"/></g></g></svg>`;
  }

  function craftEvidence() {
    const media = content.craftMedia;
    if (!media) return '';
    return `<aside class="craft-evidence"><p class="eyebrow">In the hands of a maker / 真实技艺</p><h4>动画之外，看见真正的手艺。</h4><a href="${media.image}" target="_blank" rel="noopener" aria-label="放大查看蒙山茶真实制茶工序照片"><img src="${media.image}" alt="${media.alt}" width="${media.width}" height="${media.height}" loading="lazy"><span>放大看工序 ↗</span></a><p>${media.caption}</p><a class="craft-source" href="${media.source}" target="_blank" rel="noopener noreferrer">${media.credit} ↗</a></aside>`;
  }

  const fieldHost = document.querySelector('#field-notebook');
  function renderField(index=0) {
    if (!fieldHost) return;
    const entry = content.fieldNotes[index];
    fieldHost.innerHTML = `<div class="field-visual"><img src="${entry.image}" alt="${entry.alt}" width="${entry.width}" height="${entry.height}" loading="lazy"><span class="field-image-label">Ya’an field notes / ${String(index+1).padStart(2,'0')}</span></div><div class="field-copy"><p class="eyebrow">来自雅安的采风手记</p><h3>${entry.title}</h3><p>${entry.text}</p><span class="field-location">${entry.place} · 作者采风摄影</span><div class="field-selectors" role="group" aria-label="翻阅雅安采风影像">${content.fieldNotes.map((note,i)=>`<button type="button" data-field="${i}" aria-pressed="${index===i}"><span>0${i+1}</span>${note.label}</button>`).join('')}</div><p class="field-closing">四川雅安，在山与世界之间。</p></div>`;
  }
  fieldHost?.addEventListener('click',event=>{
    const button=event.target.closest('[data-field]');
    if(!button)return;
    const index=Number(button.dataset.field);
    renderField(index);
    fieldHost.querySelector(`[data-field="${index}"]`).focus({preventScroll:true});
  });
  renderField();
  window.QiyeDetails = {gardenMarkup,craftHands,craftEvidence};
})();
