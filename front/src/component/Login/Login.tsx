import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import useStyles from './LoginStyle';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }));


const Login = () => {
    const classes = useStyles()
    return(
        <Box sx={{ flexGrow: 1 }} className={classes.root}>
        <Grid container spacing={2} className={classes.gridContainerHeight} sx={{ justifyContent:'center',alignContent:'center'}} >
          <Grid item xs={4}>
            <Item>
                <Typography>Login</Typography>
                <div>
                   <TextField id="outlined-basic" label="user name or mail" variant="outlined"/>
                </div>
                <div>
                   <TextField id="outlined-basic" label="password" variant="outlined" type='password'/>
                </div>
                <Button variant="contained">Login</Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
    )
}

export default Login;