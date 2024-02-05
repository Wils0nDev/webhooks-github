import { GitHubIssuePayload, GitHubStartPayload } from "../../shared";



export class GithubService {
  

    constructor(){}

    onStart(payload : GitHubStartPayload ): string {
        
        let message : string = '';
        
        const {starred_at,sender,action,repository } = payload
        message = `User ${sender.login} ${action} star on ${repository.full_name}` 
        
        return message;
    }

    onIssue(payload: GitHubIssuePayload): string {
        
        let message : string = ''
        const {action, issue } = payload

        if(action === 'opened'){
            message = `An issue was ${action} with this title ${issue.title}` 
        }

        if(action === 'reopened'){
            message = `An issue was ${action} with this title ${issue.title}` 
        }

        if(action === 'closed'){
            message = `An issue was  ${action} with this title ${issue.user.login}` 
        }

        return message;
        
    }

}