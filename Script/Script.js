document.addEventListener('DOMContentLoaded',function(){
    //     var swiper = new Swiper('.TabSwiper>.swiper-container', {
    //     slidesPerView: 4.43,
    //     spaceBetween: 2,
    //     freeMode: true,
    // });
//
//     var swiper = new Swiper('.box_score_slider .swiper-container', {
//         effect: 'coverflow',
//         grabCursor: true,
//         centeredSlides: true,
//         slidesPerView: 'auto',
//         loop:true,
//         coverflowEffect: {
//             rotate: 0,
//             stretch: 247.12,
//             depth: 70,
//             modifier: 3,
//             slideShadows : false,
//         },
//         navigation: {
//             nextEl: '.box_score_slider .swiper-button-next',
//             prevEl: '.box_score_slider .swiper-button-prev',
//         },
//     });
// }
    window.onclick = function (event) {
        for (var i = 0; i < 7; i++) {
            for (var j = 0; j < 7; j++) {
                if (event.target == document.getElementsByName("menu")[i]|| event.target == document.getElementsByClassName("menutext")[i] ) {
                    document.getElementsByName("menu")[j].style.backgroundColor = "#03499E";
                    document.getElementsByClassName("menutext")[j].style.color = "white";
                }
            }
            if (event.target == document.getElementsByName("menu")[i] || event.target == document.getElementsByClassName("menutext")[i]) {
                document.getElementsByName("menu")[i].style.backgroundColor = "#F7F7F7";
                document.getElementsByClassName("menutext")[i].style.color = "#129FDF";
            }
        }
    }

});
