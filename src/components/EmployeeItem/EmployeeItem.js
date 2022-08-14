import React, { memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { deleteEmployeefromDatabase } from '../../Redux/ActionCreator'
import { Link } from 'react-router-dom'
import Input from './Input'
import EditEmployee from '../Modal/EditEmployee/EditEmployee'
function EmployeeItem({ Employee }) {

    const dispatch = useDispatch()

    const handleDeleteEmployee = useCallback((Id) => {
        dispatch(deleteEmployeefromDatabase(Id))
    }, [])
    const EmployeeItemStyle = {

        width: 'auto',

        // margin: 'auto'
    }
    const bg_color = {
        backgroundColor: Employee.Select ? "#c8c8d5" : "#f8f9fa"
    }

    return (
        <>
            <div style={bg_color} className='border-top flex-wrap border-secondary p-2 d-flex  align-items-center justify-content-between'>
                <div><Input Employee={Employee} /></div>
                <div style={EmployeeItemStyle} className=''> {Employee.Name}</div>
                <div style={EmployeeItemStyle} className=''> {Employee.Email}</div>
                <div style={EmployeeItemStyle} className=''> {Employee.Address}</div>
                <div style={EmployeeItemStyle} className=''> {Employee.Phone}</div>
                <div className=''>
                    <Link to={`/edit/${Employee.Id}`}>
                        <button className="btn btn-outline-warning border-light mx-1" > <i className="fa-solid fa-pen" /></button>
                    </Link>
                    <button className="btn btn-outline-danger border-light" onClick={() => handleDeleteEmployee(Employee.Id)}><i className="fa-solid fa-trash"></i></button>
                </div>
            </div>

        </>
    )
}
export default EmployeeItem