# jQuery Visible Elements

jQuery Visible Elements is a jQuery plugin which allows to check whether a element is fully visible in the current viewport or not. It becomes in handy when you want to animate elements of which parent is an element with an overflow : hidden, and you want to make sure the element is already in the screen prior to animation starts.

# Installation

[jQuery Visible Elements] requires jQuery. Add the script tag in your html:

``` html
<script src='path-to/jquery.js'></script>
<script src='path-to/jquery.visible-elements.min.js'></script>
```
[jQuery Visible Elements]: https://github.com/jm-jimenez/jquery-visible-elements/blob/master/jquery-visible-elements.min.js

# Usage
Just call the method isElementInViewport() for the desired element. It will return true if it's currently in the screen, or false otherwise
``` javascript
$(selector).isElementInViewport();
```

# Example

Check every element prepared with the class 'to-animate' every time the viewport is scrolled. If the element is now visible, it will be animated, and no longer will be checked.

```javascript

$(window).scroll(function(){
	$(".to-animate").each(function(){
		if($(this).isElementInViewport()){
			var element = this;
			$(element).addClass("animate");
			$(this).removeClass("to-animate");
		}
	});
	
```
