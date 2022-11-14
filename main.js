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

//create query selectors to access html form elements
let tdlForm = document.querySelector('#tdlForm');
let textInput = document.querySelector('#textInput');
let toDoList = document.querySelector('#toDoList');
let listItems = document.querySelectorAll('#toDoList li');

//query selectors to remove elements
    let removeCompleted = document.querySelector('#removeCompleted');
    let removeAll = document.querySelector('#removeAll');

//add an event listener to form 
    tdlForm.addEventListener('submit', function(event){
    event.preventDefault();

//create new list item
    let newItem = document.createElement("li");
    newItem.innerText = textInput.value;

    toDoList.appendChild(newItem);
    textInput.value = '';

    listItems = document.querySelectorAll('#toDoList li');

//create strikethrough
    newItem.addEventListener('click', function(event){
        event.preventDefault();
        
        // console.log("Strikeout works"); //test code
        if(newItem.style.textDecoration === 'line-through'){
            newItem.style.textDecoration = '';
            // newItem.checked = false;
        } else{
            newItem.style.textDecoration = 'line-through';
            // newItem.checked = true;
        }
    })
});

//remove completed only
    removeCompleted.addEventListener('click', function(event){
        event.preventDefault();
        removeCompletedList(toDoList);
    });

    function removeCompletedList() {
    for(let i = 0; i < listItems.length; i++){
        if(listItems[i].style.textDecoration !== '') {
            listItems[i].remove();
            console.log("Item removed:" + listItems[i].innerText);
            }
        }
    };

//remove all
    removeAll.addEventListener('click', function(event){
        event.preventDefault();
        removeAllList(toDoList);
        
    });

    function removeAllList() {
    for(let i = 0; i < listItems.length; i++){
            // console.log("Test remove all while loop");
            listItems[i].remove();
            console.log("Post remove all");
            console.log(listItems);
            

        }
    };

    


            
            
        
    





    
