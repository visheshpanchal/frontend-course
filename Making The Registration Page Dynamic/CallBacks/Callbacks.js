const posts = [
  { title: "Post One", createdAt: Date.now() },
  { title: "Post Two", createdAt: Date.now() },
];

function getPost() {
  setTimeout(() => {
    posts.forEach((item, index) => {
      console.log(
        "My",
        item.title,
        `${(Date.now() - item.createdAt) / 1000}s`,
        "ago"
      );
    });
  }, 1000);
}

function createPost(post, callback = undefined) {
  setTimeout(() => {
    posts.push(post);
    if (callback) callback();
  }, 2000);
}

createPost({ title: "Post Third", createdAt: Date.now() });

function create4thPost(callback) {
  setTimeout(() => {
    posts.push({ title: "Post Four", createdAt: Date.now() });
    getPost();
  }, 2000);
}

create4thPost(createPost);
