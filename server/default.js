
import data from "./constants/data.js";//data hai jisae humae created collection mae bharna hai
import News  from './model/news-schema.js';//This is table have validation

async function DefaultData(){
    try{
        // await News.deleteMany({});//Collection ko empty kar dega ,that emplies database ko empty kar dega
        await News.insertMany(data);//insertMany() is mongoDB ka function jo mongoose deta hai, yaha pae "News" table mae "data" ko fill kar rahae hai then usae cloud mongoDB mae fill karwa dae rahae hai
        console.log("Data imported succesfully");
    }catch(error){
        console.log('Error ', error.message);
    }
}

export default DefaultData;

