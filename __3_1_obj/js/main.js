const developer = {
    name: 'John',
    surname: 'Doe',
    age: 40,
    skills: ['JavaScript', 'TypeScript', 'React', 'Node.JS'],
    successful: true,
    addAge() {
        this.age++;
        // console.log('this :', this);
        // this : {
        //     name: 'Serhii',
        //     surname: 'Khoziaikin',
        //     age: 41,
        //     skills: [ 'JavaScript', 'TypeScript', 'React', 'Node.JS' ],
        //     successful: true,
        //     addAge: [Function: addAge]
        //   }
    },
    getMarried() {
        this.isMaried = true;
    },
    getDivorced() {
        this.isMaried = false;
    },
};

console.log(`${developer.name} ${developer.surname} : succssful = $${developer.successful}`)
// -----------------------------------------------------------------
// for Key
// console.log('name' in developer); // true
// for in 
for (let key in developer) {
    // console.log(key);
}
// -----------------------------------------------------------------
// for of  (for arr + str + Set)
const arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    // console.log(value);
}
// -----------------------------------------------------------------
developer.addAge();
developer.getMarried();
console.log(developer);