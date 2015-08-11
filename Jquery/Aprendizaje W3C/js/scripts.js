$(document).ready(function() {
	$("button").click(function () {
		$("#1").toggle();
	});

	$(".jumbotron").click(function() {
		$(this).hide('slow', function() {
			$("button").prop('class', 'btn btn-default')
		});
	});

	$(".jumbotron").mouseleave(function() {
		$(this).css('background-color', 'blue');
	});

	$(".jumbotron").mouseenter(function() {
		$(this).css('background-color','yellow');
	});
});