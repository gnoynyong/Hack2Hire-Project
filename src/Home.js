import { signOut } from '@firebase/auth';
import React from 'react'
import {auth} from "./firebase";
import "./Home.css"

function Home() {
    
    const logout = (e)=>{
        e.preventDefault();
        signOut(auth).catch((err)=>{
            alert(err.message)
        })
    }
    return (
        <div className="home">
            <h1>Home</h1>
            <button onClick={logout} className="logoutbtn">Sign Out</button>
        </div>
    )
}

export default Home
