$.fn.isElementInViewport = function (when){
	var bottomHeight = $(window).scrollTop() + $(window).height();
	var elementOffset;
	
	if (when === "top"){
		elementOffset = $(this).offset().top;
	}
	else if (when === "mid"){
		elementOffset = $(this).offset().top + $(this).height()/2;
	}
	else if (typeof when != "undefined"){
		if (when < 0){
			when = 0;
		}
		else if (when >100){
			when = 100;
		}
		elementOffset = $(this).offset().top + $(this).height()*(when/100);
	}
	else{
		elementOffset = $(this).offset().top + $(this).height();
	}

	if (elementOffset <bottomHeight){
		return true;
	}
};
