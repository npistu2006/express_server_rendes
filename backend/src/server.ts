import express from "express";
import cors from "cors";
import * as path from "node:path"
import * as url from "node:url"
import router from "./router.js";

const PORT = 8000;
const HOST = "localhost";

// Server indítása
const server = express();

//const __filename = url.fileURLToPath(import.meta.url)
//console.log("asd ", import.meta.dirname);
//console.log("asd2 ", __filename);
//console.log("knev: ", path.dirname(__filename));
const __dirname = import.meta.dirname
console.log("Dirname: ",__dirname);

const staticFilesDir = path.join(__dirname, "..", "dist");
console.log("Dist könyvtár: ", staticFilesDir);

server.use(cors());
server.use(express.json());           
server.use(express.static(staticFilesDir));

server.use("/api", router);


server.listen(PORT, ()=>{
    console.log(`The server is running at http://${HOST}:${PORT}`);
})
