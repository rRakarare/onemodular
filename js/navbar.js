var hamburger = document.querySelector("#nav-icon1");
var content = document.querySelector(".content");
var navitems = document.querySelectorAll(".navsign")

content.style.maxHeight = content.scrollHeight + "px";


async function show(list) {
    list.forEach(el => {
        el.classList.add('show')
    });
}

async function hide(list) {
    list.forEach(el => {
        el.classList.remove('show')
    });
}

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("open")

    if (content.style.maxHeight) {
        content.style.maxHeight = null;

        hide(navitems)

    } else {
        content.style.maxHeight = content.scrollHeight + "px";

        show(navitems)
    }
});