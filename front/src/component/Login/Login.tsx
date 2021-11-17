import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import useStyles from './LoginStyle';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }));


const Login = () => {
    const classes = useStyles()
    const history = useHistory();
    const handleClick = () =>{
        history.push("/home");
    }
    return(
        <Box sx={{ flexGrow: 1 }} className={classes.root}>
        <Grid container className={classes.gridContainerHeight} sx={{ justifyContent:'center',alignContent:'center'}} >
          <Grid item xs={3}>
            <Item>
              <Grid container spacing={2}>
                <Grid item xs={12} spacing={4}>
                  <Typography>Login</Typography>
                </Grid>
                <Grid item xs={12}>
                 <TextField id="outlined-basic" label="user name or mail" variant="outlined"/>
                </Grid>
                <Grid item xs={12}>
                 <TextField id="outlined-basic" label="password" variant="outlined" type='password'/>
                </Grid>
                <Grid item xs={12}>
                 <Button variant="contained" onClick={handleClick}>Login</Button>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Box>
    )
}

export default Login;