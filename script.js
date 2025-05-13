document.addEventListener('DOMContentLoaded', () => {

  // Toggle mobile navigation menu
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');

    // Change aria-label for accessibility
    if (nav.classList.contains('active')) {
      navToggle.setAttribute('aria-label', 'Close navigation menu');
    } else {
      navToggle.setAttribute('aria-label', 'Open navigation menu');
    }
  });

  // Like button functionality
  const likeButtons = document.querySelectorAll('.like-btn');

  likeButtons.forEach(button => {
    const likeCountElem = button.nextElementSibling;

    button.addEventListener('click', () => {
      let count = parseInt(likeCountElem.textContent, 10);
      count++;
      likeCountElem.textContent = count;
      button.disabled = true;
      button.textContent = '👍 Liked';
    });
  });
});