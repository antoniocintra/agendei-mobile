import express from "express";
import cors from "cors";

const app = express();

app.use(cors())

app.get("/doctors", (req,res) => {
    res.status(200).send("Lista de médicos");
});

app.listen(3001, () => {
    console.log("Servidor on! :D")
});