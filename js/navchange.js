$(document).ready(function () {
	$.fn.changeThings = function() {
		var top1 = $('#page-1').offset().top;
		var top2 = $('#page-2').offset().top;
		var top3 = $('#page-3').offset().top;
		var top4 = $('#page-4').offset().top;
		var scrollPos = $(document).scrollTop() + 50;

		if (scrollPos >= top1 && scrollPos < top2) {
			$('.nav-button').css('color', '#181818');
			$('#nav1').css('display', 'none');
			$('#nav2').css('display', 'block');
			$('#nav3').css('display', 'block');
			$('#nav4').css('display', 'block');
		} else if (scrollPos >= top2 && scrollPos < top3) {
			$('.nav-button').css('color', '#ebeded');
			$('#nav1').css('display', 'block');
			$('#nav2').css('display', 'none');
			$('#nav3').css('display', 'block');
			$('#nav4').css('display', 'block');
		} else if (scrollPos >= top3 && scrollPos < top4) {
			$('.nav-button').css('color', '#ff0000');
			$('#nav1').css('display', 'block');
			$('#nav2').css('display', 'block');
			$('#nav3').css('display', 'none');
			$('#nav4').css('display', 'block');
		} else if (scrollPos >= top4) {
			$('.nav-button').css('color', '#181818');
			$('#nav1').css('display', 'block');
			$('#nav2').css('display', 'block');
			$('#nav3').css('display', 'block');
			$('#nav4').css('display', 'none');
		}
	}

	$('.wrapper').scroll(function () {
		$.fn.changeThings();
	});

});

