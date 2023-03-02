//This schema is used for validation of data stored in data.js in folder constants

import mongoose from "mongoose"; //mongoose provide some object jiski madad sae hum apnae data ko validate kar saktae hai

//creating schema
const newsSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true,
        unique:true//Url unique hota hai taht is why hum esae yaha apply kar rahae hai,This help us to not enter the same data content again and again, it helps us to protect us from duplicacy
    },
    timestamp:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    publisher:{
        type:String,
        required:true
    }
});

//Creating model using this schema
//we are creating model For validation of schema,model sae yae pata chalega ki hamara schema kis collection pae validate hoga

// Table->Collection
// Database->Cluster

//Creating collection and validating this collection on schema "newsSchema"  or defining rules in columns of collection using schema "newSchema"
//"news" collection ko above defined schema "newsSchema" sae validate karna hai

const news=mongoose.model('news',newsSchema);

export default news;