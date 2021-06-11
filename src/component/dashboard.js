import React, { useContext, useEffect, useState } from 'react';
import { userDetails } from './userContext';
import { useHistory } from "react-router-dom";


 function Dashboard(){
  let history = useHistory();
    const email =useContext(userDetails);
    const [name,setName]=useState("")

    useEffect(()=>{
       setName(email);
       if(!email){
        history.push('/');
      }
    },[email]);

    const logout=()=>{
      localStorage.removeItem("email");
      history.push('/');

    }
   
return (
         <div>
           Welcome {name}
           <button onClick={logout} style={{float:'right',backgroundColor:'blue',color:'white',marginRight:'10%'}}>logout</button>
         </div>
     )

 }
 export default Dashboard;