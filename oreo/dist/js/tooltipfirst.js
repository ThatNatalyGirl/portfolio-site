'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TooltipFirst = function () {
	function TooltipFirst(options) {
		_classCallCheck(this, TooltipFirst);

		// options.background = options.background || '#42dcf4';

		options = Object.assign({
			background: 'white'
		}, options);

		this.$triggerElement = document.querySelector(options.selector);
		if (!this.$triggerElement) {
			console.error('Could not find trigger element for tooltip: ', options.selector);
			return false;
		}

		this.$tooltip = document.createElement('div');
		this.$tooltip.innerHTML = options.text; // from the parameter
		this.$tooltip.style.position = 'absolute';
		this.$tooltip.style.fontFamily = 'Chewy';
		this.$tooltip.style.background = options.background;
		this.$tooltip.style.borderRadius = '5px';
		this.$tooltip.style.padding = '10px';
		this.$tooltip.style.transition = '1s';
		this.$tooltip.style.zIndex = 6000;

		this.$triggerElement.addEventListener('mouseover', this.showTooltip.bind(this));
		this.$triggerElement.addEventListener('mouseout', this.hideTooltip.bind(this));
	}

	_createClass(TooltipFirst, [{
		key: 'showTooltip',
		value: function showTooltip() {
			console.log('show tooltip');
			this.$tooltip.style.left = this.$triggerElement.getBoundingClientRect().right + window.scrollX + "px";
			this.$tooltip.style.top = this.$triggerElement.getBoundingClientRect().top + window.scrollY + 100 + "px";
			this.$tooltip.style.opacity = 1;
			// setTimeout(() => {
			// 	this.$tooltip.style.top = this.$triggerElement.getBoundingClientRect().top - 10 + "px";
			// 	this.$tooltip.style.opacity = 1;
			// }, 1)
			document.body.appendChild(this.$tooltip);
		}
	}, {
		key: 'hideTooltip',
		value: function hideTooltip() {
			console.log('hide tooltip');
			document.body.removeChild(this.$tooltip);
		}
	}]);

	return TooltipFirst;
}();

// let tooltip = function(options) {

// }
//# sourceMappingURL=tooltipfirst.js.map
