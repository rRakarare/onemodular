let digitalisierung = document.querySelector('#digitalisierung')
let digitalisierung_nav_item = document.querySelectorAll('.digitalisierung-nav-item')

let bim5d = document.querySelector('#bim5d')
let bim5d_nav_item = document.querySelectorAll('.bim5d-nav-item')

let home = document.querySelector('#home')
let home_nav_item = document.querySelectorAll('.home-nav-item')

let wir = document.querySelector('#wir')
let wir_nav_item = document.querySelectorAll('.wir-nav-item')



// init controller Navbar
var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: home_nav_item.item(2).getBoundingClientRect().top / window.innerHeight,
    }
});

///// NAVBAR //////


window.addEventListener('resize', () => {
    home_scene.duration(home.clientHeight)
    digitalisierung_scene.duration(digitalisierung.clientHeight)
    bim5d_scene.duration(bim5d.clientHeight)
    wir_scene.duration(wir.clientHeight)
})


let home_scene = new ScrollMagic.Scene({
        triggerElement: "#home",

        duration: home.clientHeight
    })
    .on("enter", function () {
        home_nav_item.forEach(item => {
            item.classList.add('active-dark')
        })
    })
    .on("leave", function () {
        home_nav_item.forEach(item => {
            item.classList.remove('active-dark')
        })
    })
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller)




let digitalisierung_scene = new ScrollMagic.Scene({
        triggerElement: "#digitalisierung",
        duration: digitalisierung.clientHeight
    })
    .on("enter", function () {
        digitalisierung_nav_item.forEach(item => {
            item.classList.add('active-dark')
        })
    })
    .on("leave", function () {
        digitalisierung_nav_item.forEach(item => {
            item.classList.remove('active-dark')
        })
    })
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);



let bim5d_scene = new ScrollMagic.Scene({
        triggerElement: "#bim5d",
        duration: bim5d.clientHeight
    })
    .on("enter", function () {
        bim5d_nav_item.forEach(item => {
            item.classList.add('active-dark')
        })
    })
    .on("leave", function () {
        bim5d_nav_item.forEach(item => {
            item.classList.remove('active-dark')
        })
    })
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);


let wir_scene = new ScrollMagic.Scene({
        triggerElement: "#wir",
        duration: wir.clientHeight
    })
    .on("enter", function () {
        wir_nav_item.forEach(item => {
            item.classList.add('active-light')
        })
    })
    .on("leave", function () {
        wir_nav_item.forEach(item => {
            item.classList.remove('active-light')
        })
    })
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);




// init controller HEADINGS
var controller2 = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0.7,
    }
});

///// HEADINGS //////


new ScrollMagic.Scene({
        triggerElement: "#home",

    })
    .setClassToggle(".header-cap-heading", "active-dark")
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller2);


new ScrollMagic.Scene({
        triggerElement: "#digitalisierung",

    })
    .setClassToggle(".digitalisierung-cap-heading", "active-dark")
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller2);

new ScrollMagic.Scene({
        triggerElement: "#bim5d",

    })
    .setClassToggle(".bim5d-cap-heading", "active-dark")
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller2);

new ScrollMagic.Scene({
        triggerElement: "#wir",

    })
    .setClassToggle(".wir-cap-heading", "active-light")
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller2);


// init controller LOGO
var controller3 = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0.1,
    }
});

///// LOGO //////

let logo_wir_scene = new ScrollMagic.Scene({
        triggerElement: "#wir",
        duration: wir.clientHeight
    })
    .on("enter", function () {
        document.querySelectorAll('.logoanimate').forEach(item => {
            item.classList.add('active-light')
        })
        document.querySelectorAll('.hamline').forEach(item => {
            item.classList.add('white-light')
        })


        document.querySelector('.animatestroke').classList.add('stroke-white')
        document.querySelector('.navline').classList.add('line-white')
        Array.from(hamburger.children).forEach(item => {
            item.classList.add('white')
        })
    })
    .on("leave", function () {
        document.querySelectorAll('.logoanimate').forEach(item => {
            item.classList.remove('active-light')
        })
        document.querySelectorAll('.hamline').forEach(item => {
            item.classList.remove('white-light')
        })
        document.querySelector('.animatestroke').classList.remove('stroke-white')
        document.querySelector('.navline').classList.remove('line-white')
        Array.from(hamburger.children).forEach(item => {
            item.classList.remove('white')
        })
    })
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller3);