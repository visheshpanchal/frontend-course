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

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error : Something went wrong");
      }
    });
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        resolve(posts.pop());
      } else {
        reject("Array is empty");
      }
    }, 1000);
  });
}
createPost({ title: "Post Third", createdAt: Date.now() });
createPost({ title: "Post Fourth", createdAt: Date.now() });
deletePost().then((deletedElement) => {
  console.log(deletedElement);
  getPost();
  deletePost().then((deletedElement) => {
    console.log(deletedElement);
    getPost();

    deletePost().then((deletedElement) => {
      console.log(deletedElement);
      getPost();
      deletePost()
        .then((deletedElement) => {
          console.log(deletedElement);
          getPost();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });
});
