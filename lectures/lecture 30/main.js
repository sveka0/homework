document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('demoForm');
    const h1 = document.getElementById('waiting');
    const demo = document.getElementById('demo');

    async function waitForSubmission() {
        await new Promise(resolve => setTimeout(resolve, 1000));

        const firstName = form.elements.firstName.value.trim();
        const lastName = form.elements.lastName.value.trim();


                if (firstName && !lastName) {
            h1.textContent = "I'm miss You";
            } else {
                h1.textContent = `Hello, ${firstName} ${lastName}!`;
                
            }
        }

        waitForSubmission();

        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://jsonplaceholder.typicode.com/post');
        xhr.onload = function () {
            if (xhr.status === 200) {
                const posts = JSON.parse(xhr.responseText);
                const template = posts.map(post => `<p>${post.title}</p>`).join("");
                    demo.innerHTML = template;
                }
    
        };
        xhr.send();
        
        waitForSubmission(); 
    
});