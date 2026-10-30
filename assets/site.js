// Starter kit: mobile menu and reveal on scroll. No dependencies.
document.documentElement.classList.add('js');
(function(){
  var nav=document.querySelector('.nav'), btn=document.querySelector('.nav__toggle');
  if(nav&&btn){btn.addEventListener('click',function(){var o=nav.classList.toggle('is-open');btn.setAttribute('aria-expanded',String(o));btn.textContent=o?'Close':'Menu';});}
  var els=[].slice.call(document.querySelectorAll('[data-reveal]'));
  if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){els.forEach(function(e){e.classList.add('is-in');});return;}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -10% 0px'});
  els.forEach(function(e,i){e.style.transitionDelay=(e.dataset.delay||0)+'ms';io.observe(e);});
})();
