// import React, {useEffect,useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/home';
import Taskform from './components/taskform';
import Account from './components/register';



function App() {
  return (
  <Router>
    <div className='App'>
        <Navbar />
          <div className='content'>
            <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route exact path="/create">
                  <Taskform />
              </Route>
              <Route exact path="/register">
                  <Account />
              </Route>
            </Switch>
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
//   <Home />
//       </div>
//     )
//   }
  
//   export default App