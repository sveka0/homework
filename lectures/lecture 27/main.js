const ul = document.querySelector('ul');
const input = document.getElementById('item');


function addTask(text) {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}

function add() {
     const newItem = input.value.trim();
     if (newItem !== '') {
         addTask(newItem);
         itemArray.push(newItem);
         localStorage.setItem('itemArray', JSON.stringify(itemArray));
         input.value = '';
     }
}

function del() {
   localStorage.clear(); 
   itemArray = [];
   ul.innerHTML = '';
}

let itemArray = localStorage.getItem('item') ? JSON.parse(localStorage.getItem('item')) : [];
array.forEach(item => {
    addTask(item);
});
