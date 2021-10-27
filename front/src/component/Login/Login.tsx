import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import useStyles from './LoginStyle';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const Login = () => {
    const classes = useStyles()
    return(
        <Box sx={{ flexGrow: 1 }} className={classes.root}>
        <Grid container spacing={2} justifyContent='center' alignContent='center' flexDirection='row'>
          <Grid item xs={8}>
            <Item>etest</Item>
          </Grid>
        </Grid>
      </Box>
    )
}

export default Login;