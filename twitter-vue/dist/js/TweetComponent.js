'use strict';

console.log('tweet');

Vue.component('tweet', {
	props: ["tweet-object"],
	data: function data() {
		return {};
	},
	template: '\n\t\t<div>\n\t\t\tI\'m a tweet\n\t\t\t{{tweetObject.text}}<br>\n\t\t\t- @{{tweetObject.screen_name}}<br><br>\n\t\t</div>\n\t'
});
//# sourceMappingURL=TweetComponent.js.map
