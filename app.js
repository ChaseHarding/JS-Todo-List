document.addEventListener('DOMContentLoaded', () => {
    // Select the required elements
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // function for adding new todo items
    function addTodoItem(e) {
        e.preventDefault(); //preventing default page reloading
        console.log(addTodoItem)
        const taskText = todoInput.value.trim(); //trim will remove any extra spaces or line breaks the user may accidently include
        
        if(taskText !== '') {

            const li = document.createElement('li');
            li.textContent = taskText; //now the text content will be whatever the user has inputted

            // create a complete button for the item
            const completeButton = document.createElement('button');
            completeButton.textContent = 'Complete';
            completeButton.classList.add('complete');

            completeButton.addEventListener('click', () => {
                li.classList.toggle('completed')
            });

              // append the complete button to the todo item
            li.appendChild(completeButton)//appending the complete button to the li
            todoList.appendChild(li);//appending the li to the todo list
            console.log(todoList)
            todoInput.value = '';
        }
    }

    // add an event listener to the form to handle submission
    todoForm.addEventListener('submit', addTodoItem)
})