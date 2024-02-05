import { envs } from "../../config";


export class DiscordService {

    private readonly discordWebhookUrl : string;
    constructor() {    
        this.discordWebhookUrl =  envs.DISCORD_WEBHOOK_URL 
    }

    async  notify(message:string) {

        const body = {
            content : message,
            embeds: [ 
                {
                    image : { url : 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmlrbnNqcHprODdhcHVmN20xZHE5aTBvaDVza2xzNGNha3N1bWV5eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif'}
                }
            ]
        }
        const resp = await fetch(this.discordWebhookUrl,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify(body)
        })

        if(!resp.ok){
            console.log('Error sending message to discord')
            return false;
        }else{
            return true
        }
        
    }
  


}