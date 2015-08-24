$(document).ready(function() {
	$("#toggle").click(function () {
		$("#1").toggle('slow',function () {
			$("#2").toggle('slow',function () {
				$(".jumbotron").animate({height:'50px',width:'toggle'},600);
			});
		});
	});

	$(".jumbotron").click(function() {
		var div= $(".jumbotron");
		div.animate({height:'50px'});
		div.animate({width:'100px'});
		div.animate({height:'500px'});
		div.animate({width:'200px'});
	});

});