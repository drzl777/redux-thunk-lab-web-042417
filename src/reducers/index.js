import {combineReducers} from 'redux'
import {catsReducer} from './cats_reducer'

export const rootReducer = combineReducers({
  cats: catsReducer
})
