import React from 'react'
import './loginpage.css';
import image from '../../img/loginpage.jpg';
import { useState } from 'react';
import {auth,provider} from "../../firebase"
import {signInWithPopup} from "firebase/auth"
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'

function LoginPage() {
    // const [email,setEmail] = useState('');
    // const [password,setPassword] = useState('');
    // const [
    //     useCreateUserWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    //     ] = useCreateUserWithEmailAndPassword(auth);
    const signIn = (e)=>{
        e.preventDefault();
        signInWithPopup(auth,provider).catch((err)=>{
            alert(err.message);
        })
    };
    return (
        <div className="login">
            <div className="imgbox">
                <img src={image}/>
                <div className="banner">
                <h1>InstaMeet</h1>
                <p>Create an Invite-Only Place Where You Belong</p>
                </div>
            </div>
            <div className="loginbox">  
            <div className="login_card">
                <form className="loginform">
                    <h1>Create an Account</h1>
                    <div className="formcontainer">
                    <div className="formdiv">
                    <p>Email</p>
                    <input type="text" className="iemail"></input>
                    </div>
                    <div className="formdiv">
                    <p>Username</p>
                    <input type="text" className="iname"></input>
                    </div>
                    <div className="formdiv">
                    <p>Password</p>
                    <input type="password" className="ipassword"></input>
                    </div>
                   <button type="submit" className="submitbtn">Continue</button>
                   <p className="or">or</p>
                    </div>
                    <button className="googlebtn" onClick={signIn}>Sign in With Google</button>
                    <p className="tologin">Already has an account? <a href="#">Login</a></p>
                </form>
            </div>
            </div>  
            
        </div>
    )
}

export default LoginPage
