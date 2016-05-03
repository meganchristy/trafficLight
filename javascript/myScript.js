$(document).ready(function(){

	$("#redButton").hover(function(){
		
		$("#top").css("background-color", "red");

	});

	$("#redButton").mouseout(function(){
		
		$("#top").css("background-color", "darkred");

	});

	$("#yellowButton").hover(function(){
		
		$("#middle").css("background-color", "yellow");

	});

	$("#yellowButton").mouseout(function(){
		
		$("#middle").css("background-color", "#e6b800");

	});

	$("#greenButton").hover(function(){
		
		$("#bottom").css("background-color", "lawngreen");

	});

	$("#greenButton").mouseout(function(){
		
		$("#bottom").css("background-color", "forestgreen");

	});


});