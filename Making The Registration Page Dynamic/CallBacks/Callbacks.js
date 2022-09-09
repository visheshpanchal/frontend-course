const posts = [{ title: "Post One" }, { title: "Post Two" }];

function getPost() {
  setTimeout(() => {
    posts.forEach((item, index) => {
      console.log("My", item.title);
    });
  }, 1000);
}

function createPost(post, callback = undefined) {
  setTimeout(() => {
    posts.push(post);
    if (callback) callback();
  }, 2000);
}

createPost({ title: "Post Third" });

function create4thPost(callback) {
  createPost({ title: "Post Four" }, getPost);
}

create4thPost(createPost);
