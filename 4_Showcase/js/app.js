const products = [
    {
        id: 1,
        title: 'Lenovo Yoga',
        price: 3000,
    },
    {
        id: 2,
        title: 'Acer Aspire',
        price: 1800,
    },
    {
        id: 3,
        title: 'Dell Vostro',
        price: 3400
    },
];

let order = [];

const buttons = document.querySelectorAll('.choiceId');
buttons.forEach(item => {
    item.addEventListener('click', () => {
        addToBasket(Number(item.getAttribute('data-id'))); // !!!! NUMBER No String 
    })
})


function addToBasket(productId) {
    // ДОБАВИТЬ ПРОВЕРКУ НАЛИЧИЯ ТОВАРА В ЗАКАЗЕ (  ПРИ НАЛИЧИИ ВЫДАТЬ ALERT ЧТО ТОВАР УЖЕ В КОРЗИНЕ)
    if (order.find(item => item.id === productId)) return alert('Данный Товар уже есть в корзине!');

    // ЕСЛИ ТОВАР ЕЩЕ НЕ В КОРЗИНЕ Б ДОБАВИТЬ ЕГО ИЗ МАСИВА products
    const product = products.find(item => item.id === productId);
    order = [...order, product];

    // NO TO TOUCH
    renderCart();
    rerenderTotalPrice();
}

function removeFromBasket(productId) {
    // НАПИСАТЬ ЛОГИКУ УДАЛЕНИЯ ТОВАРА ИЗ КОРЗИНЫ
    order = order.filter(n => n.id !== productId);


    // NO TO TOUCH
    renderCart();
    rerenderTotalPrice();
}

function rerenderTotalPrice() {
    // ОПИШИТЕ ФУНКЦИОНАЛ ПОДСЧЕТА ОБЩЕЙ СТОИМОСТИ ЗАКАЗА
    let totalPrice = order.reduce((accum, item) => {
        return accum + item.price;
    }, 0);

    // NO TO TOUCH
    document.getElementById('total').innerHTML = totalPrice;
}

//  NO TO TOUCH
function renderCart() {
    const cart = document.getElementById('basket-items');

    cart.innerHTML = '';
    order.forEach((item) => {
        const el = document.createElement('li');
        el.innerText = item.title;
        el.onclick = () => removeFromBasket(item.id);
        cart.appendChild(el);
    })
}