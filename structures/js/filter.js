// FILTER 

// приметивный массив  - просто массивж
const arr = [1, 2, 3, 4, 5, 6, 7];
const oddNumbers = arr.filter(num => num % 2 === 0);
console.log(oddNumbers);
// массив  в котором лежат оьекты это  коллекции 
const users = [
    {
        id: 1,
        name: 'Brad Peet',
        isMarried: true,

    },
    {
        id: 2,
        name: 'Humphrey DeForest',
        isMarried: false,

    },
    {
        id: 3,
        name: 'Cary Grant',
        isMarried: false,

    },
    {
        id: 4,
        name: 'Marlon Brando',
        isMarried: true,

    },
    {
        id: 5,
        name: 'John Wayne',
        isMarried: true,

    },
    {
        id: 6,
        name: 'Clark Gable',
        isMarried: true,

    },
]

const marriedUser = users.filter(user => user.isMarried);  // === true
console.log(marriedUser);
const result = users.filter(user => user.id > 2);
console.log(result);
// INCLUDES  
const names = users.filter(users => users.name.includes('Bra'));
console.log(names);