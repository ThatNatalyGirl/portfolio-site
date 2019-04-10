'use strict';

console.log('I\'m a cool cat I swear!');

var circles = document.querySelectorAll(".circle-pic");

console.log(circles);

var performersSpin = setInterval(function () {
	for (var i = 0; i < circles.length; i++) {
		var element = circles[i];
		element.style.position = 'absolute', element.style.left = (Math.random() - .1) * 100 + '%', element.style.top = Math.random() * 100 + 20 + '%', element.style.opacity = Math.random(), console.log(element);
	}
}, 3000);
//# sourceMappingURL=main.js.map
