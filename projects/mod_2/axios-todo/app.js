const getData = () => { 
    axios.get("https://api.vschool.io/kenny/todo")

    .then(response => createToDo(response.data))
    .catch(error => console.log(error))
} 

const createToDo = (data) => {
    clearList()
    for(let i = 0; i < data.length; i++) {

        const container = document.createElement("div")
        document.className("container")

        const h1 = document.createElement("h1")
        h1.textContent = data[i].title
        document.appendChild(h1)

        const p = document.createElement("p")
        p.textContent = data[i].description
        document.appendChild(p)

        const img = document.createElement("img")
        img.source = data[i].image
        img.style.width = "400px"
        document.appendChild(img)

        // document.getElementById("to-do-list").appendChild("div")
        // document.getElementById("to-do-list").innerHTML = ""


        // const main = document.getElementById("container");
        // const title = content.getElementsByTagName('h1')
        // const description = content.getElementsByTagName("p");
        // const element = document.getElementById("to-do-list").element.innerHTML = "";
        // const images = document.getElementsByClassName("imgUrl").src = "";
        const title = document.getElementById("to-do-list").innerHTML;
        document.documentElement.innerHTML;



        // document.forms
        // document.links
        // document.URL
        
    }
}

const clearList = (item) => {
    document.getElementById("to-do-list")
    while(item.firstChild){
        item.removeChild(item.firstChild)
    }
}

getData()

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

// const actionRemove = (deleteItem) => {

// }

