import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      minHeight: '70vh',
      height: '90vh',
      width: '50vh',
      marginTop: 'auto',
      marginBottom: 'auto',
      position: 'fixed',
      display: 'block',
      transform: 'translateX(0)',
      transition: '2s',
    },
    hidesideBar: {
      transform: 'translateX(0)'
    },
    showSliderBar: {
      transform: 'translateX(-70vh)'
    }
  });

  export default useStyles;