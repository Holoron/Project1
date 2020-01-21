document.addEventListener('DOMContentLoaded',function(){
        var swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 2,
        freeMode: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});
