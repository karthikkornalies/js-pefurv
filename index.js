// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS TEST</h1>`;


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


let names = ['a1', 'a2', 'a3', 'a4'];
  console.log(names);
names.forEach(elementIterate);

function elementIterate(v, i) {
  console.log(v + ' ' + i);
}
/*const unzip = arr =>
  arr.reduce(
    (accum, currentVal) => (currentVal.forEach(v,i) => accum[i].push(v)), accum),
    Array.from({
      length : Math.max(...arr.map(x => x.length))
    }).map(x => [])
  );*/

  const hideAll = (elementArr) => {
   elementArr.forEach(e => (e.style.display = 'none'));
  }

  //hideAll( document.querySelectorAll('img'));

  const t = names.map (n => n + '*');
  console.log(' ## MAP ' + t);

