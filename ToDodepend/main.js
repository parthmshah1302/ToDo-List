let addToDoButton=document.getElementById('addTodo');
let todoContainer=document.getElementById('toDocontainer');
let inputField=document.getElementById('inputField');

addToDoButton.addEventListener('click',function(){
    var paragraph=document.createElement('p')
    paragraph.innerText=inputField.value;
    paragraph.classList.add('paragraph-styling')
    todoContainer.appendChild(paragraph);
    paragraph.style.color="red";
    
    inputField.value="";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through";
        paragraph.style.color="green";

    })
    paragraph.addEventListener('dblclick',function(){
        todoContainer.removeChild(paragraph);
    })
})