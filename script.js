
const menu = document.querySelector(".navbar");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
});

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = 'none';
    menuBtn.style.display = "inline-block";
};

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
});

closeBtn.addEventListener('click', closeNav)



var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});




const faqs = document.querySelectorAll('.city_text');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        const icon = faq.querySelector('.info i');
        if (icon.className === 'fa-regular fa-heart') {
            icon.className = 'fa-solid fa-heart'
        }
        else {
            icon.className = 'fa-regular fa-heart'
        }
    })
})