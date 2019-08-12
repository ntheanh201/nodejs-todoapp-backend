
let todos = []
let toggleStatus = false

export const resolvers = {
    Query: {
        todos: (root, { filter }) => {
            switch(filter){
                case 'showAll': return todos
                case 'showActive': return todos.filter(({isDone}) => !isDone)
                case 'showCompleted': return todos.filter(({isDone}) => isDone)
            }
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
            // console.log(input)
            const index = todos.map(({id}) => id).indexOf(input.id);
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
        clearCompletedTodos: (root, {completed}) => {
            todos = todos.filter(({isDone}) => !isDone)
        }
    }
};