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
