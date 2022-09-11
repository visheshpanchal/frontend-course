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

async function createPost(post) {
  return await new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        posts.push(post);
      }, 1000);
      resolve("Post Created");
    } catch (e) {
      reject("Error in Creating Post");
    }
  });
}

const post3 = createPost({ title: "Post Three", createdAt: Date.now() });

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        console.log(posts.pop());
        getPost();
        resolve();
      } catch (e) {
        console.log("Array is empty");
        reject();
      }
    }, 1000);
  });
}

async function deletePosts() {
  const a = await deletePost();
  const b = await deletePost();
  const c = await deletePost();
  const d = await deletePost();
}

deletePosts();

// function deletePost() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (posts.length > 0) {
//         resolve(posts.pop());
//       } else {
//         reject("Array is empty");
//       }
//     }, 1000);
//   });
// }
// createPost({ title: "Post Third", createdAt: Date.now() });
// createPost({ title: "Post Fourth", createdAt: Date.now() });
// deletePost().then((deletedElement) => {
//   console.log(deletedElement);
//   getPost();
//   deletePost().then((deletedElement) => {
//     console.log(deletedElement);
//     getPost();

//     deletePost().then((deletedElement) => {
//       console.log(deletedElement);
//       getPost();
//       deletePost()
//         .then((deletedElement) => {
//           console.log(deletedElement);
//           getPost();
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     });
//   });
// });
