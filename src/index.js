import express from "express";
import cors from "cors";
import router  from "./routes";

const app = express();

app.use(cors());
app.use(router);



app.listen(3001, () => {
    console.log("Servidor on! :D")
});