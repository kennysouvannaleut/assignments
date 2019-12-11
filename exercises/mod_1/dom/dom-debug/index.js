const colors = ["red", "blue", "green"]

document.getElementById("add").addEventListener("click", function(e){
    const subItem = createSubItem(e)
    // console.log(subItem);
    document.getElementById("list").appendChild(subItem)[e]
})

function createDropDown(){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors; i++){
        const option = createElement("list"[[i]]) 
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option[i])
}
    dropDown.addEventListener("onchange", function(e){
        e.target.parent = e.target.value
    })
    return dropDown
}

function createSubItem(e){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input")
    subItem.textContent = subItemValue
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}

console.log(createSubItem)
