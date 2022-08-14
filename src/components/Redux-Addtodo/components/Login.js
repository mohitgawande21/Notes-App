import React, { useEffect, useLayoutEffect, useState } from 'react'

import { auth } from "../folderdatabase/config"
import { userIdCheck } from "../Redux/NoteActions"
export default function Login({ loginUser,userID,dispatch }) {

    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [loginEmail, setloginEmail] = useState("")
    const [loginPassword, setloginPassword] = useState("")

    const [user, setUser] = useState({})

    useLayoutEffect(() => {
        loginUser(user)
        user&&dispatch(userIdCheck(user.uid))

    })

    useEffect(() => {
        auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser)
        })
        // dispatch(userIdCheck(user.uid))

    }, [])

    const register = async () => {
        try {
            const user1 = await auth.createUserWithEmailAndPassword(registerEmail, registerPassword)
            console.log("user1----", user1)
        }
        catch (error) {
            console.log("this is error", error)
        }
    }
    const login = async () => {
        try {
            const user2 = await auth.signInWithEmailAndPassword(loginEmail, loginPassword)
            console.log("user2----", user2)
        }
        catch (error) {
            console.log("this is error", error)
        }
    }

    const logout = async () => {
        await auth.signOut()
    }

    return (
        <>
            {!user ? <div  className=" my-3 d-flex justify-content-center flex-wrap ">
                <div className='mt-3 mt-5  shadow-lg p-3 mb-5 bg-body rounded my-3  w-75  flex-column d-flex justify-content-center align-items-center'>{!user ? <h4>Register Yourself here</h4> : ""}
                    <div className="my-3 ">
                        <form className=" row g-3 d-flex justify-content-center" onSubmit={(e) => { register(); e.preventDefault() }}>
                            <div className="col-auto">
                                <input type="text" className="form-control" placeholder="usename@gmail.com " onChange={(e) => setRegisterEmail(e.target.value)} />
                            </div>
                            <div className="col-auto">
                                <input type="password" className="form-control" placeholder="Password 1 to 6 chars" onChange={(e) => setRegisterPassword(e.target.value)} />
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary mb-3">Register</button>
                            </div>
                        </form>
                    </div>

                    <h4>if Already have account, please Click on login</h4>
                    <div>  <form className="row g-3 d-flex justify-content-center" onSubmit={(e) => { login(); e.preventDefault() }}>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="usename@gmail.com" onChange={(e) => setloginEmail(e.target.value)} />
                        </div>
                        <div className="col-auto">
                            <input type="password" className="form-control" placeholder="Password" onChange={(e) => setloginPassword(e.target.value)} />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3">Login</button>
                        </div>
                    </form>
                    </div>
                </div>

            </div> : ""}

            {user ?
                <form data-test="LoginCompo"  className='bg-info d-flex justify-content-end align-items-center' onSubmit={(e) => { logout(); e.preventDefault() }}>
                    <div className='mx-3 my-1 flex-grow-1 '> View Your All Notes bellow</div>
                    {/* <div className="d-flex  justify-content-end " > */}
                    <p className='mx-2 my-1 '>Welcome {user && user.email}</p>
                    <button type="submit" className="btn btn-primary my-1">Logout</button>
                    {/* </div> */}
                </form>
                : ""}
        </>
    )
}
