$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});


/* Slider Scroll carousel principal  */

$(document).ready(function () {
    $('.mySwiper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});


/*
"slidesToShow": número de slides a serem exibidos simultaneamente no carousel.

"slidesToScroll": número de slides que o carousel deve avançar ou retroceder quando a seta de navegação é clicada.

"autoplay": define se o carousel deve ser executado automaticamente.

"autoplaySpeed": tempo, em milissegundos, entre cada transição automática de slide.

"arrows": define se as setas de navegação devem ser exibidas.

"prevArrow": elemento HTML que representa a seta "anterior".

"nextArrow": elemento HTML que representa a seta "próxima".

"dots": define se os pontos de navegação devem ser exibidos.

"responsive": define a configuração do carousel para diferentes tamanhos de tela. O "breakpoint" define o tamanho mínimo da tela e "settings" define as opções do carousel para esse tamanho de tela específico.
*/