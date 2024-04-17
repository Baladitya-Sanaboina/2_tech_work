let hamburgerIconEl = document.getElementById("hamburgerIcon");
let responsiveNavMbEl = document.getElementById("responsiveNavMb");

hamburgerIconEl.addEventListener("click",function(){
    responsiveNavMbEl.classList.toggle("responsive-nav-mb");
})