//#1
setTimeout(() => {

    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;
    
    const h1 = document.getElementById('waiting');

    if (!firstName && !lastName) {
        h1.textContent = "I'm miss You";
    } else {
        h1.textContent = `Hello, ${firstName} ${lastName}!`;
    }
}, 10000);

//#2

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
xhr.send();
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
    
        const data = JSON.parse(xhr.responseText);
        let posts = '';
        data.forEach(post => {
            posts += `<div>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </div>`;
        });
        document.getElementById('demo').innerHTML = posts;
    } else {
        console.error('Request failed');
    }
};
