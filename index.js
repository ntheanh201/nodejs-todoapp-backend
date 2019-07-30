const express = require('express')
const app = express()
const port = 8123

// var route = require('./route')
var controller = require('./controller')
var bodyParser = require("body-parser");
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("Hello World")
})

app.get('/todos', (req, res) => {
  console.log("GET Request")
  res.send(controller.todos)
})

app.get('/todos/:todosId', (req, res) => {
  console.log("GET Request")
  res.send(controller.todos[req.params.todosId])
})

app.post('/todos', (req, res) => {
  console.log("POST Request")
  res.send(controller.todos)
})

app.post('/addTodo', (req, res) => {
  console.log("POST Add todo")
  res.send(controller.addTodo(req.body.todo))
})

app.post('/updateTodos', (req, res) => {
  console.log("POST Update todo")
  res.send(controller.updateTodo(req.body.todo))
})

app.post('./clearCompletedTodo', (req, res) => {
  console.log("POST Clear completed");
  res.send(controller.clearCompletedTodo(req.body.todos))
})

app.listen(port, () => console.log(`App listening on port ${port}!`))