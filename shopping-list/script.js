const btn = document.querySelector('#btn');
const ul = document.querySelector('#list');
const input = document.querySelector('#item');

btn.addEventListener('click',createNewItem);
addEventListener('keydown',function(event) {
    if(event.key === "Enter") {
        createNewItem();
    }
});
function createNewItem() {
    let inputValue = input.value;
    input.value = "";
    let li = document.createElement('li');
    let span = document.createElement('span');
    let deleteBtn = document.createElement('button');

    li.appendChild(span);
    li.appendChild(deleteBtn);
    span.textContent = inputValue;
    deleteBtn.textContent = "Delete";
    ul.appendChild(li);
    deleteBtn.addEventListener('click',() => {ul.removeChild(li);});
    input.focus();

}
