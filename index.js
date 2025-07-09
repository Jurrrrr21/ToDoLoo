import express from "express";
import pg from "pg";

const app = express();
const port = "3000";

app.use(express.urlencoded({extended : true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    const view = req.query.view ?? 'today';
    res.render("index.ejs", {
        view,
        body: '',
        title: 'ToDoLoo',
    })
})

app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
})