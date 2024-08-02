import React, {useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const RegistrationPage = () => {
 
     const [registrationData,setRegistrationData]=useState({
        username:'',
        password:'',
     })


     const handleRegistrationChange=(e)=>{
       const {name,value}=e.target;;
       setRegistrationData((prevData)=>({...prevData,[name]:value}));
     }

     const handleRegistrationSubmit= async (e)=>{

         e.preventDefault();
         try{
            const response= await axios.post('http://localhost:8000/registration',registrationData)
             console.log(response.data)
        }
         catch(error){
             console.log(error)
         }
     }

  return (
    <div>
        
        <h1>Registration Page</h1>
       <form onSubmit={handleRegistrationSubmit}>
         <input type='text' name='username' placeholder='Username' required
           value={registrationData.username} onChange={handleRegistrationChange}/>
           
           
         <input type='password' name='password' placeholder='Password' required
           value={registrationData.password} onChange={handleRegistrationChange}/>
            
            <button type='submit'>Register</button>
            <p>Already Register
                <Link to='/login'>Login</Link>
                </p>
            
       </form>

    </div>
  )
}

export default RegistrationPage