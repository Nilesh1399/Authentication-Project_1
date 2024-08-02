import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const LoginPage = () => {

    const [loginData,setloginData]=useState({
        username: "",
        password: "",
    }) 
      
    //   submit fun
       const handleLoginSubmit= async(e)=>{
        e.preventDefault();
        try{
            const response= await axios.post('http://localhost:8000/login'
                ,loginData);
             const {success,message}=response.data;   

             
        if(success){
            console.log('login Sucessfully')
        }
        else{
            console.log(message)
        }
        }
        catch(error){
           console.error('Login Error',error)
        }
        
        setloginData({
            username: "",
            password: "",
        })

       }  
     
       const handleLoginChange=(e)=>{
        //   console.log(e);
        const {name,value}= e.target;
        setloginData((prevData)=>({
            ...prevData,
              [name]:value
        }))
       }


  return (
    <div>
    
      <h1>Login Page</h1>

        <form onSubmit={handleLoginSubmit}>
           <input type='text' name='username' placeholder='Username' required
            value={loginData.username} onChange={handleLoginChange}
           />

           <input type='password' name='password' placeholder='Password' required
            value={loginData.password} onChange={handleLoginChange}
           /> 
           <button type='submit'>Login</button>
           <p>
            Not registered yet!
             <Link to="/registration">Register</Link>
           </p>
           
        </form>    

    </div>
  )
}

export default LoginPage