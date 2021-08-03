import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchNumbers, fetchAns } from '../../redux/addReducer/add.actions'
import { ADD_KEY } from '../../redux/addReducer/add.reducer'

const Add = () => {
    let dispatch = useDispatch()


    let [number, setNumber] = useState({
        num1: '',
        num2: '',
        ans: ''
    })

    // handle change
    let handleChange = (event) =>{
        setNumber({
            ...number,
            [event.target.name] : event.target.value
        })
    }

    // handle submit
    let handleSubmit = (event) =>{
        event.preventDefault()
        dispatch(fetchNumbers(number))
        dispatch(fetchAns(number))

    }

    // view add
    let viewAdd = useSelector((state) =>{
        return state[ADD_KEY]

    })

    // handleReset
    let handleReset = () =>{
      setNumber({
          ...number,
          num1: '',
          num2: '',
          ans: ''
          
      })
    }


    return (           
                <React.Fragment>
                    {/* <pre>{JSON.stringify(number)}</pre> */}
                   <div className='row mt-5'>
                       <div className='col-md-4'></div>
                       <div className='col-md-4'>
                           <div className='card text-center'>
                               <div className='card-header'>
                                   <h2 className='font-weight-bold'>
                                       ADD TWO NUMBERS
                                   </h2>
                               </div>

                               <div className='card-body'>
                                   <form onSubmit={handleSubmit} className='form-inline d-flex justify-content-end '>
                                  
                                     <div className='form-group mb-4 font-weight-bold '>
                                     <label for="num1">First Number</label>
                                         <input
                                         name='num1'
                                         value={number.num1}
                                         onChange={handleChange}
                                         type='number'
                                         placeholder='0'
                                         className='form-control ml-3'
                                        //  id='num1'
                                         />
                                     </div>

                                     <div className='form-group mb-4 font-weight-bold'>
                                     <label for="num2">Second Number</label>
                                        <input
                                          name='num2'
                                          value={number.num2}
                                          onChange={handleChange}
                                         type='number'
                                         placeholder='0'
                                         className='form-control  ml-3'
                                        //  id='num2'
                                         />
                                     </div>

                                     <div className='form-group mb-4 font-weight-bold'>
                                     <label for="ans">Answer</label>
                                        <input
                                          name='ans'
                                          value={viewAdd.ans}
                                          onChange={handleChange}
                                         type='number'
                                         className='form-control  ml-3'
                                        //  id="disabledInput" 
                                        //  id='ans'
                                         disabled
                                         />
                                     </div>
                                     

                                     <div className='mb-2'>

                                         <button 
                                         className='btn btn-secondary btn-sm mr-4 font-weight-bold'
                                          onClick={handleReset}
                                          >Reset</button>
                                                                               
                                        <button 
                                        type="submit" 
                                        class="btn btn-sm btn-success font-weight-bold"
                                        >ADD</button>                                

                                       
                                     </div>

                                   </form>
                               </div>
                              
                           </div>
                       </div>
                       <div className='col-md-4'></div>
                   </div>
                </React.Fragment>           
        
    )
}

export default Add
