"use strict";

console.log("Hire Me Please");

var columns = document.querySelectorAll(".columns-sect div");

columns.forEach(function (column) {

	column.addEventListener("mouseover", function () {
		if (column.style.width = "33.3333%") {
			column.style.width = "70%";
		}

		column.children[1].style.opacity = "1";
		column.children[1].style.transition = ".25s";
	});

	column.addEventListener("mouseout", function () {
		column.style.width = "33.3333%";
		column.children[1].style.opacity = "0";
	});
});
//# sourceMappingURL=main.js.map
