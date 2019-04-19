'use strict';

var holes = document.querySelectorAll('.milk');
var scoreBoard = document.querySelector('.score');
var moles = document.querySelectorAll('.oreo-game');
var start = document.querySelector('.startGame');
var modalClose = document.querySelector('.close');
var modal = document.querySelector('.modal-wrapper');

var lastHole = void 0;
var timeUp = false;
var score = 0;

var randomTime = function randomTime(min, max) {
	return Math.round(Math.random() * (max - min) + min);
};

var randomHole = function randomHole(holes) {
	var idx = Math.floor(Math.random() * holes.length);
	var hole = holes[idx];
	if (hole === lastHole) {
		return randomHole(holes);
	}
	lastHole = hole;
	return hole;
};

var peep = function peep() {
	var time = randomTime(500, 1000);
	var hole = randomHole(holes);
	hole.classList.add('up');
	setTimeout(function () {
		hole.classList.remove('up');
		if (!timeUp) peep();
	}, time);
};

var couponCode = function couponCode() {
	modal.classList.add('is-visible');
};

modalClose.addEventListener('click', function (event) {
	modal.classList.add('is-closing');
	setTimeout(function () {
		modal.classList.remove('is-visible');
		modal.classList.remove('is-closing');
	}, 500);
});

var startGame = function startGame() {
	scoreBoard.textContent = 0;
	timeUp = false;
	score = 0;
	peep();
	setTimeout(function () {
		return timeUp = true;
	}, 10000);
	setTimeout(couponCode, 10200);
};

var bonk = function bonk(e) {
	score++;
	console.log('am i a baddie?');
	this.parentNode.classList.remove('up');
	scoreBoard.textContent = score;
};

moles.forEach(function (mole) {
	return mole.addEventListener('click', bonk);
});
start.addEventListener('click', startGame);
//# sourceMappingURL=whack-oreo.js.map
