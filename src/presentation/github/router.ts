import { Router } from "express"
import { GitHubController } from "./controller";
import { GithubService } from '../services/github.service';
import { DiscordService } from "../services/discord.service";


export class GithubRoutes {
    constructor() {
        
    }

    static get routes():Router { 

        const router = Router();
        const githubService = new GithubService()
        const discordService = new DiscordService()  
        const controller = new GitHubController(githubService,discordService)
        router.post('/', controller.webhookHandler )


        return router
    }
}