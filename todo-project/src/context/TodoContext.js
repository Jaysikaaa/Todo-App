import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
todos: [
    {
        id: 1,
        todo : 'todo msg',
    }
],
addTodo: (todo) => {},
updatedTodo: (todo, id) => {},
deleteTodo: (id) => {},

})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}
