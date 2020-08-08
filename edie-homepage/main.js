let hamburgerTogger = document.querySelector('.hamburger');
let navbar = document.querySelector('.navbar');
let backdrop = document.querySelector('.backdrop');
let navLinks = document.querySelectorAll('.nav__link');

///
function toggleNavLinks() {
  if (navbar.classList) {
    navbar.classList.toggle('navbar-expand');
  } else {
    // For IE9
    let classes = navbar.className.split(' ');
    let i = classes.indexOf('navbar-expand');

    if (i >= 0) {
      classes.splice(i, 1);
    } else {
      classes.push('navbar-expand');
    }

    navbar.className = classes.join(' ');
  }
}

function hideMobileNavLinks() {
  let classes = navbar.className.split(' ');
  let i = classes.indexOf('navbar-expand');

  if (i >= 0) {
    classes.splice(i, 1);
  }
  navbar.className = classes.join(' ');
}

hamburgerTogger.addEventListener('click', toggleNavLinks);
backdrop.addEventListener('click', toggleNavLinks);
///

for (let i = 0; i < navLinks.length; i++) {
  let navLink = navLinks[i];

  navLink.addEventListener('click', hideMobileNavLinks);
}
