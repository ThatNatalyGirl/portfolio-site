"use strict";

console.log("All the little birdies on Jay Bird Street, love to hear the robin go tweet tweet tweet");

var TWITTER_SEARCH_URL = "http://circuslabs.net/~chris.silich/twitter-proxy/twitter-proxy.php?op=search_tweets&q=";

var app = new Vue({
	el: "#app",
	data: {
		tweetData: [],
		hashtag: "#yourHashtagHere"
	},
	watch: {
		hashtag: function hashtag() {
			console.log("OMG I changed");
			this.doTwitterSearch();
		}
	},
	created: function created() {
		this.doTwitterSearch();
	},
	methods: {
		newHashtagRecievedFromChildComponent: function newHashtagRecievedFromChildComponent(newHashtag) {
			console.log("I heard", newHashtag);
			this.hashtag = newHashtag;
		},
		doTwitterSearch: function doTwitterSearch() {
			var _this = this;

			axios.get(TWITTER_SEARCH_URL + encodeURIComponent(this.hashtag)).then(function (response) {
				console.log("twitter said", response.data.statuses);
				_this.tweetData = response.data.statuses;
			}).catch(function (error) {
				console.warn("Oh noes!", error);
			});
		}
	}
});

///Note. To use 'this' in Axios call, we have to use arrow functions so that 'this' does not get redefined by axios


// let app = new Vue({
// 	el: "#app",
// 	data: {
// 		tweetData:[]
// 		inputValue: ""
// 	},
// 	created: function() {
// 		axios.get(TWITTER_SEARCH_URL + "bacon")
// 		.then((response) =>{
// 			console.log("twitter said", response.data.statuses)
// 			this.tweetData = response.data.statuses;
// 		})
// 		.catch((error) =>{
// 			console.warn("Oh noes!", error)
// 		})
// 	},
// 	function(){
// 		this.inputValue = 
// 	},
// 	methods:{

// 	}
// });
//# sourceMappingURL=main.js.map
