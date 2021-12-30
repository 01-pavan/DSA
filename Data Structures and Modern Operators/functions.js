'use strict';
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //es6
  //   numPassengers = numPassengers || 1; //if numPassengers value is not passed to funnction
  //   price = price || 199;   //es5 method
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking(234, 3);
console.log(bookings);
createBooking('23WERH', undefined, 1000); //WE can  skip parameter using undefined

const flight = 'LH234';
const pavan = {
  name: 'Pavan Kumar',
  passport: 233435546466,
};

//higher order functions
//more reusability and interconnections
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`original string: ${str}`);
  console.log(`Transformed strings: ${fn(str)}`);
  console.log(`transformed by : ${fn.name}`); ///fn.name give the function name which was called by higher order function
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('pavan kuMAR', oneWord);

const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5); //addEventListener is higher order function and high5 is callback function

//function returning other function

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet('hey');
// console.log(greeterHey);
// greeterHey('pavan');
// greet('hello')('sai');

//writing above functions in arrow functions

// const greet = greeting => {         //my own logic
//   return name => console.log(`${greeting} ${name}`);
// };
// const greeterHey = greet('hello')('pavan');

const greetArr = greeting => name => console.log(`${greeting} ${name}`); //effective way

greetArr('Hi')('jonas');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} airline in ${
        flightNum + this.iataCode
      }`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum},${name}` });
  },
};
// lufthansa.book('234', 'PAVAN');
console.log(lufthansa);
console.log(lufthansa.bookings);
//call() method
const eurowings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};

const indgo = {
  airline: 'Indigo',
  iataCode: 'IND',
  bookings: [],
};

const book = lufthansa.book;
// book(23, 'sara williams'); //Uncaught TypeError: Cannot read properties of undefined (reading 'airline') at book << for this type of function calling 'this' keyword is points to undefined

book.call(eurowings, 23, 'sara williams'); //we can  manipulate this keyword using call method It can be used to invoke (call) a method with an owner object as an argument (parameter).
console.log(eurowings);
book.call(lufthansa, 234, 'sramik');
console.log(lufthansa);
book.call(indgo, 34, 'rahul');
console.log(typeof book);
console.log(typeof lufthansa.bookings);
