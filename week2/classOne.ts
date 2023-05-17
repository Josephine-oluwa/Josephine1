// Data structure is named location that can be used to store and organize data
// Algorithm is a set of well defined instructuion to solve a particular problem. it takes inputs and produces the desired output

import { resolve } from "path";

// import os from "os";
// const OS = os.freemem();
// console.log(OS.tosring());

// get the decending order of numbers and their sum

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

// const start2 = (n: number) => {
//   return (n * (n + 1)) / 2;
// };

// console.time();
// console.log(start(100000000));
// console.timeEnd();

// console.time();
// console.log(start1(1000000000));
// console.timeEnd();

// console.time();
// console.log(start2(1000000000));
// console.timeEnd();

// const test = (n: string) => {
//   let a: string[] = [];
//   let b: string[] = n.split("");

//   for (let i of b) {
//     a.push(i);
//   }
//   return a.reverse().join("");
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

// const test3 = (n: string) => {
//   let a: string = "";
//   for (let i = n.length; i <= 0; i--) {
//     a += i;
//   }
// };

// console.time();
// console.log(test("codelab is here to redeem time"));
// console.timeEnd();

// console.time();
// console.log(test1("codelab is here to redeem time"));
// console.timeEnd();

// console.time();
// console.log(test2("codelab is here to redeem time"));
// console.timeEnd();

// const check (n: number) => {
//   let coumt: number = 0
//   for (let i = 0; i < 10; i++) {
//     count =
//     for (let v = 10; v > 0; v--) {
//       console.log(v)
//   }
//   if () {

//   }
//   }
// }

// const check = (n: number) => {
//   for (let i = 0; i <= 10; i++) {
//     for (let v = 0; v >= 10; v--){
//     if (i === 9 && v === 3) {
//     console.log("key found: ")
//     console.timeEnd();
//     continue;
//   }
//   console.log(i,v);
// }
//   }
// console.log(i,v)

// let data = {
//   score: 100,
//   price: 200,
//   value: 116,
// };
// let scoredatastore: number[] = [];
// for (let i in data) {
//   console.log();
// }

//  let arr: number[] = [6,7,8,9,0];
//  here you use the O(1) notation is used
// search O(n) (used when you look from the beginning to end)
//  console.log(arr.includes(6))

// buid a system tat counts every 5 seconds
// let time: number = 0;
// setInterval(() => {
//   console.log(time++ % 5);
// }, 1000);
// // (this is a synchronous code)

// console.log("codelab");
// console.log("codelab1");
// console.log("codelab2");
// console.log("codelab3");

// const wait for 10secs = (time: number)
//  => {
//   let timer = new Date().getTime()
//   while(newDate().get )
// }

// let promise = new promise((resolve, reject) => {
//   if (false) {
//     resolve("promise kept");
//   } else {
//     reject("promie Denied");
//   }
// });

// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("finally done");
//   });

import os from "os";

const root = os.version();
const rootII = os.cpus();
const root3 = os.machine();
const root4 = os.release();
const root5 = os.platform();
const root6 = os.homedir();
console.log(rootII);

// import os from "os";

// const root = os.version();
// const root1 = os.cpus();
// // console.log(root1[0].model.split(" ")[2]);

// let cpu = root1[0].model.split(" ")[2];

// let cpu_rate = cpu.split("")[1];
// let sys = os.version();

// // console.log(sys.split(" ")[0]);
// if (sys.split(" ")[0] === "windows") {
//   if (parseInt(cpu_rate) >= 3) {
//     console.log("you can play this gaame");
//   } else {
//     console.log("your procesor doesnt meet the requirement");
//   }
// } else {
//   console.log("you must be a Macos user to play");
// }

// if (parseInt(cpu_rate) >= 3) {
//   console.log("you can play this gaame");
// } else {
//   console.log("your procesor doesnt meet the requirement");
// }

// console.log(os.homedir(), os.platform, os.release, os.machine, os.cpus);
