const input = document.querySelector('.search')
const btn = document.querySelector("#add")
const list = document.querySelector('#list_item')

if(!localStorage.getItem("Data")){
    localStorage.setItem("Data","[]")
}

let data = JSON.parse(localStorage.getItem("Data"))
if(data.length > 0){
    for(let text of data){
        console.log(text)
        AddElement(text)
    }
}

input.addEventListener('keydown', e => {
    if(e.key === 'Enter') {
        console.log('Enter Key');
        handleAdd()
    }
})

const handleAdd = () => {
    if(input.value.length>0) {
        AddElement(input.value)
        let currentData = JSON.parse(localStorage.getItem("Data"))
        localStorage.setItem("Data",JSON.stringify([...currentData,input.value]))
        input.value = ''    }
    else {
        window.alert("task cant be edit")
    }
}

function AddElement(text){
    const ele = document.createElement('li')
    const text_node = document.createElement("span")
    text_node.innerText = text
    ele.appendChild(text_node)
    ele.style.margin="20px 20px 20px 20px"
    list.appendChild(ele)

    //create a dynamic button element
    const button = document.createElement('button')
    button.innerHTML = "<a onclick=\"deleteElement(this)\"> Delete </a>";
    button.style.margin="3px 3px 3px 3px "
    button.style.cursor="pointer"
    button.style.border= "2px solid white";
    button.style.backgroundColor="#4db8ff"
    button.style.borderRadius="5px"
    ele.appendChild(button)
    button.addEventListener("onclick",(e) =>{
        deleteElement(e)
    })
}

function deleteElement(ele){
    let text = ele.parentElement.parentElement.querySelector("span").innerText
    console.log(text)
    let currentData = JSON.parse(localStorage.getItem("Data"))
    
    localStorage.setItem("Data",JSON.stringify(currentData.filter(el => el !== text)))

    ele.parentElement.parentElement.remove()
}

btn.addEventListener('click', (handleAdd))

const dark_btn = document.querySelector('.btn')
const body = document.querySelector('body')

dark_btn.addEventListener('click', () => {
    body.classList.toggle('dark')
})