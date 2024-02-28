const groceryList = ["Banana", "Apple", "Phone", "Wipes", "Yarmulka", "Meat", "Milk"]
    const board = document.querySelector("#wife-list");
// the hard way to do so 
//ES5
// for(const item of groceryList){
//     const li = document.createElement("li");
//     li.innerHTML = item;
//     const board = document.querySelector("#wife-list");
//     board.appendChild(li)
// }

// the easy way to do so 
// ES6
for(const itme in groceryList){
    board.innerHTML += `<li><span id="span${itme}" onclick="update(${itme})">${groceryList[itme]}</span>
    <button id="btn${itme}" onclick="del(${itme})">X</button>
    </li>`
}

// How to add item to the cart
const id_input =document.querySelector("#input")
function addProduct(){
    groceryList.push(id_input.value)
    board.innerHTML = ""
    for(const itme in groceryList){
        board.innerHTML += `<li><span id="span${itme}" onclick="update(${itme})">${groceryList[itme]}</span>
        <button id="btn${itme}" onclick="del(${itme})">X</button>
        </li>`
    }
}
function del(product){
    groceryList.splice(product,1)
    board.innerHTML = ""
    for(const itme in groceryList){
        board.innerHTML += `<li><span id="span${itme}" onclick="update(${itme})">${groceryList[itme]}</span>
        <button id="btn${itme}" onclick="del(${itme})">X</button>
        </li>`
    }
}
// function update(id){
//     // change the itme in the list with a new input
//     const input = document.createElement('input')
//     const id_span = document.querySelector(`#span${id}`)
//     id_span.replaceWith(input)
//     // change the del button to a save button
//     const btn = document.createElement("button")
//     btn.innerText = "Save"
//     const id_btn = document.querySelector(`#btn${id}`)
//     id_btn.replaceWith(btn)
// }