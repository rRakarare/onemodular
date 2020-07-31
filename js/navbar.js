var coll = document.querySelector(".collapsible");
var navline_home = document.querySelector("#navline-home");
var navline_digitalisierung = document.querySelector("#navline-digitalisierung");
var navline_bim5d = document.querySelector("#navline-bim5d");
var navline_wir = document.querySelector("#navline-wir");
var hamburger = document.querySelector("#nav-icon1");
var content = document.querySelector(".content");

console.log(Array.from(hamburger.children));



hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("open")
    coll.classList.toggle("active");
    if (content.style.maxHeight) {
        content.style.maxHeight = null;

        setTimeout(function () {

            navline_home.classList.remove('show')

        }, 150)
        setTimeout(function () {

            navline_digitalisierung.classList.remove('show')

        }, 100)
        setTimeout(function () {

            navline_bim5d.classList.remove('show')

        }, 50)
        setTimeout(function () {

            navline_wir.classList.remove('show')

        }, 0)


    } else {
        content.style.maxHeight = content.scrollHeight + "px";


        setTimeout(function () {

            navline_home.classList.add('show')

        }, 0)
        setTimeout(function () {

            navline_digitalisierung.classList.add('show')

        }, 50)
        setTimeout(function () {

            navline_bim5d.classList.add('show')

        }, 100)
        setTimeout(function () {

            navline_wir.classList.add('show')

        }, 150)
    }
});