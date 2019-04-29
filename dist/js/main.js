'use strict';

console.log('I\'m a cool cat I swear! I guess you came here because you want to know more about me! Sheesh, so needy. Ok, I\'m a nerd most of the time, I love to eat all the food, I love my cats,fiance and friends, I like to cook, play board games, travel, the ushhhee, I\'m way to friendly but I\'d rather talk to your pet than you in reality. People describe me as outgoing, peppy, and honest. Pretty much I\'m not the worst :D');

var circles = document.querySelectorAll(".circle-pic");

// console.log(circles);

var performersSpin = setInterval(function () {
	for (var i = 0; i < circles.length; i++) {
		var element = circles[i];
		element.style.position = 'absolute', element.style.left = (Math.random() - .1) * 100 + '%', element.style.top = Math.random() * 100 + 20 + '%', element.style.opacity = Math.random(), console.log(element);
	}
}, 3000);
//# sourceMappingURL=main.js.map
