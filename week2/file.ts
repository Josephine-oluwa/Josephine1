import path, { resolve } from "path";
import fs, { readFile, writeFile } from "fs";
import fsPromise from "fs/promises";

// call back method

// fs.readFile(path.join(__dirname, "index.js"), "utf-8", (err, data) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log("read from async", data);
//   }
// });

// try {
//   const data = fs.readFileSync(path.join(__dirname, "index.js"), {
//     encoding: "utf-8",
//   });
//   console.log("read from sync ", data);
// } catch (error) {
//   console.log(error);
// }

// const readFile = async () => {
//   try {
//     const data = await fsPromise.readFile(path.join(__dirname, "index.js"), {
//       encoding: "utf-8",
//     });
//     console.log("promise ", data);
//   } catch (error) {
//     throw error;
//   }
// };
// readFile();

// const readWrite = (dataFile: string, ext: string) => {
//   fs.writeFile(path.join(__dirname, "sample", ext), dataFile, (err) => {
//     if (err) {
//       throw err;
//     } else {
//       console.log("file created");
//       console.log("");
//       fs.readFile(path.join(__dirname, "sample", ext), "utf-8", (err, data) => {
//         if (err) {
//           throw err;
//         } else {
//           console.log(data);
//         }
//       });
//     }
//   });
// };

// readWrite("i can do all things", "motivation.txt");

// function createFile(fileName: string, fileContent: string): Promise<void> {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(fileName, fileContent, (err) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve();
//       }
//     });
//   });
// }

// async function createFile(){
//   const fileName = "example.txt";
//   const fileContent = "Hello, World!";

//   try {
//     await fs.promises.writeFile(fileName, fileContent);
//     console.log("File created successfully.");
//   } catch (err) {
//     console.error("Error creating file:", err);
//   }
// }

// createFile()

// const file = 'example.txt';

// readFile(file, error)
//   .then((data: string) => {
//     console.log('File content:', data);
//   })
//   .catch((err: string) => {
//     console.error('Error reading file:', err);
//   });
// readFile();

//   const fileName = 'example.txt';
// const contentToAppend = 'This is new content to append.';

// appendToFile(fileName, contentToAppend)
//   .then(() => {
//     console.log('Content appended to the file successfully.');
//   })
//   .catch((err) => {
//     console.error('Error appending to the file:', err);
//   });

//   const fileName = 'example.txt';

// deleteFile(fileName)
//   .then(() => {
//     console.log('File deleted successfully.');
//   })
//   .catch((err) => {
//     console.error('Error deleting file:', err);
//   });

async function createFileAsync() {
  const fileName = "example.txt";
  const fileContent = "Hello, World!";

  try {
    await fs.promises.writeFile(fileName, fileContent);
    console.log("File created successfully.");
  } catch (err) {
    console.error("Error creating file:", err);
  }
}

createFileAsync();

//   const fileName = 'example.txt';

// // Asynchronous file read
// readFileAsync(fileName)
//   .then((data) => {
//     console.log('File content (async):', data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
