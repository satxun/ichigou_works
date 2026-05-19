//トグルボタンが押されたときに、クラスを付与
$(function () {
    $('.Toggle').click(function () {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.mobile-nav').addClass('active'); //クラスを付与
        } else {
            $('.mobile-nav').removeClass('active'); //クラスを外す
        }
    });
});

   $(function() {
      $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        fade: true,
        arrows:false,
      });
    });
