// console.log("person1 shows ticket");
// console.log("person2 shows ticket");

// const preMovie = async () => {
//   const person3PromiseToShowTicketWhenWifeArrives = new Promise(
//     (resolve, reject) => {
//       setTimeout(() => resolve("ticket"), 3000);
//     }
//   );
//   const getPopcorn = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("popcorn"), 3000);
//   });

//   const addButter = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("butter"), 3000);
//   });

//   const getColdDrinks = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("cold drink");
//     });
//   });

//   let ticket = await person3PromiseToShowTicketWhenWifeArrives;

//   //   console.log(`got the ${ticket}`);
//   //   console.log(`Husband:we should go in now`);
//   //   console.log(`Wife: "i am hungry"`);

//   //   console.log(`Husband: here is ${popcorn}`);
//   //   console.log(`Husband:we should go in now`);
//   //   console.log(`Wife: "I dont like popcorn without butter!"`);

//   //   console.log(`added ${butter}`);
//   //   console.log(`Wife: "i need cold drink with popcorn"`);

//   //   console.log(`added ${coldDrinks}`);
//   //   console.log(`Husband:Anything else darling`);
//   //   console.log(`Wife: lets go we are going to miss the preivew`);
//   //   console.log(`Husband: thanks for the reminder *grin*`);

//   const [popcorn, butter, coldDrinks] = await Promise.all([
//     getPopcorn,
//     addButter,
//     getColdDrinks,
//   ]);

//   console.log(`${popcorn} ${butter} ${coldDrinks}`);
//   return ticket;
// };

// preMovie().then((t) => console.log(`person4 shows ${t}`));
