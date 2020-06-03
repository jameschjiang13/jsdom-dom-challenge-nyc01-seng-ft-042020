const pageCounter = document.getElementById("counter")
// let counter = 0
const upSeconds = window.setInterval(counterCounter, [1000]);
pageCounter.likes = 0
const likesCount = document.getElementById("likes-counter")

function counterCounter() {
    // counter = counter + 1
    // console.log(counter)
    // console.dir(pageCounter)
    pageCounter.innerText = parseInt(pageCounter.innerText) + 1
}

// getting nodes for minus and plus
const minusButton = document.getElementById("minus")
const plusButton = document.getElementById("plus")

minusButton.addEventListener("click", function(e){
    console.log("minus clicked")
    pageCounter.innerText = pageCounter.innerText - 1
  })
plusButton.addEventListener("click", function(e){
    console.log("minus clicked")
    pageCounter.innerText = parseInt(pageCounter.innerText) + 1
  })

// a user should be able to like a number
const heartButton = document.getElementById("heart")

heartButton.addEventListener("click", function(e){
    console.dir(pageCounter)
    // currentNumber = pageCounter.innerText
    // pageCounter.currentNumber
    // pageCounter.likes = pageCounter.likes + 1

    // pageCounter.pageCounter.innerText.likes
    // pageCounter.6.likes = 2
    // pageCounter.5.likes = 1
    // console.log(`This number has been liked ${pageCounter.likes} times`)
    // likesCount.innerText = pageCounter.likes
})





//  a user should be able to see how many times a specific number has been liked
// get the number the user likes, the number currently on the screen 
// Increment a likes counter
// display that likes counter


