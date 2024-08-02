const express= require('express');
const app = express();
const port= 8000;
const connectDB =require('./db/dbConnection');
const User= require('./db/user')
const cors = require('cors');

app.use(express.json());

//enable cors
app.use(cors());

connectDB();

// Regsitration
app.post('/register', async(req,res)=>{
    try{
        const{username,password}= req.body;
        console.log(req.body);
        const user = new User({username,password});
        await user.save();
        res.status(201).json({message:'User Registration successfull'});
    }
    catch(error){
        res.status(500).json({error:'Registration failed'});
    }
})

// Login
app.post('/login', async(req,res)=>{
    try{
      const{username,password}= req.body;
      const user = await User.findOne({username});

      if(!user){
        return res.status(401).json({error:'Invalid username or password'});
     }

     if(user.password!=password){
        return res.status(401).json({error:'Invalid username or password'});
     }

     res.status(401).json({message:'Login Successfull'});

    }
    catch(error){
        res.status(500).json({error:'Invalid credentials'});
    }
});

app.listen(port,()=>{
    console.log("Server is running on port 8000")
});
