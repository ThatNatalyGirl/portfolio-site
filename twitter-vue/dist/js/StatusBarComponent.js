'use strict';

console.log('status-bar');

// console.log('status-bar')
Vue.component('status-bar', {
	props: ["hashtag", "tweetData"],
	data: function data() {
		return {};
	},
	template: '\n\t\t<div class="showing">\n\t\t\tShowing {{tweetData.length}} tweets containing {{hashtag}}\n\t\t</div>\n\t'
});

// :status-bar="statusBar"
// <div>{{tweet-data}}</div>
//# sourceMappingURL=StatusBarComponent.js.map
