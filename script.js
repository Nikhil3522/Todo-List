const inputText = document.getElementById('myItem');  //Input box
const inputbtn = document.getElementById('btn');  //Add button 
const list = document.getElementById('list');  //List
var count; //This variable for count the list item
var count2; // By the help of this variable we can use empty function and allCheck function


//This is our function to add the task inside our list
function addList(e) {
    if (inputText.value.length == 0) {
        alert("Please add a task.");
    } else {
        const listDiv = document.createElement('div');
        listDiv.classList.add('listDiv');

        const checkBox = document.createElement('button');
        checkBox.classList.add('checkBox');
        checkBox.innerHTML = '<i class="fas fa-check"></i>';
        listDiv.appendChild(checkBox);

        const listItem = document.createElement('li');
        listItem.classList.add('listItem');
        listItem.innerText = inputText.value;
        listDiv.appendChild(listItem);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.innerHTML = '<i class="fa fa-times">';
        listDiv.appendChild(deleteBtn);

        list.appendChild(listDiv);

        inputText.value = '';

        deleteBtn.addEventListener('click', deleteItem);
        checkBox.addEventListener('click', myCheck);
    }

    counting();
}

// This function delete single selected task.
function deleteItem(e) {
    e.target.parentElement.remove();
    counting();
}

// This function check single selected task.
function myCheck(e) {
    e.target.parentElement.classList.toggle("complete");
}

// This function return the number of task inside list.
function counting() {
    count = document.getElementById('list').childElementCount;
    document.getElementById('count').innerHTML = count;
    count2 = count;
}

//Empty function
var empty1 = document.getElementById("empty");
empty1.addEventListener("click", emptyy);

// This function delete all the tasks from the list.
function emptyy() {
    var b = confirm('Do you want to Delete all task?');
    if (b == true) {
        var list = document.getElementById("list");
        for (var i = 0; i <= count2; i++) {
            if (list.childNodes[0]) {
                list.removeChild(list.childNodes[0]);
            }
        }
    }
    counting();
}

// This function delete all checked tasks from the list.
function deleteCheck() {
    var list = document.getElementById("list");
    var a=4;
    while(a>0){
        for (var i = 0; i <= count2; i++) {
            if (list.childNodes[i]) {
                if (list.childNodes[i].className == 'listDiv complete') {
                    list.removeChild(list.childNodes[i]);
                }
            }
        }
        counting();
        a = a-1;
    }
}

// This function check all tasks in list.
function allCheck() {
    var list = document.getElementById("list");
    for (var i = 0; i <= count2; i++) {
        list.childNodes[i].className = 'listDiv complete';
    }
}
