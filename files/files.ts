import fs, { readFile } from "fs";
import { Duplex } from "stream";

const filePath = "./files/document.doc";

// fs.readFile(filePath, "utf-8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// let data = "i can";
// console.log(Buffer.from(data));

// process.stdin.on("data", (message) => {
//   console.log(message);
//   console.log(message.toString());
// });

// fs.readFile(filePath, "utf-8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// let data = "i can";
// console.log(Buffer.from(data));

// process.stdin.on("data", (message) => {
//   console.log(message);
//   console.log(message.toString());
// });

// process.stdout.write("where are you/");
// console.log("i can do this");

// writable
// process.stdin.on("data", (message) => {
//   console.log(message);
//   console.log(message.toString());
// });

// // request response

// readable
// process.stdout.write("i am good\n");

// // Duplex
// console.log("");
// process.stdout.write("", () => {
//   process.stdin.on("data", (message) => {
//     console.log(message);
//     console.log(message.toString());
//   });
// });

// Transform
// console.log("");
// process.stdout.write("", () => {
//   process.stdin.on("data", (message) => {
//     console.log(message);
//     console.log(message.toString().toUpperCase());
//   });
// });

// import crypto from "crypto"
// import fs from "fs"
// import path from "path"

// console.log(process)

// Node processes everything you write on your system as buffer
// process.stdin.on: you want to write
// process.stdin.out: you want to read

// import http, { ServerResponse } from "http";

// const server = http.createServer(
//   (req: http.IncomingMessage, res: ServerResponse<http.IncomingMessage>) => {
//     res.writeHead((res.statusCode = 200), {
//       "content-type": "text/html",
//     });
//     const device = req.rawHeaders[7]. slice(20, 35);
// console.log(device)
//   //   res.write(`you are using ${}`)
//   }
// )
// server.on("connection", ()=> {
//   console.log("a user")
// })

// const server = http.createServer();
// const server = http.createServer(
//   (req: http.IncomingMessage, res: ServerResponse<http.IncomingMessage>) => {
//     res.writeHead((res.statusCode = 200), {
//       "content-type": "text/html",
//     });
//     const device = req.rawHeaders[7].slice(20, 35);
//     // console.log(req.rawHeaders[7].slice(20, 35));
//     console.log(req.rawHeaders[7].split('""'));

//     res.write(`Youre uaing ${device} to access the servers `);
//     res.end();
//   }
// );

// server.on("connection", () => {
//   console.log("A user is connected...");
// });

// server.listen(3322, () => {
//   console.log("");
//   console.log("server is now live...");
// });

// const server = http.createServer(
//   (req: http.IncomingMessage, res: ServerResponse<http.IncomingMessage>) => {
//     res.writeHead((res.statusCode = 200), {
//       "content-type": "text/html",
//     });

//     // const data = req.rawHeaders[7]

//     const data = req.rawHeaders[7].split('""')[5];

//     const postData = req.rawHeaders[7].split("-")[1];

//     console.log();
//     // console.log(data);
//     // console.log(req.rawHeaders[4]);

//     // res.write(`Youre using "${postData}" to access me!`);

//     if (data === undefined) {
//       // if (data === chromium) {
//       res.write(`Youre using "${postData}" to access me!`);
//     } else {
//       res.write(`Youre using "${data}" to access me!`);
//     }

//     res.end();
//   }
// );

// server.on("connection", () => {
//   console.log("A user is connected...");
// });

// server.listen(3322, () => {
//   console.log("");
//   console.log("server is now live...");
// });

// Write a function that accepts an array of 10 integers (between 0 and 9),
// that returns a string of those numbers in the form of a phone number.

// function phoneNumber(Number: number[]): string {
//   // check if the input array ha exactly 10 integers.
//   const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//   if (Numbers.length !== 10) {
//     throw Error("10 integers must be inputed")
//   }

//   const code = Numbers.slice(0, 3).join("");
//   const first = Numbers.slice(3, 6).join("");
//   const second = Numbers.slice(6).join("");

//   return `(${code}) ${first} -${second}`
// }
// const Newnumber = phoneNumber(Numbers);
// console.log(Newnumber)

// function formatPhoneNumber(numbers: number[]): string {
//   // Check if the input array has exactly 10 integers
//   if (numbers.length !== 10) {
//     throw new Error("Input array must have exactly 10 integers");
//   }

//   // Format the phone number string
//   const areaCode = numbers.slice(0, 3).join("");
//   const firstPart = numbers.slice(3, 6).join("");
//   const secondPart = numbers.slice(6).join("");
//   return `(${areaCode}) ${firstPart}-${secondPart}`;
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const phoneNumber = formatPhoneNumber(numbers); // (123) 456-7890
// console.log(phoneNumber);

// fs.readFile(filePath, "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });

// let data = "i can";
// console.log(Buffer.from(data));

// process.stdin.on("data", (message) => {
//   console.log(message);
//   console.log(message.toString());
// });

// process.stdout.write("where are you/n");
// console.log("i can do this");

// // / writable
// process.stdin.on("data", (message) => {
//   console.log(message);
//   console.log(message.toString());
// });

// // Duplex
// console.log("");
// process.stdout.write("", () => {
//   process.stdin.on("data", (message) => {
//     console.log(message);
//     console.log(message.toString());
//   });
// });

// function PhoneNumber(Number: number[]): string {
//   // input number array 10 integers

//   // input your conditions
//   if (Num.length !== 10) {
//     throw Error("you must input 10 numbers");
//   } else {
//     console.log(Number, "you are correct");
//   }

//   const code = Num.slice(0, 3).join("");
//   const first = Num.slice(3, 6).join("");
//   const second = Num.slice(3, 6).join("");

//   return `(${code}) ${first} ${second}`;
// }

// const Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// const newNumber = PhoneNumber(Num);
// console.log(newNumber);

// function chooseCaterer(budget: number, numPeople: number): number {
//   if (numPeople <= 0 || budget < 15 * numPeople) {
//     return -1;
//   } else if (numPeople > 60) {
//     const premiumCost = 0.8 * 30 * numPeople;
//     if (premiumCost <= budget) {
//       return 3;
//     }
//   }
//   if (20 * numPeople <= budget) {
//     return 2;
//   } else {
//     return 1;
//   }
// }

// function chooseCaterer(budget: number, numPeople: number) {
//   if (numPeople <= 0 || budget < 15 * numPeople) {
//     return -1;
//   } else if (numPeople > 60) {
//     const premiumCost = 0.8 * 30 * numPeople;
//     if (premiumCost <= budget) {
//       return 3;
//     }
//   }
//   if (20 * numPeople) {
//     return 2;
//   } else {
//     return 1;
//   }
// }
// console.log();

// function litres(time: number): number {
//   const litresPerHour = 0.5;
//   const totalLitres = litresPerHour * time;
//   return Math.floor(totalLitres);
// }
// console.log(litres(2)); // 1
// console.log(litres(3.5)); // 1
// console.log(litres(5)); // 2
