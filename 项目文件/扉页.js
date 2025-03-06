document.addEventListener('DOMContentLoaded', function() {
    const headerHeight = document.querySelector('header').offsetHeight;

    function scrollToSection() {
        window.scrollTo({
            top: headerHeight,
            behavior: 'smooth'
        });
    }

    document.addEventListener('wheel', function(event) {
        if (event.deltaY > 0) {
            scrollToSection();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowDown') {
            scrollToSection();
        }
    });
});