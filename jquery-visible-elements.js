$.fn.isElementInViewport = function (){
	var bottomHeight = $(window).scrollTop() + $(window).height();
	var elementOffset = $(this).offset().top + $(this).height();
	if (elementOffset <bottomHeight){
		return true;
	}
};