const urlPosts = "https://jsonplaceholder.typicode.com/posts";
const urlUsers = "https://jsonplaceholder.typicode.com/users";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></span></strong></p>
`;

const xhrPromise = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(new Error(xhr.statusText));
      }
    };

    xhr.onerror = () => {
      reject(new Error('Network error'));
    };
  });

  return promise;
};

const updateAuthors = (users) => {
  document.querySelectorAll(".author").forEach(author => {
    const userId = author.getAttribute("data-id");
    const user = users.find(user => user.id == userId);
    if (user) {
      author.textContent = user.name;
    }
  });
};

xhrPromise("GET", urlPosts)
  .then(posts => {
    let result = '';
    posts.forEach(item => {
        result += template(item);
    });
    document.getElementById("blog").innerHTML = result;
    return xhrPromise("GET", urlUsers);
  })
  .then(users => {
    updateAuthors(users);
  })
  .catch(error => {
    console.error("Error fetching data: ", error);
  });
