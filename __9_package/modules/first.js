const a = 1; // не доступны снаружи.

function addOne(num) {
    return num + a;
}

function sum(a, b) {
    return a + b;
}

export {
    sum,
    addOne,
}