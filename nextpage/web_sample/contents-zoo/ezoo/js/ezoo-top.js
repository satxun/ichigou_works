$(function(){
	var timer = false;
	var prewidth = $(window).width();
	$(window).resize(function() {
		if (timer !== false) {
			clearTimeout(timer);
		}
		timer = setTimeout(function() {
			var nowWidth = $(window).width();
			if(prewidth !== nowWidth){
		// リロード
				location.reload();
			}
			prewidth = nowWidth;
		}, 500);
	});
});






$(function(){
	var w = $(window).width();
	var x = 376

	if ( w >= x ){
	$(window).scroll(function() {
		$(".scrollContent").each(function() {
		var elemPos = $(this).offset().top,
					scroll = $(window).scrollTop();
			if(scroll>=elemPos){
			$(this).addClass("scrollIn");
		} else {
			$(this).removeClass("scrollIn");
		}
		});
	});
	} else {
		$(".scrollContent").addClass("scrollIn");
		$(".blogContener").addClass("slider");
	}
});

$(function() {
	var w = $(window).width();
	var x = 537
	if ( w <= x ) {
	$(".Toggle").click(function() {
		$(this).toggleClass("active");

		if ($(this).hasClass("active")) {
			$(".scrollBox").addClass("active");
		} else {
			$(".scrollBox").removeClass('active');
		}
	});
	}
});


$(function(){
	$(window).on("scroll touchmove",function() {
		var back = $(".backTop");
		
		back.stop();
		back.hide();
		
		back.each(function() {
		var scroll = $(window).scrollTop(),
				windowHeight = $(window).height();
			if(scroll>=windowHeight){
			$(this).stop().delay(800).fadeIn(300);
				$(this).css("height","100px");
		} else {
			$(this).fadeOut(300);
		}
		});
	});
});




$(function(){
	$('.slider').slick({
		autoplay:true,
		autoplaySpeed:2500,
		dots:false,
		arrows:false,
		asNavFor:'.thumb',
		responsive:[
			{
				breakpoint: 376,
				settings:{
					arrows:true,
					dots:true,
					asNavFor:null,
					}
			},
			]
	});
	$('.thumb').slick({
		asNavFor:'.slider',
		focusOnSelect: true,
		centerMode:true,
		arrows:true,
		centerPadding: 0,
		slidesToShow:3,
		slidesToScroll:1,
		responsive:[
			{
				breakpoint: 376,
				settings:{
					asNavFor:null,
					}
			},
			]
});
});


$(function(){
	$('a[href^="#"]').click(function(){
		var href =$ (this).attr("href");
		var target = $(href=="#"||href=="" ? 'html':href);
		var position = target.offset().top;

		$("body,html").animate({scrollTop:position},500);
		return false;
	});
});
