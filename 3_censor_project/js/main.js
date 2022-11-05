function censor() {
    const censoredArr = []; // [['PHP', 'JS'],['backend', 'frontend']]
    return (str1, str2 = '') => {
        if (str2) {
            censoredArr.push([str1, str2]);
        } else {
            for (let pair of censoredArr) {
                str1 = str1.replace(new RegExp(pair[0], 'gi'), pair[1]);
            }
            return str1;
        }
    }
}

const changeScene = censor();

changeScene('PHP', 'JS');                                     //  1 условие выполняется  - формируется 1 массив
changeScene('backend', 'frontend');                           //  2 условие выполняется  - формируется 2 массив

console.log(changeScene('PHP is the most popular programming language for backend web-developmrnt')); // 3 условие 