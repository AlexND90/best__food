let burger = document.querySelector(".burger");
let menuHeader = document.querySelector(".menu__header")

burger.onclick = function() {
    burger.classList.toggle('burger__open');
    menuHeader.classList.toggle('menu__active');
    menuHeader.classList.toggle('menu__header');
}
