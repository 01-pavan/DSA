'use strict';
const Person = function (firstName, birthYear) {
  //constructor function to create objects // it returns the object
  //   console.log(this); //op : Person {}

  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //❌❌never do this
  //   because when we create 1000 instaces by this constructor function then calcAge function copies also created 1000 times it leads to performance issues
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const pavan = new Person('Pavan', 1998);
console.log(typeof Person.firstName);

//1. new {}(empty object) is created
//2. function is called and this keyword is set to the newly created object this={}
//3. {} is linked to prototype
//4. function automatically return {}

//we can create as many functions by above constructor function

const sai = new Person('Sai kumar', 1996);
const sramik = new Person('sramik', 1997);
console.log(sai, sramik);

console.log(sai instanceof Person); //op : true

//✅✅prototypes

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

console.log(sai);

sai.calcAge();
sramik.calcAge();
pavan.calcAge();

console.log(pavan.__proto__); // {calcAge: ƒ, constructor: ƒ}
console.log(pavan.__proto__ === Person.prototype); //op: true
console.log(Person.prototype.isPrototypeOf(pavan)); //OP : TRUE

Person.prototype.species = 'Homo Sapiens';
console.log(sai.hasOwnProperty('firstName')); //op : true
console.log(sai.hasOwnProperty('species')); //op : false >>because species property is not inside the object it is in prototype

console.log(pavan.__proto__); //it returns the prototype properties of object pavan.prototype
console.log(pavan.__proto__.__proto__); //it returns the prototype properties of object.protptype
console.log(pavan.__proto__.__proto__.__proto__); // null ..because Object.protoype is top of the chain

console.log(Person.prototype.constructor);

const arr = [3, 4, 5, 3, 5, 6, 4, 6, 8];
console.log(arr.__proto__); //
console.log(arr.__proto__ === Array.prototype); //op : true

//we can add methods to Array.prototype

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

console.log(Array.prototype);

const h1 = document.querySelector('h1');
// console.log(h1);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  //constructor function
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
};
const bmw = new Car('BMW', 120);
console.log(bmw);
bmw.accelerate();

bmw.brake();
bmw.accelerate();

bmw.brake();
bmw.accelerate();

bmw.brake();
