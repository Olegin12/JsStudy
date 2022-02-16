const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearClassActive()
        slide.classList.add('active')
    })
}

function clearClassActive(slide) {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}