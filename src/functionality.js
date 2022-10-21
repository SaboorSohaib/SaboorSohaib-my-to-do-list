
const list = document.querySelector('.list');

const taskList = [
  {
    description: 'Setup Webpack',
    completed: true,
    index: 0,
  },
  {
  description: 'Creating new Repo',
    completed: true,
    index: 1,
  },
  {
    description: 'Request review',
    completed: false,
    index: 2,
  },
];

function addTask(taskList) {
  let tasks = '';
  taskList.forEach((item) => {
    tasks += `<li><input type="checkbox" class="check"><input type="text" class="input-list" value="${item.description}" disabled>
    <i class="fa fa-ellipsis-vertical"></i></li>`;
  });
  list.innerHTML = tasks;
}
addTask(taskList);
const taskInput = document.querySelector('.add-task');
const taskList = document.querySelector('.list');
const taskArr = [];
 console.log(taskArr);
const addTaskToUi = (taskArr) => {
  taskArr.forEach((todo) => {
    taskList.innerHTML = `
    <li id="${todo.id}">
    <input type="checkbox">
    <p class="text>${todo.description}</p><i class="fa fa-ellipsis-vertical ellipsis"></i><i class="fa-solid fa-trash-can delete"></i>
    </li>
    `;
  });
};

const addTask = () => {
  const todo = {
    id: Date.now(),
    description: taskInput.value,
    completed: false,
  };
  taskArr.push(todo);
  addTaskToUi(taskArr);
};

taskInput.querySelector('keydown', (e) => {
  if (e.keyCode === 13) {
    const toDoItem = taskInput.value;
    addTask(taskArr, toDoItem);
    addTaskToUi();
  }
});
