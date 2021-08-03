import {FETCH_NUMBERS, FETCH_ANS} from './add.actionTypes'

let fetchNumbers = (number) =>{
    return{
        type: FETCH_NUMBERS,
        payload: number
    }
}

let fetchAns = (number) =>{
    return{
        type: FETCH_ANS,
        payload: number
    }
}



export {fetchNumbers, fetchAns}