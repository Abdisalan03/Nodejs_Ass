const fs = require('fs');

const todoListFile = './test.json';

// Function to read the todo list from a file
function readTodoList() {
  try {
    const data = fs.readFileSync(todoListFile);
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading todo list:', err);
    return [];
  }
}

// Function to save the todo list to a file
function saveTodoList(todoList) {
  const data = JSON.stringify(todoList);

  fs.writeFile(todoListFile, data, (err) => {
    if (err) {
      console.error('Error saving todo list:', err);
    } else {
      console.log('Todo list saved successfully!');
    }
  });
}

// Function to add a new task to the todo list
function addTask(task) {
  const todoList = readTodoList();

  const newTask = {
    id: Date.now(),
    task
  };

  todoList.push(newTask);
  saveTodoList(todoList);

  console.log('New task added successfully!');
}

// Function to update a task in the todo list
function updateTask(id, updatedTask) {
  const todoList = readTodoList();

  const task = todoList.find(item => item.id === id);

  if (task) {
    task.task = updatedTask;
    saveTodoList(todoList);
    console.log('Task updated successfully!');
  } else {
    console.error('Task not found!');
  }
}

// Function to delete a task from the todo list
function deleteTask(id) {
  const todoList = readTodoList();

  const index = todoList.findIndex(item => item.id === id);

  if (index !== -1) {
    todoList.splice(index, 1);
    saveTodoList(todoList);
    console.log('Task deleted successfully!');
  } else {
    console.error('Task not found!');
  }
}

// Function to display the todo list
function displayTodoList() {
  const todoList = readTodoList();

  if (todoList.length === 0) {
    console.log('Todo list is empty.');
  } else {
    console.log('Todo List:');
    todoList.forEach(item => {
      console.log(`ID: ${item.id} - Task: ${item.task}`);
    });
  }
}

module.exports = {
  addTask,
  updateTask,
  deleteTask,
  displayTodoList
};