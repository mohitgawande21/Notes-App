import React from 'react'
import { startSaveNotes, onChangeInput, resetNote, startAddNotes } from "../Redux/NoteActions"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

export default function InputNote({inputData,NoteList,dispatch,userID}) {


  return (
    <div data-test='inputNoteCompo' >
      <h3 className='text-center my-3'>Add Your Notes</h3>
      <div className='d-flex justify-content-center flex-wrap my-3'>
        <input type="number" value={inputData.id} className='' onChange={(e) => dispatch(onChangeInput(e))} name="id" placeholder='Id' />
        <input type="text" value={inputData.title} className='mx-2' onChange={(e) => dispatch(onChangeInput(e))} name="title" placeholder="Title" />
        <input type="text" value={inputData.des} className="" onChange={(e) => dispatch(onChangeInput(e))} name="des" placeholder="Description" />
      </div>
      <div className='d-flex justify-content-center flex-wrap my-3'>
        <Link to="/"><button className="btn btn-primary " onClick={() => dispatch(startAddNotes(inputData, NoteList, userID))}>Submit</button></Link>
        <button className="btn btn-primary mx-2" onClick={() => dispatch(resetNote())}>Reset</button>
        <button className="btn btn-primary " onClick={() => dispatch(startSaveNotes(inputData, userID))}>Save Changes</button>
      </div>
    </div >
  )
}

InputNote.propTypes={
  inputData:PropTypes.shape({
    id:PropTypes.number,
    title:PropTypes.string,
    des:PropTypes.string
  })
}

// Home.propTypes = {
//   user: PropTypes.string,
//   id: PropTypes.number,
//   testArray: PropTypes.arrayOf(PropTypes.shape({
//     fName: PropTypes.string,
//     lLast: PropTypes.string,
//     age: PropTypes.number
//   }))
// }