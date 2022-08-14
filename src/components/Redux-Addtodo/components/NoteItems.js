import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { editNote, startLoadingNotes, startDeleteNotes } from '../Redux/NoteActions'
// import { useParams } from "react-router-dom"

import { useNavigate } from "react-router-dom";
export default function NoteItems() {
  const navigatedelete = useNavigate()
  const NoteList = useSelector(state => state.NoteList)
  const dispatch = useDispatch()

  const userID = useSelector((state) => {
    return state.userID

  })
  useEffect(() => {
    dispatch(startLoadingNotes(userID))
  }, [userID])
  // useEffect(() => {
  //   localStorage.setItem("ListfoFNotes", JSON.stringify(NoteList))
  // }, [NoteList])

  // const params=useParams()
  // const NoteId=params.NoteId
  // const EditId=params.EditId
  // console.log(params)
  const FlexBox = {
    display: "flex",
    flexWrap: "wrap",
    boxSizing: "border-box"
  }
  const CardWidth = {
    width: "300px",
    height: "150px",
    overflow: "auto",
    textAlign: "justify",

  }
  return (
    <div style={FlexBox}>
      {NoteList.sort((x, y) => y.id - x.id).map((item) => {
        // return  <ul key={item.id}><li> <strong>Note No. :</strong>{item.id} <br /><strong>Item Title: </strong>{item.title} <br /><strong>Item Description: </strong><div>{item.des}</div></li></ul> : ""
        return (

          <div className="card my-1 mx-3" key={item.id}>
            <div className="card-body ">
              <p className="card-title"><strong>Id: </strong>{item.id}</p>
              <p className="card-title"><strong>Title: </strong>{item.title}</p>
              <strong>Description: </strong>
              <p style={CardWidth} className="card-text">{item.des}</p>
              <div className='my-3 mx-3'>
                <button className="btn mx-3 btn-danger" onClick={() => { navigatedelete("/"); dispatch(startDeleteNotes(item, userID)) }}>Delete</button>
                <Link to={"/edit/" + item.id + "/"}><button className="btn btn-danger" onClick={() => dispatch(editNote(item))}>Edit</button></Link>
              </div>
            </div>
          </div>
        )
      })}

    </div>
  )
}
