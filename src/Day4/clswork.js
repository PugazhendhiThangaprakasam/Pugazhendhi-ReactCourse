import React from 'react';
import Button from '@mui/material/Button';
import  TextField  from '@mui/material/TextField';
import { FormControl, MenuItem ,Select} from '@mui/material';
import {useState} from 'react';
function MyButton() {
    const [userName,setUserName] = useState('');
    const [userFruit,setUserFruit] = useState('');
    const [visible,setVisible] = useState(false);
    function Display()
    {
        setVisible(true);
    }

    return (
      <div>
        <h1>Enter your name favourite fruit:</h1>
        <label>Name</label>
        <br/>
        <TextField size="small" onChange={(e)=>{setUserName(e.target.value)}}/>
        <br/>
        <label>Choose a fruit</label>
        <br/>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <Select
            onChange={(e)=>{setUserFruit(e.target.value)}}
        >
       
            <MenuItem value="Apple">Apple</MenuItem>
            <MenuItem value="Banana">Banana</MenuItem>
            <MenuItem value="cherry">Cherry</MenuItem>
            <MenuItem value="d">Elderberry</MenuItem>
            <MenuItem value='e'>Durian</MenuItem>
        </Select>
        </FormControl>
        <br/>
        <br/>

        <Button variant="contained" color="info" onClick={Display} >
          Submit
        </Button>
        { visible &&    <h1>Hello {userName} , Your favourite fruit : {userFruit}</h1>}
      
      </div>
    );
  }
  
  export default MyButton;
  