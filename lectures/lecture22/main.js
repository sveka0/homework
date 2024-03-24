const classes = ['first', 'second', 'third', 'fourth'];

const h1Element = document.getElementsByTagName('h1');
console.log('first h1Elements:', typeof h1Element );
console.log('second h1Elements:', typeof h1Element);
console.log( 'third h1Elements:', typeof h1Element);
console.log( 'fourth h1Elements:', typeof h1Element);

console.log('first h1Elements:', h1Element.length);
console.log('second h1Elements:', h1Element.length);
console.log('third h1Elements:', h1Element.length);
console.log('fourth h1Elements:', h1Element.length);

for (let i = 0; i < h1Element.length; i++) {
    console.log('elements', i + 1 + ':', h1Element[i]);
    
}

const firstParagraph = document.querySelector('#p1');
firstParagraph.style.backgroundColor = 'gold';

const secondParagraph = document.querySelector('#p2');
secondParagraph.style.backgroundColor = 'gold';
secondParagraph.style.color = 'blue';
secondParagraph.style.fontSize = '2rem';

const thirdParagraph = document.querySelector('#p3');
thirdParagraph.classList.add('third');

const fourthParagraph = document.querySelector('#p4');
fourthParagraph.classList.add('fourth', 'border');

const container = document.querySelectorAll('.container');

for (let i = 0; i < container.length; i++) {
    const firstChild = container[i].firstElementChild;
    console.log('firstChild', i + 1 + ':', firstChild);
}

const container1 = document.querySelectorAll('.container');

for (let i = 0; i < container.length; i++) {
    const firstChildContent = container[i].firstElementChild.textContent;
    console.log('firstChild', i + 1 + ':', firstChildContent);
}

const headers = document.querySelectorAll('.container header'); 

for (let i = 0; i < headers.length; i++) {
    const tagName = 'h' + (i + 1);
    const newHeader = document.createElement(tagName);
    const originalHeader = headers[i].querySelector('h1');

    newHeader.innerHTML = originalHeader.innerHTML;
    newHeader.id = originalHeader.id;
    newHeader.className = originalHeader.className;

    newHeader.classList.add('classes[i]');
}





    
