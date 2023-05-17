// // leet code will help you with data structure and algorithm

// // [2,3,4,5,2] check if there is a duplicate, throw true or false
// // Map Method
// // Set Method

// // let a: number  = [2,3,4,5,2];
// // console.log(a.every()=>{

// // })
// // Asignment 1
// // create a system whereby you cannot use a value that has already been used /if a password already exist /nb: it pushes the pssword
// // into an array and allow you to create a new password eg password
// // Edu stipend
// // leet code
// // practice 10 times
// // study algorith and data structure
// study object oriented programing
// // write a sentence and print out the word with the highest frequency in the sentence
// // learn every boolean methods..
// // create a class that nobody can update outside the class
// // ---mention the object property and solve it
// A static class method is a method that belongs to the class itself, not the instance of a class.
// it is a method that the poperties are shared by all instance of a class

// // let a: number[] = [1, 2, 3, 4, 5];
// // let aa: any[] = [1, 1, 1, 1, "the boy",{  name: "peter" }, [0, 4]];

// // let pass: number = 6;
// // let stored: number[] = [];

// // const check = a.findIndex((el) => el === pass);
// // // the return type for findIndex is 0 and 1
// // const check1 = a.some((el) => el === pass);

// // console.log(check);
// // console.log(check1);

// // if (check1){
// //   console.log("Already exist")
// // } else {
// //   a.push(pass);
// //   console.log ("you can go ahead")
// // }
// // console.log(a);

// // const checkForDuplicate = (data: number[]) => {
// //     let map = new map();
// //     for (let i of data){
// //         if (map.has(i)) {

// //         }
// //     }
// // }

// // Map method
// // when you have an input, you can use map method

// // set: it is a unique entity that accepts in an array but does not allow duplicate

// let newArr = [1,8,9];
// const newcheck = (data: number[]) => {
//     let set = new set(data);
//     if (set.size === data.length){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(newcheck(newArr));

// "The boy is good"
// "the boy"

// let solve:string = "the boy is good";
// for (let i in solve) {
//     if (solve[i] === "the boy")
// }

// // / for (let i in dataNew) {
//     //     if (dataNew[i] === 5){
//     //         console.log(dataNew[i])
//     //     } else {
//     //         console.log("nothing")
//     //     }
//     // }

// // let map = new map();
// //     for (let i of data){
// //         if (map.has(i)) {

// let a: number[] = [1,2,3,4,5]
// let aa: any[] = [2,2,2,2, "jesus is lord", {name: "peter"}, [9,6]]

// let pass: number = 9
// let stored: number[] = []

// const check = a.findIndex((el) => el === pass);
// const check1 = a.some((el) => el === pass);
// let a: number[] = [1, 2, 3, 4, 5];
// let aa: any[] = [1, 1, 1, 1, "the boy",{  name: "peter" }, [0, 4]];

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

// learn static and dynamic
// map method: Maps are helpful when we want to store key-value pair values.
// set method: it is used to store key. instead of key values unlike map  // set does not return duplicate
// Maps are also known as dictionaries.
// The has() method is used to check if a particular key exists in a map.
// The for loop is used to execute a block of code a given number of times, which is specified by a condition
// The size is used to store the total number of entries in a map or set
// Map.set: 	It is used to add entries in the map.

// let arr: number[] = [7,8,9,2,7,8]
// const checkForDuplicate = (data: number[]) => {
//     let map = new Map();
//                               // storing the i values into the map
//     for (let i of data) {
//         if (map.has(i)){
//             return true
//         } else {
//             map.set(i, true)
//         }
//     }
//     return false;
// }
// console.log(checkForDuplicate(arr));

// set does not return duplicate
// let Arr = [1,3,4,5,2];
// let newSet = new Set(Arr);
// console.log(newSet.size)

// let arr2 = [1,3,4,5,2,3];

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

// let string = ("this is a school we love")
// let string2 = ("this is a school")
// const checkDup = (short: string, long: string) => {
//     let shortArr: string[] = short.split ("")
//     let longArr: string [] = long.split("")

//     let map = new Map
//     let joinArr = shortArr.concat(longArr)
// }
// console.log(joinArr)

// const checkNote = (note: string, post: string) => {
//     let noteArr: string[] = note.split(" ");
//     let postArr: string[] = post.split(" ");

//     let postObj: {} = {};

//     postArr.forEach((el: string) => {
//         if (postObj[el]){
//             postObj[el] = 1;
//         } else {
//             postObj[el]++;
//         }
//     });
//     console.log("checking data: ", postObj);
// };
// let noteData: string = "i can"
// let postData: string = "i can, i will";
// checkNote("", "yes i can, yes i will");

// create a system whereby you
// cannout use a value that has already been used /
// if a password already exist /nb: it pushes the pssword into data base

let Password: number[] = [5, 6, 7, 8];
const check6 = (database: number[]) => {
  let duplicate = new Set(database);
  if (duplicate.size === database.length) {
    return;
  }
};

// let password =[4,5,6,7,5]
// const check5 = (data: number[]) => {
//     let map = new Map()
//     for (let i of data) {
//         if (map.has(i)) {
//             return true;
//         } else {
//             map.set(i, true)
//         }
//         console.log(i)
//     }
//     return false;
// }

// let arr3 = [1,3,5,6,3,];
// const checkArr = (data: number[]) => {
//     let set = new Set(data)
//     if (set.size === data.length) {
//         return true
//     } else {
//         return false;
//     }
// };
// console.log (checkArr(arr3))

// let string = ("this is a string")
// let string2 = ("this is school")
// const split = (short: string, long: string)=>{
//     let stringArr: string[] = short.split(" ")
//     let string2Arr: string[] = long.split(" ")

//     let map = new Map()
//     let joinArr = stringArr.concat(string2Arr)

// }
// console.log(joinArr)


// const start = (n: number) => {
//   let count: number = 0;
//   for (let i = n; i >= 0; i--) {
//     count = count + i;
//   }
//   return count;
// };
// start(5);ss

// const start1 = (n: number) => {
//   let count: number[] = [];
//   for (let i = n; i >= 0; i--) {
//     count.push(i);
//   }
//   return count.reduce((a, b) => a + b);
// };

// const test1 = (n: string) => {
//   let b: string[] = n.split("");
//   return b.reverse().join("");
// };

// const test2 = (n: string) => {
//   if (n === "") {
//     return "";
//   } else {
//     return test2(n.slice(1)) + n.slice(0, 1);
//   }
// };
