/*PARTE DE header-content container*/
/*Lo que haces que se muevan para los costados la parte de header-container*/
var swiper = new Swiper(".mySwiper-1", {
    slidesPerView : 1,
    spaceBetween : 30,
    loop : true,
    pagination: {
        el : ".swiper-pagination",
        clickable : true,
    },
    navigation : {
        nextE1 : ".swiper-button-next",
        prevE1 : ".swiper-button-prev",
    }
});


/*PARTE DE products*/
/*Al hacer click encima de Hamburguesa - Burritos o Variedades, este cambiara la imagen  y la informacion*/
var swiper = new Swiper(".mySwiper-2", {
    slidesPerView : 3,
    spaceBetween : 20,
    loop : true,
    loopFillGroupWithBlank:true,
    navigation : {
        nextE1 : ".swiper-button-next",
        prevE1 : ".swiper-button-prev",
    },
    breakpoints : {
        0: {
            slidesPerView : 1,
        },
        520: {
            slidesPerView : 2,
        },
        950: {
            slidesPerView : 3,
        }
    }
});

let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input){
    input.addEventListener('change', function(){
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    })
});