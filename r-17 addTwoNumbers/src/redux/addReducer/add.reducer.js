import {FETCH_NUMBERS, FETCH_ANS} from './add.actionTypes'

export const ADD_KEY = 'addStore'

let initialState = {
    num1: '',
    num2: '',
    ans: ''
}

let addReducer = (state = initialState, action) =>{
    let {type, payload} = action
    switch(type){
        case FETCH_NUMBERS:
            return{
                ...state,
                ...payload
            }

            case FETCH_ANS:
                return{
                    ...state,
                    ...payload,
                   ans: parseFloat((+state.num1) + parseFloat(+state.num2)).toFixed(2)
                }

               


                default: return state
    }

}

export {addReducer}