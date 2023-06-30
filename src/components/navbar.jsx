import React from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const NavBar =() =>{
    return(
     <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor: '#27c2ba',height:'50px'}}>
    <span style={{display:'inline-flex',color:'white',float:'left',marginLeft:'20px',marginTop:'20px',fontFamily:'sans-serif',gap:'15px'}}>
    <KeyboardArrowLeftIcon style={{marginTop:'-3px'}}/>
    View Audience
    </span>
    </nav>
    );
};

export default NavBar;