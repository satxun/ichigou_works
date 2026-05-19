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
	$('a[href^="#"]').click(function(){
		var href =$ (this).attr("href");
		var target = $(href=="#"||href=="" ? 'html':href);
		var position = target.offset().top;
		var ww = $(window).width();
		var x = 537

		if ( ww >= x) {
			$("body,html").animate({scrollTop:position- (ww/13)},500);
	} else {
			$("body,html").animate({scrollTop:position- (ww/8)},500);
	}
		return false;
	});
});


$(function() {
	var w = $(window).width();
	var x = 537
	if ( w <= x ) {
	$('.Toggle').click(function() {
		$(this).toggleClass('active');

		if ($(this).hasClass('active')) {
			$('.titleNav').addClass('active');
		} else {
			$('.titleNav').removeClass('active');
		}
	});
	}
});



