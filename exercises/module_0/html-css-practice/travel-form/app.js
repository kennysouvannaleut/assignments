userForm = document['submitForm']
userForm.addEventListener('submit', function(e) {
    e.preventDefault()

userForm['firstname'].value
userForm['lastname'].value

// function myFunction () {
//     alert (this.fName, " " + this.lName)
// }

    
function SetAllCheckBoxes (submitForm, diet, CheckValue) {
    if (!document.forms[submitForm]) 
        return;
    var objCheckBoxes = document.forms[submitForm].e[diet];
    if (!objCheckBoxes)
        return;
    var countCheckBoxes = objCheckBoxes.length;
    if (!countCheckBoxes)
        objCheckBoxes.checked = value;
    else 
        for (var i = 0; i < countCheckBoxes; i++) 
            objCheckBoxes[i].checked = CheckValue;
}

// function my_onclick() {
    
//    }
//  document.submitForm.myButton.my_onclick = my_onclick


gender = addEventListener ('submit', function(e) {
    if (gender === 'Male') {
        alert ('Male')
    } else if (gender === 'Female') { 
        alert ('Female')
    } else {
        alert ('Other')
    }
})

    document.submitForm.firstname.value
    submitForm.lastname.value
    submitForm.age.value
    submitForm.gender.value
    submitForm.designation.value
    submitForm.diet.value
    alert (
    `
    Name: ${firstname} ${lastname}
    Age: ${age}
    Gender: ${gender}
    Designation: ${designation}
    Diet Restrictions: ${diet}
    `
    )

console.log (firstname, " " + lastname + ", " + age + ", " + gender + ", " + designation + ", " + diet)
});