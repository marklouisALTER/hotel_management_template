import React from 'react'
import {Dashboard} from './component/Dashboard'
import { Checkin } from './component/Checkin'
import { Leftbar } from './component/reusable/Leftbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
    <Router>
      <Leftbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/check-in" element={<Checkin />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
