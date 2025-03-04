document.addEventListener('DOMContentLoaded', function() {
    let shown = false;
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100 && !shown) {
            document.querySelector('.floating-element').style.left = '20px';
            shown = true;
        } else if (window.scrollY < 50 && shown) {
            document.querySelector('.floating-element').style.left = '-60px';
            shown = false;
        }
    });
    
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', function() {
        alert('Menu functionality would be implemented here!');
    });
    
    setInterval(function() {
        const glitchTitle = document.querySelector('.glitch-title');
        glitchTitle.classList.add('active-glitch');
        setTimeout(function() {
            glitchTitle.classList.remove('active-glitch');
        }, 200);
    }, 3000);
});