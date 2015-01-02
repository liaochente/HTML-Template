$(document).ready(function() {
	
	Cufon.replace('h2, h3, #contactMail, .mainText, #tableWrapper', { textShadow:'0px 1px #000' });
	Cufon.replace('.firstCol, .lastRow', { textShadow:'0px 1px #fff' });
	
	$('#topSlider').bxSlider({
		mode: 'horizontal',		
		controls: true
	});
	
	$('#lwSlider').tinycarousel({display: 4});
	
	$('#newsSlider').tinycarousel({
		axis: 'y',
		interval:true,
		intervaltime:3000,
		display:1,
		duration:2000
	});
	
	$('#lwSlider .overview li a').fancybox({
		overlayOpacity:0.8,
		overlayColor:'#000'	
	});
	
	$('a.moreCButton').click(function() {
		$(this).css({'display':'none'});
		$('#mainFeaturesCont').slideDown('slow');
		$('a.hideCButton').css({'display':'inline-block'}).click(function() {
			$('a.moreCButton').css({'display':'inline-block'});
			$(this).css({'display':'none'});
			$('#mainFeaturesCont').slideUp('slow');	
		});
	});
	
	$('a.moreCButton, a.hideCButton, .auBtn, .contBtn, a.buyNow, a.bigBuyNow').blend(200);
	
});