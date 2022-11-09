/*
To-Do List DOM notes
1.   Users have ability to add new to-do items
-form
-text input box and submit (get input from user and add it to list when submit button  clicked.)
-document.createElement to create list items
-appendChild to add to our list



2.  Users have ability to view to-do items
-list to keep track of our to-do items
-querySelectorAll (or bubbling) which creates an array that allows  access of array of list items.


HTML(create elements within the index.html)
-form
-empty list
-buttons
-text input


JS
-list items (create dynamic html elements)



*/

let tdlForm = document.querySelector('#tdlForm');
let textInput = document.querySelector('#textInput');
let toDoList = document.querySelector('#toDoList');

let listItems = document.querySelectorAll('#toDoList li');
let removeBtn = document.querySelector('#removeCompleted');
let clearAll = document.querySelector('#clearAll');


tdlForm.addEventListener('submit', function(event){
    event.preventDefault();

    //create new list item
    let newItem = document.createElement('li');

    //create strikeout
    newItem.addEventListener('click', function(event){
        event.preventDefault();

        
        console.log("Strikeout works");

        if(newItem.style.textDecoration === 'line-through'){
            newItem.style.textDecoration = '';
        } else{
            newItem.style.textDecoration = 'line-through';
        }
    })



    //give list item text from textInput box
    newItem.innerText = textInput.value;

    console.log(newItem);

    toDoList.appendChild(newItem);
    textInput.value = '';


});

removeBtn.addEventListener('click', function(event){
    event.preventDefault();

    removeAllChildNodes(toDoList);
    // for(let i = 0; i < listItems.length; i++){
    //     listItems[i].remove();
    // }


})
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        if(parent.firstChild.style.textDecoration !== '') {
            parent.removeChild(parent.firstChild);
        }
        


    }
}





    
