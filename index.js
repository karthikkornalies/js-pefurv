// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter TEST</h1>`;


const myObj = { a : 1, a : 10, b : '2', c : 3};

function myFn(myVar) {
  return typeof myVar === 'number';
}

function pickBy(arr, myFn) {
  console.log('pickby called');
  console.log(Object.keys(arr));
  var a = Object.keys(arr)
        .filter(k => myFn(arr[k]))
        .reduce( (myNewarr, key) => ((myNewarr[key] = arr[key]), myNewarr), {});
  console.log('REDUCE : ' + JSON.stringify(a));
        
}

pickBy(myObj, myFn);