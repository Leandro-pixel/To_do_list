import {createSlice} from "@reduxjs/toolkit"

export const todoSlice = createSlice({ //aqui estamos criando um objeto, nomeamos, estados iniciais e depois as funções
    name: "todos",
    initialState: {
    list: [],
    filter: "all",
    },
    reducers: {
        addTodo: (state, action) => {
            state.list.push({
                id: new Date().toISOString(),
                text: action.payload,
                completed: false,
            });
        },
        toggleTodo: (state, action) => { //para dizer se a tarefa esta completa ou não
            const todo = state.list.find((todo) => todo.id === action.payload)

            if(todo) {
                todo.completed = !todo.completed;
            }
        },

        removeTodo: (state, action)  => {
            state.list = state.list.filter((todo) => todo.id !== action.payload)
        },
        filtersTodos: (state, action) => {
            state.filter = action.payload;
        },

    },
});

export const {addTodo, toggleTodo, removeTodo, filtersTodos} = todoSlice.actions;

export default todoSlice.reducer;