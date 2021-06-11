import React, { useState, useContext, useEffect } from 'react';
import { userDetails } from './userContext';
import { useHistory } from "react-router-dom";


 function Landing(){
     const [val,setVal]=useContext(userDetails);
     let history = useHistory();
    const [loginDetails,setLoginDetails]=useState({
        "name":"",
        "password":"",
        "email":""
    })
    const [loginState,setLoginState]=useState(false)
    const handleChange=(e)=>{
        setLoginDetails({
            ...loginDetails,
        [e.target.name]:e.target.value});
                
    }
    useEffect(()=>{
        const user = localStorage.getItem("email");
        if(user){
            history.push('/dashboard');
        }
    },[])
    const handleCheck=()=>{
        if(loginDetails.email === "xyz@gmail.com" && loginDetails.password === "qwerty12"){
            localStorage.setItem("email",loginDetails.email)
            setVal(loginDetails.email)
            history.push('/dashboard');
        }
    }
    const createAccount=()=>{

    }


     return (
        <>
        <p>temporary credentials "xyz@gmail.com"/"qwerty12"</p>
        <form>
        Email:<br></br><input type="email" value={loginDetails.email} name="email" onChange={(e)=>{handleChange(e)}}></input><br></br>
        Password:<br></br><input type="password" value={loginDetails.password} name="password" onChange={(e)=>{handleChange(e)}}></input>
        <br></br><button onClick={handleCheck}>SignIn</button>
        <p>Create account</p>
        <button onClick={createAccount}>SignUp</button>
        </form>

        </>
     )

 }
 export default Landing;