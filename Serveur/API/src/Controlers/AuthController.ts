import {Request,Response} from 'express'

class AuthController{
    static login = (req:Request, rep:Response) =>{
       rep.send('je suis le AuthController');
    }

}
export default AuthController;