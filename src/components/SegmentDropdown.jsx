import React from "react";
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { Button, FormControl } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import RemoveIcon from '@mui/icons-material/Remove';

const SegmentDropdown=()=>{
    const [addSchema,setAddSchema]=useState('');
    const[traits,setTraits]=useState(false)
    const[remove,setRemove]=useState(false);

    const handleChange = (event) => {
        setAddSchema(event.target.value);
        if(event.target.value === "First Name" || "Last Name"|| "Gender" || "Age"){
            setTraits(!traits);
        }
      };

    return(
        <>
        {!remove && 
        <FormControl fullWidth>
            {traits &&
        <FiberManualRecordIcon style={{color:'lightgreen',fontSize:'small'}}/>}
         <InputLabel id="demo-simple-select-label">Add schema to segment</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={addSchema}
          onChange={handleChange}
          style={{width:'100%'}}
          label="Add schema to segment"
        >
          <MenuItem value="first_name">First Name</MenuItem>
          <MenuItem value="last_name">Last Name</MenuItem>
          <MenuItem value="gender">Gender</MenuItem>
          <MenuItem value="age">Age</MenuItem>
          <MenuItem value="account_name">Account Name</MenuItem>
          <MenuItem value="city">City</MenuItem>
          <MenuItem value="state">State</MenuItem>
        </Select>
        <Button style={{width:'20px',marginTop:'-50px',marginLeft:'410px',background:'#eef5f7'}} onClick={()=>setRemove(!remove)}><RemoveIcon/></Button>
        </FormControl>
}
        </>
    );
};
export default SegmentDropdown;