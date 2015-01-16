// If JS is disabled, CSS menu will still work
$(function() {
	$("li").removeClass("cssOnly");
});

//From the left
$(function() {
	$(".fromLeft a").hover(
		function(){
			$(this).find("span").stop(true, true).animate({ width: 'show' }, 1000);
		},
		function(){
			$(this).find("span").fadeOut(800);
	});
})

//From the top
$(function() {
	$(".fromTop a").hover(
		function(){
			$(this).find("span").stop(true, true).animate({ height: 'show' }, 1000);
		},
		function(){
			$(this).find("span").fadeOut(800);
	});
})

//From the right
$(function() {
	$(".fromRight a").hover(
		function(){
			$(this).find("span").stop(true, true).animate({ width: 'hide' }, 1000);
		},
		function(){
			$(this).find("span").fadeIn(800);
	});
})

//From the bottom
$(function() {
	$(".fromBottom a").hover(
		function(){
			$(this).find("span").stop(true, true).animate({ height: 'hide' }, 1000);
		},
		function(){
			$(this).find("span").fadeIn(800);
	});
})

//Slide IN-OUT
$(function() {
	$(".inOut a").hover(
		function(){
			$(this).find("span").stop(true, true).animate({ width: 'show' }, 1000);
		},
		function(){
			$(this).find("span").animate({ width: 'hide' }, 1000);
	});
})