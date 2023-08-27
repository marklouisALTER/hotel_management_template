import {Dashboard} from './component/pages/Dashboard'
import { Checkin } from './component/pages/Checkin'
import { Leftbar } from './component/reusable/Leftbar'
import { Login } from './component/homepage/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useAuth } from './component/Auth/Auth'
import { GuessInformation } from './component/layout/guessInformation'
import Billing from './component/layout/billing'

import './App.css'

function App() {
  const auth = useAuth();
  return (
    <>
    <Router>
    <Leftbar />
    {/* {auth.isAuthenticated() && <Leftbar />} */}
      <Routes>
      <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/check-in" element={<Checkin />}/>
        <Route path="/guess-information/:roomId" element={<GuessInformation />} />
        <Route path="/billing" element={<Billing/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
