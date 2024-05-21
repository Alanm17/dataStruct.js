'use strict';

// Data needed for a later exercise

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  valueStruct(menuIndex, starterIndex) {
    return [this.mainMenu[menuIndex], this.starterMenu[starterIndex]];
  },
};

const arr = [2, 3, 4]; // destructuring does not effect to the original array
let [x, v, z] = arr; /// destructuring the array and we have to declare variables using ""const""
console.log(x, v, z);
x, v, (z = [1, 2, 3]);
console.log(x, v, z);

let [firstS, , , secondS] = restaurant.categories;
console.log(firstS, secondS); // in this this comma ,, ⬆️ changes the order of values to be taken
//switching variables
// const temp = firstS;
// firstS = secondS;
// secondS = temp;

let [firstSs, secondSs] = [secondS, firstS];
console.log(firstS, secondS);

const [choco, shashlik] = restaurant.valueStruct(1, 2); // taking the value inside variables using method inside object and destructing them to different variables
console.log(choco, shashlik); // choco =pasta , shashlik = garlic bread

// nested destructuring
const nestedArray = [1, 2, [1, 3]];
const [i, , [o, b]] = nestedArray;
console.log(i, o, b);

// default values
const [d, l, m = 1, f] = [5, 6, 3, 3];
console.log(d, l, m, f);
