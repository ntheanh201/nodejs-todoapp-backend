class Todo {
    constructor(){
        this.todos = [{
            id: '0',
            isDone: false,
            name: "Todo Item 1"
        }, {
            id: '1',
            isDone: true,
            name: "Todo Item 2"
        }],
        this.toggleStatus = false
    }

    getTodos (){ 
        return this.todos
    }

    getTodo(todoId) {
        return this.todos.find(({id}) => id === todoId)
    }

    addTodo(name, id) {
        this.todos = [...this.todos, {id, isDone: false, name}]
    }
    
    updateTodo(todoId, newTodo) {
        const index = this.todos.map(({id}) => id).indexOf(todoId);
        let oldName = this.todos[index].name
        let oldIsDone = this.todos[index].isDone
        this.todos[index].name = typeof newTodo.name !== "undefined" ? newTodo.name : oldName
        this.todos[index].isDone = typeof newTodo.isDone !== 'undefined' ? newTodo.isDone : oldIsDone
    }
    
    deleteTodo(todoId) {
        const index = this.todos.map(({id}) => id).indexOf(todoId);
        this.todos.splice(index, 1);
    }
    
    clearCompletedTodo () {
        this.todos = this.todos.filter(({isDone}) => !isDone)
    }
    
    toggleAllTodo () {
        this.todos = this.todos.map(({id, name}) => ({
            id,
            isDone: !this.toggleStatus,
            name
        }))
        this.toggleStatus = !this.toggleStatus
    }

}
export const TodoService =  new Todo()
