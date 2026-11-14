/* 采风图集：组内翻页、缩略图、触屏滑动、键盘与完整图片查看。
   不自动轮播。切换前先载入目标图片，避免快速翻页出现空白。 */
(() => {
  'use strict';
  const groups=window.QIYE_CONTENT.fieldNotes;
  const host=document.querySelector('#field-notebook');
  const positions=groups.map(()=>0);
  const dialog=document.querySelector('#photo-dialog');
  let groupIndex=0, requestId=0, viewer=null, pointerStart=null, suppressOpen=false;
  const scenarios=[
    {src:'assets/scenarios/mountain-tea-shop.webp',alt:'七叶IP与茶礼产品在茶山景区商店中的场景设计效果图',caption:'茶山相遇 · 场景设计效果图'},
    {src:'assets/scenarios/qiye-cultural-store.webp',alt:'七叶文创空间的场景设计效果图',caption:'茶物入城 · 场景设计效果图'}
  ];
  function groupPhotos(){return groups[groupIndex].photos;}
  function currentPhoto(){return groupPhotos()[positions[groupIndex]];}
  function renderGroup(index=0) {
    if(!host)return;
    requestId++;
    groupIndex=index;
    const entry=groups[index],photo=currentPhoto(),position=positions[index];
    host.innerHTML=`<div class="field-gallery"><div class="field-stage" tabindex="0" role="group" aria-label="${entry.label}图集，可用左右方向键翻页"><button type="button" class="field-photo-open" data-photo-open aria-label="完整查看当前${entry.label}采风照片"><img class="field-current" src="${photo.src}" alt="${photo.alt}" width="${photo.width}" height="${photo.height}" loading="lazy"><span>完整查看照片 ↗</span></button><div class="field-page"><button type="button" data-photo-prev aria-label="上一张${entry.label}采风照片">←</button><span class="field-page-count">${position+1} / ${entry.photos.length}</span><button type="button" data-photo-next aria-label="下一张${entry.label}采风照片">→</button></div></div><div class="field-photo-caption" aria-live="polite"><span>${photo.caption}</span><span>采风摄影</span></div><div class="field-thumbnails" role="group" aria-label="${entry.label}照片缩略图">${entry.photos.map((item,i)=>`<button type="button" data-photo-index="${i}" aria-label="查看${entry.label}第${i+1}张照片：${item.caption}" aria-pressed="${i===position}"><img src="${item.thumb}" alt="" width="64" height="52" loading="lazy"></button>`).join('')}</div></div><div class="field-copy"><p class="eyebrow">来自雅安的采风手记</p><h3>${entry.title}</h3><p>${entry.text}</p><span class="field-location">${entry.place} · 采风摄影</span><div class="field-selectors" role="group" aria-label="翻阅雅安采风影像">${groups.map((note,i)=>`<button type="button" data-field="${i}" aria-pressed="${index===i}"><span>0${i+1}</span>${note.label}<small>${note.photos.length} 张</small></button>`).join('')}</div><p class="field-closing">四川雅安，在山与世界之间。</p><p class="field-gallery-help">点缩略图或左右箭头翻阅，也可在照片上横向轻扫。</p></div>`;
  }
  function selectPhoto(next) {
    const photos=groupPhotos(),index=(next+photos.length)%photos.length;
    if(index===positions[groupIndex])return;
    const token=++requestId,photo=photos[index],image=new Image();
    const label=host.querySelector('.field-photo-caption > span');
    label.textContent='正在翻阅下一帧…';
    image.onload=()=>{
      if(token!==requestId)return;
      positions[groupIndex]=index;
      const current=host.querySelector('.field-current');
      host.querySelector('.field-previous')?.remove();
      const previous=current.cloneNode(true);
      previous.className='field-previous';previous.alt='';previous.setAttribute('aria-hidden','true');
      current.after(previous);
      current.src=photo.src;current.alt=photo.alt;current.width=photo.width;current.height=photo.height;
      current.classList.remove('is-changing');
      requestAnimationFrame(()=>{current.classList.add('is-changing');previous.classList.add('is-leaving');});
      host.querySelector('.field-page-count').textContent=`${index+1} / ${photos.length}`;
      label.textContent=photo.caption;
      host.querySelectorAll('[data-photo-index]').forEach(button=>button.setAttribute('aria-pressed',String(Number(button.dataset.photoIndex)===index)));
    };
    image.onerror=()=>{if(token===requestId)label.textContent='这张照片暂未载入，请再点一次缩略图。';};
    image.src=photo.src;
  }
  function showViewer(items,index) {
    viewer={items,index};
    updateViewer();
    if(!dialog.open)dialog.showModal();
  }
  function updateViewer() {
    const item=viewer.items[viewer.index],image=document.querySelector('#photo-view-image');
    image.src=item.src;image.alt=item.alt;
    document.querySelector('#photo-view-title').textContent=viewer.items===scenarios?'场景应用提案':'雅安采风摄影';
    document.querySelector('#photo-view-caption').textContent=`${viewer.index+1} / ${viewer.items.length} · ${item.caption}`;
  }
  function advanceViewer(direction) {if(!viewer)return;viewer.index=(viewer.index+direction+viewer.items.length)%viewer.items.length;updateViewer();}
  host?.addEventListener('click',event=>{
    const button=event.target.closest('button');if(!button)return;
    if(button.hasAttribute('data-field')){const index=Number(button.dataset.field);renderGroup(index);host.querySelector(`[data-field="${index}"]`).focus({preventScroll:true});}
    else if(button.hasAttribute('data-photo-prev'))selectPhoto(positions[groupIndex]-1);
    else if(button.hasAttribute('data-photo-next'))selectPhoto(positions[groupIndex]+1);
    else if(button.hasAttribute('data-photo-index'))selectPhoto(Number(button.dataset.photoIndex));
    else if(button.hasAttribute('data-photo-open')){if(suppressOpen){suppressOpen=false;return;}showViewer(groupPhotos(),positions[groupIndex]);}
  });
  host?.addEventListener('keydown',event=>{
    if(!event.target.closest('.field-stage'))return;
    if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();selectPhoto(positions[groupIndex]+(event.key==='ArrowRight'?1:-1));}
  });
  host?.addEventListener('pointerdown',event=>{suppressOpen=false;if(event.target.closest('.field-photo-open'))pointerStart={x:event.clientX,y:event.clientY};});
  host?.addEventListener('pointercancel',()=>{pointerStart=null;});
  host?.addEventListener('pointerup',event=>{
    if(!pointerStart)return;
    const x=event.clientX-pointerStart.x,y=event.clientY-pointerStart.y;pointerStart=null;
    if(Math.abs(x)>50&&Math.abs(x)>Math.abs(y)*1.5){suppressOpen=true;selectPhoto(positions[groupIndex]+(x<0?1:-1));}
  });
  document.querySelectorAll('[data-scenario]').forEach(button=>button.addEventListener('click',()=>showViewer(scenarios,Number(button.dataset.scenario))));
  document.querySelector('#photo-view-prev').addEventListener('click',()=>advanceViewer(-1));
  document.querySelector('#photo-view-next').addEventListener('click',()=>advanceViewer(1));
  dialog.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();advanceViewer(event.key==='ArrowRight'?1:-1);}});
  renderGroup();
})();
