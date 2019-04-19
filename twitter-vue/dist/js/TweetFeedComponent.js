'use strict';

console.log('tweet-feed');

Vue.component('tweet-feed', {
	props: ["tweet-data"],
	data: function data() {
		return {};
	},
	template: '\n\t\t<div class="tweet-sect">\n\t\t\t<h3>Tweet Feed:</h3>\n\t\t\t<div class="tweets">\n\t\t\t\t<tweet v-for="oneTweetObject in tweetData" :tweet-object="oneTweetObject"></tweet>\n\t\t\t</div>\n\t\t</div>\n\t'
});
//# sourceMappingURL=TweetFeedComponent.js.map
