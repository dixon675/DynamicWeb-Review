// Joke Variables
var $def = $("#default");
var $j1 = $("#j1");
var $j2 = $("#j2");
var $j3 = $("#j3");
var $a1 = $("#a1");
var $a2 = $("#a2");
var $a3 = $("#a3");

// Image Variables
var $snail = $("#snail");
var $duck = $("#duck");
var $cow = $("#cow");

// Initial Visibility
$snail.hide();
$duck.hide();
$cow.hide();

// Joke/Image Swapper
$def.on("click", function(){
	$j1.show();
	$("main").css("background-color","#006400");
	$snail.fadeIn();
	$(this).hide();
});

$j1.on("click", function(){
	$a1.show();
});

$a1.on("click", function(){
	$j2.show();
	$duck.fadeIn();
	$("main").css("background-color","#F4DB7D");
	$j2.css("color","black");
	$(this).hide();
	$j1.hide();
	$snail.hide();
});

$j2.on("click", function(){
	$a2.show();
	$a2.css("color","black");
});

$a2.on("click", function(){
	$j3.show();
	$cow.fadeIn();
	$(this).hide();
	$j2.hide();
	$duck.hide();
	$("main").css("background-color","#5C4E4E");
});

$j3.on("click", function(){
	$a3.show();
});

$a3.on("click", function(){
	$def.show();
	$(this).hide();
	$j3.hide();
	$cow.hide();
	$("main").css("background-color","#162B32");
});