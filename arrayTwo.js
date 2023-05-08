const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {

    let str = '';
    if (arr !== '') {
        arr.forEach(item => {
            str += item;
        });
    } else {
        str += 'empty';
    }
    return str;
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let str = '';
    for (const key of arr) {
        str += `${key.toLowerCase()}\n`;
    }
    return str;
}

// console.log(showFamily(family));
console.log(standardizeStrings(favoriteCities));
