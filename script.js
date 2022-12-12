let hamburger = document.getElementById('hamburger')
menu = document.getElementById('menu')
header = document.getElementById('header')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active')
    menu.classList.toggle('active')
})

window.addEventListener('scroll', () => {
    header.style.background = window.pageYOffset > (header.offsetHeight) ? '#000' : ''
})
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  })
  
  mobiscroll.setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

mobiscroll.datepicker('#demo-range-selection', {
    controls: ['datetime'],
    select: 'range',
    display: 'inline',
    showRangeLabels: true,
    rangeStartLabel: 'Outbound',
    rangeEndLabel: 'Return',
    minRange: 3,
    maxRange: 10
});
