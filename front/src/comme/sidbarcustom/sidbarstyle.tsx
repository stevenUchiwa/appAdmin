import { Translate } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      minHeight: '70vh',
      height: '70vh',
      width: '50vh',
      marginTop: 'auto',
      marginBottom: 'auto',
      position: 'absolute',
      display: 'block'
      
    },
   "@keyframes slideToLift":{
     '0%':{
       transform: "translateX(0)",
     },
     '100%':{
      transform: "translateX(-70vh)",
      display:'none'
     }
   },

   slideAnimationTO: {
    animation: "$slideToLift 3s ease-in normal both"
   },
   slideAnimationReverte: {
    animation: "$slideToLift 3s ease-in reverse both"
   }
  });

  export default useStyles;