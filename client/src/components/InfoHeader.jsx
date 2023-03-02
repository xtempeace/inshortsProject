
import {Box,Typography,styled} from '@mui/material';//1) Box is mui-component for replacement of div,Box ko hum as a div and as a span use kar saktae hai 2)Typography is replacement of "p" tag it have feature to change H1,H2,H3,H4,H5,H6

const Container=styled(Box)(({theme})=>({
    background:'#f44336',
    color:'#FFFFFF',
    display:'flex',
    alignItems:'center',
    height:48,
    marginBottom:30,
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
}));

const Image=styled('img')({
    height:34,
    '&:last-child':{
        margin:'0 50px 0 20px'
    }
})

const Text=styled(Typography)`
    font-size:14px;
    font-weight:300;
    margin-left:50px;
`

function InfoHeader(){

    const applestore= 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googlestore= 'https://assets.inshorts.com/website_assets/images/playstore.png';

    return(
        <Container>
            <Text>
                For the best experience use inshorts app on your smartphone
            </Text>
            <Box style={{display:'flex', marginLeft: 'auto' }}>
                <Image src={applestore} alt="googlestore" />
                <Image src={googlestore} alt="googlestore" />
            </Box>
        </Container>
    );
}

export default InfoHeader;