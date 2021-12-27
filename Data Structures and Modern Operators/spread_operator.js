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
  orderPasta: function (...ing) {
    console.log(
      `here is your delicious pasta with ${ing[0]}, ${ing[1]}, and ${ing[2]}`
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

//objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

//2) functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(1, 2, 3);
add(1, 2, 3, 4, 5);
add(1, 2, 3, 5, 6, 7);
add(1, 2, 3, 4);
const x = [23, 4, 5];
add(1, 2, 3, ...x); //<<<===here spread operator used

//short circuiting (&&,||)
//use any data type, return any data type
console.log('<<<<<<<<<<<<<<-------SHORT CIRCUITING-------->>>>>>>>>>>>>>>');
console.log('<<<<-----OR------>>>>');
//FOR OR operator if the first value is true the it return that value

console.log('' || 'pavan'); //op: pavan
console.log(true || 0); //op : true
console.log(undefined || null); //op: null
console.log(undefined || 0 || '' || 'hello' || 23 || null); //op: hello >> because it  is the first truthy value in the  chain

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2); //op:10 >> because numGuests is not exits in the restaurant object then first value is false so second value (10) is stored in the guest2 variable

const guestName = restaurant.name || 10;
console.log(guestName); //op:Classico Italiano >> because guestName is exits in the restaurant object then first value is true so first value (Classico Italiano) is stored in the guestName variable
console.log('<<<<-----AND------>>>>');
// for AND operator it checks all the values in chain ,when all vlaues are turthy then it returns the last value in the chain ,if one of the value is false then it returns the first false value
console.log(0 && 'PAVAN'); //op:0
console.log(true && 'pavan' && 34 && false && null); //op:false
console.log(true && 'pavan' && 34); //op:34

if (restaurant.orderPasta) {
  restaurant.orderPasta('mushrooms', 'spinach', 'veggis');
}

restaurant.orderPasta &&
  restaurant.orderPasta('mushrooms', 'spinach', 'veggis'); //here we used shortcircuiting OR operator
console.log('<<<<<<<<<------NULLISH COALESCING OPERATOR----->>>>>>>>>>>');
restaurant.numPeople = 0;
const people = restaurant.numPeople || 10;
console.log(people); // op: 10 but we need original value that is 0
const correctPeople = restaurant.numPeople ?? 10;
console.log(correctPeople); //op: 0 because we used nullish operator
//imp:: Nullish >> null and undefined (but not 0 or '')
console.log('<<<<<<<<<<--------logical operators---------->>>>>>>>');
const rest1 = {
  name: 'Capri',
  numGuest: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Sai Kumar',
};

rest1.numGuest = rest1.numGuest || 10;
rest2.numGuest = rest2.numGuest || 10;

rest1.numGuest ||= 10;
rest2.numGuest ||= 10;
//AND assisgnment operator
// rest1.owner = rest1.owner && '<ANONNYMOUS';
// rest2.owner = rest2.owner && '<ANONNYMOUS';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS';
console.log(rest1);
console.log(rest2);
