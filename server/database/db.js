
import mongoose from "mongoose";

//hamarae pass majeroly two library hoti hai backend server ko cloud MongoDB sae connect karnae ke liyae the name are a)mongoose b)mongodb  here we use mongoose
async function Connection(username,password){

    const URL=`mongodb://${username}:${password}@ac-iacoexp-shard-00-00.pyr2njn.mongodb.net:27017,ac-iacoexp-shard-00-01.pyr2njn.mongodb.net:27017,ac-iacoexp-shard-00-02.pyr2njn.mongodb.net:27017/?ssl=true&replicaSet=atlas-10u95r-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try{

        await mongoose.connect(URL,{useNewUrlParser:true});
        console.log('Database connected successfully');
    }catch(error){
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;