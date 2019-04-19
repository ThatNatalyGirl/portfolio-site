// console.log('hashtag-input')
// Vue.component('hashtag-input', {
// 	data: function () {
// 		return {
			
// 		}
// 	},
// 	template: `
// 		<div>
// 			Showing 13 tweets containing "#cats"
// 		</div>
// 	`
// })

console.log('hashtag-input')
Vue.component('hashtag-input', {
	props: [
		"default-hashtag"
	],
	data: function() {
		return {
			enteredHashtag: this.defaultHashtag
		}
	},
	watch: {
		enteredHashtag: function(){
			console.log("# life changed")
			if (this.enteredHashtag[0] != "#"){
				this.enteredHashtag = "#" + this.enteredHashtag;
			}

			//user must enter at least 3 characters
			if (this.enteredHashtag.length < 4){
				return
			}

			this.$emit("usertypeshashtag", this.enteredHashtag)
		}
	},
	template: `
		<div>
			<input name="hashtag" type="text" v-model="enteredHashtag">
		</div>
	`
})


// https://vuejs.org/v2/guide/components-custom-events.html
//:value="hashtag"