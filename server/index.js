const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//
app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
})
//create a todo

app.post("/todos", async (req, res) => {
  try {
    
    const { description } = req.body;
    const { admin } = req.body;
    isadmin = admin;
    // console.log(description);
    // console.log(admin);
    const newTodo =  pool.query(
      "INSERT INTO todo (description, admin) VALUES ($1, $2)", [description, admin]
    );
  } catch (err) {
    console.error(err.message);
  }
});

//get all todos

app.get("/todos1", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});
app.get("/todos2", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo where admin = 'user'");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});
//get a todo

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id
    ]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a todo

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );

    res.json("Todo was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a todo

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(3001, () => {
  console.log("server has started on port 3001");
});
