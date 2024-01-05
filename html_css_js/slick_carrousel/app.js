// Podemos comprobar que nuestro archivo de scripts está bien configurado
//alert("hello Slick");

$(document).ready(function () {
  $(".carrousel_one").slick({
    accesibility: true,
    adaptiveHeight: true,
    autoplaySpeed: 3000,
    pauseOnFocus: true,

    //
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    // Para que los arrows estén sobre la imagen del carrousel
    arrows: true, // Manejamos las flechas con las clases slick-prev y slick-next
    dots: false,

    // Enable mouse dragging
    draggable: true, // default
    fade: true,
  });
});

$(document).ready(function () {
  $(".carrousel_two").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplaySpeed: 3000,
    draggable: true,
  });
});
