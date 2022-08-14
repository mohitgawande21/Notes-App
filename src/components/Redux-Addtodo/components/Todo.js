import { lazy, Suspense, useState } from 'react'
import InputNote from './InputNote'
import Footer from "./Footer"
import Spinner from "./Spinner"
import Login from './Login'
import { Provider } from 'react-redux'
import store from "../Store"
import { useDispatch, useSelector } from 'react-redux'
// const NoteItems = () => {
//     setTimeout(lazy=() => import("./NoteItems"), 2000)
// }

const NoteItems = lazy(async () => {
    return await import("./NoteItems")
})
export default function Todo() {
    const userID = useSelector((state) => {
        return state.useID
    
    })
    const dispatch = useDispatch()
    const [login, setLogin] = useState(false)
    const User = (user) => {
        user ? (setLogin(true)) : (setLogin(false))

        console.log("login value", login)
    }
    const inputData = useSelector(state => {
        return state.inputData
      })
      const NoteList = useSelector(state => {
        return state.NoteList
      })
    return (
        <>
            <Provider store={store}>
                <Login loginUser={User} userID={userID} dispatch={dispatch}/>
            </Provider>
            {login ? <>
                <InputNote inputData={inputData} NoteList={NoteList} dispatch={dispatch} userID={userID}/>
                <Suspense fallback={<Spinner />}>
                    <NoteItems />
                </Suspense>
                <Footer />
            </> : ""}
        </>
    )
}

