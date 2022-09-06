// What is a Callback Function in Javascript
setTimeout(() => console.log("timer1 expired"), 1000);

setTimeout(() => console.log("timer2 expired"), 0);

function x(y) {
  console.log("inside x");

  y();
}

x(function y() {
  setTimeout(() => console.log("inside y"), 0);
});
