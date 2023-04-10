$(document).ready(function(){
	$('.hamburger').click(function(){
		$(this).toggleClass('active');
		$('.menu-list').toggleClass('active');
	});
});