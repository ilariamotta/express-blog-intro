import express from "express";
import posts from "./post.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log("Server del mio blog")
    res.json("Server del mio blog")
})

app.get("/bacheca", (req, res) => {
const totPosts = posts.length
console.log(posts)
res.json({
    totale: totPosts,
    post: posts,
})

})

app.listen(port, () => {
    console.log("Il server è in ascolto sulla porta " + port)
})

