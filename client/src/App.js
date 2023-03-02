
import {Box,styled} from '@mui/material';//Box is mui-component for replacement of div,Box ko hum as a div and as a span use kar saktae hai

//components
import Header from './components/Header.jsx';
import InfoHeader from './components/InfoHeader.jsx';
import Articles from './components/Articles.jsx';  

const Container=styled(Box)(({theme})=>({
  width:'60%',
  margin:'40px auto 0 auto',
  [theme.breakpoints.down('md')]:{
    width:'75%'
  },
  [theme.breakpoints.down('sm')]:{
    width:'85%'
  }
}));

//landing components
function App() {
  return (
    <Box>
      <Header />
      <Container> {/* infoHeader ko eskae andar ess liyae rakhae hai taki kyo ki 'InfoHeader kae bad jitnae bhi content ayengae unki width same hogi' */}
        <InfoHeader />
        <Articles />
      </Container>
    </Box>
  );
}

export default App;
