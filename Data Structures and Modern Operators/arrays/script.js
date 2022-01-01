'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [
    200, 450, -400, 3000, -650, -130, 70, 1300, -102, 200, -100, 80, -100,
    -1000, 200, 300,
  ],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
const account5 = {
  owner: 'Pavan Kumar',
  movements: [300, 1000, 700, 50, 90, -100, 1000, -500, 2000, 3500, -700],
  interestRate: 1,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = ` <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html); //created the html string and inserted using  insertAdjacentHTML method . The insertAdjacentHTML() method of the Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position. syntax::element.insertAdjacentHTML(position, text);
  });
};

const calcPrintBalance = function (movements) {
  labelBalance.textContent = `${movements.reduce((acc, cur) => acc + cur, 0)}₹`;
};

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  const outGo = movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${incomes}₹`;
  labelSumOut.textContent = `${Math.abs(outGo)}₹`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(mov => (mov * 1.2) / 100)
    .filter(mov => mov >= 1)
    .reduce((acc, cur) => acc + cur, 0);
  console.log(interest);
  labelSumInterest.textContent = `${Math.trunc(interest)}₹`;
};

const createUserName = function (accs) {
  //using this function we added the username property  to each account object 🎉🎉🎉🎉 .//it doesnt return any value
  console.log(accs);
  accs.forEach(function (accs) {
    accs.username = accs.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserName(accounts);
//login button event handler
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); //prevent form from submitting  //because button is present in html form ,so page is reloaded when we click that button

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (
    currentAccount.username === inputLoginUsername.value &&
    currentAccount.pin === Number(inputLoginPin.value)
  ) {
    containerApp.style.opacity = '100';
    calcDisplaySummary(currentAccount.movements);
    displayMovements(currentAccount.movements);
    calcPrintBalance(currentAccount.movements);
  }
});

//computing usernames
// const user = 'Steven Thomas Williams'; //stw

// const userName = user.toLowerCase().split(' ');
// let str = '';
// for (const [i, value] of userName.entries()) {
//   str += value.slice(0, 1);
// }
// console.log(str);

// computing username using foreach method
const user = account4.owner;
const userName = function (user) {
  const userLower = user.toLowerCase().split(' ');
  let str = '';
  userLower.forEach(value => {
    str += value.slice(0, 1);
  });
  return str;
};
console.log(userName(user));

//using map method  //immportant functionality
// const createUserName = function (accs) {
//   //using this function we added the username property  to each account object 🎉🎉🎉🎉 .//it doesnt return any value
//   console.log(accs);
//   accs.forEach(function (accs) {
//     accs.username = accs.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   });
// };
// console.log(createUserName(accounts));

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*
/////////////////////////////////////////////////
let arr = ['a', 'b', 'c', 'd', 'e'];
//slice
console.log(arr.slice(2)); //same as strings
console.log(arr.slice(2, 4)); //op: ['c', 'd'] //index 4 is not included
console.log(arr.slice(-1)); //op: ['e']
console.log(arr.slice());
console.log(arr); //op: ['a', 'b', 'c', 'd', 'e']
console.log([...arr]); //op: ['a', 'b', 'c', 'd', 'e']
console.log(...arr); //op: a b c d e

//splice()
//same as slice but it affects the original array (extracted elements will be removed from original array)
// console.log(arr.splice(2)); //op : ['c', 'd', 'e']
arr.splice(-1);
console.log(arr); //op:['a', 'b']
arr.splice(1, 3);
console.log(arr);

//reverse

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); //it will mutate the original array
console.log(arr2);

//concat
const letters = arr.concat(arr2); //joining to arrays
console.log(letters); //same
console.log([...arr, ...arr2]); //same

//join
console.log(letters.join(' - '));

//
const ary = [23, 11, 64];
console.log(ary[0]);
console.log(ary.at(0));
console.log(...ary.slice(-1));

console.log(ary.at(-1)); //we get the last value in an array if we dont know the array length

//at() method also works on strings
console.log('jonas'.at(0));
console.log('jonas'.at(-1));

//
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`transaction ${i + 1} ::  you deposited ${movement}`);
  } else {
    console.log(`transaction ${i + 1} :: you withdrew ${Math.abs(movement)}`);
  }
}
console.log('<<<<<<<<<<--forEach() method>>>>>>>>>>>>>');
//forEach() method
// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.
// continue and break statements do not work on forEach method🔴🔴

movements.forEach(function (movement, i, array) {
  //1st argument is current element , 2nd argument is current index and 3rd argument is entire array
  if (movement > 0) {
    console.log(`transaction ${i + 1} ::  you deposited ${movement}`);
  } else {
    console.log(`transaction ${i + 1} :: you withdrew ${Math.abs(movement)}`);
  }
});

//forEach With Maps and Sets
console.log('<<<<<----forEach on Maps---->>>>>');
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
console.log('<<<<<----forEach on sets---->>>>>');

const currenciesUnique = new Set(['USD', 'IND', 'USD', 'EUR', 'IND', 'GBP']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, set) {
  //'_' means unnessasary variable
  //sets has no key
  console.log(`${value}`);
});
*/

//map() method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//creates a new array from calling a function for every array element.
// map() calls a function once for each element in an array.

// const movementsUSD = movements.map(function (mov) {
//   return mov * 2;
// });
const movementsUSD = movements.map(mov => mov * 2); //arrow function same as above

console.log(movementsUSD);
const movementDescriptions = movements.map((mov, i) => {
  if (mov > 0) {
    return `transaction ${i + 1} ::  you deposited ${mov}`;
  } else {
    return `transaction ${i + 1} :: you withdrew ${Math.abs(mov)}`;
  }
});
console.log(movementDescriptions);

//filter() method

// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

//reduce method()

//accummulator is like snow ball

console.log(movements);
const balance = movements.reduce(function (acc, cur, i, arr) {
  // acc = The initialValue, or the previously returned value of the function. //cur = current value
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0); //here 0 is the initial value to start with
console.log(balance);
const max = movements.reduce(function (acc, cur) {
  if (acc > cur) return acc;
  else return cur;
}, movements[0]);
console.log(`max value is ${max}`);

const euroToUsd = 1.1;

//chaining of methods :: pipeline
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

console.log('<<<---find()--->>>');
//FIND METHOD find()
//✅The find() method returns the value of the first element that passes a test.
//✅The find() method retuns undefined if no elements are found.

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

const findAccount = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(findAccount);

// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const checkDogs = function (dogsJulia, dogsKate) {
  dogsJulia.splice(0, 1);
  dogsJulia.splice(-2);
  const bothData = dogsJulia.concat(dogsKate);
  bothData.forEach(function (value, key, array) {
    const ans =
      value >= 3
        ? `Dog number ${key + 1} is an adult, and is ${value} years old`
        : `Dog number ${key + 1} is still a puppy 🐶`;
    console.log(ans);
  });
  console.log(bothData);
};
const juliadata = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8, 3];
checkDogs(juliadata, kateData);

//CODING CALLENGE 2
///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

console.log('<<<<<---CODING CHALLENGE 2---->>>>>');
// const calcAverageHumanAge = function (ages) {
//   const humanYears = ages
//     .map(function (age) {
//       if (age <= 2) {
//         age *= 2;
//       } else {
//         age = 16 + age * 4;
//       }
//       return age;
//     })
//     .filter(function (age) {
//       return age >= 18;
//     })
//     .reduce(function (acc, cur, _, arr) {
//       return acc + cur / arr.length;
//     }, 0);
//   console.log(humanYears);
// };
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

const calcAverageHumanAge = ages => {
  //SAME AS ABOVE BUT USING ARROW FUNCTIONS
  const avgHumanAge = ages
    .map(age => (age <= 2 ? (age *= 2) : (age = 16 + age * 4)))
    .filter(age => age >= 18)
    .reduce((acc, cur, _, arr) => acc + cur / arr.length, 0);
  console.log('AVG AGE = ' + avgHumanAge);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
