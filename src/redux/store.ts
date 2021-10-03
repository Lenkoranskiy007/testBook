import {applyMiddleware, combineReducers, compose, createStore }  from 'redux'
import {BooksStateType,booksReducer} from './reducers/books'
import thunk from 'redux-thunk'



export type AppStateType = {
  booksReducer: BooksStateType
}



const rootReducers  = combineReducers<AppStateType>({
  booksReducer
})

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store  = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)))
//@ts-ignore
window.__store__  = store

export default store
