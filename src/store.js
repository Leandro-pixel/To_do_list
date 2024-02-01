//esse arquivo é pra montar o lugar que vai guardas as coisas e aplicar os estados em qualquer lugar do nosso app
//seria algo parecido com o contextAPI

import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";

export const store = configureStore({ //configurando o store
    reducer: {//passando um objeto com todos os reducers
        todos: todoReducer,
    },
});

