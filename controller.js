const todos = [{
    id: 0,
    isDone: false,
    name: "Todo Item 1"
}, {
    id: 1,
    isDone: true,
    name: "Todo Item 2"
}]

var addTodo = (todo) => {
    todos = [...todos, todo]
}

var updateTodo = (todo) => {
    const index = todos.map(todo => todo.id).indexOf(todo.id);
    todos[index] = todo;
}

var deleteTodo = (todo) => {

}

var clearCompletedTodo = () => {
    todos = todos.filter(({isDone}) => !isDone)
}

module.exports.todos = todos
module.exports.addTodo = addTodo
module.exports.updateTodo = updateTodo
module.exports.deleteTodo = deleteTodo
module.exports.clearCompletedTodo = clearCompletedTodo