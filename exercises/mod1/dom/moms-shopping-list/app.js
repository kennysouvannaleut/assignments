const harryPotterForm = document['harry-potter-form'] // Grab the form from the DOM

const characterContainer = document.getElementById('character-container') // Grab Character Container

// Upon submission of the form
// Create a character card
// Insert the name on the card
// Add the card to the container

// Forms have submit events

harryPotterForm.addEventListener('submit', event => {
    event.preventDefault() // Disable the auto refresh

// Create Element Stage:
const characterCard = document.createElement('div') // Create character card
const namePlate = document.createElement('h6') // Create name plate (h6)
const deleteBtn = document.createElement('button') // Create a button
const colorChanger = document.createElement('button') // Create color changer

// Grab Input Value Stage:
const nameInput = harryPotterForm['character-name'].value // Access the name input
// console.log(harryPotterForm['character-name'].value)

// Add Features Stage:
namePlate.textContent = nameInput // Add text (or some string) to namePlate


// Delete Btn:
deleteBtn.textContent = 'Remove'
deleteBtn.addEventListener('click', event => {
    event.target.parentNode.remove()
})

//Color Changer:
colorChanger.textContent = 'Change Color'
colorChanger.addEventListener('click', e => {
    const parentCard = e.target.parentNode
    const colorArr = ['blue', 'red', 'aqua', 'rebeccapurple']
    const randomIndex = Math.floor(Math.random() * colorArr.length)
    // parentCard.style.backgroundColor = 'purple' --> Hard code a color
    parentCard.style.backgroundColor = colorArr[randomIndex]
})

// Append Stage:
characterCard.appendChild(namePlate) // Add the created element
// console.log(characterCard)
characterCard.appendChild(deleteBtn)
characterCard.appendChild(colorChanger)

characterContainer.appendChild(characterCard) // Add card to the container
harryPotterForm['character-name'].value = '' // Clear the value of the input

})

// console.dir(document)  --> lookup any key and all types
// console.dir(event.target.parentNode --> review targeted events
// HTML collection --> getElementByName --> returns an array unless "add result[0]" to return output