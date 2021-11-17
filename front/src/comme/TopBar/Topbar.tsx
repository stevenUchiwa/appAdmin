import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';




const Topbar = (props:{
    changeSatateSlider:  (params:any) => void,
    numberOfSate: number
}) => {
    const toogleState = () => {
        if(props.numberOfSate === 0 || props.numberOfSate === 2){
            props.changeSatateSlider(1)
        }else{
            props.changeSatateSlider(2)
        }
    }
    return(
        <Paper elevation={3} sx={{ display: 'flex', justifyContent: 'space-between',alignContent: 'center',alignItems: 'center', p: 1}}>
             <Box onClick={toogleState}>
              <MenuIcon fontSize="large" />
             </Box>
             <Typography variant="h5" gutterBottom component="div">
                   AppMembers
              </Typography>
              <Box sx={{display: 'flex',alignItems: 'center'}}>
                  <Box sx={{mr: 2}}>
                  <Typography variant="body2" gutterBottom component="h6" sx={{mb: 0, pb: 0}}>
                      Bonjour
                  </Typography>
                  <Typography variant="body2" gutterBottom component="h6">
                      Siméone
                  </Typography>
                  </Box>
                  <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
              </Box>
        </Paper> 
    )
}

export default Topbar;