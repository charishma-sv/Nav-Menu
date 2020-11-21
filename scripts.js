const menu = document.getElementById('nav');
menu.addEventListener('click', displayMenu);
function displayMenu() {
  let displayNav = document.getElementById('nav-head');
  console.log(displayNav.style.display);
  if (displayNav.style.display === '') {
    displayNav.style.display = 'block';
  } else {
    displayNav.style.display = '';
  }
}
