const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
    if(window.scrollY >= 100) {
    navbar.classList .add('scrolled')
} else {
    navbar.classList .add('scrolled')
}

})

document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
    document.querySelector('.hamburger').classList.toggle('active');
});