import {Dashboard} from './component/pages/Dashboard'
import { Checkin } from './component/pages/Checkin'
import { Leftbar } from './component/reusable/Leftbar'
import { Login } from './component/homepage/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
    <Router>
      
      <Leftbar />
      <Routes>
      <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/check-in" element={<Checkin />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
