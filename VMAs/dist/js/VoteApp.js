'use strict';

console.log("THIS IS THE Vote App");

var LOCAL_URL = 'http://localhost:1337/vote';
var voteBtns = document.querySelectorAll('.vote');
var API_BASE = 'http://159.89.151.127:1337/vote';
console.log(voteBtns);

voteBtns.forEach(function (voteBtn, i) {
  voteBtn.addEventListener('click', function () {

    if (this.getAttribute("disabled")) return;
    axios.post(LOCAL_URL + "/" + i).then(function (response) {
      console.log(response.data);
      // display the votes on the page
      var voteTotals = response.data;
      voteBtns.forEach(function (voteBtn, j) {
        voteBtn.setAttribute("disabled", "disabled");
        voteBtn.innerHTML = voteTotals[j];
      });
    }).catch(function (error) {
      console.log(error);
    });
  });
});

// let getData = function() {
// 	axios.get(url + '/0')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
// }

// voteBtns.forEach(function(voteBtn, i) {
//   console.log( voteBtn, i )

// })
//# sourceMappingURL=VoteApp.js.map
