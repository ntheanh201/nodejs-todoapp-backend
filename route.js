import express from 'express'
import { TodoService } from './controller'
var app = express()
const TodosRoute = express.Router()

TodosRoute.route('/').get((req, res) => {
    console.log("GET all todos")
    // res.status(200).send(TodoService.getTodos())
    res.send(TodoService.getTodos())
})

TodosRoute.route('/:id').get((req, res) => {
    console.log('GET todo by id')
    res.status(200).send(TodoService.getTodo(req.params.id))
})

TodosRoute.route('/').post((req, res) => {
    console.log('POST create new todo')
    res.status(200).send(TodoService.addTodo(req.body.name, req.body.id))
})

TodosRoute.route('/update/:id').put((req, res) => {
    console.log("PUT update todo")
    // console.log(req.body)
    res.status(200).send(TodoService.updateTodo(req.params.id, req.body.todo))
})

TodosRoute.route('/completed').delete((req, res) => {
    console.log("DELETE completed todo");
    res.status(200).send(TodoService.clearCompletedTodo())
})

TodosRoute.route('/:id').delete((req, res) => {
    console.log("DELETE todo");
    res.status(200).send(TodoService.deleteTodo(req.params.id))
})

TodosRoute.route('/toggleAll').put((req, res) => {
    console.log("PUT toggle all todos")
    // console.log(req.body)
    res.status(200).send(TodoService.toggleAllTodo(req.body.toggleStatus))
})

export default TodosRoute