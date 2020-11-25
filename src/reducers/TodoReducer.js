import { v4 as uuid } from 'uuid';

export const TodoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { todo: action.todo.todoString, id: uuid() }];

        case 'REMOVE_TODO':
            return state.filter((todo) => todo.id !== action.id);

        case 'CLEAR_TODOS':
            return [];
        default:
            return state;
    }
};
