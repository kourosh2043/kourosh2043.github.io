document.querySelectorAll('[data-pm]').forEach(b=>b.addEventListener('click',()=>document.getElementById('pm-'+b.dataset.pm).showModal()));
document.querySelectorAll('dialog.pm').forEach(d=>{d.addEventListener('click',e=>{if(e.target===d)d.close()});d.querySelector('[data-x]').addEventListener('click',()=>d.close())});
const t=document.querySelector('.top'),s=()=>t&&t.classList.toggle('sc',scrollY>4);s();addEventListener('scroll',s,{passive:true});
document.querySelectorAll('.toTop').forEach(b=>b.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'})));
const fd=n=>String(n).replace(/\d/g,d=>'۰۱۲۳۴۵۶۷۸۹'[d]);
document.querySelectorAll('.cpYear').forEach(e=>e.textContent=fd(new Date().getFullYear()));
// Interactive Capsule Pill Glider & Spotlight
(() => {
  const pill = document.querySelector('.nav-pill');
  if (!pill) return;
  const glider = pill.querySelector('.nav-glider');
  const hoverPill = pill.querySelector('.nav-hover-pill');
  const links = Array.from(pill.querySelectorAll('a'));
  if (!glider || !links.length) return;

  const moveBox = (el, targetLink, show = true) => {
    if (!el || !targetLink) return;
    const pillRect = pill.getBoundingClientRect();
    const linkRect = targetLink.getBoundingClientRect();
    const x = linkRect.left - pillRect.left - pill.clientLeft;
    el.style.width = `${linkRect.width}px`;
    el.style.transform = `translate3d(${x}px, 0, 0)`;
    el.style.opacity = show ? '1' : '0';
  };

  const syncActive = (animate = true) => {
    const active = pill.querySelector('a[aria-current="page"]') || links[0];
    if (!animate) {
      glider.style.transition = 'none';
    }
    moveBox(glider, active, true);
    if (!animate) {
      glider.offsetHeight;
      glider.style.transition = '';
    }
    pill.classList.add('js-pill-ready');
  };

  syncActive(false);
  window.addEventListener('load', () => syncActive(false));
  window.addEventListener('resize', () => syncActive(false), { passive: true });
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => syncActive(false));
  }

  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      if (hoverPill) {
        const isCurrent = link.getAttribute('aria-current') === 'page';
        moveBox(hoverPill, link, !isCurrent);
      }
    });
    link.addEventListener('focus', () => {
      if (hoverPill) {
        const isCurrent = link.getAttribute('aria-current') === 'page';
        moveBox(hoverPill, link, !isCurrent);
      }
    });
    link.addEventListener('click', () => {
      links.forEach(l => l.removeAttribute('aria-current'));
      link.setAttribute('aria-current', 'page');
      moveBox(glider, link, true);
      if (hoverPill) hoverPill.style.opacity = '0';
    });
  });

  pill.addEventListener('mouseleave', () => {
    if (hoverPill) hoverPill.style.opacity = '0';
  });

  pill.addEventListener('mousemove', e => {
    const rect = pill.getBoundingClientRect();
    pill.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    pill.style.setProperty('--my', `${e.clientY - rect.top}px`);
  }, { passive: true });

  window.__syncKouroshHeader = syncActive;
})();
