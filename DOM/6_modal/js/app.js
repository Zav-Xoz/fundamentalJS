let modal = document.querySelector('#myModal');
let btnOpen = document.querySelector('#myBtn');


btnOpen.addEventListener('click', openModal);



function openModal() {
    modal.classList.add('open');
    attachModalEvents();
}

function attachModalEvents() {
    modal.querySelector('.close').addEventListener('click', closeModal);
    modal.addEventListener('click', closeModal);
    document.addEventListener('keydown', handleEscape);
}

function handleEscape(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}

function closeModal() {
    modal.classList.remove('open');
    datachModalEvents()
}

function datachModalEvents() {
    modal.querySelector('.close').removeEventListener('click', closeModal);
    document.removeEventListener('keydown', handleEscape);
}
