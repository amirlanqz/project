const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        return 'error'
    } else {
        return str.split('').reverse().join('');
    }
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    
}
