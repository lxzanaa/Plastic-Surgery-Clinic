window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section h4');

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight - 100) {
            section.classList.add('appear');
        }
    });
});