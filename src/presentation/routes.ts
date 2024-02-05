import { Router } from "express";
import { GithubRoutes } from "./github/router";


export class AppRoutes {
    constructor() {
        
    }

    static get routes() : Router { 
        
        const router = Router();
        //*router.use  
        //*Es un middleware que ejecutara todas mis rutas 
        router.use('/api/github',GithubRoutes.routes)

        return router;
        
    }
}