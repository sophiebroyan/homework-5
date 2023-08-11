//1. find method
const persons = [{
    name: 'qwe',
    age: 17
  },
  {
    name: 'asd',
    age: 23
  },
  {
    name: 'dfg',
    age: 12
  },
]

function findperson(arr, callBack, argument) {
  for (let i in arr) {
    if (callBack(arr[i], argument)) {
      return arr[i];
    }
  }
  return undefined;
}

function compareByName(element, name) {
  return element.name == name;

}

function compareByAge(element, age) {
  return element.age == age;
}


const findByAge = findperson(persons, compareByAge, 17);
const findByName = findperson(persons, compareByName, 'asd');


const result = findByAge;

console.log(result);



//2. find index method
const numbers = [2, 6, 7, 4, 5, 6, 9];

function findindex(arr, callback, value) {
  for (let i in arr) {
    if (callback(arr[i], value)) {
      return i;
    }
  }
  return -1;
}


function compare(item, value) {
  return item === value;
}



const result = findindex(numbers, compare, 9);
console.log(result);



//3. map method
const numbers = [2, 6, 5, 4, 7, 8];

function myMap(array, callback) {
  let newArr = [];
  for (let i in array) {
    newArr.push(callback(array[i]))
  }
  return newArr;
}


function double(value) {
  return value * 2;
}


const result = myMap(numbers, double);

console.log(result);



//4. reduce method
const numbers = [1, 2, 3, 4];

function reduce(array, callback, accumulator) {

  for (let i in array) {
    callback(accumulator += array[i])
  }
  return accumulator;
}

function sum(item, accum) {
  return accum += item
}
const result = reduce(numbers, sum, 0)
console.log(result);

