const navLinks = document.querySelectorAll('li.nav-item');

const url = window.location.href;

navLinks.forEach((item) => {
  item.classList.remove('active');

  if (item.firstElementChild.href == url) {
    item.classList.add('active');
  }
});
