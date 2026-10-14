(function(){
  const doc=document.documentElement;
  let saved=null; try { saved=localStorage.getItem('lp-theme'); } catch (_) {}
  if(saved==='dark'||(saved===null&&window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches)) doc.dataset.theme='dark';
  const toggle=document.querySelector('[data-theme-toggle]');
  if(toggle){toggle.addEventListener('click',()=>{const next=doc.dataset.theme==='dark'?'light':'dark';doc.dataset.theme=next;try {localStorage.setItem('lp-theme',next);} catch (_) {}});}
  const menu=document.querySelector('[data-menu-toggle]');
  const nav=document.querySelector('[data-navlinks]');
  if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});}
  const search=document.querySelector('[data-publication-search]');
  if(search){search.addEventListener('input',()=>{let q=search.value.toLowerCase().trim();document.querySelectorAll('[data-publication]').forEach(el=>el.hidden=!el.textContent.toLowerCase().includes(q));document.querySelectorAll('[data-year-section]').forEach(el=>{el.hidden=!el.querySelector('[data-publication]:not([hidden])')});});}
})();