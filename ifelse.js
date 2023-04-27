'use strict';
const myAge = +prompt('How old are you?');
if (myAge >= 18) {
    console.log('welcome to the club');
} else {
    console.log('you are young, come when you will be old man');
}

(myAge == 24) ? console.log('its amirlan') : console.log('its not amirlan');

switch (myAge) {
    case 24:
        console.log('amirlan');
        break;
    case 23:
        console.log('aset');
        break;
    case 29:
        console.log('marzhan');
        break;
    default:
        console.log('error');
        break;
}
