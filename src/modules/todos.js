const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const changeInput = input => ({
    type: CHANGE_INPUT,
    input
});

let id = 3;
export const insert = text => ({
    type:INSERT,
    todo: {
        id: id++,
        text,
        done: false
    }
});

export const toggle = id => ({
    type: TOGGLE,
    id
});

export const remove = id => ({
    type: REMOVE,
    id
});

const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '창균이에 대해 알아보기',
            done: true
        },
        {
            id: 2,
            text: '창균이 눈나가 사랑해',
            done: false
        }
    ]
};

function todos(state = initialState, action){
    switch(action.type){
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.input
            };
        case INSERT:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.id ? {...todo, done: !todo.done} : todo
                    )
            };
        case REMOVE:
            return{
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            };
            default:
                return state;
    }
}

export default todos;