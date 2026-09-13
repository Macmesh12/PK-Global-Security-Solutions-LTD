document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('header nav');
  const navList = document.querySelector('header nav ul');
  const headerContainer = document.querySelector('header .container');

  if (nav && navList && headerContainer) {
    const toggleButton = document.createElement('button');
    toggleButton.type = 'button';
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.setAttribute('aria-controls', 'main-nav');
    toggleButton.setAttribute('aria-label', 'Toggle navigation menu');
    toggleButton.textContent = 'Menu';
    toggleButton.className = 'nav-toggle';

    nav.id = 'main-nav';
    navList.classList.add('nav-menu');
    headerContainer.insertBefore(toggleButton, nav);

    toggleButton.addEventListener('click', () => {
      const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
      toggleButton.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open');
    });
  }

  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false;
          field.setAttribute('aria-invalid', 'true');
          field.style.borderColor = '#b42318';
        } else {
          field.setAttribute('aria-invalid', 'false');
          field.style.borderColor = '#dfe3e8';
        }
      });

      if (!isValid) {
        alert('Please complete all required fields before submitting.');
        return;
      }

      const submitButton = form.querySelector('button[type="submit"]');
      if (submitButton) {
        submitButton.textContent = 'Message Sent';
        submitButton.disabled = true;
      }

      form.reset();
    });
  });

  const faqItems = document.querySelectorAll('details');

  faqItems.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqItems.forEach((other) => {
          if (other !== item) {
            other.removeAttribute('open');
          }
        });
      }
    });
  });

  const headerLinks = document.querySelectorAll('header nav a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  headerLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
});
