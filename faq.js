document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', function() {
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('active');
    });
  });