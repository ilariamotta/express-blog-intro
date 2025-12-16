import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log("Server del mio blog")
    res.json("Server del mio blog")
})

app.listen(port, () => {
    console.log("Il server è in ascolto sulla porta " + port)
})

