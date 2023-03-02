
import { useEffect ,useState} from 'react';

import {Box} from '@mui/material';

import { getNews } from '../service/api.js';

//components
import Article from './Article.jsx';


function Articles(){
    
    const [news,setNews]=useState([]);//by default from backend as a response array of object kae form mae data aa raha hai eska matlab humae array kae andar kuch store karna hai, that is why hum empty array useState mae pass kar rahae hai
    
    useEffect(() => {
        dailyNews();
    },[]);
    
    async function dailyNews(){
        let response=await getNews();
        // console.log(response.data);
        setNews(response.data);
    }
    return(
        <Box>
            {
                news.map(data=>(
                    <Article data={data} />
                ))

                /*
                    //When we use curley braces
                    news.map(data=>{
                    
                    })
                    agar hum curley braces laga rahae hai toh humae explicitely return statement lagana padta hai
                */ 
                /*
                    //When we use circle braces
                    news.map(data=>(
                        
                    ))
                    agar hum circle braces laga rahae hai toh esmae joh bhi likhengae woo by default return hota hai
                */ 

            }
        </Box>
    )
}

export default Articles;