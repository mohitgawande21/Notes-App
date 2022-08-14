import { ADD_NOTE, LOAD_NOTES,USER_ID } from "./NoteActionTypes"
import { DELETE_NOTE } from "./NoteActionTypes"
import { EDIT_NOTE } from "./NoteActionTypes"
import { SAVE_NOTE } from "./NoteActionTypes"
import { ONCHANGE_NOTE, RESET_NOTE } from "./NoteActionTypes"
import { database } from "../folderdatabase/config"

export const onChangeInput = (e) => {
    return {
        type: ONCHANGE_NOTE,
        payload: e
    }
}
export const addNote = (inputData) => {
    return {
        type: ADD_NOTE,
        payload: inputData
    }
}

export const deleteNote = (item) => {
    return {
        type: DELETE_NOTE,
        payload: item
    }
}
export const editNote = (item) => {
    return {
        type: EDIT_NOTE,
        payload: item
    }
}
export const saveNote = (inputData) => {
    return {
        type: SAVE_NOTE,
        payload: inputData
    }
}

export const resetNote = () => {
    return {
        type: RESET_NOTE
    }
}
export function laodNotes(NoteList) {
    return {
        type: LOAD_NOTES,
        payload: NoteList
    }
}

export function userIdCheck(userId){
    return {
        type: USER_ID,
        payload: userId
    }
}

export const startAddNotes = (inputdata, NoteList,userID) => {
    // console.log("startAddNotes userID",userID)
    return (dispatch) => {
        return database.ref(`${userID}`).update({ [inputdata.id]: inputdata }).then(() => {
            let valid = false
            NoteList.map((Note) => {
                if (Note.id === inputdata.id) {
                    alert("You can not enter same Id Note")
                    valid = true
                }
                return 0
            })
            !valid && dispatch(addNote(inputdata))
        }).catch((error) => {
            console.log(error)
        })
    }
}
// let userId="mohit@gmail.com"
export function startLoadingNotes(userID) {
    // console.log("startLoadingNotes userID",userID)
    return (dispatch) => {
        return database.ref(`${userID}`).once("value").then((snapshot) => {
            let NoteList = []
            snapshot.forEach((chilSnapshot) => {
                NoteList.push(chilSnapshot.val())
            })
            console.log("loaded notes1",NoteList)
            dispatch(laodNotes(NoteList))
            console.log("loaded notes2",NoteList)
        })
    }
}

export function startDeleteNotes(item,userID) {
    // console.log("startDeleteNotes userID",userID)
    return (dispatch) => {
        let checkDelete = window.confirm(`Do want comfirm to delete Note Id:${item.id}`)
        return checkDelete && database.ref(`${userID}/${item.id}`).remove().then(() => {
            dispatch(deleteNote(item))
        })
    }
}

export function startSaveNotes(inputData,userID) {
    // console.log("startSaveNotes userID",userID)
    return (dispatch) => {
        return database.ref(`${userID}/${inputData.id}`).update(inputData).then(() => {
            dispatch(saveNote(inputData))
        })
    }
}

