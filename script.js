$(function () {
	// Petlivers
	$(window).on('load scroll', function () {
		$('.petlivers').each(function () {
			//ターゲットの位置を取得
			var target = $(this).offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			var height = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > target - height) {
				//クラスを付与
				$(this).addClass('active');
			}
		});
	});
	// About
	//  $(window).on('load scroll',function (){
	//  	$('.about_1').each(function(){
	//  		//ターゲットの位置を取得
	//  		var target = $(this).offset().top;
	//  		//スクロール量を取得
	//  		var scroll = $(window).scrollTop();
	//  		//ウィンドウの高さを取得
	//  		var height = $(window).height();
	//  		//ターゲットまでスクロールするとフェードインする
	//  		if (scroll > target - height){
	//  			//クラスを付与
	//  			$(this).addClass('active');
	//  		}
	//  	});
	//  });
	$(window).on('load scroll', function(){
		//現時点のスクロールの高さ取得
		var scrollPosition = $(window).scrollTop();
		//ウィンドウの高さ取得
		var windowHeight = $(window).height();
	 
		$('.about-a').each(function(){
		  //要素の位置（高さ）を取得
		  var elemPosition = $(this).offset().top;
		  //スクロールの高さが要素の位置を超えたら以下のスタイルを適用
		  if(elemPosition < scrollPosition + windowHeight){
			$(this).css({
			  opacity: 1,
			  transform: 'translateY(0)'
			});
		  }
		});
	  });
	// Sponser
	$(window).on('load scroll', function () {
		$('.sponser').each(function () {
			//ターゲットの位置を取得
			var target = $(this).offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			var height = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > target - height) {
				//クラスを付与
				$(this).addClass('active');
			}
		});
	});
});

$(function () {
	// service
	$(window).on('load scroll', function () {
		$('.customer').each(function () {
			//ターゲットの位置を取得
			var target = $(this).offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			var height = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > target - height) {
				//クラスを付与
				$(this).addClass('active');
			}
		});
	});
	// customer
	$(window).on('load scroll', function () {
		$('.service').each(function () {
			//ターゲットの位置を取得
			var target = $(this).offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			var height = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > target - height) {
				//クラスを付与
				$(this).addClass('active');
			}
		});

	});
	// contact
	$(window).on('load scroll', function () {
		$('.ct-a').each(function () {
			//ターゲットの位置を取得
			var target = $(this).offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			var height = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > target - height) {
				//クラスを付与
				$(this).addClass('active');
			}
		});

	});
	// company
	$(window).on('load scroll', function () {
		$('.lw-m').each(function () {
			//ターゲットの位置を取得
			var target = $(this).offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			var height = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > target - height) {
				//クラスを付与
				$(this).addClass('active');
			}
		});

	});
	$(window).on('load scroll', function () {
		$('.cv-i ').each(function () {
			//ターゲットの位置を取得
			var target = $(this).offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			var height = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > target - height) {
				//クラスを付与
				$(this).addClass('active');
			}
		});

	});
});