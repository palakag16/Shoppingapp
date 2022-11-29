import React from 'react'
import Login from "./Pages/Login"
import "./App.css"
import Productlist from './Pages/Productlist';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Productlist/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App