//#1
function calculate(operation, initialValue, numbers) {
    let result = initialValue;
    for (const number of numbers) {
      result = operation(result, number);
    }
    return result;
   }

   function sum(n1, n2) {
      return n1 + n2;
   }
   
   function multiply(n1, n2) {
      return n1 * n2;
   }
   


console.log(calculate(sum, 0, [1, 2, 4]));
console.log(calculate(multiply, 1, [1, 2, 4]));

//#2

let student_names = ["Wick", "Malcolm", "Smith"];

const result = student_names.map((name, index, array) => {
    return `name:${name} | index: ${index + 1} | array: [${array.join(',')}]`;
});

console.log(result.join('\n'));

//#3

let students_information = [
    {"name": "Wick", "degree": 375}, 
    {"name": "Malcolm", "degree": 405}, 
    {"name": "Smith", "degree": 453},
];

const maxDegree = 600;

const result1 = students_information.map(student => {
    const percentage = (student.degree / maxDegree) * 100;
    return {name: student.name, degree: student.degree, percentage };

});
result1.forEach(info => console.log(info));

//#4

[1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]];




const nestedArray = [1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]];

const flatArray = nestedArray.reduce((accumulator, currentValue) => {
    
    if (Array.isArray(currentValue)) {
        
        return accumulator.concat(currentValue);
    } else {
        accumulator.push(currentValue);
        return accumulator;
    }
}, []);
console.log(flatArray);

//#5

Array.prototype.upperCase = function() {
    for (let i = 0; i < this.length; i++) {
    
        if (typeof this[i] === 'string') {

            this[i] = this[i].toUpperCase();
        }
    }
};

function myFunc() {
    let arr = ["Algorithm", "Data Structure", "Operating System", "html"];
    arr.upperCase(); 
    console.log(arr);
}

myFunc();






