 import { useState } from 'react'
import Login from './pages/login'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'
import DashBoard from './pages/DashBoard'
import Counter from './pages/Counter'
import DigitalWatch from './pages/DigitalWatch'

function App() {
 
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };


    const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };





  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login handleLogin={handleLogin} isAuthenticated={isAuthenticated}/>} />

           
           <Route path='/dashboard' element={<ProtectedRoute isAuthenticated={isAuthenticated}><DashBoard handleLogout={handleLogout}/></ProtectedRoute>}>
              <Route path='digital-watch' element={<DigitalWatch/>} />
               <Route path='counter' element={<Counter/>} />

           
           </Route>
        
           
           <Route path='*' element={<div><h1>404 Page not Found</h1></div>} />
           


        </Routes>
      </Router>
    </>
  )
}

export default App
