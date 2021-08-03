import {addReducer, ADD_KEY} from './addReducer/add.reducer' 
import {combineReducers} from 'redux'

let rootReducer = combineReducers({
    [ADD_KEY] : addReducer
})

export {rootReducer}