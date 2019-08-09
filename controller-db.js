import mysql from 'mysql'

class Todo {
    constructor() {
        this.connector = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234theanh',
            database: 'todos'
        })
        this.table = 'todosList'
        this.todos = this.getTodos()
    }

    getTodos() {
        const sql = `SELECT * FROM ${this.table}`;
        this.connector.query(sql, (err, results) => {

            const resultArray = Object.values(JSON.parse(JSON.stringify(results)))
            this.todos = resultArray.map(({ id, isDone, name }) => ({
                id,
                isDone: isDone == 0 ? false : true,
                name
            }))
        })
        return this.todos
    }

    getTodo(todoId) {
        return this.todos.find(({ id }) => id === todoId)
    }

    addTodo(name, id) {
        this.todos = [...this.todos, { id, isDone: false, name }]

        const sql = `INSERT INTO ${this.table} (id, isDone, name) VALUES ('${id}', 0, '${name}')`
        this.connector.query(sql, (err, results) => {
            console.log('Insert data into DB successfully')
        })
    }

    updateTodo(todoId, newTodo) {
        const index = this.todos.map(({ id }) => id).indexOf(todoId);
        this.todos[index].name = newTodo.name
        this.todos[index].isDone = newTodo.isDone
        let isDone = newTodo.isDone === true ? 1 : 0
        const sql = `UPDATE ${this.table} SET isDone = '${isDone}', name = '${newTodo.name}' WHERE id = '${todoId}'`
        this.connector.query(sql, (err, results) => {
            console.log(newTodo.name + isDone)
            console.log('Update data in DB successfully')
        })
    }

    deleteTodo(todoId) {
        const index = this.todos.map(({ id }) => id).indexOf(todoId);
        this.todos.splice(index, 1);

        const sql = `DELETE FROM ${this.table} WHERE id = '${todoId}`
        this.connector.query(sql, (err, results) => {
            console.log('Delete Todo in DB successfully')
        })
    }

    clearCompletedTodo() {
        this.todos = this.todos.filter(({ isDone }) => !isDone)

        const sql = `DELETE FROM ${this.table} WHERE isDone = 1`
        this.connector.query(sql, (err, results) => {
            console.log('Delete completed Todo in DB successfully')
        })
    }

    toggleAllTodo(toggleStatus) {
        this.todos = this.todos.map(({ id, name }) => ({
            id,
            isDone: !toggleStatus,
            name
        }))

        const sql = `UPDATE ${this.table} SET isDone = '${!toggleStatus === false ? 0 : 1}'`
        this.connector.query(sql, (err, results) => {
            console.log('Toggle all todos')
        })
    }

}
export const TodoService = new Todo()
