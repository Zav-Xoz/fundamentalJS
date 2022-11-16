let button = document.querySelector('#toggle-btn');
let element = document.querySelector('.element');
// -------------------------------------------------

button.addEventListener('click', () => {
    element.classList.toggle('hide');
})

// -------------------------------------------------

// function toggleDivVisibility() {
//     if (element.style.display === 'none') {
//         element.style.display === 'block';
//     } else {
//         element.style.display === 'none';
//     }
// }

// button.addEventListener('click', toggleDivVisibility);

// -------------------------------------------------