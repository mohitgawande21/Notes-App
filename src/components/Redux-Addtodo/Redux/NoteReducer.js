

import { LOAD_NOTES, ADD_NOTE, RESET_NOTE, EDIT_NOTE, ONCHANGE_NOTE, DELETE_NOTE, SAVE_NOTE ,USER_ID} from "./NoteActionTypes";

// const ListOfNotes = localStorage.getItem("ListfFNotes")
// ListOfNotes ? JSON.parse(ListOfNotes) :
const initalState = {
    inputData: {
        id: "",
        title: "",
        des: ""
    },
    NoteList: [],
    editedData: {
        id: "",
        title: "",
        des: ""
    },
    userID:""
}
export const NoteReducer = (state = initalState, action) => {
    
    switch (action.type) {
        case LOAD_NOTES:
            return { ...state, NoteList: action.payload }

        case ADD_NOTE:
            return { ...state, NoteList: [...state.NoteList, action.payload] }

        case ONCHANGE_NOTE:
            return {
                ...state, inputData: { ...state.inputData, [action.payload.target.name]: action.payload.target.value }
            }

        case DELETE_NOTE:
            
            const DeletedNote = state.NoteList.filter((note) => {
                return note.id !== action.payload.id
            })
            return {
                ...state, NoteList: DeletedNote
            }
            
        case EDIT_NOTE:
            return {
                ...state, editedData: action.payload, inputData: action.payload
            }

        case SAVE_NOTE:
            const EditedNote = state.NoteList.map((note) => {
                if (note.id === action.payload.id) {
                    note = state.inputData
                }
                return note
            })
            return {
                ...state, NoteList: EditedNote
            }

        case RESET_NOTE:
            return {
                ...state, inputData: {
                    id: "",
                    title: "",
                    des: ""
                }
            }
            case USER_ID:
                return {
                    ...state, userID: action.payload
                }

        default: return state
    }
}