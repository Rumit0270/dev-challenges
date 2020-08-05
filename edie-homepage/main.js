var hamburgerTogger = document.querySelector('.hamburger');
var navbar = document.querySelector('.navbar');
var backdrop = document.querySelector('.backdrop');

function toggleNavLinks() {
  if (navbar.classList) {
    navbar.classList.toggle('navbar-expand');
  } else {
    // For IE9
    var classes = navbar.className.split(' ');
    var i = classes.indexOf('navbar-expand');

    if (i >= 0) {
      classes.splice(i, 1);
    } else {
      classes.push('navbar-expand');
    }

    navbar.className = classes.join(' ');
  }
}

hamburgerTogger.addEventListener('click', toggleNavLinks);
backdrop.addEventListener('click', toggleNavLinks);
