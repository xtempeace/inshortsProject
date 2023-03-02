import axios from 'axios';//axios use karnae kaa yae fayda hai ki as a response data kae sath aur other sarae information bhi bhej deta hai

export const getNews=async ()=>{
    const URL='http://localhost:8000';
    try{
        console.log("URl: ",`${URL}/news`);
        return await axios.get(`${URL}/news`);//http://localhost:8000/news ka name aanae pae route call hoga joo ess URL kae corresponding hoga
        console.log("2");
    }catch(error){
        console.log('Error while calling get news api',error);
    }
}
/*
localhost:8000/news  yaha pae koi default route nahi hai sirf yaha end-point hai jo ki "news hai", toh ess case mae hum route ko call kartae time app.use('/'); likhengae

facebook.com/user/home ,yaha pae "home" end-point hai and "user" is default-route, toh ess case mae hum route ko call kartae time app.use('/user'); likhengae
*/