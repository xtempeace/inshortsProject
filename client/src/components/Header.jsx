
import {AppBar,Toolbar,styled} from '@mui/material';
import {Menu} from '@mui/icons-material';

const StyledHeader=styled(AppBar)`
    background:#fff;
    height:70px;
`

//In this type of css we enter our properties as lowercase and hypen base
const MenuIcon=styled(Menu)`
    color:#000;
`

//In this object type css we enter properties as key-value pair where key is in camelcase and value is in string form, not necessary to write "px"
const Image=styled('img')({
    height:55,
    margin:'auto',
    paddingRight:70

});  //object based css

function Header(){

    const url='https://assets.inshorts.com/website_assets/images/logo_inshorts.png';

    return(
        <StyledHeader position="static">
            <Toolbar>
                <MenuIcon />
                <Image src={url} alt="logo" />
            </Toolbar>
        </StyledHeader>
    )

}

export default Header;