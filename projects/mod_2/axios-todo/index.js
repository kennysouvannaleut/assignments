// // #GET's THE TODO's FROM THE DATABASE:
// function getData(){
//     axios.get("https://api.vschool.io/kenny/todo")
//         .then(response => createToDo(response.data))
//         .catch(error => console.log(error))
// }


// // #LISTS THE LIST OF TODO's TO THE DOM:
// function createToDo(data){
//     clearList();
//         for(let i = 0; i < data.length; i++){
//         const h1 = document.createElement('h1')
//         h1.textContent = data[i].title
//         document.getElementById("to-do-list").appendChild(h1)
//     }
// }


// // // #BUTTON TO DELETE TODO's FROM THE DOM:
// // function deleteToDo(deleteItem){
// //     axios.delete("https://api.vschool.io/kenny/todo/<id>" + deleteItem._id)
// //         .then(response =>
// //             alert("Your todo was successfully deleted!"), 
// //         function(response){
// //             alert("Opps there was a problem deleting your todo")
// //     })
// //         .catch(error => console.log(error))
// // }


// // // #UPDATES THE EXISTING ITEMS:
// // // const updateItems = {
// // //     title: "item 5",
// // //     description: "item5 description",
// // //     imgUrl: "https://unsplash.com/photos/gmH8r-oCzQQ"
// // // }

// // // axios.put("https://api.vschool.io/kenny/todo/<id>", updateItems)
// // //     .then(response => console.log(response.data))
// // //     .catch(error => console.log(error))


// // //  #CLEARS THE LISTED ITEMS:
// function clearList(){
//     const item = document.getElementById("to-do-list")
//         while(item.firstChild){
//         item.removeChild(item.firstChild)
//     }
// }

// getData()


// // // #FORM FOR THE POST REQUEST:
// const toDoForm = document["to-do-form"]

// toDoForm.addEventListener("submit", function(e){
//     e.preventDefault()

// const newToDoList = {
//     title: toDoForm.title,
//     description: toDoForm.description,
//     price: toDoForm.price,
//     imgUrl: toDoForm.imgUrl,
//     // completed: toDoForm.completed
//     }
//     toDoForm.title.value = ""
//     toDoForm.description.value = ""
//     toDoForm.price.value = ""
//     toDoForm.imgUrl.value = ""
//     // toDoForm.completed.value = ""

// // axios.post("https://api.vschool.io/kenny/todo", newToDoList)
// //     .then(response => getData())
// //     .catch(error => console.log(error))
// })




// // // remaining items todo
// // /* 
// //     actionAdd.createAction()
// //     actionRemove = ""
// //     actionChecked.createAction()
// //     actionUnchecked = ""

// //     const updatedToDo = todo.update("completed", completed => "done")
// //     const updatedToDo = todo.update("completed", completed => "open")
// //     const editBox = createButton() getInitialState return text ""
// // */