console.log('status-bar')

// console.log('status-bar')
Vue.component('status-bar', {
	props: [
		"hashtag", 
		"tweetData"
	],
	data: function () {
		return {
		}
	},
	template: `
		<div class="showing">
			Showing {{tweetData.length}} tweets containing {{hashtag}}
		</div>
	`
})

// :status-bar="statusBar"
	// <div>{{tweet-data}}</div>