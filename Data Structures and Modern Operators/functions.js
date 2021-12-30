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

//apply method
const flightData = [583, 'george cooper'];
book.apply(indgo, flightData); //apply method accepts 2 parameters first one is object and second is array of arguments
//main diff between call and apply is ..in apply we need pass aruguments in an array

book.call(eurowings, ...flightData); //used call method as apply by passing arguments in an array

//bind() method

const bookEW = book.bind(eurowings); //THE bind() method create a new function that, when called, has its this keyword set to the provided value
const bookLH = book.bind(lufthansa);
const bookIND = book.bind(indgo);
bookEW(12, 'MONIKA');
bookIND(23, 'kalyan');

const bookIND323 = book.bind(indgo, 323); //here we already attached the flightNum
bookIND323('lucky'); //only name is enough because we already set the flightNum in bind() method

//with event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this); //here this keyword is binds to the dom elements because we called the function using event listener
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); //to bind the this keyword to  its object we used the bind() method

//partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, undefined, 100); //here we set the rate and we mentioned null because there is no object for this keyword to points
console.log(addVAT(0.23));
console.log(addVAT);

//returning function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVat2 = addTaxRate(0.23);
console.log(addVat2(100));

//
console.log('<<<<<<<<<<----coding challenge------>>>>');
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
const poll = {
  question: 'What ia your favourite programming language?',
  options: ['0 : JavaScript', '1: python', '2: rust', '3:c++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const ans = Number(
      prompt(
        `${this.question} \n ${this.options.join(
          '\n'
        )} \n (write option number)`
      )
    );
    //register the answer
    typeof ans === 'number' && ans < this.answers.length && this.answers[ans]++; //here we used short circuiting // and increased the answers array index by 1

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type == 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll)); //here we used bind() method because if we didnt used bind() method then this keyword in function points to dom element
poll.displayResults.call({ answers: [4, 3, 4, 5] });
poll.displayResults.call({ answers: [4, 3, 4, 5] }, 'string');

//immediately invoked function expression

const runOnce = function () {
  console.log('this will never run again');
};
runOnce();

(function () {
  //this funnction will invoke without function call >>immediately innvoked function expression
  console.log('this will never run again');
})();

(() => console.log('this function invoked without function call'))();

//closures ****************
console.log('<<<<<<<<<<<<<<<----closures---->>>>>>>>>>>>');

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();
