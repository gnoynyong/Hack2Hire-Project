import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import LoginPage from './microapps/authentication/LoginPage';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase";
import Home from './Home';

function App() {
  const [ user,loading] = useAuthState(auth);
  return (
    <div className="App">
     <Router>
       {!user? (
         <LoginPage/>
       )
       :
       (
        <Routes>
        <Route path="/" element={<Home/>}/>
        </Routes>
       )}
      
     </Router>
    </div>
  );
}

export default App;
