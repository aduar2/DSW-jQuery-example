$(document).ready(function() {
	$("#h1").click(function() {
		$("p").css({"color":"red", "background-color": "yellow"});
		$("img").css("border", "25px solid black");
	});
	
	$("#p1").click(function() {
		$(".disappear").hide();
	});
	
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	
	$("#image").hover(function(){
		$("img").css("opacity": "60%);
			     }, function(){
			$("img").css("opacity": "100%");
		});
	});
});
