let digitalisierung = document.querySelector('#digitalisierung')
let digitalisierung_nav_item = document.querySelectorAll('.digitalisierung-nav-item')

let bim5d = document.querySelector('#bim5d')
let bim5d_nav_item = document.querySelectorAll('.bim5d-nav-item')

let home = document.querySelector('#home')
let home_nav_item = document.querySelectorAll('.home-nav-item')

let wir = document.querySelector('#wir')
let wir_nav_item = document.querySelectorAll('.wir-nav-item')

let boxes = document.querySelector('#boxes')
let boxes_nav_item = document.querySelectorAll('.boxes-nav-item')

let faq = document.querySelector('#faq')
let faq_nav_item = document.querySelectorAll('.faq-nav-item')



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
            item.classList.add('active-dark')
        })
    })
    .on("leave", function () {
        wir_nav_item.forEach(item => {
            item.classList.remove('active-dark')
        })
    })
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);


let boxes_scene = new ScrollMagic.Scene({
        triggerElement: "#boxes",
        duration: boxes.clientHeight
    })
    .on("enter", function () {
        boxes_nav_item.forEach(item => {
            item.classList.add('active-dark')
        })
    })
    .on("leave", function () {
        boxes_nav_item.forEach(item => {
            item.classList.remove('active-dark')
        })
    })
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);

let faq_scene = new ScrollMagic.Scene({
        triggerElement: "#faq",
        duration: faq.clientHeight
    })
    .on("enter", function () {
        faq_nav_item.forEach(item => {
            item.classList.add('active-dark')
        })
    })
    .on("leave", function () {
        faq_nav_item.forEach(item => {
            item.classList.remove('active-dark')
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
    .setClassToggle(".wir-cap-heading", "active-dark")
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller2);

new ScrollMagic.Scene({
        triggerElement: "#boxes",

    })
    .setClassToggle(".boxes-cap-heading", "active-dark")
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller2);

new ScrollMagic.Scene({
        triggerElement: "#faq",

    })
    .setClassToggle(".faq-cap-heading", "active-dark")
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller2);


// init controller LOGO
var controller3 = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0.1,
    }
});


//// BOXES /////

// init controller LOGO
var controller4 = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0.2,
    }
});




let box1 = document.querySelector('.box-1');
let box2 = document.querySelector('.box-2');
let box3 = document.querySelector('.box-3');
let box4 = document.querySelector('.box-4');

var timeouts = [];


let boxes_scale_scene = new ScrollMagic.Scene({
        triggerElement: "#boxes",
        duration: boxes.clientHeight
    })


    .on("enter", function () {

        for (var i = 0; i < timeouts.length; i++) {
            clearTimeout(timeouts[i]);
        }

        timeouts.push(setTimeout(() => {
            box1.classList.add('scale-in');
        }, 100))
        timeouts.push(box2in = setTimeout(() => {
            box2.classList.add('scale-in');
        }, 200))
        timeouts.push(box3in = setTimeout(() => {
            box3.classList.add('scale-in');
        }, 300))
        timeouts.push(box4in = setTimeout(() => {
            box4.classList.add('scale-in');
        }, 400))

    })
    .on("leave", function () {

        for (var i = 0; i < timeouts.length; i++) {
            clearTimeout(timeouts[i]);
        }

        timeouts.push(box4out = setTimeout(() => {
            box4.classList.remove('scale-in');
        }, 100))
        timeouts.push(box3out = setTimeout(() => {
            box3.classList.remove('scale-in');
        }, 200))
        timeouts.push(box2out = setTimeout(() => {
            box2.classList.remove('scale-in');
        }, 300))
        timeouts.push(box1out = setTimeout(() => {
            box1.classList.remove('scale-in');
        }, 400))

    })
   // .addIndicators() // add indicators (requires plugin)
    .addTo(controller4);