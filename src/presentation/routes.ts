import { Router } from "express";
import { GithubRoutes } from "./github/router";
import { GithubShare256Middlware } from "./middleware/github-share256.middleware";


export class AppRoutes {
    constructor() {
        
    }

    static get routes() : Router { 
        
        const router = Router();
        //*router.use  
        //*Es un middleware que ejecutara todas mis rutas 
        router.use(GithubShare256Middlware.verifySignature);    
        router.use('/api/github',GithubRoutes.routes)

        return router;
        
    }
}