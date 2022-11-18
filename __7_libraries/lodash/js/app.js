const arr = [10, 1, 21, 1, 33, 3, 33, 5, 8, 8, 1, 3, 5];

// убрать ввойные значение  _.uniq()
// отсортировать уникальные _.sortBy()
const arrOut = _.sortBy(_.uniq(arr));
_.sortedUniq([1, 1, 2]);
// => [1, 2]
console.log(arrOut); // [1, 3, 5, 8, 10, 21, 33]


// ----------------------------------------------------------------------

const userSkills = {
    css: 'b2',
    html: 'c1',
    js: 'a2',
    ts: null,
    react: undefined,
    vue: null,
    lodash: 'a1'
}
//  проверяет на равноли  0      _.isNil
// возвращает обьект  для кого педикарт не возвращает истинну
const userApprovedSkills = _.omitBy(userSkills, _.isNil);

console.log(userApprovedSkills);   // {css: 'b2', html: 'c1', js: 'a2', lodash: 'a1'}