// const btn = document.querySelector('#myBtn');
// const spoiler = document.querySelector('#spoiler');

// btn.addEventListener('click', toggleSpoiler);

// function toggleSpoiler() {
//     if (spoiler.classList.contains('closed')) {
//         spoiler.classList.remove('closed');
//         spoiler.classList.add('open');
//     } else {
//         spoiler.classList.remove('open');
//         spoiler.classList.add('closed');
//     }
// }

// window.addEventListener('keydown', closeSpoiler);

// function closeSpoiler(event) {
//     if (!spoiler.classList.contains('closed') && event.key === 'Escape') {
//         spoiler.classList.remove('open');
//         spoiler.classList.add('closed');
//     }
// }
// ---------------------------------------------------------------------------
// ----------------------------------- NEW Ver 
// ----------------------------------- NEW Ver 
// ----------------------------------- NEW Ver 

document.querySelector('#myBtn').addEventListener('click', toggleSpoiler); // не зачем обьявлять и хранить данную пременную или константу


function toggleSpoiler() {
    const spoiler = document.querySelector('#spoiler');
    spoiler.classList.toggle('closed');

    if (spoiler.classList.contains('closed')) {
        dettachSpoilerEvents();
    } else {
        attachSpoilerEvents();
    }
}

function attachSpoilerEvents() {
    document.addEventListener('keydown', handleEscape);
}

function dettachSpoilerEvents() {
    document.removeEventListener('keydown', handleEscape);
}

function handleEscape(event) {
    if (event.key === 'Escape') toggleSpoiler();
}