const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("1");
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("2");
  }, 3000);
});

// promise1.then((r) => console.log(r));
// promise2.then((r) => console.log(r));

async function call() {
  const one = await promise1;
  const two = await promise2;

  console.log(one);
  console.log(two);
}

call();

console.log("Hello World");
