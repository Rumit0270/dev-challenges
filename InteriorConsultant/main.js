var hamburgerToggler = document.querySelector('.hamburger');
var navbar = document.querySelector('.navbar');

hamburgerToggler.addEventListener('click', function () {
  if (navbar.classList) {
    navbar.classList.toggle('animate');
  } else {
    // For IE9
    var classes = navbar.className.split(' ');
    var i = classes.indexOf('animate');

    if (i >= 0) classes.splice(i, 1);
    else classes.push('animate');
    navbar.className = classes.join(' ');
  }
});
