class Tooltip {
	constructor(options){

		// options.background = options.background || '#42dcf4';

		options = Object.assign({
			background: 'white'
		}, options)
		
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
		
		this.$triggerElement.addEventListener('mouseover', this.showTooltip.bind(this))
		this.$triggerElement.addEventListener('mouseout', this.hideTooltip.bind(this))

	}
	
	showTooltip() {
		console.log('show tooltip')
		this.$tooltip.style.left = this.$triggerElement.getBoundingClientRect().right + window.scrollX - 100 + "px";
		this.$tooltip.style.top = this.$triggerElement.getBoundingClientRect().top + window.scrollY + 100 + "px";
		this.$tooltip.style.opacity = 1;
		// setTimeout(() => {
		// 	this.$tooltip.style.top = this.$triggerElement.getBoundingClientRect().top - 10 + "px";
		// 	this.$tooltip.style.opacity = 1;
		// }, 1)
		document.body.appendChild(this.$tooltip);
	}

	hideTooltip() {
		console.log('hide tooltip')
		document.body.removeChild(this.$tooltip);
	}
}

// let tooltip = function(options) {

// }