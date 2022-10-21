import './style.css';

const list = document.querySelector('.list');
const toDoInput = document.querySelector('.to-do-input');
const deleteItem = document.querySelector('.delete');
let listArr = [];
let id = 0;

const data = localStorage.getItem('To Do');

const addToDo = (id, done, todo, trash) => {
  list.innerHTML = `<li class="list-item" ${id}>
    <input ${done} type="checkbox"><p class="text">${todo}</p><i class="fa fa-ellipsis-vertical ellipsis"></i><i ${trash} class="fa-solid fa-trash-can delete"></i>
  </li>`;
};

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    const toDo = toDoInput.value;

    if (toDo) {
      addToDo(id, false, toDo, false);
      listArr.push({
        task: toDo,
        id,
        done: false,
        trash: false,
      });
      id += 1;
    }
    toDoInput.value = '';
  }
});
// addToDo();
const loadList = (array) => {
  array.forEach((item) => {
    addToDo(item.id, item.done, item.todo, item.trash);
  });
};

if (data) {
  listArr = JSON.getItem('To DO');
  id = listArr.length;
  loadList(listArr);
} else {
  listArr = [];
  id = 0;
}
// deleteItem.addEventListener('click', (e) => {
//   e.target.removeEventListener(id);
// });
// const editText = document.querySelector('.text');
// editText.forEach((e, id) => {
//   e.addEventListener('change', () => {
//     myList[id].todo = e.value;
//   });
// });
// function completeToDo(element) {
//   element.classList.toggle(check);
//   element.classList.toggle(uncheck);
//   element.parentNode.querySelector('.text').classList.toggle(lineThrough);
//   myList[element.id].done = myList[element.id].done ? false : true;
// }