const button = document.querySelector('.nav-toggle');
const nav = document.querySelector('#primary-nav');
if (button && nav) {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open', !expanded);
  });
}
