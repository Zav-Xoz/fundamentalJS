// !!!!!!!!!!!!!!!!!!!!
// создвем анонимную функцию и  сразу влызываем , это закрывает доступ к данным в консоле

(() => {

    // !---- Globals  --- глобальные переменные ---------------------------------------------------------------------------------------

    const todoList = document.querySelector('#todo-list');
    const userSelect = document.querySelector('#user-todo');
    const form = document.querySelector('form');

    // можно и не хранить на данном уровне , все равно получаем с сервера , 
    // но иногда необходимо обращаться 
    let todos = [];
    let users = [];

    // !---- Attach Event --- Привязка события  ---------------------------------------------------------------------------------------

    // событие когда документ загружен полностью
    document.addEventListener('DOMContentLoaded', initApp);
    // событие на форму - отравки  === submit
    form.addEventListener('submit', handleSubmit);

    // !---- Basic  Logic --- Функция отрисовки данных на странице  ---------------------------------------------------------------------------------------

    // Функция получения имя пользователя 
    function getUserName(userId) {
        {
            // поиск User по ID
            const user = users.find(user => user.id === userId);
            return user.name;
        }
    };

    //  Функция отрисовки данных на странице  li
    function printTodo({ id, userId, title, completed }) {
        // create lI
        const li = document.createElement('li');
        // li  назначаем class
        li.className = 'todo-item';
        // добавляем атрибут для дальнейших манипуляций с элементом
        li.dataset.id = id;
        // заполняем HTML -ем
        li.innerHTML = `<span>${title} <i>by</i> <b>${getUserName(userId)}</b></span>`;

        // create checkbox
        const status = document.createElement('input');
        status.type = 'checkbox';
        status.checked = completed;
        status.addEventListener('change', handleTodoChange);

        // create close
        const close = document.createElement('span');
        close.innerHTML = '&times;';
        close.className = 'close';
        close.addEventListener('click', handleClose);

        //  к li добавляем элементы
        li.prepend(status);
        li.append(close);

        //  к   todoList на странице в самое начало добавляем  li
        todoList.prepend(li);
    }

    //  Функция отрисовки данных на странице  option  (Users)
    function createUserOption(user) {
        const option = document.createElement('option');
        option.value = user.id;
        option.innerText = user.name;

        userSelect.prepend(option);
    }

    // function Delete удаление со страницы
    function removeTodo(todoId) {
        todos = todos.filter(todo => todo.id !== todoId);

        const todo = todoList.querySelector(`[data-id="${todoId}"]`);
        // Удаление события с удаляемого элемента
        todo.querySelector('input').removeEventListener('change', handleTodoChange);
        todo.querySelector('.close').removeEventListener('click', handleClose);
        // удаляем сам элемент
        todo.remove();
    }

    // Alert Error
    function alertError(error) {
        alert(error.message);
    }

    // !---- Event Logic  --- Логика События   ---------------------------------------------------------------------------------------

    function initApp() {
        Promise.all([getAllTodos(), getAllUsers()]).then(values => {
            [todos, users] = values;

            // функция отправки в разметку полученных  задачь
            todos.forEach(todo => printTodo(todo));
            // функция отправки в разметку полученных пользователей  
            users.forEach(user => createUserOption(user));
        })
    };

    function handleSubmit(event) {
        // всегда при синхронной работе с формой  или будет отправлять данные  - не будет работать приложение
        event.preventDefault();

        createTodo({
            userId: Number(form.user.value),
            title: form.todo.value,
            completed: false
        });
    }

    function handleTodoChange() {
        const todoId = this.parentElement.dataset.id;
        const completed = this.checked;

        toggleTodoComplete(todoId, completed);
    }

    function handleClose() {
        const todoId = this.parentElement.dataset.id;
        deleteTodo(todoId);
    }

    // !---- Async Logic --- Логика Асинхронного получения данных с сервера   ---------------------------------------------------------------------------------------

    // асинхронная функция получения всех задач
    async function getAllTodos() {
        // формируем запрос
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=15')
        // ожидаем запрос когда отработает JSON
        const data = await response.json();

        return data;
    }

    // асинхронная функция получения всех Пользователей
    async function getAllUsers() {
        try {
            // формируем запрос
            const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=6')
            // ожидаем запрос когда отработает JSON
            const data = await response.json();

            return data;
        } catch (error) {
            alertError(error);
        }
    }

    // асинхронная  функция  СОЗДАИЕ ToDO
    async function createTodo(todo) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                body: JSON.stringify(todo),
                // указываем , что ожидаем именно этот формат от сервера 
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const newTodo = await response.json();

            printTodo(newTodo);
        } catch (error) {
            alertError(error);
        }
    }

    //  асинхронная  функция ИЗМИНЕИНЕ ( чекбокса )
    async function toggleTodoComplete(todoId, completed) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
                method: 'PATCH',
                body: JSON.stringify({ completed: completed }),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await response.json();

            if (!response.ok) {
                /// ERROR
                throw new Error('Failed to connect with the server! Please try later.');
            }

        } catch (error) {
            alertError(error);
        }
    }

    //  асинхронная  функция DELETE ToDo
    async function deleteTodo(todoId) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await response.json();

            if (response.ok) {
                // remove todo
                removeTodo(todoId);
            } else {
                /// ERROR
                throw new Error('Failed to connect with the server! Please try later.');
            }
        } catch (error) {
            alertError(error);
        }
    }
})();


