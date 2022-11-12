// Find in collection
const developers = [
    {
        id: 1,
        fullName: 'Anton Petrov',
        skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'React'],
        salary: 1200,
        area: 'frontend',
    },
    {
        id: 2,
        fullName: 'Ivan Ivanov',
        skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'Vue'],
        salary: 1000,
    },
    {
        id: 3,
        fullName: 'Albert Sidorov',
        skills: ['PHP', 'Laravel', 'HTML'],
        salary: 850,
        area: 'beckend',
    },
    {
        id: 4,
        fullName: 'Sam Willson',
        skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'React', 'Node.JS'],
        salary: 1850,
        area: 'foolstack',
    },
];
// ---------------------------------------------------------------------------
// developers.forEach(elem => console.log(elem));
// developers.forEach(elem => {
//     for (let key in elem) {
//         if (elem[key] === 'Ivan Ivanov') {
//             console.log('Ivan Ivanov TRUE!!!');
//         }
//     }
// });
// --------------------------------------------------------------------------- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const out = developers.find(item => item.area === 'foolstack');
const out = developers.find(item => item.skills.includes('React'));
console.log(out);
console.log(out.fullName);
console.log(out.salary);