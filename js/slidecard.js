let cubes = document.querySelectorAll('.slidecard-nav-cube')
let slides = document.querySelectorAll('.slidecard-content')


cubes[0].addEventListener('click', () => {
    if (cubes[0].classList.contains("active")) {
        return;
    } else {
        slides[0].style.zIndex = 1;
        slides[0].classList.add('active')
        cubes[0].classList.add('active')
    }

    if (cubes[1].classList.contains("active")) {
        slides[1].style.zIndex = 0;
        slides[1].classList.remove('active')
        cubes[1].classList.remove('active')
    }

    if (cubes[2].classList.contains("active")) {
        slides[2].style.zIndex = 0;
        slides[2].classList.remove('active')
        cubes[2].classList.remove('active')
    }

});

cubes[1].addEventListener('click', () => {
    if (cubes[1].classList.contains("active")) {
        return;
    } else {
        slides[1].style.zIndex = 1;
        slides[1].classList.add('active')
        cubes[1].classList.add('active')
    }

    if (cubes[0].classList.contains("active")) {
        slides[0].style.zIndex = 0;
        slides[0].classList.remove('active')
        cubes[0].classList.remove('active')
    }

    if (cubes[2].classList.contains("active")) {
        slides[2].style.zIndex = 0;
        slides[2].classList.remove('active')
        cubes[2].classList.remove('active')
    }

});

cubes[2].addEventListener('click', () => {
    if (cubes[2].classList.contains("active")) {
        return;
    } else {
        slides[2].style.zIndex = 1;
        slides[2].classList.add('active')
        cubes[2].classList.add('active')
    }

    if (cubes[0].classList.contains("active")) {
        slides[0].style.zIndex = 0;
        slides[0].classList.remove('active')
        cubes[0].classList.remove('active')
    }

    if (cubes[1].classList.contains("active")) {
        slides[1].style.zIndex = 0;
        slides[1].classList.remove('active')
        cubes[1].classList.remove('active')
    }

});