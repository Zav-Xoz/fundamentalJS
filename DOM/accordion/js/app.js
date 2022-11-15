let buttons = document.querySelectorAll('.accordion');


buttons.forEach(btnClick => {
    btnClick.addEventListener('click', () => {
        btnClick.nextElementSibling.classList.toggle('show');
    })
})

// --------------------------------------------------

//  То же самое,  но старый подход

// for (let i=0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', () => {
//         const panel = buttons[i].nextElementSibling;
//         panel.classList.toggle('show');
//     })
// }

// --------------------------------------------------