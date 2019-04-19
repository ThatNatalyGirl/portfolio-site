console.log('tweet-feed')

Vue.component('tweet-feed', {
	props: ["tweet-data"],
	data: function () {
		return {
		}
	},
	template: `
		<div class="tweet-sect">
			<h3>Tweet Feed:</h3>
			<div class="tweets">
				<tweet v-for="oneTweetObject in tweetData" :tweet-object="oneTweetObject"></tweet>
			</div>
		</div>
	`
})