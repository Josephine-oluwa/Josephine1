// interface
// interface iArray {
//   place: string,
//   shop: number,
// }
// interface iArray2 extends iArray {
//   people: string,
//   fellowship: number
// }
// interface iArray5 extends iArray2{
//   amount: string
// }
// let iArray6: iArray5 {
//   place: "idumota",
// }

// interface iData {
//   name: string,
//   school: string,
// }
// interface iData5 extends iData {
//   batch: string,
//   firm: number,
// }
// interface iDta6 extends iData5 {
//   class?: number
// }
// let Daat: iData6 = {
// name: "adaeze",
// school: "codelab",
// batch: "thiird",
// firm: 67,
// class: 800,
// }

// // object, array, tuple
// let obj: {name: string, score: number} = {name: "peter", score: 67}
// let ade: {course: number } = {course: 6799}
// // Defined object
// let obj2: {} = {name: 45}
// // undefined object which can be easily manipulated

// // Array
// let arr: number[] = [4,5,6,7,8];
// let arr2: string[] = []
// let arr3: {name: string, class: number}[] = [{name: "peter", class: 67}, {name: "favor", class: 78}]
// let arr4: any[],{} = ["peter", 0, 0, 5, "start", {name:"toheeb"}], {name: "school"};
// let arr5: {name: string, class: number}[]= [{name: "joseph", class: 67}, {name: "favour", class: 78}]

// // tuple
// // it is a data structure that cannot be altered/ it cannot be changed, it must be done as defined
// // tuple takes an array as it has the structure of an array
// let xx: [number, string, number] = [8, "peter", 8]
// // example RGB (45, 24, 89)

// // Enums
// // it is used to define constants meaning you will call the constant and consume it and select from the range of constants
// // javaScript does not have enums, so it converts it to objects
// // it can be used for games

// enum myDATA{
//   UP,
//   DOWN,
//   RIGHT,
//   LEFT,
// }
// console.log(myDATA[0]);

// // example error constants

// // interface franklyn {
// //     age: number,
// //     name: string,
// //     state: string
// // }

// // interface franklin {
// //     name: string,
// //     date: number,
// //     state: string
// // }

// // // Enum

// // let a: [string, number] = ["franklin", 8]
// // enum aa {
// //     OPEN = 5,
// //     CLOSE = 50,
// // }

// // inheritance from interface

// interface iData {
//   name: string;
//   date: number;
//   food: string;
// }

// interface iUser extends iData {
//   price: number;
//   date: number;
// }

// // inheritance of types
// type iDataTypes = {
//   name: string;
//   price: number;
// };

// type iDataTypes1 = {
//   phone: number;
// };

// type iDataTypes3 = iDataTypes1 &
//   iDataTypes & {
//     age: number;
//     food: string;
//   };

// let data: iDataTypes3 = {
//   name: "peter",
//   price: 648,
//   phone: 700,
//   age: 59,
//   food: "ofada",
// };
// console.log(data);

// // multiple interface inheritance
// interface iUser2 {
//   name: string;
// }
// interface iUser3 {
//   school: string;
// }
// interface iUser4 {
//   date: number;
// }
// interface iUser5 extends iUser2, iUser3, iUser4 {
//   age: string;
// }
// interface iUser6 extends iUser5 {
//   page: string;
// }
// let data10: iUser6 = {
//   name: "bola",
//   school: "codelab",
//   date: 19,
//   age: "eleven",
//   page: "twenty",
// };

// GENERICS
// let a: any[] = ["string", 89, true];
// let b: Array<> = [6];

// function newFunction<T>(data: Array<T>): T[] {
//   return data;
// }
// console.log(newFunction(["string", 89]));

// let ArrFunct<T>(data:Array<T>)=>{
//   return data;
// }

// // Generic (it exists in different forms)
// // let Arr: any[] = ["stop"];
// let Arr1: Array<number> = [6];
// // let Arr: Array<T>

// function newFunction<T>(data: Array<T>): T[] {
//   return data;
// }
// // function newFunction<T>(data: Array<T>);
// // Array<T>{
// //     return data;
// // }

// console.log(newFunction(["string", 48]));

// // let ArrFunct = <T>(data: Array<T>): T => {
// //     return data[4];
// // };
// // console.log(ArrFunct([48,990]))

// // let ArrFunct = <T>(data: Array<T>): T =>{
// //     return data[1];
// // };

// // console.log(ArrFunct([48,990]));

// // const ArrFunct = () => {}

// // // Array generic function
// // const Array = <T>(data: T[]): T[]=>{
// //     return data
// // }

// // const me = <T>(data: T[]): T[]=>{
// //     return data
// // }
// // console.log(me([46,56]));

// let dataNew = [7, 5, 3, 4];
// // forEach forIn forOf

// for (let i in dataNew) {
//     if (dataNew[i] === 5){
//         console.log(dataNew[i])
//     } else {
//         console.log("nothing")
//     }
// }
// for of loop

// The for...of loop returns elements from a collection
// The for...in loop iterates
// through a list or collection and returns an index on each iteration.
// let newdata = [8,9,0,9];
// for (let i in newdata){
//   if (newdata[i] === 5) {
//     console.log(newdata[i])
//   } else {
//     console.log("nothing")
//   }
// }

// let value = [7, 8, 3, 2];
// for (let m in value) {
//   if (value[m] === 5) {
//     console.log(value[m]);
//   } else {
//     console.log("none");
//   }
// }

// interface iShop {
//   name: string,
//   shop: string,
//   number: number
// }
// type imap<come> ={
//   [lets in keyof come]?: come[lets]
// }

// let ihouse: imap<ishop> = {
//   name: "finsho",
//   shop: "elehjd"
// }

// let itter = {
//   name: "peter",
//   score: 68,
//   age: 7
// };

// for(let f of itter){
//   console.log(f);
// }

// // class in typeScript
// class person{
//  public  name: string;
//   age: number;

//   constructor(name: string, age: number){
//     this.name = name
//     this.age = age
//   }
//   get person(){
//     return this.name
//   }
// }
// let person = newperson("peter", 90)

// console.log(peson.getperson());
// console.log(person.name)
// console.log(person.age)
// // public: the file can be accessed anywhere and everywhere
// // it is accessable but cannot be altered

// // access modofiers: public, private, protected, read only

// class foodapp {
//  public name: string;
//   public type: number;

//   constructor(name: string, type: number){
//     this.name = "bolazbh"
//     this.type = 78
//   }
//   get foodapp () {
//     return this.name
//   }
// }
// let Foodapp = new foodapp ("favour",67)

// console.log(foodapp.name)
// foodapp.name
// console.log(foodapp.getfood)
// food app

// let peoplee = new people("peter", 90)
// console.log(people.name);
// people.name = ("okus")
// console.log(people.age)
// console.log(people.getpeople)
// console.log()

// // readonly: immeadiately the instance is created, it cannot be changed
// // readonly can be read but not altered

// class food {
//  public name: string;
//  private type: string;
//   protected amount: number

//   constructor (name: string, type: string, amount: number){
//     this.name = name
//     this.type = type
//     this.amount = amount
//   }
//   get Food (){
//     return this.name;
//   }
//   get good(){
//     return this.amount * 7;
//   }
//   get food(){
//     return this.type * 5
//   }
// }

// class newFood extends food {
//   email: string
//   constructor (name: string, type: string, amount: number, email: string){
//     super (name, type, amount)
//     // super givs you access to all wat you have inherited from the class
//     this.email = email
//   }
//   get food(){
//     return this.email * 5
//   }
// }
// let newclass = new newFood("peter", "shola", 80, "you@gmail.com")

// let foodtype = new food("rice", "protein", 67)
// console.log(food.name)
// console.log(food.type)
// console.log(food.)

// // private clas cannot be accessed outside the class
// // protected class can be accessed inside the class and inside te inherited class
// // public class cn be accessed within and outside the class
// // readonly cannot be accessed, it can only be read e.g email

// // abstarct means tat no instance can be created from the class
// // it is used to create a protected class, you can only inherit from the class

// abstract class person {
//   name: string;

//   constructor (name: string){
//     this.name = name;
//   }
//   display(): void {
//     console.log(this.name)
//   }

//   abstract find(string): person;
// }

// The meaning of Encapsulation, is to make sure that "sensitive" data is hidden from users. To achieve this, you must:

// declare class variables/attributes as private
// provide public get and set methods to access and update the value of a private variable

// class employee {
//   // creating private class member
//   private empname: string;
//   protected empage: number;
//   public role: string;

//   constructor(empname: string, empage: number, role: string) {
//     this.empage = empage;
//     this.empname = empname;
//     this.role = role;
//   }

//   // getters to get the name of the employee
//   public get name() {
//     return this.empname;
//   }
//   // getters to get the age
//   private get age() {
//     return this.empage;
//   }
//   public get rol() {
//     return this.role;
//   }
// }

// class employer extends employee {
//   weight: string;
//   constructor(empname: string, empage: number, role: string) {
//     super(empname, empage, role);
//     this.weight = "card";
//   }
//   get cm() {
//     return this.weight;
//   }
// }

// let man = new employee("peter", 78, "houd");
// let value = man.name;
// let ex = man.role;

// console.log("the name of the employee is " + value);
// console.log("the age of the employee" + man.name);

// // the get method return the value of the property value, it can also be called the accessor
// // the set method updates the property value, it is also known as the mutator

// abstract class abstractemployerr {
//   // creating private class member
//   private empname: string;a
//   protected empage: number;
//   public role: string;

//   constructor(empname: string, empage: number, role: string) {
//     this.empage = empage;
//     this.empname = empname;
//     this.role = role;
//   }

//   // getters to get the name of the employee
//   public get name() {
//     return this.empname;
//   }
//   // getters to get the age
//   private get age() {
//     return this.empage;
//   }
//   public get rol() {
//     return this.role;
//   }
// }
// class newAbstract extends abstractemployerr {
//   constructor(empname: string, empage: number, role: string) {
//     super(empname, empage, role);
//   }
// }

// class person {
//   private age: number;
//   private firstname: string;
//   private lastname: string;

//   public get age() {
//     return this.age;
//   }

//   public set age(theAge: number) {
//     if (theAge <= 0 || theAge >= 200) {
//       throw new Error("the age is invalid");
//     }
//     this.age = theAge;
//   }
// }

// let a: number[] = [1, 2, 3, 4, 5];
// let aa: any[] = [1, 1, 1, 1, "the boy", { name: "peter" }, [0, 4]];

// let pass: number = 6;
// let stored: number[] = [];

// const check = a.findIndex((el) => el === pass);
// // the return type for findIndex is 0 and 1
// const check1 = a.some((el) => el === pass);

// console.log(check);
// console.log(check1);

// if (check1){
//   console.log("Already exist")
// } else {
//   a.push(pass);
//   console.log ("you can go ahead")
// }
// console.log(a);

// Map method
// // when you have an input, you can use map method

// let countries = new Map<string, number>([
//   ["Ng", 7],
//   ["lagos", 8],
//   ["ABJ", 9],
// ]);
// console.log(countries.has("america"));

let newArr = [4, 5, 6, 7, 8, 5];
const check = (data: number[]) => {
  let map = new Map();
  for (let i of data) {
    if (map.has(i)) {
      return true;
    } else {
      map.set(i, true);
    }
    console.log(i);
  }
  return false;
};

let arr2 = [1, 3, 4, 5, 2, 3];
console.log(check(newArr));

// const checking = (data: number[]) => {
//     let set = new Set(data);
//     if (set.size === data.length){
//         return true;
//     } else {
//         return false;
//     }
// };
// console.log(checking(arr2));

// let arr3 = [3,4,5,6,3];
// const checking2 = (data: number[]) => {
//     let yet = new Set(data);
//     if (yet.size === data.length) {
//         return true;
//     } else {
//         return false;
//     }
// };
// console.log (checking2(arr3))

// / let string = ("this is a school we love")
// let string2 = ("this is a school")
// const checkDup = (short: string, long: string) => {
//     let shortArr: string[] = short.split ("")
//     let longArr: string [] = long.split("")

//     let map = new Map
//     let joinArr = shortArr.concat(longArr)
// }
// console.log(joinArr)
