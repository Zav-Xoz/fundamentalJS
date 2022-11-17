const list = document.querySelector('#todos');
document.querySelector('button').addEventListener('click', handelClick);

function handelClick() {
    const newTodo = this.previousElementSibling.value.trim();   //   доступ через соседа
    // this - получил кнопку ,previousElementSibling - получил соседний элемент,  value - значение, trim() - обрезал.

    if (newTodo) {
        createTodo(newTodo);                                // add Todo
        document.querySelector('input').value = '';
    } else {
        alert('imput field is empty');                      // поле инпута пустое
    }
}

function createTodo(text) {
    const li = document.createElement('li');                 //  только в оперативной памяти создвн
    li.innerText = text;                                     //  присвоить текст
    li.className = 'todo-item';                              //  создать добавить клас
    li.addEventListener('click', removeTodo);                //  вешаем событие удаление при клике
    list.prepend(li);                                        //  добавить в начало элемента 

}

function removeTodo() {
    this.removeEventListener('click', removeTodo);           // удаляем избыточный евент , удаляемого элемента
    this.remove();                                           // удалить элемент на который клик
}