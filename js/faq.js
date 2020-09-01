let faqslide = document.querySelectorAll('.faqslide')
let faqcontent = document.querySelectorAll('.faqslide-content')


document.querySelectorAll('.faqslide').forEach((item, i) => {
    item.addEventListener('click', event => {
        item.classList.toggle("active")

        if (faqcontent[i].style.maxHeight) {
            faqcontent[i].style.maxHeight = null;


        } else {
            faqcontent[i].style.maxHeight = faqcontent[i].scrollHeight + "px";

        }
    })
})