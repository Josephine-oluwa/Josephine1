import prompt from "prompt-sync";

const pp = prompt();

let login = () => {
  let email = pp("please enter your email address: ");
  let password = pp("please enter your password: ");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "peter@gmail.com" && password === "peter@gmail.com") {
        resolve("user Auth is valid");
      } else {
        reject("user Auth failed");
      }
    }, 2000);
  });
};

const HomePage = (userAuth: any) => {
  return Promise.resolve(`Welcome back home: ${userAuth}`);
};

console.clear();
login()
  .then((res) => {
    console.log(res);
    return HomePage(res);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err: Error) => {
    console.log(err);
  });

const myLogin = () => {
  login()
    .then((res) => {
      console.log(res);
      return HomePage(res);
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err: Error) => {
      console.log(err);
    });
};

const myLoginAsync = async () => {
  const res = await login();
  console.log(`user Auth ${res}`);
  const result = await HomePage(res);
  console.log(`you can go to the mian screen now ${result}`);
  return result;
};

myLoginAsync();



// import os from "os";

import { resolve } from "path";

// mport { time } from "console";
// import { resolve } from "path";i

// const ck = os.freemem();
// console.log(ck);

// building an app with will only run on a processor with app that is greater than 2000

// let app = os.cpus();
// // console.log(app);

// let speed = app[0].speed;
// console.log(speed);
// if (speed >= 2000) {
//   console.log("you can continue the process");
// } else {
//   console.log("your system does not have enough speed");
// }

// import chalk from "chalk";
// setInterval(() => {
//   // console.log("i am");
//   console.log(chalk.green("this is color green"));
//   console.log(chalk.red("this is color red"));
//   console.log(chalk.yellow("this is color yellow"));
//   console.log(chalk.blue("this is color blue"));
// }, 3000);

// let time: number = 0;

// // setInterval(() => {
//   console.log(time++ % 5);
// }, 1000);

// const waitFor10secs = (time: number) => {
//   let timer = new Date().getTime();
//   console.log("i am thinking...");
//   while (new Date().getTime() < timer + time) {}
//   console.log("i'm done, you can continue now");
// };

// waitFor10secs(1000);

// const waitFor10secs = (time: number) => {
//   let timer = new Date().getTime();
//   console.log("i am thinking...");
//   while (new Date().getTime() < timer + time) {}
//   console.log("i am done, you can continue");
// };

// waitFor10secs(4000);

// const waitFor20secs = async (time: number) => {
//   let timer = await new Date().getTime();
//   console.log("i am thinking...");
//   while (new Date().getTime() < timer + time) {
//     console.log("show");
//   }
//   console.log("i am done, you can continue now");
// };
// waitFor20secs(5000);

// console.log("i am a boy");
// console.log("you are");
// console.log("have you");
// console.log("i am fine");
// console.log("you are fine");

// const start = () => {
//     cb();
// };

// start(() => {
//     console.log(title);
// });
// let  title

// callback usually takes 2 argument; the eror and the response or data
// callbacks are used for asunchronous operations
// Synchronous and asynchronous functons

// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");

// const start = (cb: any) => {
//   setTimeout(() => {
//     cb(null, "data for response");
//   }, 0.0001);
// };

// start((err: Error, data: string) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log(data);
//   }
// });
// let title: string = "i am a function";
// console.log("5");

// let promise = new Promise((resolve, reject) => {});

// promise
//   .then((res) => {})
//   .catch((err: Error) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("finally im done!");
//   });

// console.log("6");
// console.log("7");
// console.log("8");

// const makeCall = (timer: number) => {
//   setTimeout(() => {
//     console.log(`i finished after ${timer / 1000} secs`);
//   }, timer);
// };
// makeCall(3000);
// makeCall(7000);
// makeCall(1000);

// const Time = (timer: number) => {
//   setTimeout(() => {
//     console.log(`i finished after ${timer / 1000} secs`);
//   }, timer);
// };

// Time(4000);
// Time(8000);
// Time(2000);

// A login to chat a friend

import prompt from "prompt-sync";

const Friend = prompt();

let chat = () => {
  let name = Friend("please enter your name: ");
  let password = Friend("please enter your password: ");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name === "Josephine" && password === "iamyourfriend") {
        resolve("friends are valid");
      } else {
        reject("friends not valid");
      }
    }, 2000);
  });
};
// chat();
// console.log();

const chatTime = (friends: any) => {
  return Promise.resolve(`welcome back: ${friends}`);
};
console.clear();
chat()
  .then((res) => {
    console.log(res);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err: Error) => {
    console.log(err);
  });

const myLogin = () => {
  chat()
    .then((res) => {
      console.log(res);
      return chatTime(res);
    })
    .then((res) => {
      console.log(res);
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err: Error) => {
      console.log(err);
    });
};

const friendship = async () => {
  const res = await chat();
  console.log(`freinds ${res}`);
  const result = await chatTime(res);
  console.log(`you can chat now ${result}`);
  return result;
};

friendship();

const start = (Friend: any) => {
  setTimeout(() => {
    Friend();
  }, 0.0001);
};
start((name: string, password: string) => {
  if (name === "Josephine" && password === "iamyourfriend") {
    console.log("friends are valid");
          } else {
            console.log("friends not valid");
          }
        });

console.log("5");

let start = (Friend: any) => {
  setTimeout(() => {
    Friend();
  }, 0.0001);
};
start = ((name: string, password: string  )=> {
  if (name === "Josephine" && password === "iamyourfriend") {
    console.log("friends are valid");
          } else {
            console.log("friends not valid");
          }
        });
console.log(start)

