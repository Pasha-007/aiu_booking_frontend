let hamburger = document.getElementById('hamburger')
menu = document.getElementById('menu')
header = document.getElementById('header')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active')
    menu.classList.toggle('active')
})

