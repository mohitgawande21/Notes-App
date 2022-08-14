import React from 'react'
// import App from "./App"
// import stylesheet from "./components/Photowall/stylesheet.css"
import ReactDOM from 'react-dom/client'
import AppTodoRdedux from './AppTodoRdedux'
// import AppRedux from './AppRedux'
// import AppPhotoWall from "./AppPhotoWall"
const ele = ReactDOM.createRoot(document.getElementById("root"))

ele.render(
    <>
        {/* <App/> */}
        {/* <AppRedux/> */}
        <AppTodoRdedux />
        {/* <AppPhotoWall/> */}
    </>
)
