(function(){
  const drawer = document.querySelector('[data-drawer]');
  const openBtn = document.querySelector('[data-open-drawer]');
  const closeBtn = document.querySelector('[data-close-drawer]');
  if(!drawer) return;

  const open = ()=> drawer.classList.add('open');
  const close = ()=> drawer.classList.remove('open');

  openBtn && openBtn.addEventListener('click', open);
  closeBtn && closeBtn.addEventListener('click', close);
  drawer.addEventListener('click', (e)=>{ if(e.target === drawer) close(); });

  // Active link highlighting
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('a[data-nav]').forEach(a=>{
    if((a.getAttribute('href')||'').toLowerCase() === path){ a.classList.add('active'); }
  });
})();
