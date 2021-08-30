import { Request, Response } from 'express'
import User from '../schemas/User'


class UserController {
    public async index (req: Request, res: Response): Promise<Response> {
      try {
        const users = await User.find()
        return res.json(users)
      } catch (error) {
          console.log(error.message)
      }
    }

    public async store (req: Request, res: Response): Promise<Response> {

        try {
            const { cpf } = req.body;
            const hasUser = await User.findOne({cpf})
            
            if(hasUser)
                return res.status(400).json({
                    message: "usuário já cadastrado"
                })
            
            const user = await User.create(req.body)
            return res.status(201).json(user)    

        } catch (error) {
            return res.status(400).json({error: error.message})
        }
    }

   
}

export default new UserController()