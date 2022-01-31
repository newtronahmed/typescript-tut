// interface Obj {
// 	name:string
// }
// const person: {
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// } = {
// 	name:'ahmed',
// 	age:5,
// 	hobbies:['hell','hello'],
// }
// interface Props {
// 	name: string,
// 	text:string,
// }
// enum Role  {Admin= 'hello',User='hi',Javascript='java'};
// let obj2: Obj = {
// 	name:'hello'
// }
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// person.name = 'adjoa'
// interface Point {
// 	x:string,
// 	y:string,
// }
// function add (num1:number , num2:number){
// 	return num1+num2;   
// }
// function addAndHandle (num1:number, num2:number,cb:(num:number)=>number){
// 	const result = num1+num2;
// 	cb(result)
// }
// const adder:(n1:number,n2:number)=>number = add;
// console.log(adder(4,4));
//  addAndHandle(4,6,(res)=>{
// 	 console.log(res);
// 	 return res;
//  })
//  class Dog {
// 	 constructor (private _name?:string ,private _age?:number){
// 	 }
// 	 get  name (){
// 		// console.log( this._name + 'is the name');
// 		return this._name;
// 	 }
// 	 set name(value){
// 		this._name = value;
// 		// this.age = 
// 	 }
//  }
//  const larry = new Dog;
//  larry.name = 'ahmed'
// console.log(larry.name)
// console.log('hello')
// let ahmed = 'hello'
// ahmed.charAt(0)
// // console.log()
// // const (point<Point>) = {
// // 	x:'he',
// // 	y:'hi'
// // }
// let age:undefined;
// // console.log('age');
// class Employee {
// 	constructor(public employeeName:string){	
// 	}
// 	greet(){
// 		console.log('hello '+ this.employeeName)
// 	}
// }
// const employee1 = new Employee('ahmed')
// employee1.greet()
// type tag = string;
// let popularTags:string[]=['hello','world']
// console.log(popularTags[0])
var unknownV = 10;
var stringV = unknownV;
// let someElement = document.querySelector('.foo') as HTMLInputElement
// someElement.addEventListener('click',function(e){
// 	let target = event.target as HTMLInputElement;
// 	console.log(target.value)
// })
// interface UserInterface {
// 	getUsername: ()=>void;
// }
// class User implements UserInterface {
// 	static maxAge =6;
// 	getUsername(){
// 		console.log('hello worldd')
// 		return 5;
// 	}
// }
// class Admin extends User {
// 	getPublications(){
// 		console.log('publications')
// 	}
// }
// let admin = new Admin;
// admin.getUsername()
// admin.getPublications()
function addName(obj) {
    var name = Math.random().toString(16);
    return __assign(__assign({}, obj), { name: name });
}
var user = {
    age: 4,
    stage: 6,
    status: true
};
var user2 = {
    age: 4,
    stage: 5,
    status: ['string', 'array']
};
var user3 = {
    age: 4,
    stage: 5,
    status: 6
};
var result3 = addName(user3);
var result = addName(user2);
var result2 = addName(user);
console.log(result);
function reveal(prop) {
    return true;
}
var res = reveal(['adsfads']);
