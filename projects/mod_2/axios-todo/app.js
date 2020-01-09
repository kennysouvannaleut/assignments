const getData = () => { 
    axios.get("https://api.vschool.io/kenny/todo")

    .then(response => createToDo(response.data))
    .catch(error => console.log(error))
} 

const createToDo = (data) => {
    clearList()

    for(let i = 0; i < data.length; i++) {

        // title
        const h1 = document.createElement("h1");
        h1.textContent = data[i].title;
        document.getElementById("to-do-list").appendChild(h1);

        // description
        const h3 = document.createElement("h3");
        h3.textContent = data[i].description;
        document.getElementById("to-do-list").appendChild(h3);

        // price
        const h4 = document.createElement("h4");
        h4.textContent = data[i].price;
        document.getElementById("to-do-list").appendChild(h4);

        // image
        const img = document.createElement("img")
        img.src = data[i].imgUrl;
        img.style.width = "300px"
        document.getElementById("to-do-list").appendChild(img)

        // div
        const div = document.createElement("div");
        document.body.append(div);
        document.getElementById("to-do-list").appendChild(div);

        //deleteButton
        const deleteButton = document.createElement('button');
        deleteButton.addEventListener('click', function(){deleteData(data[i]._id)})
        document.getElementById("to-do-list").appendChild(deleteButton);

        // if(response.data[i].completed === true){
        //     title.style["text-decoration"] = "line-through"
        //     description.style["text-decoration"] = "line-through"
        //     price.style["text-decoration"] = "line-through"
        // }

        // editButton
        // const editButton = document.createElementNS('button');
        // editButton.addEventListener('click', function(){updateData(data[i]._id)})
        // document.getElementById("to-do-list").appendChild(editButton);
    }
}

function deleteData(_id){
    axios.delete(`https://api.vschool.io/kenny/todo/${_id}`)
        .then(response =>
            alert("Your todo was successfully deleted!"), 
        function(response){
            alert("Opps there was a problem deleting your todo")
    })
        .catch(error => console.log(error))

    clearList()
    getData()
}

// const updateData =  {
//     // title: "",
//     description: "tools",
// // imgUrl: "https://images.unsplash.com/"
// }
// axios.put("https://api.vschool.io/kenny/todo/5e161154bdc37f544cfa5e87", updateData)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))

function clearList(){
    const item = document.getElementById("to-do-list")
        while(item.firstChild){
        item.removeChild(item.firstChild)
    }
}

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

getData()
