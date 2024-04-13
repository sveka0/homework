const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></span></strong></p>
`;

fetch(url)
  .then(response => response.json()) 
  .then(posts => {
    let result = '';
    posts.forEach(item => {
      result += template(item);
    });
    document.getElementById("blog").innerHTML = result;
  })
  .then(() => {
    const authorElements = document.querySelectorAll('.author');
    authorElements.forEach(element => {
      const userId = element.getAttribute('data-id');
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
          element.textContent = user.name; 
        })
        .catch(error => console.error('Error loading user:', error));
    });
  })
  .catch(error => console.error('Error fetching posts:', error));
