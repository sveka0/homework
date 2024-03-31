
const colors = ['blue', 'green', 'white'];
function iter(item) {
    console.log(item);
}

colors.forEach(iter);


function iterate(item, index) {
    if (index === colors.length - 1) {
        console.log('The last iteration!');
    } else {
        console.log(`${item} has index ${index}.`);
    }
}

colors.forEach((item, index) => {
    iterate(item, index);
});



const letters = ['a', 'b', 'c'];
const context = this;

letters.forEach(function(letter) {
    if (context === window) {
        console.log(true);
    } 
});





const Numbers = [22, 3, 4, 10];
let allEven = true;

Numbers.forEach(function(number) {
    if (number % 2 !== 0) {
        allEven = false;
    }
});


if (allEven) {
    console.log("Усі парні");
} else {
    console.log("Не всі парні");
}

const Numbers1 = [22, 3, 4, 10];

const allEven1 = Numbers.every(function(number) {
    return number % 2 === 0;
});

if (allEven) {
    console.log("Усі парні.");
} else {
    console.log("Не всі парні.");
}

const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex(fruit => fruit === "blueberries");

console.log(index); 


const arr = [7, 33, 47, 99, 2, 103, 79];

const firstElementGreaterThan10 = arr.find(element => element > 10);

console.log(firstElementGreaterThan10); 


const array = [1, 2, 3, 4, 5];

const isAnyElementEven = array.some(element => element % 2 === 0);

console.log(isAnyElementEven); 


const numbers = [1, 30, 4, 21, 100000];

numbers.sort((a, b) => a - b);

console.log(numbers); 











