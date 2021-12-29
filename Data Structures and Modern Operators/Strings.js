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
