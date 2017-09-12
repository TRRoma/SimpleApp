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
	editButton.innerText = 'Edit';                 //присвоение внутреннего текста
	editButton.className = 'edit';

	const deleteButton = document.createElement('button');
	deleteButton.innerText = 'Delete';
	deleteButton.className = 'delete';

	const listItem = document.createElement('li');
	listItem.className = 'todo-item';


//Помещаем все елементы в listItem
	listItem.appendChild(checkbox);      
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);

	bindEvents(listItem);    //подписка на событие

	return listItem; 

		                                                
}
// Функция привязки событий
function bindEvents(todoItem) {
	const checkbox = todoItem.querySelector('.checkbox');
	const editButton = todoItem.querySelector('button.edit');
	const deleteButton = todoItem.querySelector('button.delete');

		//Запись на событие
	checkbox.addEventListener('change', toggleTodoItem);
	editButton.addEventListener('click', editTodoItem);
	deleteButton.addEventListener('click', deleteTodoItem);
}


// Функция обработчик
function addTodoItem(event){
	event.preventDefault();                                           /*Остановка отправки данных на сервер */	

	if(addInput.value === '') return alert('Введите название задачи');

	const todoItem = createTodoItem(addInput.value);                 /*ввод пользователь в качестве задачи */
	todoList.appendChild(todoItem);                                  /*добавление DOM-елемента в список */
	addInput.value = '';                                             /*Пустая строка после добавления задачи */ 
}


function toggleTodoItem(){
	const listItem = this.parentNode; // доступ к родительскому елементу listItem
	listItem.classList.toggle('completed');


}

function editTodoItem(){
	const listItem = this.parentNode;
	const title = listItem.querySelector('.title');
	const editInput = listItem.querySelector('.textfield');
	const isEditing = listItem.classList.contains('editing'); /* есть ли у листа класс editing*/

	if(isEditing){
		title.innerText = editInput.value; // присваеваем текст из поля для редактирования в поле для задач
		this.innerText = 'Edit';
	} else{
		editInput.value = title.innerText;
		this.innerText = 'Save';
	}

	listItem.classList.toggle('editing');    // убираем класс 

}
function deleteTodoItem(){
	const listItem = this.parentNode;
	todoList.removeChild(listItem);

}

const todoForm = document.getElementsByClassName('todo-form');         /* Доступ к форме*/
const addInput = document.getElementsByClassName('todo-input');        /* Доступ к полю*/
const todoList = document.getElementsByClassName('todo-list');         /* Доступ к списку задач*/
const todoItem = document.querySelectorAll('todo-item');             /* Доступ к задаче*/
const listItem = createTodoItem(addInput.value); 

function main(){
	todoForm.addEventListener('submit', addTodoItem);                   /*привязка обработчика событий на submit*/ 
	todoItems.forEach(item => bindEvents(item));
}

main();