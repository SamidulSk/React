import { createContext, useContext } from "react";

export const TodoContext = createContext({
    // default value of all todos
    todos:[
        {
            id:1,
            todo:"todo msg",
            completed:false,
        }
    ],
    updateTodo:(todo)=>{},
    editTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})




export const useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider