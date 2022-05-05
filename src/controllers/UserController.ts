import {Request, Response} from 'express'
import EmailService from '../service/EmailsService';

const users = [
    {
        name: 'teste', 
        email: 'teste@teste.com'
    },
];


export default {

    async index(req: Request, res: Response){
        return res.json(users)
    },

    async create(req:Request, res:Response){
        const emailService = new EmailService();

        emailService.sendMail({
            to:{
                name: 'teste1',
                email: 'teste@teste.com'
            },
            message:{
                subject: 'Bem-Vindo ao Sistema',
                body: 'Seja bem-bindo'
            }
        })
        return res.send();
    }

};
