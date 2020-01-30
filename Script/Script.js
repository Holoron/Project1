document.addEventListener('DOMContentLoaded',function() {
    var swiper = new Swiper('.TabSwiper>.swiper-container', {
        slidesPerView: 4.43,
        spaceBetween: 2,
        freeMode: true,

    });

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
});
window.onclick = function (event) {
    if(event.target==document.getElementById("search"))
    {
        document.getElementsByClassName("list")[0].style.display="none";
        document.getElementsByClassName("search")[0].style.display="block";
    }
    if(event.target==document.getElementById("searchsecond"))
    {
        document.getElementsByClassName("search")[0].style.display="none";
        document.getElementsByClassName("list")[0].style.display="flex";
    }
}


function email() {
    var r=/^\w+@\w+\.\w{2,4}$/i;
    if(!r.test(document.getElementById("email").value))
    {
        document.getElementById("email").style.borderBottom=" 1px solid red";
        document.getElementById("email").style.borderTop=" 1px solid red";
        document.getElementById("email").style.borderLeft=" 1px solid red";
        document.getElementById("emaillabel").style.color="red";
        document.getElementById("email").focus();
    }
    else
    {
        document.getElementById("email").style.border="none";
        document.getElementById("emaillabel").style.color="black";
    }
}
function find() {
    for (var i=0;i<5;i++)
    {
        if(document.getElementsByClassName("inp")[i].value.trim()=="")
        {
            document.getElementsByClassName("label")[i].style.color="red";
            document.getElementsByClassName("label")[i].textContent="Неправильный формат ввода";
            document.getElementsByClassName("inp")[i].style.border="1px solid red";
        }
        else
        {
            document.getElementsByClassName("inp")[i].style.border="none";
            document.getElementsByClassName("label")[i].style.color="black";
            switch (i)
            {
                case 0:document.getElementsByClassName("label")[i].textContent="Откуда";break;
                case 1:document.getElementsByClassName("label")[i].textContent="Куда";break;
                case 2:document.getElementsByClassName("label")[i].textContent="Дата вылета";break;
                case 3:document.getElementsByClassName("label")[i].textContent="Ночей";break;
                case 4:document.getElementsByClassName("label")[i].textContent="Туристы";break;
            }
        }
    }
}