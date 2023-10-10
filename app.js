const illustration = document.querySelector('.Section1 img')
const title = document.querySelector('.Section1 h1')

title.classList.add("active")

setTimeout(() => {
    title.classList.remove("active")
    title.style.opacity = 0.1
    illustration.classList.add("active")
}, 1500)

const items = gsap.utils.toArray(
    ['.Section2 .Gallery',
        '.Section2 .Box',
        ".Section3 .Gallery",
        ".Section3 .Box",
        ".Section5 .Box",
        ".Section6 .Box",
        ".Section4 iframe",
        ".Section5 .Gallery",
        ".Section6 .Gallery",
        ".Section7 div img",
        ".Section4 video"
    ]);

items.forEach((item, i) => {
    ScrollTrigger.create({
        // markers: true,
        trigger: item,
        start: "top bottom",
        toggleClass: 'active',
    })
})

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});