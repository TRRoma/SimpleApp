function createTodoItem(){
	const checkbox = document.createElement('input');  // создание DOM-елементов
	checkbox.type = 'checkbox';
	checkbox.className = 'checkbox';

	const label = document.createElement('label');
	label.innerText = 'title';
	label.className = 'title';

	const editInput = document.createElement('input');
	editInput.type = 'text';
	editInput.className = 'textfield';

	const editButton = document.createElement('button');
	editButton.innerText = 'Изменить';                 //присвоение внутреннего текста
	editButton.className = 'edit';

	const deleteButton = document.createElement('button');
	deleteButton.innerText = 'Удалить';
	deleteButton.className = 'delete';

	const listItem = document.createElement('li');
	listItem.className = 'todo-item';


//Помещаем все елементы в listItem
	listItem.appendChild(checkbox);      
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);

	return listItem; 

		                                                
}


// Функция обработчик
function addTodoItem(event){
	event.preventDefault();                                           /*Остановка отправки данных на сервер */	

	if(addInput.value === '') return alert('Введите название задачи');

	const listItem = createTodoItem(addInput.value);                 /*ввод пользователь в качестве задачи */
	todoList.appendChild(todoItem);                                  /*добавление DOM-елемента в список */
	addInput.value = '';
}


const todoForm = document.getElementsByClassName('todo-form');         /* Доступ к форме*/
const addInput = document.getElementsByClassName('todo-input');        /* Доступ к полю*/
const todoList = document.getElementsByClassName('todo-list');         /* Доступ к списку задач*/
const todoItem = document.querySelectorAll('todo-item');             /* Доступ к задаче*/
const listItem = createTodoItem(addInput.value); 




todoForm.addEventListener('submit', addTodoItem);                   /*привязка обработчика событий на submit*/