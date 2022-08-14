import React from 'react'
import { Provider } from 'react-redux'
import store from "./components/Redux-Addtodo/Store"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Todo from "./components/Redux-Addtodo/components/Todo"
import PageNotFound from './components/Redux-Addtodo/components/PageNotFound'

export default function AppTodoRdedux() {

    
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<Todo />} />
                    <Route path="/edit/:NoteId/" element={<Todo />} />
                    <Route path="*" element={<PageNotFound/>} />
                </Routes>

            </Router>
        </Provider>
    )
}
