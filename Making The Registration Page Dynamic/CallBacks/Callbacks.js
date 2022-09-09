const posts = [{ title: "Post One" }, { title: "Post Two" }];

function getPost() {
  setTimeout(() => {
    posts.forEach((item, index) => {
      console.log("My", item.title);
    });
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: "Post Third" }, getPost);

// function create4thPost(callback) {
//   createPost({ title: "Post Fourth" }, getPost);
// }
