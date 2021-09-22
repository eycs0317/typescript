//TypeScript
//1. Installation
// npm install -g typescript
//check installation
// tsc -v
// create typescript file index.ts
// run the file - tsc index.ts
// watch the file - tsc index.ts -w
//2.Basic
//Boolean
// let example1: boolean = true;
// example1 = 3
//Number
// let example2: number = 99;
//String
// let example3: string = 'Hello!!';
//Undefined
// let example4: undefined = undefined;
//Null
// let example5: null = null;
//Array
// let example6: [string, string, string];
// example6 = ['a', 'b','c']
// let example6: number[]
// example6 = [4,5,6]
// let example6: number[] = [1,2,3,4];
// let example7: [number, boolean, string, [boolean, string]] = [2,true,'hello', [true, 'hey']]
// let example8: string;
// example8 = 'Hey!'
// console.log('example1', example6)
//3.Multipe Types / Union type
// let example1: any
// let example1: any = []
// example1 = 9
// example1 = [1, 'a', [1,'hey', false]]
// let example2: boolean | number;
// example2 = false
// example2 = 'hello'
//Function - ? :void
// function example1 (a: string) : string  {
//   a = a.toLowerCase()
//   console.log(`heyhey ${a}`)
//   return a
// }
// example1('HELLO')
// function example2(arg: string | number) : void {
//   console.log('arg ----->', arg)
// }
// example2(6)
// example2('testing')
// const nameAndAge = (name: string, age: number) : string | number => {
//   return(`My name is ${name} and age ${age}`)
// }
// nameAndAge('eddie',33)
// Interface - create object
var user1 = {
    name: 'eddie',
    age: 10
};
var user2 = {
    name: 'Peter',
    age: 20
};
var user3 = {
    name: 'John',
    age: 30
};
// interface UserInterface {
//   name: string;
//   age?: number;
// }
// const example1: IUser = {name: 'eddie', age:11}
var example2;
// function greet(person, date) {
//   console.log(`Hello ${person}, today is ${data}!`);
// }
// console.log(greet("Brendan"));
