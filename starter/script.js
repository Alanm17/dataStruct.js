'use strict';
// const arr = [2, 3, 4]; // destructuring does not effect to the original array [const]
// let [x, v, z] = arr; /// destructuring the array and we have to declare variables using ""const""
// console.log(x, v, z);
// x, v, (z = [1, 2, 3]);
// console.log(x, v, z);

// let [firstS, , , secondS] = restaurant.categories;
// console.log(firstS, secondS); // in this this comma ,, ⬆️ changes the order of values to be taken
// //switching variables
// // const temp = firstS;
// // firstS = secondS;
// // secondS = temp;

// let [firstSs, secondSs] = [secondS, firstS];
// console.log(firstS, secondS);

// const [choco, shashlik] = restaurant.valueStruct(1, 2); // taking the value inside variables using method inside object and destructing them to different variables
// console.log(choco, shashlik); // choco =pasta , shashlik = garlic bread

// // nested destructuring
// const nestedArray = [1, 2, [1, 3]];
// const [i, , [o, b]] = nestedArray;
// console.log(i, o, b);

// // default values
// const [d, l, m = 1, f] = [5, 6, 3, 3];
// console.log(d, l, m, f);
// Data needed for a later exercise

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
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
  },
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
};
restaurant.orderDelivery({
  address: 'new york 13 avenue',
  time: '23:21',
  menuIndex: 1,
  starterIndex: 3,
});
//checking the function after Default Parameter Values
restaurant.orderDelivery({
  menuIndex: 1,
  starterIndex: 3,
});
// destructing objects . in this method ,we are just destructing restaurant properties with the same variables outside of the object literal .
const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours); // Classico .. italian..,thu...

// direct destructing with renaming technique
const { name: nameOf, categories: tags, openingHours: hours } = restaurant;
console.log(nameOf, tags, hours); // Classico .. italian..,thu...
// destructing property to a variable and setting it to default value using [] square brackets
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(starter, menu);
// mutating variables
let a = 111;
let b = 232;
const obj = { /*c:23, */ a: 23, b: 21 };
({ a, b } = obj); //23,21 //the parentheses are used to clarify to JavaScript that the statement is an object destructuring assignment, "not a block statement"."prevents syntax errors."
console.log(a, b);

//Nested objects
const {
  fri: { open: o, close: p },
} = openingHours;
console.log(o, p);

const newArray = [8, 2, 1, 3, 12];
const badNewArray = [2, 3, newArray[0], newArray[1], newArray[2]];
console.log(badNewArray);
//spread operator, called "array👇 spreading "
const goodNewArray = [2, 3, ...newArray];
console.log(goodNewArray);

const mainMenuCopy = [...restaurant.mainMenu];
const bothMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(bothMenu);

const languageFunction = [{ ...restaurant.orderDelivery({}) }];
console.log(languageFunction);

const ingredients = [
  prompt("let's find out what you want inside your pizza! ingredient 1 ?"),
  prompt('ingredient 2 ?  '),
  prompt('ingredient 3 ?'),
];

restaurant.orderPizza(...ingredients);
