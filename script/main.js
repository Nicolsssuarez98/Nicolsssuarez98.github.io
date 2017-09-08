$(document).ready(main);
 
let contador = 1;
 
function main () {
	$('.icon-menu').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});			
		}
	});
 
	// Mostramos y ocultamos submenus
	//$('.submenu').click(function(){
	//	if($(this).children('.children').css('display')=='none'){
	//		$('.children').slideUp();
	//		$(this).children('.children').slideDown();
	//	}else{
	//		$(this).children('.children').slideUp();
	//	}
	//});
}