"use strict";

// console.log('Heㄥp Nataㄥy, i @m stuck in tha computer')

// // Mobile Button for Drop Down menu
// var dropDownBtn = document.querySelector('.menu-button'); 

// if (dropDownBtn) {
// 	dropDownBtn.addEventListener('click', function() {
// 		let categoryMenu = document.querySelector('.menu-toggle');
// 		categoryMenu.classList.toggle('closed');
// 	});
// }

// ==================================================== Spinning performers
console.log("Hire Me");

var performersSpin = setInterval(function () {
	var performersWrapper = document.querySelector(".performer-imgs");

	// performersWrapper.insertBefore(performersWrapper.lastElementChild, performersWrapper.firstElementChild)
	performersWrapper.appendChild(performersWrapper.firstElementChild);
	console.log("and next");
}, 3000);

// let allPerformers = Array.prototype.slice.call(document.querySelectorAll(".performer-imgs .performer"));
// console.log(allPerformers)
// allPerformers.forEach(function(performer) {
// 	performer.addEventListener("mouseover", function(e) {
// 		clearInterval(performersSpin);
// 		console.log("mouse is here")
// 	});

// 	performer.addEventListener("mouseout", function(e) {   
// 		setInterval(function() {
// 			let performersWrapper = document.querySelector(".performer-imgs");

// 			performersWrapper.insertBefore(performersWrapper.lastElementChild, performersWrapper.firstElementChild)

// 		}, 3000);
// 	console.log("mouse is gone")
// 	});	
// });
// ==================================================== Vote now disappears on video play

var votingVideo = document.querySelector(".voting-sect video");
var voteLeft = document.querySelector(".voting-sect .vote-left");
var voteRight = document.querySelector(".voting-sect .vote-right");

votingVideo.addEventListener("play", function () {
	// setInterval(function(){
	voteLeft.style.opacity = "0";
	voteRight.style.opacity = "0";
	voteLeft.style.transition = ".5s";
	voteRight.style.transition = ".5s";
	// }, 3000);
}, true);

votingVideo.addEventListener("pause", function () {
	voteLeft.style.opacity = "1";
	voteRight.style.opacity = "1";
}, true);

// ==================================================== Picture hover state


// //Hovers for the Pictures and their Captions
var hoverInfoBox = document.querySelectorAll("figcaption");

hoverInfoBox.forEach(function (box) {
	var figCaption = box.parentNode;

	figCaption.addEventListener("mouseover", function () {
		// console.log(box.parentNode)
		box.style.display = 'block';
		box.style.opacity = '1';
	});

	figCaption.addEventListener("mouseleave", function () {
		box.style.opacity = '0';

		setTimeout(function () {
			box.style.display = 'none';
		}, 500);
	});
});
//# sourceMappingURL=main.js.map
