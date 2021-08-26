document.addEventListener("DOMContentLoaded", onGetPost);


function onGetPost(){
  fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(date => handlPost(date))
}

function handlPost(posts){
  for (post of posts){
    addPost(post);
   }
}

function addPost(post){
  let html = template.innerHTML.replace("{{id}}", post.id);
  html = html.replace("{{title}}", post.title);
  if (post.completed === true){
    html = html.replace("darkblue", "blue");
  }
  postSection.insertAdjacentHTML("beforeend", html);

}







