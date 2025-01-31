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
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex = 1, mainIndex = 2, time, address }) {
    //we used destructuring here converting objects into variables
    console.log(
      `Order received ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  //   orderPasta: function (...ing) {
  //     console.log(
  //       `here is your delicious pasta with ${ing[0]}, ${ing[1]}, and ${ing[2]}`
  //     );
  //   },
  //ES6 enhanced function syntax
  orderPasta(...ing) {
    console.log(
      `here is your delicious pasta with ${ing[0]}, ${ing[1]}, and ${ing[2]}`
    );
  },

  //   openingHours: openingHours, //before ES6
  //ES6 enhanced object literals
  openingHours,
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

//rest parameter ==>> The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
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

//for -of loop
console.log('<<<<<-----for-of-loop--------->>>>>>');
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]; //here we used spread operator

for (const items of menu) console.log(items);

for (const items of menu.entries()) {
  //by using entries method we will get index number of elements
  console.log(items);
}
for (const [i, el] of menu.entries()) {
  //here we used destructuring of arrays
  console.log(`${i + 1}.${el}`);
}

//optional chaining
console.log('<<<<<<<<--------optional chaining------------>>>>>>>>');
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

console.log(restaurant.openingHours.mon?.open); //optional chaining >> if mon is not exits then it returns the  undefined
console.log(restaurant.openingHours?.fri.open);

//example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed'; //** we used bracket notation because day is not original variable*/
  console.log(`On ${day}, we open at ${open}`);
}
//methods
console.log(restaurant.order123?.(0, 1) ?? 'Method does not exist');
//arrays
const users = [{ name: 'jonas', email: 'hello@gmail.com' }];
console.log(users[0]?.name ?? 'user array empty'); //<< here  we used optional chaining
//if we didn't used optional chaining we need to write below code
if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');

//Looping objects : objects keys, values and entries

console.log(
  '<<<<<<<-----Looping objects : objects keys, values and entries----->>>>>>'
);

//properties names
const properties = Object.keys(openingHours);

console.log(properties);
let openstr = `we are open on ${properties.length} days`;
console.log(openstr);

for (const day of properties) {
  openstr += ` ${day},`;
}
console.log(openstr);

//property values
const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  //<< here we used array destructuring and object destructuring (value is also a object then we destructured into two variables open & close)
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

//sets
console.log('<<<<----SETS------->>>>');
const orderSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'risotto',
  'pasta',
  'pizza',
]);
console.log(orderSet); // returns only unique values
console.log(new Set('jonas'));
console.log(orderSet.size);
console.log(orderSet.has('pizza')); //checks the element in set if exist  returns true
console.log(orderSet.has('bread')); //op: false
orderSet.add('garlic bread'); // adds element
orderSet.delete('pasta'); //removes element
// orderSet.clear(); deletes the all elements from the set
console.log(orderSet);

for (const order of orderSet) {
  console.log(order);
}
//example
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const staffUniqe = [...new Set(staff)]; //converting set into array
console.log(staffUniqe);

//MAPS
console.log('<<<<-----MAPS----->>>>');

const rest = new Map();
rest.set('name', 'Classico Italino');
rest.set(1, 'Firenze,italy');
console.log(rest);

rest
  .set('categories', ['italian', 'pizzeria', 'vegetarian', 'organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are opened')
  .set(false, 'we are closed');
console.log(rest);
const time = 21;

if (time > rest.get('open') && time < rest.get('close')) {
  //get method is used to retreive the data
  console.log(rest.get(true));
}

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
//example
const ary = [1, 2];
rest.set(ary, 'test');
rest.set(document.querySelector('h1'), 'heading'); //we can also use in Dom
console.log(rest);
console.log(rest.get(ary));

const question = new Map([
  ['question', 'what is the best programming language in the world ?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'correct🎉'],
  [false, 'Try again😒'],
]);
console.log(question);

//converting object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
//quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = 3;
// const answer = Number(prompt('your answer')); //prompt returns the string then we need to convert into Number to compare with answer
console.log(answer);
// console.log(typeof answer);
// if (answer === question.get('correct')) {
//   console.log(question.get(true));
// } else console.log(question.get(false));

console.log(question.get(question.get('correct') === answer)); //optimized solution on if else (above code)

//converting map to array

console.log([...question]);
