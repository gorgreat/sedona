var toogleBtn = document.querySelector('.toogle');
var closeBtn = document.querySelector('.close__btn');
var mainNav = document.querySelector('.nav__items');
/*toogleBtn.onclick = function () {
  if (mainNav.style.display === "block") {
    mainNav.style.display = "none";
  } else {
    mainNav.style.display = "block";
  }
}
closeBtn.onclick = function () {
  if (mainNav.style.display === "block") {
    mainNav.style.display = "none";
  } else {
    mainNav.style.display = "block";
  }
}*/
toogleBtn.onclick = function() {
  mainNav.classList.toggle('main__nav-visible');
}
closeBtn.onclick = function() {
  mainNav.classList.toggle('main__nav-visible');
}