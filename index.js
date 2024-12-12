const topo = document.getElementById('topo')

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block"
    } else {
        scrollToTopBtn.style.display = "none"
    }
};

topo.addEventListener('click', () =>{
    window.scrollTo ({
        top: 0,
        behavior: "smooth"
    })
})