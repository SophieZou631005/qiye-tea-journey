/* 七叶茶物展馆：筛选、设计档案、完整展板与本机茶篓。无网络接口。 */
(() => {
  'use strict';
  const { products, categories } = window.QIYE_CONTENT;
  const $ = (selector) => document.querySelector(selector);
  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));
  const STORAGE_KEY = 'qiye-tea-basket-v1';
  let saved = [];
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    saved = Array.isArray(value) ? [...new Set(value.filter(id => products.some(p => p.id === id)))] : [];
  } catch { /* 本机存储不可用时，仍可在本次浏览中收藏。 */ }

  let category = 'all';
  let savedOnly = false;
  let expanded = false;
  let currentId = products[0].id;
  let viewerOrder = products;
  let opener = null;
  const dialog = $('#product-dialog');
  const viewer = $('#product-viewer');
  const image = $('#product-image');

  function notice(message) {
    document.dispatchEvent(new CustomEvent('qiye:notice', { detail: message }));
  }

  function persist() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(saved)); } catch { /* 不影响浏览。 */ }
  }

  function getSelected() {
    return saved.map(id => products.find(product => product.id === id)).filter(Boolean);
  }

  function filteredProducts() {
    return products.filter(product =>
      (category === 'all' || product.category === category) && (!savedOnly || saved.includes(product.id))
    );
  }

  function categoryName(id) {
    return categories.find(item => item.id === id)?.name || '七叶设计提案';
  }

  function renderFilters() {
    $('#collection-filters').innerHTML = categories.map(item => {
      const count = item.id === 'all' ? products.length : products.filter(p => p.category === item.id).length;
      return `<button type="button" data-category="${item.id}" aria-pressed="${!savedOnly && category === item.id}">${item.name}<small>${String(count).padStart(2, '0')}</small></button>`;
    }).join('');
    $('#basket-count').textContent = saved.length;
    $('#basket-filter').setAttribute('aria-pressed', String(savedOnly));
  }

  function cardMarkup(product) {
    const inBasket = saved.includes(product.id);
    const index = products.indexOf(product) + 1;
    return `<article class="exhibit-card" id="exhibit-${product.id}">
      <button type="button" class="exhibit-image" data-product-open="${product.id}" aria-label="查看${escapeHTML(product.title)}完整设计">
        <img src="${product.thumb}" alt="${escapeHTML(product.alt)}" width="960" height="540" loading="lazy" decoding="async">
        <span class="exhibit-image-action">打开设计档案 ↗</span>
      </button>
      <div class="exhibit-copy">
        <div class="exhibit-meta"><span>${categoryName(product.category)} / ${String(index).padStart(2, '0')}</span><button type="button" class="save-tea" data-save-product="${product.id}" aria-pressed="${inBasket}" aria-label="${inBasket ? '从茶篓移出' : '收藏'}${escapeHTML(product.title)}">${inBasket ? '已入茶篓 ✓' : '入茶篓 ＋'}</button></div>
        <h3><button type="button" data-product-open="${product.id}">${escapeHTML(product.title)}</button></h3>
        <p class="exhibit-tag">${escapeHTML(product.tag)}</p>
        <p class="exhibit-caption">${escapeHTML(product.caption)}</p>
        <button class="exhibit-read" data-product-open="${product.id}">读这件茶物的故事 <span>↗</span></button>
      </div>
    </article>`;
  }

  function renderGallery() {
    renderFilters();
    const results = filteredProducts();
    const visible = expanded ? results : results.slice(0, 5);
    $('#gallery-count').textContent = `${visible.length} / ${results.length} 件设计`;
    $('#gallery-description').textContent = savedOnly
      ? '这是你的随行茶篓。喜欢的茶物，会成为茶路卡上的一份记忆。'
      : category === 'all' ? '每件茶物，都有自己的文化来处。' : `${categoryName(category)}，也可以成为今天的生活。`;
    $('#products').classList.toggle('is-compact', results.length % 2 === 0);
    $('#products').innerHTML = results.length ? visible.map(cardMarkup).join('') :
      '<div class="basket-empty"><span aria-hidden="true">❧</span><h3>茶篓，等你装进第一份心意。</h3><p>在任意设计旁点“入茶篓”，就能把喜欢的茶物留在这里。</p><button class="button secondary" data-view-all>回到全部茶物 ↗</button></div>';
    $('#show-more').hidden = results.length <= 5 || expanded;
    $('#show-more').innerHTML = `展开其余 ${Math.max(0, results.length - 5)} 件设计 <span>↓</span>`;
  }

  function updateSavedButtons() {
    document.querySelectorAll('[data-save-product]').forEach(button => {
      const product = products.find(p => p.id === button.dataset.saveProduct);
      const inBasket = saved.includes(product.id);
      button.setAttribute('aria-pressed', String(inBasket));
      button.setAttribute('aria-label', `${inBasket ? '从茶篓移出' : '收藏'}${product.title}`);
      button.textContent = inBasket ? '已入茶篓 ✓' : '入茶篓 ＋';
    });
    $('#basket-count').textContent = saved.length;
    const inBasket = saved.includes(currentId);
    $('#product-save').textContent = inBasket ? '已放进茶篓 · 移出 −' : '放进我的茶篓 ＋';
    $('#product-save').setAttribute('aria-pressed', String(inBasket));
  }

  function toggleSaved(id) {
    const product = products.find(item => item.id === id);
    if (!product) return;
    const removing = saved.includes(id);
    saved = removing ? saved.filter(item => item !== id) : [...saved, id];
    persist();
    if (savedOnly) renderGallery();
    updateSavedButtons();
    notice(`${product.title}${removing ? '已移出茶篓。' : '已放进茶篓。'}`);
    document.dispatchEvent(new CustomEvent('qiye:basket-change'));
  }

  function resetZoom() {
    viewer.classList.remove('is-zoomed');
    $('#product-zoom').setAttribute('aria-pressed', 'false');
    $('#product-zoom').textContent = '放大细节 ＋';
    viewer.scrollLeft = 0;
    viewer.scrollTop = 0;
  }

  function displayProduct(id) {
    const product = products.find(item => item.id === id);
    if (!product) return;
    currentId = product.id;
    resetZoom();
    viewer.classList.add('is-loading');
    viewer.classList.remove('has-error');
    image.alt = product.alt;
    image.src = product.image;
    $('#product-dialog-title').textContent = product.title;
    $('#product-category').textContent = `${categoryName(product.category)} / 文化的当代表达`;
    $('#product-tag').textContent = product.tag;
    $('#product-culture').textContent = product.culture;
    $('#product-material').textContent = product.material;
    $('#product-size').textContent = product.size;
    $('#product-original').href = product.image;
    $('#product-position').textContent = `${viewerOrder.findIndex(p => p.id === id) + 1} / ${viewerOrder.length}`;
    $('#product-story').dataset.jumpChapter = product.chapter;
    updateSavedButtons();
    dialog.scrollTop = 0;
  }

  function openProduct(id, trigger) {
    if (!products.some(product => product.id === id)) return;
    opener = trigger || document.activeElement;
    const results = filteredProducts();
    viewerOrder = results.some(product => product.id === id) ? results : products;
    displayProduct(id);
    if (!dialog.open) dialog.showModal();
  }

  function moveProduct(offset) {
    const current = viewerOrder.findIndex(product => product.id === currentId);
    displayProduct(viewerOrder[(current + offset + viewerOrder.length) % viewerOrder.length].id);
  }

  image.addEventListener('load', () => viewer.classList.remove('is-loading', 'has-error'));
  image.addEventListener('error', () => {
    viewer.classList.remove('is-loading');
    viewer.classList.add('has-error');
    notice('这张展板暂未载入，请点击“单独查看展板”重试。');
  });
  document.addEventListener('click', event => {
    const trigger = event.target.closest('[data-product-open]');
    if (trigger) openProduct(trigger.dataset.productOpen, trigger);
    const save = event.target.closest('[data-save-product]');
    if (save) toggleSaved(save.dataset.saveProduct);
    if (event.target.closest('[data-view-all]')) {
      savedOnly = false;
      category = 'all';
      renderGallery();
    }
  });
  $('#collection-filters').addEventListener('click', event => {
    const button = event.target.closest('[data-category]');
    if (!button) return;
    category = button.dataset.category;
    savedOnly = false;
    expanded = false;
    renderGallery();
    $(`[data-category="${category}"]`).focus({ preventScroll: true });
  });
  $('#basket-filter').addEventListener('click', () => {
    savedOnly = !savedOnly;
    category = 'all';
    expanded = true;
    renderGallery();
  });
  $('#show-more').addEventListener('click', () => {
    const firstNewId = filteredProducts()[5]?.id;
    expanded = true;
    renderGallery();
    if (firstNewId) $(`#exhibit-${firstNewId} .exhibit-image`).focus({ preventScroll: true });
  });
  $('#product-save').addEventListener('click', () => toggleSaved(currentId));
  $('#product-prev').addEventListener('click', () => moveProduct(-1));
  $('#product-next').addEventListener('click', () => moveProduct(1));
  $('#product-zoom').addEventListener('click', () => {
    const zoomed = viewer.classList.toggle('is-zoomed');
    $('#product-zoom').setAttribute('aria-pressed', String(zoomed));
    $('#product-zoom').textContent = zoomed ? '返回完整展板 −' : '放大细节 ＋';
  });
  dialog.addEventListener('keydown', event => {
    if (viewer.classList.contains('is-zoomed')) return;
    if (event.key === 'ArrowRight') { event.preventDefault(); moveProduct(1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); moveProduct(-1); }
  });
  dialog.addEventListener('close', () => {
    resetZoom();
    if (opener?.isConnected) opener.focus({ preventScroll: true });
  });

  window.QiyeGallery = {
    getSelected,
    open: openProduct,
    clear() {
      saved = [];
      savedOnly = false;
      category = 'all';
      expanded = false;
      persist();
      renderGallery();
      updateSavedButtons();
      document.dispatchEvent(new CustomEvent('qiye:basket-change'));
    }
  };
  renderGallery();
})();
