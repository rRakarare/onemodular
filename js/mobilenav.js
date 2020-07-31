var burgerBtn = document.querySelector('#toggle');
var mobile = document.querySelector('#overlay');


burgerBtn.addEventListener('click', function () {
    burgerBtn.classList.toggle('active');
    mobile.classList.toggle('open');
});