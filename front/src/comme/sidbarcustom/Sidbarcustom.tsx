import * as React from 'react';
import Paper from '@mui/material/Paper';
import useStyles from './sidbarstyle';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';


type Anchor = 'top' | 'left' | 'bottom' | 'right';


const Sidbarcustom = (props:{
    numberOfSate: number
}) =>{
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: true,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


    return(
        <Paper elevation={3} sx={{ display: 'flex', justifyContent: 'space-between',alignContent: 'center',alignItems: 'center', p: 1,}} className={`${classes.root} ${ (props.numberOfSate === 1)? classes.showSliderBar: (props.numberOfSate === 2)? classes.hidesideBar:''}`}>
             <h1>Sidbar</h1>
         </Paper> 
        // <Box>
        //     <Drawer
        //     open={state['top']}
        //     onClose={toggleDrawer('top', false)}
        //   >
        //     <h1>He free style</h1>
        //   </Drawer>
        // </Box>
    )
}

export default Sidbarcustom;