    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    menuBtn?.addEventListener('click', () => mobileMenu.classList.toggle('open'));

    // Header shadow on scroll + show toTop
    const header = document.getElementById('siteHeader');
    const toTop = document.getElementById('toTop');
    const addShadow = () => {
      const scrolled = window.scrollY > 8;
      header.style.boxShadow = scrolled ? '0 10px 24px rgba(0,0,0,.25)' : '0 10px 20px rgba(0,0,0,.15)';
      toTop.classList.toggle('show', window.scrollY > 500);
    };
    addShadow();
    document.addEventListener('scroll', addShadow, { passive: true });

    // Reveal on scroll (IntersectionObserver)
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: .2 });
    revealEls.forEach(el => io.observe(el));

    // Simple form validation + fake submit
    const form = document.getElementById('quoteForm');
    const formMsg = document.getElementById('formMsg');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      const errors = [];
      if (!data.name || data.name.trim().length < 3) errors.push('نام معتبر نیست.');
      if (!/^0\d{10}$/.test(data.phone || '')) errors.push('شماره تماس معتبر نیست.');

      if (errors.length) {
        formMsg.innerHTML = `<p class="error">${errors.join(' ')}</p>`;
        return;
      }
      formMsg.innerHTML = '<p class="success">درخواست شما ثبت شد. همکاران ما به زودی تماس می‌گیرند.</p>';
      form.reset();
    });