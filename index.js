const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth.js');
const userRoute = require('./routes/users.js');
const productRoute = require('./routes/products.js');

const PORT = process.env.PORT || 3000;
//configuration of dotenv
dotenv.config();

const app=express();

//connection with atlas MONGODB
mongoose.connect(process.env.MONGO_DB_URL)
   .then(()=>console.log('Connected to MongoDB'))
   .catch((err)=>{
    console.log(err);
   })


//All API routes
app.use(express.json());
app.use('/api/auth',authRoute);
app.use('/api/users',userRoute);
app.use('/api/products',productRoute);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
