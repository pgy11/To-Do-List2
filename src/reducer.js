
export const initialState = {
    todos: [],
};

const reducer = (state, action)=>{
    switch(action.type){
        case 'ADD_TO_TODOS':
            return {
                ...state,
                todos: [...state.todos, action.item],
            };
        
        case 'REMOVE_FROM_TODOS':
            const index = state.todos.findIndex(
                (todoItem) => todoItem.id === action.id
            );

            let newTodos = [...state.todos];
            if(index >= 0){
                newTodos.splice(index, 1);

            }else console.warn(`Can't remove product (id: ${action.id}) as it is not in basket`);

            return {
                ...state,
                todos: newTodos
            };
        
        default: return state;
    }
};

export default reducer;