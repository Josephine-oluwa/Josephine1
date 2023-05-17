import http, { Server, ServerResponse } from "http";

interface iDataEntry {
    id: number;
    course: string;
}

interface iData{
    status: number;
    message: string;
    name: string;
    success: boolean;
    data: iDataEntry[] | null;
}

let dataEntry: iDataEntry[] = [
    { id: 1, course: "Node"},
    { id: 2, course: "React"}
];

let data: iData = {
    message: "request not found",
    name: "Request Error",
    status: 404,
    success: false,
    data: null,
}

const port: number = 5505;

const server: http.Server<
typeof http.IncomingMessage,
typeof http.ServerResponse
> = http.createServer(
(req: http.IncomingMessage, res:)
    ) => {
        const {method, url} = req;

        const body: any = [];
        req.on("data", (chunk) => {
            
        })
    }
)

let body: any = [];

req.on("data", (chunk) => {
    body.push(chunk);
    console.log(body);
})

req.on("data", () => {
    // Reading from static ON
    if (method === "GET" && url === "/"){
        data.Entry.push(JSON.parse(body));

        data.message = "writing to Database";
        data.name = "POST request";
        data.status = 201;
        data.success = true;
        data.data = dataEntry;
    }
    // Reading and show erors
    else{
        data.message = "request not found ";
        data.name = "Request Error";
        data.status = 404;
        data.success = false;
        data.data = null;
    }
    res.writeHead(data.status, {
        "content-type": "application/json"
    });
    res.end(JSON.stringify(data))
})
server.listen(port, () =>{
    console.log("")
    console.log("server is up now!");
});``