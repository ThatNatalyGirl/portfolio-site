console.log('tweet')

Vue.component('tweet', {
	props: ["tweet-object"],
	data: function() {
		return {}
	},
	template: `
		<div>
			I'm a tweet
			{{tweetObject.text}}<br>
			- @{{tweetObject.screen_name}}<br><br>
		</div>
	`
})