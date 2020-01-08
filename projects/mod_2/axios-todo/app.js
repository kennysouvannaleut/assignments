const getData = () => { 
    axios.get("https://api.vschool.io/kenny/todo")

    .then(response => createToDo(response.data))
    .catch(error => console.log(error))
} 

const createToDo = (data) => {
    clearList()

    for(let i = 0; i < data.length; i++) {

        const h1 = document.createElement("h1");
        h1.textContent = data[i].title;
        document.getElementById("to-do-list").appendChild(h1);

        const h3 = document.createElement("h3");
        h3.textContent = data[i].description;
        document.getElementById("to-do-list").appendChild(h3);

        const h4 = document.createElement("h4");
        h4.textContent = data[i].price;
        document.getElementById("to-do-list").appendChild(h4);

        const img = document.createElement("img")
        img.src = data[i].imgUrl;
        img.style.width = "300px"
        document.getElementById("to-do-list").appendChild(img)

        // const div = document.createElement("div");
        // document.body.append(div);
        // document.getElementById("to-do-list").appendChild(div);

        document.innerHTML = "";
    }
}

function deleteData(data){
    axios.delete("https://api.vschool.io/kenny/todo/5e13b0915b4f827a2c23558d", data)
        .then(response =>
            alert("Your todo was successfully deleted!"), 
        function(response){
            alert("Opps there was a problem deleting your todo")
    })
        .catch(error => console.log(error))
}

// const updateData = {
//     // title: "",
//     // description: "",
// imgUrl: "https://images.unsplash.com/photo-1572253451563-e74a694b0b93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
// }
// axios.put("https://api.vschool.io/kenny/todo/5e13b0915b4f827a2c23558d", updateData)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))

function clearList(){
    const item = document.getElementById("to-do-list")
        while(item.firstChild){
        item.removeChild(item.firstChild)
        // item.firstChild.remove()
    }
}

getData();
// deleteData();

const toDoForm = document.forms["to-do-form"]

toDoForm.addEventListener("submit", function(e) {
    e.preventDefault()

const newToDoList = {
    title: toDoForm.title.value,
    description: toDoForm.description.value,
    price: toDoForm.price.value,
    imgUrl: toDoForm.imgUrl.value
    }
    toDoForm.title.value = ""
    toDoForm.description.value = ""
    toDoForm.price.value = ""
    toDoForm.imgUrl.value = ""

axios.post("https://api.vschool.io/kenny/todo", newToDoList)
    .then(response => getData())
    .catch(error => console.log(error))
})