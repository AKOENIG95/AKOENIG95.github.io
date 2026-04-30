(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  if (!reduceMotion) {
    const targets = document.querySelectorAll('.heading, .lead, .about-text, .list, .interlude, .pullquote');
    targets.forEach(t => t.classList.add('reveal'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }});
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    targets.forEach(t => io.observe(t));
  }

  const carousel = document.getElementById('hero-carousel');
  if (carousel && !reduceMotion) {
    const slides = carousel.querySelectorAll('img');
    if (slides.length > 1) {
      let current = 0;
      let timer = null;
      let inView = false;

      const advance = () => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
      };
      const start = () => {
        if (timer || !inView || document.hidden) return;
        timer = setInterval(advance, 1000);
      };
      const stop = () => {
        if (timer) { clearInterval(timer); timer = null; }
      };

      const vio = new IntersectionObserver((entries) => {
        inView = entries[0].isIntersecting;
        inView ? start() : stop();
      }, { threshold: 0 });
      vio.observe(carousel);

      document.addEventListener('visibilitychange', () => {
        document.hidden ? stop() : start();
      });
    }
  }
})();
