import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{ id: 1, text: 'Hi there' }]
}

// function sayHi() {
//     console.log("welcome to my react journey!");
// }

export const todoSlice = createSlice({
    name: 'todo', 
    initialState, 
    reducers: {
       // test1: sayHi,
        
        addTodo: (state,action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload //user input
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        }
    }
})

export const { addTodo,removeTodo } = todoSlice.actions
export default todoSlice.reducer