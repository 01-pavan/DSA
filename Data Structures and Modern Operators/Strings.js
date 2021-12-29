'use strict';

const airline = 'Tap Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);

console.log('B737'[0]); //prints the letter at the index 0

console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

console.log(airline.lastIndexOf('INDIA')); //IF not exists it returns the -1

//The slice() method returns selected elements in an array, as a new array.
//The slice() method does not change the original array.
//The slice() method selects from a given start, up to a (not inclusive) given end.

// Syntax
// array.slice(start, end)

console.log(airline.slice(4));
console.log(airline.slice(4, 7)); //length of the extracted string is end-start (7-4=3)

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //here +1 is because lastindex of space +1  gives the index after the space
console.log(airline.slice(-2)); // for negative values it counts or starts from the end
console.log(airline.slice(1, -1)); //op : ap Air Portuga

//example
const checkMiddleSeat = function (seat) {
  if (seat.slice(-1) === 'B' || seat.slice(-1) === 'E') {
    console.log('you got the middle seat😭');
  } else console.log('not a middle seat');
};
checkMiddleSeat('11E');
//*****important */
//how methods will work on the primitives(strings) ..begind the scenes the javascript wraps the primitive value in an object (it converts the string to object) this  process is called Boxing

//when you try to use a method on a primitive value JavaScript automatically does the boxing, and in consequence, you can use the different methods of the String object

console.log(typeof new String('pavan')); //op : Object

console.log(airline.toLowerCase()); //op: tap air portugal
console.log(airline.toUpperCase()); //op: TAP AIR PORTUGAL

//FIX THE CAPITALIZATION IN NAME  >> Pavan
const passenger = 'pAvaN';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//own logic *** some improvements are needed
const stringCorrect = function (name) {
  const upper = name.toUpperCase();
  const upp =
    upper[0] +
    upper.slice(1, upper.indexOf(' ') + 1).toLowerCase() +
    upper[upper.indexOf(' ') + 1] +
    upper.slice(upper.indexOf(' ') + 2).toLowerCase();
  console.log(upp);
};
stringCorrect('pavan KUMAR');
///****************************** */

//Comparing emails
const email = 'hello@gmail.com';
const loginEmail = ' Hello@Gmail.com';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim(); //The trim() method removes whitespace from both sides of a string. The trim() method does not change the original string. Syntax ::string.trim()

console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim(); //same as above but optimized
console.log(normalizedEmail);

//replacing

const priceGB = '288,97$';
const priceIND = priceGB.replace('$', ' ₹').replace(',', '.'); //The replace() method searches a string for a value or a regular expression. The replace() method returns a new string with the value(s) replaced. The replace() method does not change the original string.

console.log(priceIND);

const announcement =
  'All the  passengers come to boarding door 23, boarding door 23!';
console.log(announcement.replace('door', 'gate')); //only replace the first encounterd value but doesn't replace the next value

console.log(announcement.replaceAll('door', 'gate')); //The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.

//Booleans

const plane1 = 'Airbus A320neo';

console.log(plane1.includes('A320'));
console.log(plane1.includes('a320'));
//The includes() method returns true if a string contains a specified string.Otherwise it returns false.The includes() method is case sensitive.
console.log(plane1.startsWith('A32')); //startsWith() is an ECMAScript6 (ES6) feature.

if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
  console.log('part of the new airbus family');
}

//practice exercise
const checkBaggage = function (items, name) {
  const bag = items.toLowerCase(); //here we need to convert to lowercase
  if (bag.includes('knife') || bag.includes('gun')) {
    console.log(`Sorry ${name} you are not allowed on borad😞😞😞😞`);
  } else console.log(`Hi ${name} welcome aboard 🎉🎉🎉🎉`);
};

checkBaggage('I have a laptop ,some Food and a pocket Knife', 'sai');
checkBaggage('socks and Camera', 'pavan');
checkBaggage('Got some snacks and a gun for protection', 'rahul');
/************************************************************** */
///split() AND join()

console.log('a+very+nice+string'.split('+'));
console.log('pavan kumar'.split(' '));
const [firstName, lastName] = 'Pavan Kumar'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);
//function to convert any string to capitalize string
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.slice(0, 1).toUpperCase() + n.slice(1).toLowerCase()); //another approach
  }
  console.log('Mr. ' + namesUpper.join(' ')); //joining the array
};
capitalizeName('pAVan kUmAR');
capitalizeName('saI kumAR is liViNG in cAnAda');
capitalizeName('posted an announcement');

//padding
//The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+'));
console.log('pavan'.padStart(20, '+'));
///important functionality
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(2324334353548648));

//repeat
const message2 = 'Bad weather.... all departures Delayed...';
console.log(message2.repeat(5));
const planeInLine = function (n) {
  console.log(`there are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planeInLine(3);
planeInLine(5);
planeInLine(2);
planeInLine(1);

//
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');
button.addEventListener('click', msg);
function msg() {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, word] of rows.entries()) {
    const [first, second] = word.toLowerCase().trim().split('_');
    const outPut = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${outPut.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
}

// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [status, from, to, time] = flight.split(';');

  const res = ` ${status.startsWith('_Delayed') ? '🔴' : ''}${status
    .slice(1)
    .split('_')
    .join(' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(45);

  // const answer = res.includes('Delayed') ? `${res}` : `${res}`; //optimized above
  console.log(res);
}

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
