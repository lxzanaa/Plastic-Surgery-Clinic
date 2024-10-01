const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(function(accordionBtn) {
    accordionBtn.addEventListener('click', function() {
        const isOpen = accordionBtn.classList.toggle('max-h-[100%]');

        const texts = accordionBtn.querySelectorAll('.faq-text');
        const images = accordionBtn.querySelectorAll('.faq-img');
        const icon = accordionBtn.querySelector('.accordion-icon');

        texts.forEach(function(text) {
            if (isOpen) {
                text.classList.remove('hidden', 'opacity-0', 'max-h-0');
                text.classList.add('opacity-1', 'max-h-[100%]');
            } else {
                text.classList.add('hidden', 'opacity-0', 'max-h-0');
                text.classList.remove('opacity-1', 'max-h-[100%]');
            }
        });

        images.forEach(function(image) {
            if (isOpen) {
                image.classList.remove('opacity-0', 'max-h-0');
                image.classList.add('opacity-1', 'max-h-[100%]');
            } else {
                image.classList.add('opacity-0', 'max-h-0');
                image.classList.remove('opacity-1', 'max-h-[100%]');
            }
        });

        // Toggle icon
        icon.src = isOpen ? './img/accordion/minus.svg' : './img/accordion/plus.svg';
    });
});