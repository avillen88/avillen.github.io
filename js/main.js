$(document).ready(function(){
	$('.parent .footer-item').click(function() {
		if($(this).next('.nav-container').css('display') == 'none'){
			$(this).next('.nav-container').slideDown();
		}
		else {
			$(this).next('.nav-container').slideUp();
		}
	});
	
	$('.card-container .radio label').click(function() {
		$('.forward').removeAttr('disabled');
	});
	
	$('.btn-menu-movil').click(function() {
		if($('.footer-list').css('display') == 'none'){
			$('.footer-list').slideDown();
			$(this).addClass('open');
		}
		else {
			$('.footer-list').slideUp();
			$(this).removeClass('open');
		}
	});
	
	$('.sidebar-button').click(function() {
		if (parseInt($('.sidebar').css('margin-left')) == 0) {
			$('.sidebar').animate({ marginLeft: "-300"} , 1000);
			$('.resources-section').animate({ 
				marginLeft: "0",
				marginRight: "0"
			} , 1000);
			
			$(this).removeClass('open');
		}
		else {
			$('.sidebar').animate({ marginLeft: "0"} , 1000);
			$('.resources-section').animate({ 
				marginLeft: "300",
				marginRight: "-300"
			} , 1000);
			$(this).addClass('open');			
		}
	});
});