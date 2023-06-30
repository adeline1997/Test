import React , {useState} from 'react';
import Button from '@mui/material/Button';
import { Dialog, Link } from '@mui/material';
import '../App.css';
import NavBar from './navbar';
import SegmentDropdown from './SegmentDropdown';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Box from '@mui/material/Box';

const SegmentPopup=()=>{
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const [components, setComponents] = useState([""]); 
  
  const handleClose = () => {
    setOpen(false);
  };
  ;
  var jsonData = {
    "segment_name": "last_10_days_blog_visits",
    "schema": [
    {"first_name": "First_name"},
    {"last_name": "Last name"}
]
  }
const btnClick=()=>{
fetch('https://webhook.site/7ccc618c-a113-483b-9551-8c770589868b', {  // Enter your IP address here
method: 'POST', 
mode: 'cors', 
body: JSON.stringify(jsonData) // body data type must match "Content-Type" header

})  
}

function addComponent(){
    setComponents([...components, ""]) 
}
    return(
        <>
        <Button variant="outlined" style={{marginTop:'20px'}} onClick={handleClickOpen}>Save Segment</Button>
       <>
  
       <Dialog open={open}onClose={handleClose}>
       <NavBar/>
       <Box>
        <form
       onSubmit={handleClose} 
       aria-describedby="alert-dialog-slide-description"
       style={{width:'80%'}}
       >
        <div className='segmentForm'>
        <br/>
        <label>Enter the Name of the Segment</label><br/><br/>
        <input type="text" name="name" label="Name of the segment" required style={{width:'100%',height:'40px'}}></input><br/><br/>
        <label>To save your segment, you need to add the schemas to build the query<br/><br/>
        </label><br/>
        <FiberManualRecordIcon style={{color:'lightgreen',fontSize:'small'}}/> <span style={{fontSize:'small'}}>-User Traits</span>
        <FiberManualRecordIcon style={{color:'#d1374b',fontSize:'small',marginLeft:'20px'}}/> <span style={{fontSize:'small'}}>-Group Traits</span>
        <br/><br/>
        {components.map((item, i) => ( <><SegmentDropdown text={item} /><br/><br/></> ))} 
        <span style={{color:'#17c498'}}>+</span><Link style={{textDecoration:'underline',color:'#17c498',textDecorationThickness:'2px',textUnderlinePosition:'under',cursor:'pointer'}} onClick={()=>addComponent()}>Add New Schema</Link><br/><br/>
        <Button variant="contained" type="submit" style={{backgroundColor:'#17c498'}} onClick={btnClick}>Save the Segment</Button>
        <Button variant="outlined" style={{backgroundColor:'white',color:'red',height:'40px',marginLeft:'15px',border:'none'}} onClick={handleClose}>Cancel</Button>
        </div>
       </form>
       </Box>
       </Dialog>

       </>
        </>
    );
}
export default SegmentPopup;