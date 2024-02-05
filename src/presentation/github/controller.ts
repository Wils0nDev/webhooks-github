import { Request, Response } from "express"
import { GithubService } from "../services/github.service";
import { DiscordService } from '../services/discord.service';


export class GitHubController { 
    constructor( private readonly githubService : GithubService,
                 private readonly discordService : DiscordService 
        ){}
    webhookHandler = ( req:Request, res:Response) =>{ 
        //header personalizado de la misma plataforma
        const githubEvent = req.header('x-github-event') ?? 'unknown'
        const signature = req.header('x-hub-signature-256') ?? 'unknown'
        const payload = req.body;
        let message : string = '';
        switch (githubEvent) {
            case 'star':
                message = this.githubService.onStart(payload)
                break;
            case 'issues':
                message = this.githubService.onIssue(payload)
                break;
            default:
                message =  `Unknown event ${payload}`
        }
        this.discordService.notify(message)
        .then(()=> res.status(200).send('Accepted'))
        .catch(()=> res.status(500).json({errror:'Internal server error'}))
    
    }
}