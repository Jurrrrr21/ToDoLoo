import express from "express";
import pg from "pg";

const app = express();
const port = "3000";

app.use(express.urlencoded({extended : true}));
app.use(express.static("public"));

let toDoList = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

app.get("/", (req, res) => {
    const view = req.query.view ?? 'today';
    /*
    IF they query today or week or month, then we query the database 
    that contains the list of tasks for that query, e.g.:
    toDoList = db.query("SELECT * FROM week") if week is what has been selected
    */
    res.render("index.ejs", {
        view,
        body: '',
        listOfTasks: toDoList,
    })
})

app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
})