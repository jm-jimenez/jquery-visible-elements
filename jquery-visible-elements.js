$.fn.isElementInViewport = function (){
	var bottomHeight = $(window).scrollTop() + $(window).height();
	var elementOffset;
	
	if (when === "top"){
		elementOffset = $(this).offset().top;
	}
	else if (when === "mid"){
		elementOffset = $(this).offset().top + $(this).height()/2;
	}
	else{
		elementOffset = $(this).offset().top + $(this).height();
	}

	if (elementOffset <bottomHeight){
		return true;
	}
};