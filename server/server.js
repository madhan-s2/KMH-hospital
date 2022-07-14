import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

import feedBack from './routers/feedBacks.js'
const app = express();
//manual files
app.use(bodyParser.json({limit: "30mb" , extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb" , extended:true}));
app.use(cors());

app.use('/feedBack',feedBack);



const CONNECT_URL = 'mongodb+srv://Project0:Kavin@project0.fufl4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECT_URL,{useUnifiedTopology:true,useNewUrlParser:true})
    .then(app.listen(PORT,()=>console.log(`Server is Running in port number ${PORT}`)))
    .catch((error)=>console.log(error.message));