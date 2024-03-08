document.addEventListener('DOMContentLoaded', (event) => {

  // lazy-load
  const el = document.querySelectorAll('.lazy');
  window.observer = lozad(el);
  window.observer.observe();

  document.body.classList.add('loading');

  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 500)


  const navbar = document.querySelector('.header');

  if (window.scrollY > 0) {
    navbar.classList.add('fixed-header');
  } else {
    navbar.classList.remove('fixed-header');
  }
  window.addEventListener('mousewheel', function() {

    document.querySelectorAll('.scroll-btn').forEach((bits) => {
      bits.classList.remove('active')
    })
  });

  window.addEventListener('scroll', function() {

    if (window.scrollY > 0) {
      navbar.classList.add('fixed-header');
    } else {
      navbar.classList.remove('fixed-header');
    }
  });
  const burger =  document.querySelector('.burger');
  const mobMenu =  document.querySelector('.mobile-menu');
  document.querySelectorAll('.scroll-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.scroll-btn').forEach((bits) => {
        bits.classList.remove('active')
      })
      btn.classList.add('active')
      var targetSelector = this.getAttribute('data-target');
      var target = document.querySelector(targetSelector);
      var headerHeight = navbar.offsetHeight;
      var offsetTop = target.offsetTop - 100;
      burger.click()

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });

  burger.addEventListener('click', () => {
    if(burger.classList.contains('collapsed')) {
      navbar.classList.remove('color')
    } else {
      navbar.classList.add('color')
    }

  })


  // inview

  const blocks = document.querySelectorAll('.js-inview');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
        entry.target.classList.add('visible');

      } else {

      }
    });
  }, { threshold: 0.1 });

  blocks.forEach(block => observer.observe(block));

  // tabs
  const tabsBtn = document.querySelectorAll('.js-btn-tab');
  const colorChange = document.querySelectorAll('.js-color-change');

  colorChange.forEach((button) => {
    const id = button.getAttribute('data-id')
    button.addEventListener('click', () => {
      colorChange.forEach((button) => {
        button.classList.remove('active');
      });
      button.classList.add('active')

      document.querySelectorAll('.screens-block').forEach((blocks) => {
        blocks.classList.remove('active');
        if(id === blocks.getAttribute('data-id')) {
          blocks.classList.add('active');
          blocks.querySelector('.js-btn-tab[data-id="all"]').click()
        }
      });
    })
  })

  tabsBtn.forEach((btn) => {
    const id = btn.getAttribute('data-id')
    btn.addEventListener('click', () => {
      tabsBtn.forEach((button) => {
        button.classList.remove('active');
      });
      btn.classList.add('active')
      document.querySelectorAll('.js-item-tab').forEach((blocks) => {
        blocks.classList.remove('active');
        if(id === blocks.getAttribute('data-id')) {
          blocks.classList.add('active')
        }
      });
    })
  })
})
