
var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: null,
    duration: 1000
};

ScrollReveal().reveal('.s11', slideUp);
ScrollReveal().reveal('.s12', slideUp);
ScrollReveal().reveal('.s31', slideUp);
ScrollReveal().reveal('.s32', slideUp);
ScrollReveal().reveal('.s41', slideUp);
ScrollReveal().reveal('.s42', slideUp);
ScrollReveal().reveal('.s51', slideUp);
ScrollReveal().reveal('.s52', slideUp);


const closeMenu = () => {
    let menu = document.getElementById("menu")
    let menu2 = document.getElementById("menu2")
    menu.style.width = 0
    menu2.style.width = 0
    menu.style.transition = '1s'
    menu2.style.transition = '1s'
    setTimeout(()=>{
        menu.style.display = 'none'
        menu2.style.display = 'none'
    },500)
}

const openMenu = () => {
    let menu = document.getElementById("menu")
    let menu2 = document.getElementById("menu2")
    menu.style.display = 'unset'
    menu2.style.display = 'unset'
    menu.style.transition = '1s'
    menu2.style.transition = '1s'
    menu.style.width = "100vw"
    menu2.style.width = "330px"
}