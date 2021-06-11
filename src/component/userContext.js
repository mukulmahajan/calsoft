import React,{useState,createContext, useEffect} from 'react';


export const userDetails=createContext();
export const UserProvider=(props)=>{
    const [value,setValue]=useState("")
    useEffect(()=>{
        const userName = localStorage.getItem("email");
        setValue(userName)
    },[])
    return (
        <userDetails.Provider value={[value,setValue]}>
            {props.children}
        </userDetails.Provider>
    )
}