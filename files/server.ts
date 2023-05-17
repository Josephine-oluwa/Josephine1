import http from "http";

// const food = ["rice", "beans", "eba", "fufu", "tea", "bread"];
// const data: any = [];

// Array.from({ length: 5 }, () => {
//   let numb = Math.floor(Math.random() * food.length);
//   let cost = Math.floor(Math.random() * 1000);
//   data.push({ item: food[numb], cost });
// });

// console.log(data);

// const port: number = 5544;
// const server: http.Server<
//   typeof http.IncomingMessage,
//   typeof http.ServerResponse
// > = http.createServer(
//   (
//     req: http.IncomingMessage,
//     res: http.ServerResponse<http.IncomingMessage>
//   ) => {
//     const { method, url } = req;
//     if (method === "GET" && url === "/") {
//       res.writeHead(200, { "content-type": "application/json" });
//       res.write("we are good...!");
//       res.write(JSON.stringify(data));

// console.log(req);
//       res.end();
//     }
//   }
// );

// server.listen(port, () => {
//   console.log("server is now listening");
// });


// writing on server

// const server: http.Server<(
// let body = "";
// let newData: {}{} = [];

// req.on("data", (chunk: buffer) => {
//     body.concat(chunk)
//     console.log(chunk)
//     console.log(body)
// });

// req.on("data", () => {
//     let result = JSON.parse(body);
//     collection.push(result).
//     // console.log(collection)
//     res.write(JSON.stringify(collection));
//     res.end();
// })
// )>

const food = ["rice", "beans", "fish", "moimmoi", "stew"];
const data:any = [];

Array.from ({length: 5}, () => {
  let num = Math.floor(Math.random() * food.length);
  let cost = Math.floor(Math.random() * 1000);
  data.push({item: food[num],price: cost})
});

console.log(data);

const port: number = 5544;
const server: http.Server<
typeof http.IncomingMessage,
typeof http.ServerResponse
> = http.createServer(
  (
    req:http.IncomingMessage,
    res: http.ServerResponse<http.IncomingMessage>
  ) => {
    const {} = req;
    if (method === "GET" && url === "/" {
      res.writeHead(200, {"content-type": "application/json"})
      res.write("we are good...!");
      res.write(JSON.stringify(data));

      console.log(req);
      res.end();
    })
  }
);

server.listen(port, () => {
  
})
