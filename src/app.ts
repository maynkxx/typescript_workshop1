// const exp= require('express');
import express from 'express';

interface App_interface {
    startServer(): void;
    connectDatabase(): void;
    initalizeRoutes(): void;

}

export class App implements App_interface {
    port: number;
    app:express.Application;
    constructor(port: number) {
        this.port = 3000;
        this.app = express();
    }

    startServer(): void{
        this.app.listen(this.port, () => {
            console.log(`server is runing on port ${this.port}`);
        });
    }
    connectDatabase(): void{
        console.log("database connected");
    }
    initalizeRoutes(): void{
        this.app.get('/',(req,res)=>{
            res.send("server is runing");
        });
    }
}