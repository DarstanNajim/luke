//Hamburger menu open&close //

const hamburger = document.getElementById('hamburger');
const headerLinks = document.getElementById('header-links');
const closeIcon = document.getElementById('close-icon')

hamburger.addEventListener('click', () => {
    headerLinks.classList.toggle('show');
    closeIcon.classList.toggle('show');
    hamburger.classList.toggle('hide')
});

closeIcon.addEventListener('click', () => {
    headerLinks.classList.toggle('show');
    closeIcon.classList.toggle('show');
    hamburger.classList.toggle('hide')
});

