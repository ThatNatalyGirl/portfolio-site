console.log("THIS IS THE Vote App")

let LOCAL_URL = 'http://localhost:1337/vote';
let voteBtns = document.querySelectorAll('.vote');
const API_BASE = 'http://159.89.151.127:1337/vote';
console.log(voteBtns);

voteBtns.forEach(function(voteBtn, i) {
  voteBtn.addEventListener('click', function() {

  if (this.getAttribute("disabled")) return
    axios
      .post(LOCAL_URL + "/" + i)
      .then(function (response) {
        console.log(response.data)
        // display the votes on the page
        let voteTotals = response.data;
      voteBtns.forEach(function(voteBtn, j) {
        voteBtn.setAttribute("disabled", "disabled")
        voteBtn.innerHTML = voteTotals[j]
      })
    })
           .catch(function (error) {
        console.log(error)
    })
  })
   
})


<<<<<<< HEAD
=======


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

>>>>>>> master
