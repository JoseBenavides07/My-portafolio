const typed = new Typed(".typed", {
    // strings: [
    //     '<span class="name-pink">José Benavides</span>'

    // ],
    stringsElement: '#cadena-texto',
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 75,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html',
})

const showMenu = document.querySelector(".menu-hidden-container")
const menuOpacity = document.querySelector(".menu-hidden")
document.addEventListener("click", e => {
    if (e.target.matches(".icon-more-recurses img")) {
        showMenu.classList.add("mostrar-menu")
        menuOpacity.classList.add("menu-hidden-transition")
    }
    if (e.target.matches(".cruz-cierre i")) {
        showMenu.classList.remove("mostrar-menu")
        menuOpacity.classList.remove("menu-hidden-transition")
    }
})