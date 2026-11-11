/* 七叶茶路：无需框架的交互逻辑。内容与来源请在 content.js 中维护。 */
(() => {
  'use strict';
  const content = window.QIYE_CONTENT;
  // 分享地址随当前部署入口更新，兼容 CloudBase 与 GitHub Pages 的子目录。
  const siteUrl = (() => {
    const address = new URL(content.siteUrl || window.location.href);
    address.hash = '';
    address.search = '';
    address.pathname = address.pathname.replace(/index\.html$/, '');
    return address.href;
  })();
  const $ = (selector) => document.querySelector(selector);
  const STORAGE_KEY = 'qiye-journey-v1';
  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const defaults = () => ({completed:[],seeds:[],craft:[],road:[],mood:'',nickname:'',message:'',cityPlace:-1});
  const validNumbers = (value, max) => [...new Set(Array.isArray(value) ? value.filter(n => Number.isInteger(n) && n >= 0 && n < max) : [])];
  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      return {cityPlace:Number.isInteger(saved.cityPlace)&&saved.cityPlace>=0&&saved.cityPlace<content.cityPlaces.length?saved.cityPlace:-1,completed:validNumbers(saved.completed,5),seeds:validNumbers(saved.seeds,7),craft:validNumbers(saved.craft,3),road:validNumbers(saved.road,4),mood:['独处','相聚','赠予'].includes(saved.mood)?saved.mood:'',nickname:typeof saved.nickname==='string'?saved.nickname.slice(0,14):'',message:typeof saved.message==='string'?saved.message.slice(0,70):''};
    } catch { return defaults(); }
  }
  let state = loadState();
  let activeChapter = 0;
  let activeCraft = state.craft.length ? state.craft[state.craft.length-1] : -1;
  let activeRoad = state.road.length ? state.road[state.road.length-1] : -1;
  let cardBlob = null;
  let cardObjectURL = '';
  let toastTimer;
  let artPromise;
  const craftSteps = [
    {name:'捧',label:'捧起芽叶',motion:'lift',text:'捧：双手合拢，将芽叶轻轻托起。互动以简化动画呈现手法，实际动作须由制茶师依据芽叶状态掌握。'},
    {name:'揉',label:'轻轻揉转',motion:'roll',text:'揉：通过揉转与施力，影响茶叶的形态。不同茶品对力度、时机与工序的要求并不相同。'},
    {name:'撒',label:'松手落叶',motion:'release',text:'撒：让芽叶松散落下。制茶讲究手法之间的配合，经验来自长期实践与师徒传授。'}
  ];
  const roadPoints = [
    {name:'蒙顶',x:12,y:71,title:'蒙顶山 · 从故乡出发',text:'七叶从茶山出发。这里保存着种茶传说与制茶传统，也是它的文化起点。'},
    {name:'雅安',x:36,y:53,title:'雅安 · 茶的集散与往来',text:'雅安是川藏茶马古道的重要起点，茶业生产与商贸在这里留下了深厚的城市记忆。'},
    {name:'康定',x:63,y:37,title:'康定 · 山地交流的节点',text:'川藏茶路经泸定到达康定，再向高原延伸。茶随不同支线流转，形成往来的路网。'},
    {name:'拉萨',x:89,y:20,title:'拉萨 · 不同生活在茶中相遇',text:'古道连起不同地域与人群，茶进入日常，也延续交流。这里画出的是文化联系，不是精确地理路线。'}
  ];
  const moods = [{name:'独处',subtitle:'留一刻给自己',line:'今天，把片刻安静留给自己。'},{name:'相聚',subtitle:'与喜欢的人同坐',line:'见面吧，让一杯茶慢慢拉近距离。'},{name:'赠予',subtitle:'让心意抵达远方',line:'把山间的温柔，送给惦念的人。'}];
  function persist() { try { localStorage.setItem(STORAGE_KEY,JSON.stringify(state)); } catch { /* 存储不可用时仍可完成当前旅程。 */ } }
  function notify(text) { clearTimeout(toastTimer);$('#toast').textContent=text;$('#toast').classList.add('visible');toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),3200); }
  function complete(index) {
    if (!state.completed.includes(index)) { state.completed.push(index);persist();renderProgress();notify(`已收集「${content.chapters[index].name}」茶路印记`); }
  }
  function renderProgress() {
    $('#progress-label').textContent=`茶路印记 ${state.completed.length} / 5`;
    $('#stamp-dots').innerHTML=content.chapters.map((_,i)=>`<i class="${state.completed.includes(i)?'done':''}"></i>`).join('');
    content.chapters.forEach((_,i)=>{const tab=$(`#tab-${i}`);if(tab)tab.classList.toggle('done',state.completed.includes(i));});
  }
  function renderTabs() {
    $('#chapter-tabs').innerHTML=content.chapters.map((chapter,i)=>`<button type="button" class="stop ${state.completed.includes(i)?'done':''}" role="tab" id="tab-${i}" aria-selected="${i===activeChapter}" aria-controls="chapter-panel" tabindex="${i===activeChapter?0:-1}" data-chapter="${i}"><span class="stop-orb">${chapter.number}</span><span class="stop-name">${chapter.name}</span><small>${chapter.eyebrow}</small></button>`).join('');
  }
  function activityHead(title, meta) { return `<div class="interaction-head"><span>${title}</span><span>${meta}</span></div>`; }
  function activityBottom(status) { return `<div class="activity-bottom"><span>${status}</span>${activeChapter<4?'<button class="next-chapter" type="button" data-next>下一段茶路 ↗</button>':''}</div>`; }
  function cupIcon(type=0) {
    return `<svg viewBox="0 0 90 85" aria-hidden="true"><path d="M18 35h45l-6 30c-2 10-29 10-33 0Z" fill="${type===1?'#b9c8a1':'#d7dfc4'}" stroke="#8a9d76"/><path d="M63 40h9c17 0 7 22-12 18" fill="none" stroke="#8a9d76" stroke-width="3"/><ellipse cx="40" cy="35" rx="22" ry="5" fill="#c89b52" opacity=".7"/><path d="M30 25c-10-10 8-10 0-21M43 25c-10-10 8-10 0-21" stroke="#a9b492" fill="none"/>${type===1?'<path d="M3 54h18l-1 20H6Z" fill="#b9c8a1"/>':''}${type===2?'<path d="m63 13 11-6 9 6-9 6Z" fill="#c89b52"/><path d="M74 7v15" stroke="#b58c4e"/>':''}</svg>`;
  }

  // 城市场景为项目原创示意，既不是实景复原，也不提供导航。
  function cityScene(place) {
    const scenes = {
      street: '<path d="M80 150V85h110v65M217 150V61h127v89M365 150V91h111v59"/><path d="m62 85 72-40 74 40m-7-24 79-42 80 42m-12 30 74-39 73 39"/><path d="M105 150v-42h34v42m103 0v-56h39v56m26-43h20v25h-20m85 18v-35h35v35"/><path d="M177 93v31m-7-27h14v19h-14" class="city-gold"/>',
      river: '<path d="M54 120c110-65 237-65 425-20M82 112v41m28-52v46m29-56v49m29-57v51m29-55v51m29-52v51m29-50v50m29-46v48m29-41v47m29-36v47m29-29v40m29-21v37"/><path d="M54 136c105-57 240-59 425-20"/><path d="M370 63V34m-19 20c-2-22 39-27 41-6-1 21-41 22-41 6Z"/><path d="M84 175c85-20 153-18 232 1m-112-17c72-14 127-9 196 5" class="city-gold"/>',
      town: '<path d="M88 152V80h111v72m18 0V60h124v92m24 0V81h108v71"/><path d="m65 81 78-44 77 44m-18-21 78-40 78 40m-10 21 72-41 72 41"/><path d="M250 152v-43a29 29 0 0 1 58 0v43M108 100h69v26h-69m278-26h68v26h-68"/><path d="M62 161h439m-423 9h407" class="city-gold"/>',
      factory: '<path d="M81 155V85l70-35v35l70-35v35l70-35v35h148v70M374 84V28h32v56"/><path d="M104 109h37v24h-37m64-24h37v24h-37m65-24h37v24h-37m64-24h37v24h-37m64-24h37v24h-37"/><path d="M369 27h42m-16-12 9-7m-21 1 1-7M79 164h377" class="city-gold"/>',
      courtyard: '<path d="M92 155V75h375v80M75 75l43-30h324l42 30M232 155v-54a45 45 0 0 1 90 0v54"/><path d="M117 98h78v29h-78m244-29h78v29h-78m-210 26h105"/><path d="M139 155v-16m-21-4c3-23 41-24 44 0-2 15-42 15-44 0m291 20v-18m-20-4c-3-22 38-24 42-3-1 18-40 20-42 3" class="city-gold"/>'
    };
    return `<div class="city-scene"><span>${place.type}</span><svg viewBox="0 0 560 190" aria-hidden="true"><path d="M0 142 52 113 88 126 149 75 219 103 287 59 364 97 430 50 560 106V190H0Z" fill="#e9ede2"/><g fill="none" stroke="#728b68" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">${scenes[place.scene]}</g><path d="M0 179c103-35 185 23 279-5s177-15 281-3" fill="none" stroke="#b9c8a1" stroke-width="2"/></svg><small>七叶城市手记 · 创意场景示意</small></div>`;
  }

  function cityMarkup() {
    const place = content.cityPlaces[Math.max(0, state.cityPlace)];
    return `<div class="city-place-options" role="group" aria-label="选择名山城市停留点">${content.cityPlaces.map((item, index) => `<button type="button" data-city="${index}" aria-pressed="${state.cityPlace === index}">${item.short}</button>`).join('')}</div>
      ${cityScene(place)}
      <div class="city-place-story" aria-live="polite"><p class="eyebrow">${place.name}</p><h4>${place.title}</h4><p>${place.text}</p><div><span>${place.idea}</span><button type="button" class="text-button" data-product-open="${place.productId}">看看对应茶物 ↗</button></div></div>
      <p class="mood-title">此刻，想与谁分享一杯茶？</p>`;
  }

  function basketSummary() {
    const selected = window.QiyeGallery.getSelected();
    const place = state.cityPlace >= 0 ? content.cityPlaces[state.cityPlace].name : '还未选择城市停留点';
    return `<span class="eyebrow">我的随行记忆</span><p>${escapeHTML(place)} · ${escapeHTML(state.mood || '心境待收藏')}</p><div>${selected.length ? selected.slice(0, 3).map(product => `<button type="button" data-product-open="${product.id}">${escapeHTML(product.title)} ↗</button>`).join('') + (selected.length > 3 ? `<span>另有 ${selected.length - 3} 件茶物</span>` : '') : '<a href="#collection">茶篓还是空的，去装一点心意 ↗</a>'}</div>`;
  }

  function relatedProduct(chapter) {
    const product = content.products.find(item => item.id === chapter.productId);
    return `<button class="chapter-object" type="button" data-product-open="${product.id}"><img src="${product.thumb}" alt="" width="128" height="72" loading="lazy"><span><small>把这段故事带走</small><strong>${product.title}</strong></span><b aria-hidden="true">↗</b></button>`;
  }

  function activityMarkup() {
    const chapter=content.chapters[activeChapter];
    if(activeChapter===0)return `${activityHead('01 / 让七株记忆生长',`${state.seeds.length} / 7`)}<p class="task">${chapter.task}</p><div class="garden">${Array.from({length:7},(_,i)=>`<button type="button" class="seed ${state.seeds.includes(i)?'planted':''}" data-seed="${i}" aria-label="${state.seeds.includes(i)?'已种下':'种下'}第${i+1}枚茶种" aria-pressed="${state.seeds.includes(i)}"><span class="seed-sprout">${i+1}</span></button>`).join('')}</div>${activityBottom(state.seeds.length===7?'七株记忆，已在心里生根。':'轻触茶种，等待一片新绿。')}`;
    if(activeChapter===1)return `${activityHead('02 / 手心里的制茶智慧',`${state.craft.length} / 3`)}<p class="task">${chapter.task}</p><div class="craft-stage"><div class="tea-bowl ${activeCraft<0?'':`motion-${craftSteps[activeCraft].motion}`}" aria-hidden="true">${Array.from({length:8},(_,i)=>`<i style="--i:${i%5};--y:${i%3}"></i>`).join('')}</div></div><div class="craft-controls">${craftSteps.map((step,i)=>`<button type="button" data-craft="${i}" aria-pressed="${activeCraft===i}" class="craft-button ${state.craft.includes(i)?'done':''} ${activeCraft===i?'active':''}">${step.name} · ${step.label}</button>`).join('')}</div><p class="craft-info" aria-live="polite">${activeCraft<0?'从“捧”开始，看看每一种手法如何与芽叶相遇。':craftSteps[activeCraft].text}</p>${activityBottom(state.craft.length===3?'传承，在一双手与另一双手之间。':'体验三种手法，收集采制印记。')}`;
    if(activeChapter===2)return `${activityHead('03 / 点亮一条交流之路',`${state.road.length} / 4`)}<p class="task">${chapter.task}</p><div class="road-stage"><svg viewBox="0 0 500 190" preserveAspectRatio="none" aria-hidden="true"><path d="M0 169 75 102 127 145 220 67 290 108 380 20 500 75V190H0Z" fill="#e9edde"/><path d="M0 185 127 131 235 159 341 84 500 112V190Z" fill="#dce4cf"/><path d="M60 135C101 77 123 160 180 101S245 45 315 70 382 25 445 38" stroke="#b59a70" stroke-width="2" stroke-dasharray="5 6" fill="none"/></svg>${roadPoints.map((point,i)=>`<button type="button" class="road-point ${activeRoad===i?'active':''} ${state.road.includes(i)?'done':''}" data-road="${i}" style="left:${point.x}%;top:${point.y}%" aria-label="了解${point.title}" aria-pressed="${activeRoad===i}">${point.name}</button>`).join('')}</div><div class="road-info" aria-live="polite">${activeRoad<0?'轻触山路上的节点，听茶叶讲述一次远行。':`<strong>${roadPoints[activeRoad].title}</strong><br>${roadPoints[activeRoad].text}`}</div>${activityBottom('文化叙事示意 · 非导航地图')}`;
    if(activeChapter===3)return `${activityHead('04 / 今天，在哪儿停一杯茶？',state.mood?'心境已收藏':'名山 · 五个停留点')}<p class="task">${chapter.task}</p>${cityMarkup()}<div class="moment-options">${moods.map((mood,i)=>`<button type="button" class="moment ${state.mood===mood.name?'selected':''}" data-mood="${i}" aria-pressed="${state.mood===mood.name}">${cupIcon(i)}<strong>${mood.name}</strong><span>${mood.subtitle}</span></button>`).join('')}</div><p class="moment-note" aria-live="polite">${state.mood?moods.find(m=>m.name===state.mood).line:'在匆忙的一天里，为一杯茶留个位置。'}</p>${activityBottom('你的心境，将写入今日茶路卡。')}`;
    return `${activityHead('05 / 留一张自己的茶路卡','QIYE POSTCARD')}<p class="task">${chapter.task}</p><div class="basket-summary" id="basket-summary">${basketSummary()}</div><form class="share-form" id="card-form"><label for="nickname">怎样称呼你？<input id="nickname" name="nickname" maxlength="14" placeholder="茶路旅人" autocomplete="nickname" value="${escapeHTML(state.nickname)}"></label><label for="message">想把哪句话带向远方？<textarea id="message" name="message" maxlength="70" placeholder="愿你走得再远，也有一杯温热的茶。">${escapeHTML(state.message)}</textarea></label><div class="form-row"><span class="mood-chip">今日心境 · ${state.mood||'从容'}</span><span class="quiet">已收集 ${state.completed.filter(i=>i!==4).length} / 4 段故事</span></div><button class="button primary" type="submit">生成我的茶路卡 <span>↗</span></button></form><p class="form-hint">可以随时生成；走完前四章，会留下完整的旅程印记。</p>`;
  }
  function renderChapter(focus=false) {
    renderTabs();
    const chapter=content.chapters[activeChapter];
    const refs=chapter.sourceIds.map(id=>content.sources.find(source=>source.id===id)).filter(Boolean);
    $('#chapter-panel').setAttribute('aria-labelledby',`tab-${activeChapter}`);
    $('#chapter-panel').innerHTML=`<article class="chapter"><div class="chapter-copy"><p class="eyebrow">${chapter.eyebrow}</p><h3>${chapter.title}</h3><p class="body-copy">${chapter.text}</p><aside class="qiye-journal"><span>七叶手记 / ${chapter.number}</span><p>${chapter.journal}</p></aside><p class="chapter-quote">“${chapter.quote}”</p><p class="chapter-source">故事依据 · ${refs.map(ref=>`<a href="${escapeHTML(ref.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(ref.publisher)} ↗</a>`).join('')}</p><p class="chapter-note">${chapter.note}</p>${relatedProduct(chapter)}</div><div class="interaction">${activityMarkup()}</div></article>`;
    renderProgress();
    $('#chapter-panel').classList.remove('chapter-enter');
    requestAnimationFrame(()=>$('#chapter-panel').classList.add('chapter-enter'));
    if(focus)$('#chapter-panel').focus({preventScroll:true});
  }
  function chooseChapter(index, scroll=false) { activeChapter=Math.max(0,Math.min(4,index));renderChapter();if(scroll)$('#journey').scrollIntoView({behavior:'smooth'}); }
  function refreshActivity(focusSelector) {
    $('.interaction').innerHTML=activityMarkup();
    if(focusSelector){const el=$(focusSelector);if(el)el.focus({preventScroll:true});}
  }
  $('#chapter-tabs').addEventListener('click',event=>{const button=event.target.closest('[data-chapter]');if(button){chooseChapter(Number(button.dataset.chapter));$(`#tab-${activeChapter}`).focus({preventScroll:true});}});
  $('#chapter-tabs').addEventListener('keydown',event=>{let index=activeChapter;if(event.key==='ArrowRight')index=(index+1)%5;else if(event.key==='ArrowLeft')index=(index+4)%5;else if(event.key==='Home')index=0;else if(event.key==='End')index=4;else return;event.preventDefault();chooseChapter(index);$(`#tab-${index}`).focus();});
  $('#chapter-panel').addEventListener('click',event=>{
    const button=event.target.closest('button');if(!button)return;
    if(button.hasAttribute('data-next')){chooseChapter(activeChapter+1);$('#chapter-panel').focus({preventScroll:true});$('#chapter-panel').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});return;}
    if(button.hasAttribute('data-seed')){const index=Number(button.dataset.seed);if(!state.seeds.includes(index)){state.seeds.push(index);if(state.seeds.length===7)complete(0);persist();refreshActivity(`[data-seed="${index}"]`);}return;}
    if(button.hasAttribute('data-craft')){activeCraft=Number(button.dataset.craft);if(!state.craft.includes(activeCraft))state.craft.push(activeCraft);if(state.craft.length===3)complete(1);persist();refreshActivity(`[data-craft="${activeCraft}"]`);return;}
    if(button.hasAttribute('data-road')){activeRoad=Number(button.dataset.road);if(!state.road.includes(activeRoad))state.road.push(activeRoad);if(state.road.length===4)complete(2);persist();refreshActivity(`[data-road="${activeRoad}"]`);return;}
    if(button.hasAttribute('data-city')){state.cityPlace=Number(button.dataset.city);persist();refreshActivity(`[data-city="${state.cityPlace}"]`);return;}
    if(button.hasAttribute('data-mood')){const index=Number(button.dataset.mood);state.mood=moods[index].name;complete(3);persist();refreshActivity(`[data-mood="${index}"]`);}
  });
  $('#chapter-panel').addEventListener('submit',async event=>{
    if(event.target.id!=='card-form')return;event.preventDefault();
    state.nickname=$('#nickname').value.trim().slice(0,14);state.message=$('#message').value.trim().slice(0,70);persist();
    const button=event.target.querySelector('button[type=submit]');button.disabled=true;button.textContent='正在把茶路装进卡片…';
    try{await generateCard();complete(4);openDialog($('#card-dialog'));}
    catch(error){console.error('茶路卡生成失败',error);notify('图片暂未准备好，请稍后再试。');}
    finally{button.disabled=false;button.innerHTML='生成我的茶路卡 <span>↗</span>';}
  });
  $('#go-share').addEventListener('click',()=>chooseChapter(4));
  $('#sources-list').innerHTML=content.sources.map(source=>`<a href="${escapeHTML(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(source.publisher)} · ${escapeHTML(source.title)} ↗</a>`).join('');
  $('#reset-progress').addEventListener('click',()=>{if(!window.confirm('清除当前设备的茶路印记、茶篓、心境、昵称和留言？已保存的图片不受影响。'))return;state=defaults();activeCraft=-1;activeRoad=-1;window.QiyeGallery.clear();persist();renderChapter();notify('旅程与茶篓记录已清除，可以重新出发。');});
  function openDialog(dialog){if(typeof dialog.showModal==='function')dialog.showModal();else dialog.setAttribute('open','');}
  document.querySelectorAll('[data-close]').forEach(button=>button.addEventListener('click',()=>button.closest('dialog').close()));
  document.querySelectorAll('dialog').forEach(dialog=>dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}));
  $('#design-open').addEventListener('click',()=>openDialog($('#design-dialog')));
  const qr=qrcode(0,'M');qr.addData(siteUrl);qr.make();
  $('#site-qr').innerHTML=qr.createSvgTag({cellSize:5,margin:20,scalable:true});
  document.querySelectorAll('.qr-open').forEach(button=>button.addEventListener('click',()=>openDialog($('#qr-dialog'))));
  function qrOnCanvas(context,x,y,size){const count=qr.getModuleCount(),quiet=4,total=count+quiet*2;context.fillStyle='#fff';context.fillRect(x,y,size,size);context.fillStyle='#303d30';for(let row=0;row<count;row++)for(let col=0;col<count;col++)if(qr.isDark(row,col)){const left=Math.round(x+(col+quiet)*size/total),top=Math.round(y+(row+quiet)*size/total),right=Math.round(x+(col+quiet+1)*size/total),bottom=Math.round(y+(row+quiet+1)*size/total);context.fillRect(left,top,right-left,bottom-top);}}
  function canvasBlob(canvas){return new Promise((resolve,reject)=>canvas.toBlob(blob=>blob?resolve(blob):reject(new Error('无法导出图片')),'image/png'));}
  function downloadBlob(blob,filename){const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download=filename;document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);}
  $('#download-qr').addEventListener('click',async()=>{try{const canvas=document.createElement('canvas');canvas.width=canvas.height=800;qrOnCanvas(canvas.getContext('2d'),0,0,800);downloadBlob(await canvasBlob(canvas),'七叶-扫码启程.png');notify('二维码已准备下载。');}catch{notify('下载暂不可用，可截图保存二维码。');}});
  $('#copy-link').addEventListener('click',async()=>{try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(siteUrl);notify('茶路链接已复制。');}else{window.prompt('复制这个链接，邀请朋友同行：',siteUrl);}}catch{window.prompt('复制这个链接，邀请朋友同行：',siteUrl);}});
  function loadArt(){if(!artPromise)artPromise=new Promise((resolve,reject)=>{const image=new Image();image.onload=()=>resolve(image);image.onerror=()=>{artPromise=null;reject(new Error('角色图片加载失败'));};image.src='assets/qiye-design.png';});return artPromise;}
  function wrapText(context,text,x,y,maxWidth,lineHeight,maxLines){const lines=[];let line='';for(const char of Array.from(text.replace(/\s+/g,' '))){if(context.measureText(line+char).width>maxWidth&&line){lines.push(line);line=char;}else line+=char;}if(line)lines.push(line);lines.slice(0,maxLines).forEach((item,index)=>{let output=item;if(index===maxLines-1&&lines.length>maxLines){while(context.measureText(output+'…').width>maxWidth)output=output.slice(0,-1);output+='…';}context.fillText(output,x,y+index*lineHeight);});return Math.min(lines.length,maxLines)*lineHeight;}
  async function generateCard(){
    const image=await loadArt();
    const canvas=document.createElement('canvas');canvas.width=900;canvas.height=1400;const ctx=canvas.getContext('2d');
    ctx.fillStyle='#f7f5ef';ctx.fillRect(0,0,900,1400);ctx.strokeStyle='#ccd4bf';ctx.lineWidth=2;ctx.strokeRect(28,28,844,1344);
    ctx.fillStyle='#728b68';ctx.font='20px sans-serif';ctx.fillText('QIYE · MY TEA JOURNEY',68,87);
    ctx.fillStyle='#303d30';ctx.font='56px "Songti SC", serif';ctx.fillText('七株茶，万里路。',64,173);
    ctx.fillStyle='#858d76';ctx.font='20px sans-serif';ctx.fillText('世界茶源 · 蒙顶山',69,222);
    ctx.save();ctx.translate(140,240);ctx.scale(620/760,620/760);ctx.beginPath();ctx.moveTo(400,0);ctx.lineTo(760,0);ctx.lineTo(760,770);ctx.lineTo(0,770);ctx.lineTo(0,155);ctx.lineTo(400,155);ctx.closePath();ctx.clip();ctx.drawImage(image,0,0,760,770,0,0,760,770);ctx.restore();
    ctx.fillStyle='#303d30';ctx.font='30px "Songti SC", serif';ctx.fillText(`${state.nickname||'茶路旅人'} 的今日茶路`,68,936);
    ctx.fillStyle='#b58c4e';ctx.font='21px sans-serif';ctx.fillText(`今日心境 · ${state.mood||'从容'}`,69,977);
    ctx.fillStyle='#626e57';ctx.font='25px "Songti SC", serif';wrapText(ctx,state.message||'愿你走得再远，也有一杯温热的茶。',69,1030,748,40,3);
    ctx.strokeStyle='#d8ddce';ctx.beginPath();ctx.moveTo(68,1162);ctx.lineTo(832,1162);ctx.stroke();
    ctx.fillStyle='#728b68';ctx.font='17px sans-serif';ctx.fillText(`故事印记  ${state.completed.filter(i=>i!==4).length} / 4`,68,1210);
    ctx.fillStyle='#7b846e';ctx.font='16px sans-serif';ctx.fillText(state.cityPlace>=0?`城市停留 · ${content.cityPlaces[state.cityPlace].name}`:'种下 · 采制 · 出山 · 入城 · 分享',68,1248);
    const carried=window.QiyeGallery.getSelected();if(carried.length){ctx.font='15px sans-serif';ctx.fillText(`随行茶物 · ${carried[0].title}${carried.length>1?` 等${carried.length}件`:''}`,68,1278);}
    ctx.fillStyle='#303d30';ctx.font='26px "Songti SC", serif';ctx.fillText('下一站，与你。',68,1310);
    qrOnCanvas(ctx,684,1190,145);ctx.fillStyle='#7b846e';ctx.font='13px sans-serif';ctx.fillText('扫码 · 与七叶同行',691,1350);
    cardBlob=await canvasBlob(canvas);if(cardObjectURL)URL.revokeObjectURL(cardObjectURL);cardObjectURL=URL.createObjectURL(cardBlob);$('#card-preview').src=cardObjectURL;
  }
  $('#save-card').addEventListener('click',()=>{if(cardBlob){downloadBlob(cardBlob,'七叶-我的今日茶路卡.png');notify('茶路卡已准备下载，也可长按预览图保存。');}});
  $('#native-share').addEventListener('click',async()=>{if(!cardBlob)return;try{const file=new File([cardBlob],'七叶-茶路卡.png',{type:'image/png'});if(navigator.share&&navigator.canShare&&navigator.canShare({files:[file]})){await navigator.share({files:[file],title:'七叶 · 七株茶，万里路'});}else if(navigator.share){await navigator.share({title:'七叶 · 七株茶，万里路',text:'与七叶一起，从蒙顶山出发。',url:siteUrl});}else{downloadBlob(cardBlob,'七叶-我的今日茶路卡.png');notify('茶路卡已下载，可以把图片分享给朋友。');}}catch(error){if(error.name!=='AbortError')notify('当前浏览器暂不支持分享，请保存图片后分享。');}});

  document.addEventListener('qiye:notice', event => notify(event.detail));
  document.addEventListener('qiye:basket-change', () => {
    if ($('#basket-summary')) $('#basket-summary').innerHTML = basketSummary();
  });
  document.addEventListener('click', event => {
    const jump = event.target.closest('[data-jump-chapter]');
    if (!jump) return;
    jump.closest('dialog')?.close();
    chooseChapter(Number(jump.dataset.jumpChapter), true);
    $('#chapter-panel').focus({ preventScroll: true });
  });
  $('#chapter-panel').addEventListener('input', event => {
    if (event.target.id === 'nickname') state.nickname = event.target.value.slice(0, 14);
    if (event.target.id === 'message') state.message = event.target.value.slice(0, 70);
    persist();
  });
  const menu = $('#mobile-menu');
  const menuToggle = $('#menu-toggle');
  menuToggle.addEventListener('click', () => {
    menu.showModal();
    menuToggle.setAttribute('aria-expanded', 'true');
  });
  menu.addEventListener('close', () => menuToggle.setAttribute('aria-expanded', 'false'));
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => menu.close()));
  if ('IntersectionObserver' in window) {
    const navigation = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        document.querySelectorAll('.site-header nav a, .mobile-menu nav a').forEach(link => {
          if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-12% 0px -50% 0px' });
    document.querySelectorAll('#journey, #meet, #collection').forEach(section => navigation.observe(section));
  }

  renderChapter();
  // 仅做渐入呈现，不接触原有章节状态、印记或表单逻辑。
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const sections = document.querySelectorAll('.meet-image, .meet-copy, .collection-section .section-heading');
    const reveal = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('is-reveal-pending');
        entry.target.classList.add('is-reveal-visible');
        reveal.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    sections.forEach(section => { section.classList.add('is-reveal-pending'); reveal.observe(section); });
    const words = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('is-word-pending');
        entry.target.classList.add('is-word-visible');
        words.unobserve(entry.target);
      });
    }, { threshold: 0.7, rootMargin: '0px 0px -12% 0px' });
    document.querySelectorAll('.reveal-word').forEach((word, index) => {
      word.classList.add('is-word-pending');
      word.style.transitionDelay = `${index * 120}ms`;
      words.observe(word);
    });
  }
})();
