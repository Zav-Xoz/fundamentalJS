// Reduce

const staff = [
    {
        id: 1,
        name: 'John Doe',
        salary: 1000,
        arr: [1, 2, 3],
    },
    {
        id: 2,
        name: 'Sara Smit',
        salary: 900,
        arr: [4, 5, 6],
    },
    {
        id: 3,
        name: 'JElton John',
        salary: 1100,
        arr: [7, 8, 9],
    },
    {
        id: 4,
        name: 'Mo Williams',
        salary: 1000,
        arr: [10, 11, 12],
    },
    {
        id: 5,
        name: 'Bob Dillan',
        salary: 800,
        arr: [13, 14, 15],
    },
];

// const budjet = staff.reduce((accumulator, user) => {
//     return accumulator + user.salary;
// }, 0);
// console.log(budjet);

const budjetSmallPersonal = staff.reduce((accumulator, user) => {
    if (user.salary < 1000) {
        return accumulator += `${user.name}`;  // string name
    }
    return accumulator;
}, '');
console.log(budjetSmallPersonal);
console.log(typeof budjetSmallPersonal);

const arrSallary = staff.reduce((acc, user) => {
    return [...acc, user.salary]   //   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ARR
}, [])
console.log(arrSallary);