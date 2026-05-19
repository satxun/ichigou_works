jQuery(function($){
    $('.slider').each(function(){
		$(this).slick({
			autoplay:true,
			autoplaySpeed:1000,
			dots:false,
            
		});
	});
    
  $('.slider__item').slick({
				infinite: true, //スライドのループ有効化
				slidesToShow: 3, //表示するスライドの数
				focusOnSelect: true, //フォーカスの有効化
				asNavFor: '.slider', //thumbnailクラスのナビゲーション
			});  
    
});	