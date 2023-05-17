/ A login to chat with a friend

import prompt from "prompt-sync";

const friend = prompt();

let chat = () => {
  let name = friend("please enter your name: ");
  let password = friend("please enter your password: ");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name === "Josephine" && password === "Good") {
        resolve("friends are valid");
      } else {
        reject("friends not valid");
      }
    }, 2000);
  });
};

const chatTime = () => {
  return Promise.resolve(`welcome back ${friend}`);
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

const friendship = async () => {
  const res = await chat();
  console.log(`friends ${res}`);
  const result = await chatTime(res);
  console.log("you can chat now");
  return result;
};
friendship();


import path from "path";

// console.log(path.basename(newPath));
// console.log(path.dirname(newPath));
// console.log(path.extname(newPath));

// console.log(path.join(__dirname, "ignore", "index.js"));

let newPath = "C:Users/JOSEPHINE/Desktop/typescript/files/ignore/text.txt";
// console.log(path.basename(newPath));
// console.log(path.dirname(newPath));
// console.log(path.extname(newPath));
// console.log(path.join(__dirname, ""));

import fs from "fs";
import fsPromise from "fs/promises";
// import { error } from "console";

// call back method
fs.readFile(path.join(__dirname, "index.js"), "utf-8", (err, data) => {
  if (err) {
    throw err;
  } else {
    console.log("read from async", data);
  }
});

// sync method
try {
  const data = fs.readFileSync(path.join(__dirname, "index.js"), {
    encoding: "utf-8",
  });
  console.log("read from sync ", data);
} catch (error) {
  console.log(error);
}

const readFile = async () => {
  try {
    const data = await fsPromise.readFile(path.join(__dirname, "index.js"), {
      encoding: "utf-8",
    });
    console.log(data);
  } catch (error) {
    throw error;
  }
};
readFile();


const readWrite = (dataFile: string, ext: string) => {
  fs.writeFile(path.join(__dirname, "sample", ext), dataFile, (err) => {
    if (err) {
      throw err;
    } else {
      console.log("file created");
      console.log("");
      fs.readFile(path.join(__dirname, "sample", ext), "utf-8", (err, data) => {
        if (err) {
          throw err;
        } else {
          console.log(data);
        }
      });
    }
  });
};

// readWrite("i can do all things", "motivation.txt");

const newPath = path.join(__dirname, "fine", "shecodes.txt");


fs.appendFile(newPath, "where coding is fun!", (err) => {
  if (err){
    throw err;
  } else {
    console.log("Done");
  }
})

// to delete

fs.unlink(newPath, (err) => {
  if(err) {
    throw err;
  } else {
    console.log("Done");
  }
})

