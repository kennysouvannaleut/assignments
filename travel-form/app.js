userForm = document.userForm
userForm.addEventListener('submit', function(e) {
    e.preventDefault()

gender = userForm.addEventListener('submit', function(e) {
    if(gender === 'male') {
        alert ('male')
    } else if (gender === 'female') { 
        alert ('female')
    } else {
        alert ('unknown')
    }
    })

    firstName = userForm.firstName.value
    lastName = userForm.lastName.value
    age = userForm.age.value
    gender = userForm.gender.value
    designation = userForm.designation.value
    diet = userForm.diet.value
    alert(
    `
    Name: $(firstName) $(lastName)
    Age: $(age)
    Gender: $(gender) 
    Designation: $(designation)
    Diet Restrictions: $(diet)
    `
    )
console.log(firstName + " " + lastName + ", " + age + ", " + gender + ", " + designation + ", " + diet)
})
