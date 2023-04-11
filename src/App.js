import React, {useEffect,useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/home';
import Taskform from './components/taskform';
import Register from './components/register';



function App() {
  return (
  <Router>
    <div className='App'>
        <Navbar />
          <div className='content'>
            <Routes>

              <Route path="/" element={<Home />}></Route>
              <Route path="/create" element={<Taskform />}></Route>
              <Route path="/register" element={<Register />}></Route>

            </Routes>
          </div>
    </div>
    </Router>
  )
}

export default App

// function App() {
//   const [backendData, setBackendData] = useState([{}])
//   useEffect(() => {
//     fetch("/api").then(
//         response => response.json()
//     ).then(
//       data => {
//           setBackendData(data)
//       }
//     )
//   }, [])
//     return (
//       <div>
      
//   {( typeof backendData.users === 'undefined')?(
//     <p>Loading...</p>
//   ): (
//      backendData.users.map((user,i) => (
//       <p key={i}>{user}</p>
//      ))
//   )}
//   <Navbar />
//   <Taskform />
//   <Account />
//       </div>
//     )
//   }
  
//   export default App