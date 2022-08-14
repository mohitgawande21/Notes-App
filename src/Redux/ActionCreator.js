import { ADD_EMPLOYEE, NUMBER,ALL_CHECKBOX, LOAD_EMPLOYEE, DELETE_EMPLOYEE, EDIT_EMPLOYEE, SAVE_EMPLOYEE, DELETE_EMPLOYEES } from "./ActionTypes"
import { database } from "../folderdatabase/config"
export const addEmployee = (inpuDateAdd) => {
    return {
        type: ADD_EMPLOYEE,
        payload: inpuDateAdd
    }
}

export const deleteEmployee = (Id) => {
    return {
        type: DELETE_EMPLOYEE,
        payload: Id
    }
}

export const editEmployee = (Employee) => {
    return {
        type: EDIT_EMPLOYEE,
        payload: Employee
    }
}

export const saveEmployee = (inpuDataEdit) => {
    return {
        type: SAVE_EMPLOYEE,
        payload: inpuDataEdit
    }
}

export const deleteEmployees = (checkItem) => {
    return {
        type: DELETE_EMPLOYEES,
        payload: checkItem
    }
}


export const arrNo = (index) => {
    return {
        type: NUMBER,
        payload: index
    }
}

export const loadEmployee = (Employee_List) => {
    return {
        type: LOAD_EMPLOYEE,
        payload: Employee_List
    }
}
export const AllcheckedCheckbox=(Allchecked)=>{
    return {
        type:ALL_CHECKBOX,
        payload:Allchecked
    }
}
export const addEmployeeFromDatabase = (inputdata, Employee_List) => {
    return (dispatch) => {
        database.ref("Employee_List").update({ [inputdata.Id]: inputdata })
            .then(() => {
                dispatch(addEmployee(inputdata))
            })
            .catch((err) => console.log(err))
    }

}

export const loadEmployeefromDatabase = () => {
    return (dispatch) => {
        database.ref('Employee_List').once("value").then((snapshot) => {
            let Employee_List = []
            snapshot.forEach((Employee) => {
                Employee_List.push(Employee.val())
            })
            dispatch(loadEmployee(Employee_List))
        })
    }
}

export const deleteEmployeefromDatabase = (Id) => {
    return (dispatch) => {
        database.ref(`Employee_List/${Id}`).remove().then(() => {
            dispatch(deleteEmployee(Id))
        })
    }
}

export const deleteEmployeesfromDatabase = (Employee_List) => {
    console.log("checkItem", Employee_List)
    return (dispatch) => {
        Employee_List.map((item) => {
            if (item.Select === true) {
                database.ref(`Employee_List/${item.Id}`).remove().then(() => {
                })
            }
            return 0

        })
        dispatch(deleteEmployees(Employee_List))
    }
}

export const saveEmployeefromDatabase = (inpuDataEdit) => {
    return (dispatch) => {
        database.ref(`Employee_List/${inpuDataEdit.Id}`).update(inpuDataEdit).then(() => {
            dispatch(saveEmployee(inpuDataEdit))
        })
    }
}