//TypeScript Introduction
// What is TypeScript?
// Add additional syntax to Javascript to support a tighter integration with your editor. (add types)
// Tools to help catch errors in the early developemnt - (Before runtime and provides tooltips)
// Typescript can run anywhere Javascript run on the client side
// server side - Node.js or Deno
// developed by Microsoft
//1. Installation
// npm install -g typescript
//check installation
// tsc -v
// create typescript file index.ts
// run the file - tsc index.ts
// watch the file - tsc index.ts -w
//React with typescript
// npx create-react-app my-app --template typescript
//2.Types - boolean, number, string, null, undefined, any, enum, void, never, Array and tuple.
// **************************************************
// // Boolean
// let example1: boolean
// example1 = true
// **************************************************
// //Number
// let example2: number = 99;
// **************************************************
// // String
// let example3: string = 'Hello!!';
// **************************************************
// // Undefined
// let example4: undefined = undefined;
// example4 = null
// let example4: number = undefined
// example4 = 99
// **************************************************
// // Null
// let example5: null = null;
// let example5: string = null
// **************************************************
// // Any
// let example1: any
// let example1: any = []
// example1 = 9
// example1 = [1, 'a', [1,'hey', false]]
// console.log('example1--->', example1)
// **************************************************
// Enum/Object - 1. Number or 2.String
// enum Number type
// enum DaysOfTheWeek {
//   SUN,
//   MON,
//   TUE,
//   WED,
//   THU,
//   FRI,
//   SAT
// }
// let today: DaysOfTheWeek = DaysOfTheWeek.FRI
// console.log('today--->', today)
// console.log('DaysOfTheWeek----->', DaysOfTheWeek)
// enum DaysOfTheWeekString {
//   SUN = 'Sunday',
//   MON = 'Monday',
//   TUE = 'Tuesday',
//   WED = 'Wednesday',
//   THU = 'Thursday',
//   FRI = 'Friday',
//   SAT = 'Saturday'
// }
// **************************************************
// // Void and ?
// The void type can have undefined or null as a value where as never cannot have any value.
// use it on function return - when function does not return anything
// let example: void
// example = undefined
// example = null
//function input - string / output - string
// function sayHello (name: string) : string  {
//   name = name.toLowerCase()
//   console.log(`hello ${name}`)
//   return name
// }
// sayHello('PETER')
// function with no output - use void / input = string or number
// function example2(arg: string | number) : void {
//   console.log('arg ----->', arg)
// }
// ???????
// const nameAndAge = (name: string, age?: number) : string | boolean => {
//   return `My name is ${name} and age ${age}`
// }
// nameAndAge('eddie', 22)
// **************************************************
// // Never
// The void type can have undefined or null as a value where as never cannot have any value.
// function throwError(message: string): never {
//   throw new Error(message);
// }
// throwError('this is a error message')
// **************************************************
//Array
// let names: string[] = ['eddie', 'johnny', 'maria']
// let names = ['eddie', 'johnny', 'maria']
// names.push('denzal')
// names[0] = 'troy'
// names.push(99)
// let mixed: (string | number | boolean)[]
// mixed = ['eddie', 'amy', true, 6]
// mixed.push('hello')
// mixed.push(false)
// let array1: number[]
// array1 = [1, 2, 3]
// let array2: number[]
// array2 = [4, 5, 6]
// let array3: string[] = ['a', 'b', 'c']
// array3 = array1 // error
// let array4: (number | string)[] = [1, 2, 'hello', 'hey']
// // Array<T> syntax
// let example7: Array<number> = [4, 5, 6]
// let nestedArray1: string[][]
// nestedArray1 = [ ['a','b'], ['c','d'] ]
// //Array of tuples
// let nestedArray2: [string, number, boolean][] = [
//   ['hey', 1, true],
//   ['OMG', 99, false],
//   ['coding', 123, false]
// ]
//Tuples
// In TypeScript, when an array is typed with elements of specific types, it’s called a tuple. Still got the length/index and array method.
//This is a Tuple not an array
// let example9: [number, number, number]
// example9 = [1, 2, 3]
// example9.push(4)
// console.log('length', example9.length)
// console.log('index', example9[1])
// console.log('example9', example9)
// example9 = example6 //Error
// let example10: [string, number, boolean];
// example10 = ['a', 33, false]
// let example11: [number, boolean, string, [boolean, string]] = [2, true,'hello', [true, 'hey']]
// //. concat on Tuple
// let newArray = example9.concat(example6)
// console.log('newArray', newArray) // create a new array
// let monster: [string[],string[],string[][],string[][],string[][][][],string[][][][],number[][][][][][],number[],string[],boolean[],number[],string[],boolean[],number[][]] = [
//   [],            []      ,
//   [[]],        [[]]     ,
// [[[['X']]]],[[[['X']]]]   ,
//  [[[[[[1111111]]]]]]     ,
//   [],[],[],[],[],[]      ,
//         [[3]]
// ];
// **************************************************
//Object
// let myDog = {
//   name: 'sparky',
//   age: 14,
// }
// i can change the value but not modify the structure
// **************************************************
//3.Multipe Types /Union types
// let example1: 'happy' | 'sad' = 'happy'
// let example2: boolean | number;
// example2 = false
// example2 = 'hello'
// let example3: (string | boolean)[] = ['peter', true, false, 'apple'];
//5.Interface - create object
// const user1: {name: string, age: number} = {
//   name: 'eddie',
//   age: 10
// }
// const user2: {name: string, age: number} = {
//   name: 'Peter',
//   age: 20
// }
// const user3: {name: string, age: number} = {
//   name: 'John',
//   age: 30
// }
// interface IUser {
//   name: string;
//   age?: number;
// }
// interface UserInterface {
//   name: string;
//   age?: number;
// }
// const example1: IUser = {name: 'eddie', age:11}
// console.log(example)
// console.log(example.uu)
// 6.keyword type
// let test: any = 'hello there'
// let thelength = test.length;
// console.log(thelength)
//Javascript function
// function addJavascript(num1, num2) {
//   if(typeof num1 !== 'number' || typeof num2 !== 'number') {
//     return 'Input not a number'
//   }
//   let total = num1 + num2
//   return total
// }
// console.log('javascript- ', addJavascript('21', '22') )
// function addTypescript(num1: number, num2: number) : number {
//   let total = num1 + num2
//   return total
// }
// console.log('javascript- ', addTypescript(10, 20))
// let customersArray = ['Custy Stomer', 'C. Oostomar', 'C.U.S. Tomer', 3432434, 'Custo Mer', 'Custopher Ustomer', 3432435, 'Kasti Yastimeur'];
// Check customersArray and log out any non-string type element
// const checkCustomersArray = (arr) => {
//   for(var i = 0; i < arr.length - 1; i++) {
//     if(typeof arr[i] !== 'string') {
//       console.log(`Type error: ${arr[i]} should be a string!`)
//     }
//   }
// }
// checkCustomersArray(customersArray)
// const stringPush = (val) => {
//   if(typeof val === 'string') {
//     customersArray.push(val)
//   }
// }
// let arr: string[] = ['a', 'b', 'c']
// arr.push(3)
// console.log(arr)
// enum Direction {
//   North = 8,
//   South = 2,
//   East = 6,
//   West = 4
// }
// console.log(Direction[8])
function gameStart() {
    return 'this is gameStart';
}
function func2() {
    return 'this is function2';
}
function funnn3() {
    // return 'this is funnn3 function'
}
function gameOver() {
    return 'this is gameOver function';
}
function test(input) {
    if (input === 1) {
        return gameStart();
    }
    else if (input === 2) {
        return func2();
    }
    else if (input === 3) {
        return funnn3();
    }
    else {
        return gameOver();
    }
}
function randomNumber() {
    var randomNumber = Math.floor(Math.random() * 4) + 1;
    return randomMumber;
}
console.log(text(randomNumber()));
