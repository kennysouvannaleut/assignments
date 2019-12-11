const submitForm = document.submitForm
submitForm.addEventListener('submit', function(e) {
    e.preventDefault()

const firstName = submitForm.firstName.value
const lastName = submitForm.lastName.value
const age = submitForm.age.value
const gender = submitForm.gender.value
const designation = submitForm.designation.value
const diet = submitForm.diet
const dietChecked = []

// console.log(firstName + " " + lastName)

for(let i = 0; i < diet.length; i++) {
    if(diet[i].checked) {
    dietChecked.push(" " + diet[i].value)
    }
}
if(dietChecked.length === 0) {
    dietChecked.push('none')
}
    alert (
    `
    Name: ${firstName} ${lastName}
    Age: ${age}
    Gender: ${gender}
    Designation: ${designation}
    Diet Restrictions: ${dietChecked}
    `
    )
// console.log (firstName, " " + lastName + ", " + age + ", " + gender + ", " + designation + ", " + dietChecked)
})