function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    
    // Пишем решение вот тут
    for(let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    }
    
    // Не трогаем
    return result;
}
console.log(firstTask());

function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    const arr = [];
    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) == 'string') {
            arr.push(data[i] + ' - done')
        } else {
            arr.push(data[i] * 2);
        }
    }
    
    // Не трогаем
    return arr;
}

console.log(secondTask());

function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    
    result.push(data.reverse());
    
    // Не трогаем
    return result;
}

console.log((thirdTask()));