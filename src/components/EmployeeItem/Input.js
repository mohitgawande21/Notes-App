import React, { memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { saveEmployeefromDatabase } from "../../Redux/ActionCreator"
 function Input({ Employee }) {
    const dispatch = useDispatch()
    const handleCheckBox = useCallback((e) => {
        e.preventDefault();
        if (e.target.checked) {
            dispatch(saveEmployeefromDatabase({ ...Employee, Select: true }))
        }
        else {
            dispatch(saveEmployeefromDatabase({ ...Employee, Select: false }))
        }
    },[])
    return (
        <input checked={Employee.Select} type="checkbox" className='mx-3' onChange={handleCheckBox}  />
    )
} 
export default Input