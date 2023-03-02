//this is backends's main file jaha sae hum apnae backend ko controll karengae

import express from 'express';//importing express, express ka use kar kae hum backend server banayengae
import cors from 'cors';
import dotenv from 'dotenv';


//components
import Connection from './database/db.js';
import DefaultData from './default.js';
import Route from './routes/route.js';


//for creating backend server
const app=express();//express ko call kiyae
dotenv.config();//Initializing dotenv

app.use(cors());

//Route
app.use('/',Route);

const PORT=8000;

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

Connection(username,password);//calling db.js ka Connection() function, yae server bananae kae liyae nahi hai
app.listen(PORT,()=>console.log(`Server is running sucessfully on PORT ${PORT}`));//1)yae server create kar dega at port 8000, 2) listen() function two argu. leta hai a)PORT b)callback function jisae call karna hai jab server create hoo



//after server bannae kae badd and database sae connection bannae kae bad DefaultData() ko call kar rahae hai
DefaultData();



