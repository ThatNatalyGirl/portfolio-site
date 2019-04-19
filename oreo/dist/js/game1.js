'use strict';

//game1
console.log('Make me a Monster!!!');

// let currentFace = 0;
// const faces = [
// 	"../img/green-oreo.png",
// 	"../img/blue-oreo.png",
// 	"../img/pink-oreo.png",
// 	"../img/red-oreo.png",
// 	"../img/yellow-oreo.png",
// ]

// currentFace++;
// change face image src to faces[currentFace] 


var chinOptions = document.querySelector('.chin ul');
var chinLeft = document.querySelector(".chin .previous");
var chinRight = document.querySelector(".chin  .next");

var faceOptions = document.querySelector('.face ul');
var faceLeft = document.querySelector(".face .previous");
var faceRight = document.querySelector(".face  .next");

var headOptions = document.querySelector('.head ul');
var headLeft = document.querySelector(".head .previous");
var headRight = document.querySelector(".head  .next");

var topOptions = document.querySelector('.top ul');
var topLeft = document.querySelector(".top .previous");
var topRight = document.querySelector(".top  .next");

var bottomOptions = document.querySelector('.bottom ul');
var bottomLeft = document.querySelector(".bottom .previous");
var bottomRight = document.querySelector(".bottom  .next");

var chinDeg = 0;
var faceDeg = 0;
var headDeg = 0;
var topDeg = 0;
var bottomDeg = 0;

//chin
chinLeft.onclick = function () {
	chinDeg = chinDeg + 90;
	chinOptions.style.transform = 'rotateY(' + chinDeg + 'deg)';
	console.log("left");
};
chinRight.onclick = function () {
	chinDeg = chinDeg - 90;
	chinOptions.style.transform = 'rotateY(' + chinDeg + 'deg)';
	console.log("right");
};

//face
faceLeft.onclick = function () {
	faceDeg = faceDeg + 72;
	faceOptions.style.transform = 'rotateY(' + faceDeg + 'deg)';
	console.log("left");
};
faceRight.onclick = function () {
	faceDeg = faceDeg - 72;
	faceOptions.style.transform = 'rotateY(' + faceDeg + 'deg)';
	console.log("right");
};

//head
headLeft.onclick = function () {
	headDeg = headDeg + 45;
	headOptions.style.transform = 'rotateY(' + headDeg + 'deg)';
	console.log("left");
};
headRight.onclick = function () {
	headDeg = headDeg - 45;
	headOptions.style.transform = 'rotateY(' + headDeg + 'deg)';
	console.log("right");
};

//top
topLeft.onclick = function () {
	topDeg = topDeg + 60;
	topOptions.style.transform = 'rotateY(' + topDeg + 'deg)';
	console.log("left");
};
topRight.onclick = function () {
	topDeg = topDeg - 60;
	topOptions.style.transform = 'rotateY(' + topDeg + 'deg)';
	console.log("right");
};

//bottom
bottomLeft.onclick = function () {
	bottomDeg = bottomDeg + 60;
	bottomOptions.style.transform = 'rotateY(' + bottomDeg + 'deg)';
	console.log("left");
};
bottomRight.onclick = function () {
	bottomDeg = bottomDeg - 60;
	bottomOptions.style.transform = 'rotateY(' + bottomDeg + 'deg)';
	console.log("right");
};

// var deg = 0;

// arrowsLeft.forEach(function(arrowLeft){
// 	arrowLeft.onclick = function() {
// 	deg = deg + 36;
// 	images.forEach(function(image){
// 		image.style.transform = `rotateY(${deg}deg)`;
// 		console.log("left");
// 		})
// 	}
// });

// arrowsRight.forEach(function(arrowRight){
// 	arrowRight.onclick = function() {
// 		deg = deg - 36;
// 	images.forEach(function(image){	
// 		images.style.transform = `rotateY(${deg}deg)`;
// 		console.log("right");
// 	}
// });

///need to fix the images bc it's an array
//# sourceMappingURL=game1.js.map
