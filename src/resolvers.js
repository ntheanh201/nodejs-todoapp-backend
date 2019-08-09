
let todos = [{
    id: 0,
    isDone: false,
    name: 'Todo Item 1'
}, {
    id: 1,
    isDone: true,
    name: 'Todos Item 2'
}]
let toggleStatus = false

export const resolvers = {
    Query: {
        todos: () => {
            return todos
        },
        todo: (root, { id }) => {
            return todos.find((todo) => todo.id == id)
        },
        toggleStatus: () => {
            return toggleStatus
        }
    },
    Mutation: {
        addTodo: (root, { input }) => {
            todos = [...todos, input]
            return todos
        },
        updateTodo: (root, { input }) => {
            const index = todos.map(({ id }) => input.id).indexOf(input.id);
            let name = todos[index].name
            let isDone = todos[index].isDone
            todos[index].name = name === 'undefined' ? name : input.name
            todos[index].isDone = isDone === 'undefined' ? isDone : input.isDone
            return todos
        },
        deleteTodo: (root, { id }) => {
            const index = todos.map(({ id }) => id).indexOf(id);
            todos.splice(index, 1);
            return todos
        },
        toggleAllTodos: (root, { toggleStatus }) => {
            todos = todos.map(({ id, name }) => ({
                id,
                isDone: !toggleStatus,
                name
            }))
            toggleStatus = !toggleStatus
            return todos
        },
    }
};