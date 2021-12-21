'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
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
      open: 0,
      close: 24,
    },
  },
  orderDelivery: function ({ starterIndex = 1, mainIndex = 2, time, address }) {
    //we used destructuring here converting objects into variables
    console.log(
      `Order received ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};
restaurant.orderDelivery({
  time: '22:30',
  address: 'via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  //function call with only 2 arguments >>> in function declaration we used default values
  address: 'hyderabad',
  time: '14:30',
});
const { name, openingHours, categories } = restaurant; //we use variable names as same properties names.
console.log(name, openingHours, categories);

const {
  name: restaurantName, //we can assign different names to variables using beside syntax
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//default values in object destructuring objects
const { menu = [], starterMenu: starters = [] } = restaurant; //we can assign default values
console.log(menu, starters);

//mutating variables

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

///nested objects

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

/////////////////////////////
//Destructuring Arrays
// let [main, second] = restaurant.categories;
// console.log(main, second);

// [main, second] = [second, main];
// console.log(main, second);

// console.log(restaurant.order(2, 0));

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested; //skipping elements
// console.log(i, j, k);

// //default values >>>it is useful when we get data from api
// const [p = 3, q, r = 4] = [, , , 8];
// console.log(p, q, r);
