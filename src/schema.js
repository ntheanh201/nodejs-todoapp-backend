import { gql } from 'apollo-server-express'

export const schema = gql`
    type Query {
        todos: [Todo]
        todo(id: String!): Todo
        toggleStatus: Boolean!
    }    

    type Todo {
        id: String!
        isDone: Boolean!
        name: String!
    }

    input TodoInput {
        id: String!
        isDone: Boolean
        name: String
    }

    input Toggle {
        toggleStatus: Boolean!
    }

    type Mutation {
        addTodo(input: TodoInput): [Todo]
        updateTodo(input: TodoInput): [Todo]
        deleteTodo(id: String!): [Todo]
        toggleAllTodos(toggleStatus: Boolean!): [Todo]
        clearCompletedTodos(completed: String!): [Todo]
    }

`;