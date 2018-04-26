window.onload = function () { 

	$("#read-more-button").click(function() {
    $('html,body').animate({
        scrollTop: $("#description").offset().top},
        'slow');
	});
}