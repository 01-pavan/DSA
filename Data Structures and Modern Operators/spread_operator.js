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

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//using spread operator==>> syntax '...arrayName' (ES6)
//Taking all elements out of the array and adding to new array
const newArr = [1, 2, ...arr];
console.log(newArr);

//when we need array elements individually we use spread operator

console.log(...newArr);

//copy array
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const copyArray = [...arr1];
console.log(copyArray);

//joining 2 arrays

const joinArray = [...arr1, ...arr2];
console.log(joinArray);

//spread  operator works on iterables
//iterables are  arrays, strings,maps, sets , not objects
const str = 'pavan';
const letters = [...str, 's.'];
console.log(...letters);

const orderPasta = function (ing1, ing2, ing3) {
  console.log(
    `here is your delicious pasta with ${ing1},${ing2}  ,and ${ing3}`
  );
};
// const ing = [
//   prompt("lets 's make pasta! ingredient 1 ?"),
//   prompt('ingredient 2 ?'),
//   prompt('ingredient 3 ?'),
// ];
//console.log(orderPasta(...ing));

//rest operator ==>> The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
//With the help of a rest parameter a function can be called with any number of arguments, no matter how it was defined. Rest parameter is added in ES2015 or ES6 which improved the ability to handle parameter.
const [a, b, c, ...others] = [1, 2, 3, 4, 5];
console.log(others);
