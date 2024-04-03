
//#1

const list = ['html', 'css', 'javascript', 'react.js'];

const ul = document.createElement('ul');


list.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item; 
    ul.appendChild(li); 
});

document.body.appendChild(ul);

//#2

const listWithHref = [
    {'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"}, 
    {'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"}, 
    {'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}, 
    {'react.js': "https://react.dev"}
];

const ol = document.createElement('ol');

listWithHref.forEach(item => {
    const key = Object.keys(item)[0]; 
    const value = item[key]; 
    
    const a = document.createElement('a');
    a.setAttribute('href', value); 
    a.textContent = key; 
    
    const li = document.createElement('li');
    li.appendChild(a);
    
    ol.appendChild(li);
});

document.body.appendChild(ol);

//#3

const students = [
    {'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230},
    {'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336},
    {'firstName': 'John', 'lastName': 'Doe', 'degree': 400},
    {'firstName': 'James', 'lastName': 'Bond', 'degree': 700},
];

const table = document.createElement('table');

const headerRow = document.createElement('tr');

['firstName', 'lastName', 'degree'].forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    th.style.backgroundColor = 'blue';
    th.style.color = 'azure';
    headerRow.appendChild(th);
});

table.appendChild(headerRow);

students.forEach(student => {
    const row = document.createElement('tr');
    ['firstName', 'lastName', 'degree'].forEach(fieldName => {
        const cell = document.createElement('td');
        cell.textContent = student[fieldName];
        row.appendChild(cell);
    });
    table.appendChild(row);
});

document.body.appendChild(table);





