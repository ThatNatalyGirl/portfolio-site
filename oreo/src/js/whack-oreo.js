const holes = document.querySelectorAll('.milk');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.oreo-game');
const start = document.querySelector('.startGame');
const modalClose = document.querySelector(`.close`)
const modal = document.querySelector(`.modal-wrapper`)

let lastHole;
let timeUp = false;
let score = 0;

let randomTime = function(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

let randomHole = function(holes) {
	const idx = Math.floor(Math.random() * holes.length);
	const hole = holes[idx];
	if (hole === lastHole) {
		return randomHole(holes);
	}
	lastHole = hole;
	return hole;
}

let peep = function() {
	const time = randomTime(500, 1000);
	const hole = randomHole(holes);
	hole.classList.add('up');
	setTimeout(() => {
		hole.classList.remove('up');
		if (!timeUp) peep();
	}, time);
}

let couponCode = function(){
	modal.classList.add(`is-visible`)
}

modalClose.addEventListener(`click`, function (event) {
	modal.classList.add('is-closing')
	setTimeout(function () {
		modal.classList.remove('is-visible')
		modal.classList.remove('is-closing')
	}, 500)
})
	

let startGame = function() {
	scoreBoard.textContent = 0;
	timeUp = false;
	score = 0;
	peep();
	setTimeout(() => timeUp = true, 10000)
	setTimeout(couponCode, 10200)
}



let bonk = function(e) {
	score++;
	console.log('am i a baddie?')
	this.parentNode.classList.remove('up');
	scoreBoard.textContent = score;
}


moles.forEach(mole => mole.addEventListener('click', bonk));
start.addEventListener('click', startGame);