let count = {
    heads: 0,
    tails: 0
}

document.addEventListener('DOMContentLoaded', function () {
    // TODO: Add event listener and handler for flip and clear buttons
    document.querySelector('#flip').addEventListener('click', function(e) {
        if (Math.random() < .5){
            console.log('heads')
            count.heads++
            let img = document.querySelector('img')
            img.src = `assets/images/penny-heads.jpg`
            img.alt = `heads face of a penny`
            let message = document.querySelector('.message-container h3')
            message.textContent = `You flipped heads!`
            let total = count.heads + count.tails
            document.querySelector('#heads').textContent = count.heads
            document.querySelector('#heads-percent').textContent = (count.heads/total * 100) + "%"
            document.querySelector('#tails-percent').textContent = (count.tails/total * 100) + "%"
        } else {
            console.log('tails')
        }
    })

    // Flip Button Click Handler
    // TODO: Determine flip outcome
    // TODO: Update image and status message in the DOM
    
    // Update the scorboard
    // TODO: Calculate the total number of rolls/flips
    // Make variables to track the percentages of heads and tails
    // TODO: Use the calculated total to calculate the percentages
    // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
    // TODO: Update the display of each table cell
    
    
    document.querySelector('#clear').addEventListener('click', function(e) {
        console.log('clear the scoreboard')
    })
    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})