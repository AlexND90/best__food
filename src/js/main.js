const burger = require("./module/burger.js");
const swiper = require("./module/sw.js");

burger.onclick = function() {
    burger.classList.add('.burger__open')
}