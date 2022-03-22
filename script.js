const inputText = document.getElementById('myItem');
const inputbtn = document.getElementById('btn');
const list = document.getElementById('list');
var count;
var count2;

function addList(e) {
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
 
    counting();
}

function deleteItem(e){
    e.target.parentElement.remove();
    counting();
}

function myCheck(e){
    e.target.parentElement.classList.toggle("complete");
}

function counting(){

            count = document.getElementById('list').childElementCount;
            document.getElementById('count').innerHTML = count;
            count2 = count;

}

   //Empty function
   var empty1 = document.getElementById("empty");
   empty1.addEventListener("click", emptyy);

   
function emptyy(){
       var b = confirm('Do you want to Delete all task?');
       if(b == true){
           var list = document.getElementById("list");
           for(var i=0;i<=count2;i++){
               if(list.childNodes[0]){
                    list.removeChild(list.childNodes[0]);
               }
           }
       }
    counting();
}

function deleteCheck() {
    var list = document.getElementById("list");
    for(var i=0;i<=count2;i++){
        if(list.childNodes[i]){
            if(list.childNodes[i].className == 'listDiv complete'){
                list.removeChild(list.childNodes[i]);
            }
        }
    }
    counting();
    for(var i=0;i<=count2;i++){
        if(list.childNodes[i]){
            if(list.childNodes[i].className == 'listDiv complete'){
                list.removeChild(list.childNodes[i]);
            }
        }
    }
    counting();
    for(var i=0;i<=count2;i++){
        if(list.childNodes[i]){
            if(list.childNodes[i].className == 'listDiv complete'){
                list.removeChild(list.childNodes[i]);
            }
        }
    }
    counting();
    for(var i=0;i<=count2;i++){
        if(list.childNodes[i]){
            if(list.childNodes[i].className == 'listDiv complete'){
                list.removeChild(list.childNodes[i]);
            }
        }
    }
    counting();
}

function allCheck(){
    var list = document.getElementById("list");
        for(var i=0;i<=count2;i++){
                list.childNodes[i].className= 'listDiv complete';
        }
}
