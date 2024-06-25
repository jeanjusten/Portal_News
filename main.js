$(document).ready(function(){
    // Slick Carrousel - Trending news section
    $("#carousel-images").slick({
        autoplay: true,
        arrows: false,
        dots: true,
        swipe: false,
        appendDots: $("#carousel-images"),
    })

    // Slick Carrousel - Journalists section
    $("#carousel-jornalistas").slick({
        autoplay: false,
        dots: true,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }},
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 4
                }},
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3
                }}
          ]
      });

    
    // Change headline and news' content based on the current active slide
    $("#carousel-images").on('afterChange', function(event, slick, currentSlide){
        let currentSlideShown = $(slick.$slides.get(currentSlide))

        const mainHeadline1 = "Guerra da Ucrânia x Rússia chega ao fim"
        const mainHeadline2 = "Dólar fecha o dia em queda novamente"
        const mainHeadline3 = "Elon Musk anuncia criação de nova I.A"
        const paragraphText1 = "Após 23 meses de duração, o conflito entre Ucrânia e Rússia \
                                finalmente chega ao fim com acordo entre Putin e Zelenskyy."
        const paragraphText2 = "Dólar volta a enfraquecer após cair a R$ 4,8808 (-0,89%) na \
                                sexta-feira (21) devido à redução da carga tributária."
        const paragraphText3 = 'Nomeada "X.I.A", a mais nova Inteligência Artificial do bilionário \
                                Elon Musk promete chegar logo ao mercado e desbancar o ChatGPT.'

        if ($(currentSlideShown).attr("id") == "slick-slide00") {
            $("#dynamic-h3").fadeOut(250, function() {
                $("#dynamic-h3").text(mainHeadline1).fadeIn(250);
                $("#dynamic-p").text(paragraphText1).fadeIn(250);
                $("#botao-leia-mais").attr("href", "http://www.google.com/")
              });
        }

        else if ($(currentSlideShown).attr("id") == "slick-slide01") {
            $("#dynamic-h3").fadeOut(250, function() {
                $("#dynamic-h3").text(mainHeadline2).fadeIn(250);
                $("#dynamic-p").text(paragraphText2).fadeIn(250);
                $("#botao-leia-mais").attr("href", "http://www.instagram.com/")
              });
        }

        else if ($(currentSlideShown).attr("id") == "slick-slide02") {
            $("#dynamic-h3").fadeOut(250, function() {
                $("#dynamic-h3").text(mainHeadline3).fadeIn(250);
                $("#dynamic-p").text(paragraphText3).fadeIn(250);
                $("#botao-leia-mais").attr("href", "http://www.facebook.com/")
              });
        }
    });

    // Dropdown menu - Mobile display
    $(".botao-menu button").click(function(){
        $(".menu").slideToggle();
    })


})