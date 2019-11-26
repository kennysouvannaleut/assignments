var userForm = document['submitForm']
userForm.addEventListener('submit', function(e) {
    e.preventDefault()
})

var fName = userForm['firstname'].value
var lName = userForm['lastname'].value

function myFunction () {
    alert (this.fName, " " + this.lName)
}

var myDivs = document.getElementById('div')
console.log(myDivs)






    
// function SetAllCheckBoxes (submitForm, diet, CheckValue) {
//     if (!document.forms[submitForm]) 
//         return;
//     var objCheckBoxes = document.forms[submitForm].e[diet];
//     if (!objCheckBoxes)
//         return;
//     var countCheckBoxes = objCheckBoxes.length;
//     if (!countCheckBoxes)
//         objCheckBoxes.checked = value;
//     else 
//         for (var i = 0; i < countCheckBoxes; i++) 
//             objCheckBoxes[i].checked = CheckValue;
// }

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

//     userForm[fName].value
//     lName = document.submitForm.lName.value
//     age = document.submitForm.age.value
//     gender = document.submitForm.gender.value
//     designation = document.submitForm.designation.value
//     diet = document.submitForm.diet.value
//     alert (
//     `
//     Name: $(fName) $(lName)
//     Age: $(age)
//     Gender: $(gender) 
//     Designation: $(designation)
//     Diet Restrictions: $(diet)
//     `
//     )

// console.log (fName, " " + lName + ", " + age + ", " + gender + ", " + designation + ", " + diet)
// }) 