'use strict';
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  arrayStruct(menuIndex, starterIndex) {
    return [this.mainMenu[menuIndex], this.starterMenu[starterIndex]];
  },
  orderDelivery: function ({
    address = 'address',
    time = 'an hour',
    menuIndex,
    starterIndex,
  }) {
    console.log(
      `Order ${this.starterMenu[starterIndex]} and ${this.mainMenu[menuIndex]} have been delivered to ${address} at ${time}`
    );
  },
  orderPizza: function (in1, in2, in3) {
    console.log(`here is your order with ${in1},${in2} and ${in3}`);
  },
  orderBurger: function (mainIngredient, ...otherIngredients) {
    console.log(`chosen: ${mainIngredient}`);
    console.log(`upgrades: ${otherIngredients}`);
  },
};
const { fri, sat } = restaurant.openingHours;
console.log(fri, sat);

// Optional Chaining
console.log(restaurant.openingHours.fri?.close); // so in here , by using optional chaining ,we are requesting from javascript to check wether the property exists . if yes , it logs the chosen value if not shows undefined
// =====================================================================================
// simple looping style using Optional Chaining ES11
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (let i = 0; i < days.length; i++) {
  const open = restaurant.openingHours[days[i]]?.open || 'closed'; // setting default text if there are no info about opening hours on given days
  console.log(`on ${days[i]} , we open at ${open}`);
}
// Looping same thing using for_of loop ES6
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // i used
  console.log(`on ${day} , we open at ${open}`);
}

const user = [{ Name: 'Alan', email: 'kholdarovvv@gmail.com' }];
console.log(user[0] && `yes  it is availble`);

const users = [{ Name: 'Alan', email: 'kholdarovvv@gmail.com' }];

for (const user of users) {
  if (user[0]) {
    console.log(`Name of user: ${user.Name}`); // Output: Name of user: Alan
  }
  console.log(user.Name);
}
console.log(user.Name);

// if (restaurant.orderPizza) {
//   console.log('exists');
// }
// restaurant.orderPizza &&
//   restaurant.orderPizza('mushrooms', 'spinach', 'drinks');
// const array = [1, 2, 3, 4, 5];
restaurant.openingHours.fri && console.log(days);
// let openStr = `we are open in days : `;
// const entries = Object.entries(openingHours);
// let strOpen = Object.keys(openingHours);
// for (const [dayy, { open, close }] of entries) {
//   console.log(`we open at ${open} and close at ${close} on ${dayy}, `);
// }
// console.log(openStr);
// // Object values
// const values = Object.values(openingHours);
// // entire object so here
// const entriess = Object.entries(openingHours);

// for (const element of array) {
//   console.log(element);
// }

// Output:
// 1
// 2
// 3
// 4
// 5
// =====================================================================================
// const arr = [2, 3, 4]; // destructuring does not effect to the original array [const]
// // let [x, v, z] = arr; /// destructuring the array and we have to declare variables using ""const""
// // console.log(x, v, z);
// // x, v, (z = [1, 2, 3]);
// // console.log(x, v, z);

// // let [firstS, , , secondS] = restaurant.categories;
// // console.log(firstS, secondS); // in this this comma ,, ⬆️ changes the order of values to be taken
// // switching variables
// // // // const temp = firstS;
// // // // firstS = secondS;
// // secondS = temp;

// let [firstSs, secondSs] = [secondS, firstS];
// console.log(firstS, secondS);

// const [choco, shashlik] = restaurant.valueStruct(1, 2); // taking the value inside variables using method inside object and destructing them to different variables
// console.log(choco, shashlik); // choco =pasta , shashlik = garlic bread

// // nested destructuring
// const nestedArray = [1, 2, [1, 3]];
// const [i, , [o, d]] = nestedArray;
// console.log(i, o, d);

// [fri, sat] = restaurant.openingHours;
// console.log(fri, sat);

// // // default values
// // const [d, l, m = 1, f] = [5, 6, 3, 3];
// // console.log(d, l, m, f);
// // Data needed for a later exercise

// // Data needed for first part of the section
// restaurant.orderDelivery({
//   address: 'new york 13 avenue',
//   time: '23:21',
//   menuIndex: 1,
//   starterIndex: 3,
// });
// //checking the function after Default Parameter Values
// restaurant.orderDelivery({
//   menuIndex: 1,
//   starterIndex: 3,
// });
// // destructing objects . in this method ,we are just destructing restaurant properties with the same variables outside of the object literal .
// const { name, categories, openingHourss } = restaurant;
// console.log(name, categories, openingHours); // Classico .. italian..,thu...

// // direct destructing with renaming technique
// const { name: nameOf, categories: tags, openingHours: hours } = restaurant;
// console.log(nameOf, tags, hours); // Classico .. italian..,thu...
// // destructing property to a variable and setting it to default value using [] square brackets
// const { menus = [], starterMenu: starter = [] } = restaurant;
// console.log(starter, menu);
// // mutating variables
// let a = 111;
// let b = 232;
// const obj = { /*c:23, */ a: 23, b: 21 };
// ({ a, b } = obj); //23,21 //the parentheses are used to clarify to JavaScript that the statement is an object destructuring assignment, "not a block statement"."prevents syntax errors."
// console.log(a, b);

// //Nested objects
// const {
//   fri: { open: k, close: p },
// } = openingHours;
// console.log(k, p);

// const newArray = [8, 2, 1, 3, 12];
// const badNewArray = [2, 3, newArray[0], newArray[1], newArray[2]];
// console.log(badNewArray);
// //spread operator, called "array👇 spreading "
// const goodNewArray = [2, 3, ...newArray];
// console.log(goodNewArray);

// const mainMenuCopy = [...restaurant.mainMenu];
// const bothMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(bothMenu);

// const languageFunction = [{ ...restaurant.orderDelivery({}) }];
// console.log(languageFunction);

// const ingredients = [
//   // prompt("let's find out what you want inside your pizza! ingredient 1 ?"),
//   // prompt('ingredient 2 ?  '),
//   // prompt('ingredient 3 ?'),
// ];

// restaurant.orderPizza(...ingredients);

// const str = 'Alan';
// const arrDivide = [...str];
// console.log(arrDivide);
// // if we wanna add new properties inside object👇 with spread operator
// const newRestaurant = { foundIn: 2001, ...restaurant, paid: 2000 };
// console.log(newRestaurant);

// const copiedRestaurant = { ...restaurant };
// copiedRestaurant.name = 'Italy';
// console.log(copiedRestaurant);
// console.log(restaurant);

// const copieddRestaurant = restaurant;

// copieddRestaurant.name = 'Alan';
// console.log(restaurant);

// const spreadOp = [1, 2, 3, 4];
// console.log(spreadOp);

// //rest operator is used in the opposite site and used to take the rest value or whole.
// const [aa, bb, ...others] = [34, 21, 34, 90, 2003];
// console.log(aa, bb, aa, bb, ...others, aa, bb, ...others);

// // rest operator should always come at the end in array
// const { fri, ...reNaming } = restaurant.openingHours;
// console.log({ reNaming });

// const add = function (...others) {
//   let sum = 0;
//   for (let i = 0; i < others.length; i++) sum += others[i];
//   console.log(sum);
// };

// add(9, 4, 2, 1, 3);
// add(9, 4, 2, 5, 3);
// add(9, 4, 2, 5, 3);

// restaurant.orderBurger('cheeseburger', 'garlic', 'mayo', 'cheese', 'meat');
// restaurant.orderBurger('double Cheese burger', 'extra meat');

// // Spread operator allows iterables such as arrays, objects, and strings to be expanded into single arguments. The spread operator is denoted by three dots ( ... ) followed by the variable to be expanded.
// // Rest Pattern If the rest pattern were not available, you would need to list the variable names separately.
// const calculator = (function () {
//   let answr = 0; // This will maintain the accumulated answer.
//   return function (calculate) {
//     answr += calculate;
//     console.log(answr);
//   };
// })();

// let numElement = document.querySelector('.num');

// // if (numElement) {
// //   numElement.addEventListener('click', function () {
// //     let num = parseFloat(numElement.textContent) || 0; // Assuming numElement contains a numeric value
// //     calculator(num);
// //   });
// // }

// const calculatorr = function (calculate) {
//   let answr = 0;
//   answr += calculate;
//   console.log(answr);
// };

// let num = document.querySelector('.num');
// if (num) {
//   document.querySelector('.num').addEventListener('click', function () {
//     num = 0;
//     calculator(num);
//   });
// }

// const addMynum = function () {
//   let numm = 0; // This will maintain the accumulated total
//   return function (anys) {
//     numm += anys;
//     return numm;
//   };
// };

// let newnum = document.querySelector('.number');

// if (newnum) {
//   // Ensure the element exists
//   newnum.addEventListener('click', function () {
//     let value = Number(newnum.value) || 0; // Ensure the value is a number
//     let adding = addMynum(value);
//     newnum.value = adding; // Update the value correctly
//     console.log(newnum.value);
//   });
// }

// // const variablle = function (a, b) {
// //   a = 'Jenny';
// //   b = 'Alan';
// //   if (b == 'Alan' || a == 'Alan' || b == 'Jenny' || a == 'Jenny') {
// //     console.log('meee');
// //   } else if ((a && b == a.length) || (a && b == b.length)) {
// //     console.log('sdsd');
// //   } else {
// //     console.log('false input , please try again');
// //   }
// // };

// // variablle('Jenny', 'Alan');

// // birini ichida qatnashgan harflar ikkinchisini ichida toliq qatnashgan bosa va lengthi bir hil bosa true qaytarish kere

// // bomasa false

// // const qiyinEkan = function (a, b) {
// //   a = 'Alan';
// //   b = 'Jenny';
// //   if (
// //     (a == 'A', 'l', 'a', 'n' || b == 'A', 'l', 'a', 'n') ||
// //     (b == 'J', 'e', 'n', 'n', 'y' || a == 'J', 'e', 'n', 'n', 'y')
// //   ) {
// //     console.log('sasa');
// //   } else if (
// //     a === a.length ||
// //     b === a.length ||
// //     a === b.length ||
// //     b === b.length
// //   ) {
// //     console.log('asas');
// //   } else {
// //     console.log('false');
// //   }
// // };

// // qiyinEkan(3434, 23787999999);

// //&&&&&&&&&&&&&&&&&&&&&&&*short-circuiting*||||||||||||||||||||||||||||||||||
// // In JavaScript, short-circuiting is the evaluation of an expression from left to right with || and && operators. If the condition is met and the rest of the conditions won't affect the already evaluated result, the expression will short-circuit and return that result (value).

// // flasy values==================================

// // false:
// // 0:
// // -0:
// // NaN: .
// // null:
// // undefined:
// // "":
// // null and undefined: When coerced to a boolean context (like in an if statement), they both evaluate to false.

// console.log('------or------'); // or operator takes the tuthy value or when two truthy values are entered it takes the first truthy one because it checks from left to right but takes the first one
// const restaurannt = { GuestNumer: 'cheese' };
// restaurant.GuestNumer = 1;
// const checks = restaurannt.GuestNumer || 10;
// console.log(checks);
// /// they are different and do totally the opposite to each other
// console.log('---- and ----'); // and operator takes the falsy value or when two truthy values are entered it takes the last truthy one because it checks from left to right
// const restaurantt = {};
// restaurant.orderNumber = 0;
// const checkss = restaurant.GuestNumer && 10;
// console.log(checkss);

// //next level IF conditions but hard to read so recommended not to change the all if else statements

// if (restaurant.orderPizza) {
//   console.log('exists');
// }
// restaurant.orderPizza &&
//   restaurant.orderPizza('mushrooms', 'spinach', 'drinks');

// //108 The Nullish Coalescing Operator (??)

// // same as or operator but
// // Nullish: null and undefined (NOT 0 or '')
// const restaurannts = { GuestsNumer: 'cheese' };
// restaurant.GuestsNumer = 1;
// const cheecks = restaurannts.GuestsNumer ?? 10;
// console.log(cheecks);

// // GOOD LUCK 😀
// // */

// const game = {
//   team1: ['Bayern Munich', 'man', 'sdsd'],
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// const [player1, player2] = game.players; // destructing

// const [gk, ...fieldPlayer] = player1; /// using rest operator to copy the array and leaving th first value and copying the rest
// console.log(fieldPlayer, gk);
// const [allPlayers] = [...player1, ...player2]; // destructing using spread operator
// console.log(allPlayers);
// const player1final = [...player1, 'Thiago', 'Coutinho', 'Perisic']; // adding 3 more players to the array
// console.log(player1final);

// const {
//   odds: { team1, x: draw, team2 },
// } = game; // destructing and also naming a x variable in an unsual way
// console.log(team1, draw, team2);

// const printGoals = function (...players) {
//   /// function shows players who scored
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };
// printGoals(...game.scored); // using  rest oporator to get the player names out of array
// printGoals(game.scored); // calling the array only
// //7
// // using logical operator to know which is higher and more likly to win and with the help of and && operator we are making the decision making process
// team1 < team2 && console.log('team 1 is about to win');
// team1 > team2 && console.log('team 2 is about to win');
// /// so here && operator as you know takes the falsy value or if two truthy comes , it takes the last truthy no matter which is bigger but with logical operator we used false or true method like "if higher do this "
// let theTaken = 0;
// const addMyvalue = function (addHere) {
//   theTaken += Number(addHere);
//   console.log(theTaken);
// };
// let datas;
// document.querySelector('.clicker').addEventListener('click', function () {
//   const answer = document.querySelector('.number').value;
//   datas = addMyvalue(answer);
// });
// //for of statement loops through the values of an iterable object. It lets you loop over iterable data structures such as Arrays, Strings, Maps,
// const menu = [...game.team1, ...game.team2];
// for (const item of menu) console.log(item);

// for (const ds of game.team2) console.log(ds);

//Challenge
// Coding Challenge #2

// Let's continue with our football betting app!

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

// GOOD LUCK 😀

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
let nAme = Object.entries(game?.scored);
for (const [i, nameOFF] of nAme) {
  console.log(`Goal ${Number(i) + 1}: ${nameOFF} `);
}
console.log(game.scored.entries());
for (const [i, scored] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${scored}`);
}
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
for (const [g, s] of Object.entries(game.odds)) {
  console.log(`Odd of victory  ${s} ${g}`);
}
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);

let openStr = `we are open in days : `;
const entries = Object.entries(openingHours);
let strOpen = Object.keys(openingHours);
for (const [dayy, { open, close }] of entries) {
  console.log(`we open at ${open} and close at ${close} on ${dayy}, `);
}
console.log(openStr);
// Object values
const values = Object.values(openingHours);
// entire object so here
const entriess = Object.entries(openingHours);
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
const victory = 'victory';
for (const [teamNames, scores] of Object.entries(game?.odds)) {
  const gd = teamNames === 'x' ? `draw` : `victory ${game[teamNames]}`;
  console.log(`Odd of ${gd}: ${scores}`);
}
let be = new Map();
be.set('Name', 'ALAN');
be.set('Location', 'Oydin hayot sreet');
be.set('Phone', Number('01034275553'));
console.log(be.get('Name'));
console.log(be.get('Location'));
console.log(be.get('Phone'));

let newArrays = new Map();
newArrays.set('');
console.log(newArrays);
console.log(be);

const ds = new Set('Mukhammadazis');
console.log(ds);
