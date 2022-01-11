'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//AJAX CALL :: Using XMLHTTPRequest()

// const getContryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const html = ` <article class="country">
//   <img class="country__img" src="${data.flag}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${data.population}</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//   </div>
// </article>`;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getContryData('norway');
// getContryData('bharat'); //we cannot control which one finishes first
const renderErr = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const renderCountry = function (data, className = '') {
  const html = ` <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${data.population}</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);

    //getting border country code
    const [neighbour] = data.borders;

    if (!neighbour) return; //gaurd class >> if country has no neighbours

    //ajax call for country2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
      countriesContainer.style.opacity = 1;
    });
  });
};

//✅✅✅promise

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       return response.json(); //it also returns a promise the we need a another then() method
//     })
//     .then(function (data) {
//       // //then() method for promise which was returned by json();
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

//😍same as above code but simplified using arrow function

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error(`Country not found (${response.status})`);
      }
      return response.json();
      // err => alert(err) //error handling
    })
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(
      response => response.json()
      // err => alert(err) //error handling   //it is difficult to add err callback in every then method so we have global erro handling
    )
    .then(data => {
      renderCountry(data, 'neighbour');
    })
    .catch(err => {
      console.error(err),
        renderErr(`Something went wrong :: ${err.message}. Try again`);
    })
    .finally(() => {
      console.log('finally executed');
      //IT WILL EXECUTE WHAT EVER HAPPENS
      countriesContainer.style.opacity = 1;
    });
};

///////////////////////////////////////git
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

// const whereAmI = function (lat, lang) {
//   fetch(`https://geocode.xyz/${lat},${lang}?geoit=json`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`something went wrong ${response.status} error`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);

//       getCountryAndNeighbour(data.country);
//       console.log(`You are in ${data.city}, ${data.country}`);
//     })
//     .catch(err => console.log(err));
// };

//event loop
// console.log('test start');
// setTimeout(() => console.log(' 0 sec timer'), 0);
// Promise.resolve('resolved promise 1').then(res => console.log(res));
// console.log('test end');
// Promise.resolve('resolved promise 2').then(res => {
//   for (let i = 0; i < 1000000; i++) {}
//   console.log(res);
// });

//op for above code:
// test start
//  test end
// resolved promise 1
//  0 sec timer

//promise callback function will execute before the setTimeout callback because >> promise callbacks are went into the micro task queue and setTimeout callbacks are went to the call back queue ..therefore micro task queue has high priority than the callback queue
//✅✅promise calback functions has high priority

//promisifing
const lotteryPromise = new Promise(function (resolve, reject) {
  //here resolve and reject are functions
  console.log('lottery draw is happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You Win');
    } else {
      reject(new Error('you lost your money'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//promisifing setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('i waited for 2 sec');
    return wait(1);
  })
  .then(() => console.log('i waited for 1 sec'));

// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.log(err)
// );

const getPosition = function () {
  // navigator.geolocation.getCurrentPosition(
  //   position => console.log(position),
  //   err => console.log(err)
  // );
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  n;
};

getPosition().then(res => console.log(res));

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lang } = pos.coords;

//       return fetch(`https://geocode.xyz/${lat},${lang}?geoit=json`);
//     })

//     .then(response => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`something went wrong ${response.status} error`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);

//       getCountryAndNeighbour(data.country);
//       console.log(`You are in ${data.city}, ${data.country}`);
//     })
//     .catch(err => console.log(err));
// };

// btn.addEventListener('click', whereAmI);

//async await
const whereAmI = async function (country) {
  const res = await fetch(`https://restcountries.com/v2/name/${country}`);
  const data = await res.json();
  renderCountry(data[0]);
};
whereAmI('bharat');
console.log('this will executed before wherami funtion');
