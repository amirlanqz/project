let result = '';
const length = 7;

for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    result += '\n';
}

console.log(result);

function firstTask() {
    // Пишем решение вот тут
    for (let i = 5; i < 11; i++) {
        console.log(i)
    }
}

firstTask();

function secondTask() {
    // Пишем решение вот тут
    for (let i = 20; i > 10; i--) {
        if (i === 13) {
            break;
        }
        console.log(i);
    }
    
}

secondTask();

function thirdTask() {
    // Пишем решение вот тут
    for (let i = 0; i < 11; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}
thirdTask();

function fourthTask() {
    // Пишем решение вот тут
    let i = 2;
    while(i <= 16) {
        i++;
        if (i % 2 === 0) {
            continue;
        } else {
            console.log(i);
        }
    }
    
}
fourthTask();

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    for (let i = 5; i < 11; i++) {
        arrayOfNumbers.push(i);
    }
    
    // Не трогаем
    return arrayOfNumbers;
}

console.log(fifthTask());