let count = {
    heads: 0,
    tails: 0
}

document.addEventListener('DOMContentLoaded', function () {
    // TODO: Add event listener and handler for flip and clear buttons
    document.querySelector('#flip').addEventListener('click', function(e) {
        // Flip Button Click Handler
        function handleFlip(result) {
            console.log(result) 
            // TODO: Determine flip outcome
            count[result]++
            // TODO: Update image and status message in the DOM
            let img = document.querySelector('img')
            img.src = `assets/images/penny-${result}.jpg`
            img.alt = `${result} face of a penny`
            let message = document.querySelector('.message-container h3')
            message.textContent = `You flipped ${result}!`
            // Update the scorboard
            let total = count.heads + count.tails
            document.querySelector(`#${result}`).textContent = count[result]
            // TODO: Calculate the total number of rolls/flips
            document.querySelector(`#heads-percent`).textContent = Math.round(count.heads/total * 100) + "%"
            document.querySelector(`#tails-percent`).textContent = Math.round(count.tails/total * 100) + "%"   
        }

        if (Math.random() < .5){
            handleFlip('heads')
        } else {
            handleFlip('tails')
        }
    })
    
    document.querySelector('#clear').addEventListener('click', function(e) {
        count.heads = 0
        count.tails = 0

        document.querySelector('#heads').textContent = 0
        document.querySelector('heads-percent').textContent = '0%'
        document.querySelector('#tails').textContent = 0
        document.querySelector('tails-percent').textContent = '0%'

        document.querySelector('.message-container h3').textContent = "Let's Get Rolling!"
    })
    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})