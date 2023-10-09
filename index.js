const todo = require("./todo");

const readline= require("readline");
const rl= readline.createInterface(
  {
    input: process.stdin,
    output: process.stdout,
  }
);

console.log('Welcome to the Todo List application!');

  rl.question('Enter a command (add/update/delete/display/exit): ', command => {
    if (command === 'add') {
      rl.question('Enter the task to add: ', task => {
        todo.addTask(task);
       
      });
    } else if (command === 'update') {
      rl.question('Enter the ID of the task to update: ', id => {
        rl.question('Enter the updated task: ', task => {
          todo.updateTask(Number(id), task);
       
        });
      });
    } else if (command === 'delete') {
      rl.question('Enter the ID of the task to delete: ', id => {
        todo.deleteTask(Number(id));
      
      });
    } else if (command === 'display') {
      todo.displayTodoList();
     
    } else if (command === 'exit') {
      rl.close();
    } else {
      console.error('Invalid command!');
  
    }
  });


 