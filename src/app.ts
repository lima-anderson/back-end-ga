import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes'



class App {
    public express: express.Application;

    // private corsOptions = {
    //     origin: 'http://localhost:3000/',
    //     optionsSuccessStatus: 200 
    //   }

    public constructor(){
        this.express = express()
        this.middelwares()
        this.database()
        this.routes()
    }



    private middelwares(): void {
        this.express.use(express.json())
        // this.express.use(cors(this.corsOptions))
        this.express.use(cors())
    }

    private database (): void {
        mongoose.connect("mongodb+srv://usuarioNode:R6rQ8o55Zdz5ING5@cluster0.zuaav.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { 
            useNewUrlParser: true 
        })
    }

    private routes(): void {
        this.express.use(routes)
    }
}

export default new App().express