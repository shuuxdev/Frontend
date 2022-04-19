const uppernav = document.querySelectorAll('.upper-nav');
const lowernav = document.querySelectorAll('.lower-nav');
const observer = new IntersectionObserver(entry => {

    if(entry[0].isIntersecting)
    {
        lowernav[0].classList.remove('lower-nav-resize')

    }
    else 
    {
        lowernav[0].classList.add('lower-nav-resize')

    }
})
observer.observe(uppernav[0]);

