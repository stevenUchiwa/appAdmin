import { Router  } from "express";


const rooter = Router();


rooter.use('/',(req,rep)=>{
     rep.send('je suis le nouveau route');
});

export default rooter;