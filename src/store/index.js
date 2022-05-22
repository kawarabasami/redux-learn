import {createStore, combineReducers} from 'redux';

const countReducer = (state = {count: 50}, action) => {
    switch (action.type){
        case 'INCREASE_COUNT':
            return {
                count: state.count + 1
            };
        case 'DECREASE_COUNT':
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
}
const postsReducer = (state = {posts: [
    {id: 1, title: 'Reduxについて'},
    {id: 2, title: 'ReduxのHooksについて'}
]}, action) => {
    if (action.type === 'ADD_ARRAY'){
        return {posts: [...state.posts, {id: 3, title: 'test'}]}
    }
    return state
}

const rootReducer = combineReducers({
    countReducer,
    postsReducer
})

const store = createStore(rootReducer);
console.log(store.getState())


export default store;