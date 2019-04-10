console.log(`I'm a cool cat I swear!`)

let circles = document.querySelectorAll(".circle-pic");

console.log(circles);

let performersSpin = setInterval(function() {
	for (let i = 0; i < circles.length; i++) {
		const element = circles[i];
		element.style.position = 'absolute',
		element.style.left =  (Math.random()-.1)*100+'%',
		element.style.top =  Math.random()*100+20+'%',
		element.style.opacity = Math.random(), 

		console.log(element);
	}
}, 3000);

