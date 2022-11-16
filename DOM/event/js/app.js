// ---------------------------------------------------------------------------------------------
const button = document.querySelector('button');

button.addEventListener('click', clickEvent);

function clickEvent(event) {
    // console.log(event);
}
// ---------------------------------------------------------------------------------------------

const inputs = document.querySelectorAll('input');
inputs.forEach(input => input.addEventListener('keypress', handleEvent))

function handleEvent(event) {

    // console.log(event.target);

    if (event.key === 'Enter') {
        event.preventDefault();       //   отмена действия браузера по умолчанию
        event.target.nextElementSibling.focus();  // фокус на соседа
    }
}

// ---------------------------------------------------------------------------------------------

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault(); //   отмена действия  , что бы не отправлять форму

    if (validate()) {
        //submit AJAX  // УДАЧНАЯ ОТПРАВКА ФОРМЫ
        form.reset(); // reset form
    } else {
        alert('Fix empty fields');   // Исправить пустые поля
    }
}

function validate() {
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {  // если пустая строка === цвет гранцы красный
            input.style.borderColor = 'red';
            isValid = false;
        } else {
            input.style.borderColor = 'currentColor';
        }
    });
    return isValid;
}