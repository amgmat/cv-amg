$(document).ready(function(){

	$('.subir').click(function(e){
		e.preventDefault();
		$('html,body').animate({
			scrollTop: 0
		}, 750);

		return false;
	});
});