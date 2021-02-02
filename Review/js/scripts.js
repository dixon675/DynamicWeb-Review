var $def = $("#default");
var $j1 = $("#j1");
var $j2 = $("#j2");
var $j3 = $("#j3");
var $a1 = $("#a1");
var $a2 = $("#a2");
var $a3 = $("#a3");

$def.on("click", function(){
	$j1.show();
	$(this).hide();
});

$j1.on("click", function(){
	$a1.show();
});

$a1.on("click", function(){
	$j2.show();
	$(this).hide();
	$j1.hide();
});

$j2.on("click", function(){
	$a2.show();
});

$a2.on("click", function(){
	$j3.show();
	$(this).hide();
	$j2.hide();
});

$j3.on("click", function(){
	$a3.show();
});

$a3.on("click", function(){
	$def.show();
	$(this).hide();
	$j3.hide();
});