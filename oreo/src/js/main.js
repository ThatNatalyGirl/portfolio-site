console.log(`Eat More Oreos`)

//Showing Navigation on Air Balloon
var navItem = document.querySelectorAll("header nav ul a");
var nav = document.querySelector("nav");
var ladder = document.querySelector(".ladder")

navItem.forEach(function(element){
		element.style.color = "transparent";	
	});
ladder.style.display = "none";

nav.addEventListener("mouseover", function(){
	navItem.forEach(function(element){
		element.style.color = "#fff";	
	});
	ladder.style.display = "block";
});

nav.addEventListener("mouseout", function(){
	navItem.forEach(function(element){
		element.style.color = "transparent";	
	});
	ladder.style.display = "none";
});



//oreo flavors showing
var oreos = document.querySelectorAll(".flavorSect a img")

oreos.forEach(function(oreo){
	var label = oreo.nextSibling.nextSibling
	oreo.addEventListener("mouseover", function(){
		label.style.opacity = "1"
		console.log("I'm an oreo")
	})

	oreo.addEventListener("mouseout", function(){
		label.style.opacity = "0"
	})
})



// (function () {
// 	var controller = new ScrollMagic.Controller({reverse:true, offset: '0px'});
  
// 	new ScrollMagic.Scene({triggerElement: ".cloud-4"})
// 		.setClassToggle(".logo-moving", ".not-smaller") // add class toggle
//         .addTo(controller);
//         new ScrollMagic.Scene({triggerElement: ".videoSect"})
// 		.setClassToggle(".logo", "no-z-index") // add class toggle
// 		.addTo(controller)
//         new ScrollMagic.Scene({triggerElement: ".videoSect"})
// 		.setClassToggle(".logo-moving", "is-smaller") // add class toggle
// 		.addTo(controller);
// 	new ScrollMagic.Scene({triggerElement: ".game2Sect"})
// 		.setClassToggle(".logo-moving", "is-dunking") // add class toggle
// 		.addTo(controller);
// })();

// let tt1 = new TooltipFirst({
// 	text: 'Strawberry Shortcake',
// 	selector: '#shortcake',
// })

// let tt2 = new Tooltip({
// 	text: 'Golden',
// 	selector: '#golden',
// })

// let tt3 = new Tooltip({
// 	text: 'Peanut Butter',
// 	selector: '#pb',
// })

// let tt4 = new Tooltip({
// 	text: 'Red Velvet',
// 	selector: '#redvelvet',
// })

// let tt5 = new Tooltip({
// 	text: 'Mint Chocolate',
// 	selector: '#mint',
// })

// let tt6 = new Tooltip({
// 	text: 'Birthday Cake',
// 	selector: '#bday',
// })

// let tt7 = new Tooltip({
// 	text: 'Pumpkin Spice',
// 	selector: '#pspice',
// })

// let tt8 = new Tooltip({
// 	text: 'Classic',
// 	selector: '#orig',
// })

// let tt9 = new Tooltip({
// 	text: 'Lemon',
// 	selector: '#lemon',
// })


//Recipe Book

var leftArrow = document.querySelector(".recipeSect .book .previous");
var rightArrow = document.querySelector(".recipeSect .book .next");
var page2 = document.querySelector(".recipeSect .book .page-2");
var page3 = document.querySelector(".recipeSect .book .page-3");

leftArrow.addEventListener("click", function(event){
	page2.style.transform = "rotateY(0deg)"
	page3.style.transform = "rotateY(180deg)"
	console.log("right")
})

rightArrow.addEventListener("click", function(event){
	page2.style.transform = "rotateY(180deg)"
	page3.style.transform = "rotateY(0deg)"
	console.log("left")
})






