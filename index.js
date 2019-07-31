import express from 'express'
import {TodoService} from './controller'
import {route} from './route'

const app = express()
const port = 8123

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

//nodemon -x npm start
//npm run development

app.get('/todos', (req, res) => {
  console.log("GET request all todos")
  res.send(TodoService.getTodos())
})

app.get('/todos/:id', (req, res) => {
  console.log("GET todo by id")
  res.send(TodoService.getTodo(req.params.id))
})

app.post('/todos', (req, res) => {
  console.log("POST create new todo")
  console.log(req.body)
  res.send(TodoService.addTodo(req.body.name))
})

app.put('/todos/:id', (req, res) => {
  console.log("PUT update todo")
  console.log(req.body.name)
  res.send(TodoService.updateTodo(req.params.id, req.body))
})

app.delete('/todos/completed', (req, res) => {
  console.log("DELETE completed todo");
  res.send(TodoService.clearCompletedTodo())
})

app.delete('/todos/:id', (req, res) => {
  console.log("DELETE todo")
  res.send(TodoService.deleteTodo(req.params.id))
})

app.listen(port, () => console.log(`App listening on port ${port}!`))