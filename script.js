window.addEventListener('scroll', () => {
    const leftCard = document.getElementById('leftCard');
    const rightCard = document.getElementById('rightCard');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 300) { // Adjust the scroll position threshold as needed
        leftCard.style.opacity = '1';
        leftCard.style.transform = 'translateX(0)';
        rightCard.style.opacity = '1';
        rightCard.style.transform = 'translateX(0)';
    }
});
