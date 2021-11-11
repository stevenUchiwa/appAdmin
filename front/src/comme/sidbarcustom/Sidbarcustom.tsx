import * as React from 'react';
import Paper from '@mui/material/Paper';
import useStyles from './sidbarstyle';

const Sidbarcustom = () =>{
    const classes = useStyles();
    return(
        <Paper elevation={3} sx={{ display: 'flex', justifyContent: 'space-between',alignContent: 'center',alignItems: 'center', p: 1,}} className={classes.root}>
             <h1>Sidbar</h1>
         </Paper> 
    )
}

export default Sidbarcustom;